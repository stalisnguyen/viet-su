import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import geo from '../data/geo.json';
import { entries } from '../data/entries';
import { periodBySlug } from '../data/periods';
import type { Lang } from '../data/types';

type Ring = number[][];
const G = geo as { zones: Record<string, Ring[]>; nb: Record<string, Ring[]> };

export const ZONES = [
  { id: 'dongson', color: '#f2a531', vi: 'Đông Sơn', en: 'Đông Sơn', at: [104.4, 21.6] },
  { id: 'sahuynh', color: '#e8563f', vi: 'Sa Huỳnh', en: 'Sa Huỳnh', at: [108.2, 14.9] },
  { id: 'dongnai', color: '#35c2ae', vi: 'Đồng Nai', en: 'Đồng Nai', at: [105.7, 10.0] },
];
// Tông nền của từng thời kỳ: đá vôi và tro bếp, gỉ đồng, ruộng lúa, đất lũy và chiến trận
const THEMES: Record<string, { bg: string; grid: string; land: string }> = {
  intro: { bg: '#060817', grid: '#2a3b8a', land: '#3b4d8f' },
  'do-da': { bg: '#120e0a', grid: '#6b5843', land: '#b3a48c' },
  'kim-khi': { bg: '#05110e', grid: '#1f5a4c', land: '#2f6f60' },
  'van-lang': { bg: '#051008', grid: '#1f5a33', land: '#2c6b45' },
  'au-lac': { bg: '#130608', grid: '#5a1f28', land: '#6b2f38' },
};

const X = (lon: number) => (lon - 106.5) * 0.96;
const Z = (lat: number) => -(lat - 16);

function shapeOf(ring: Ring) {
  const s = new THREE.Shape();
  ring.forEach(([lon, lat], i) => (i ? s.lineTo(X(lon), lat - 16) : s.moveTo(X(lon), lat - 16)));
  return s;
}

function label(text: string, color: string, px = 44, weight = 800, spacing = 0) {
  const c = document.createElement('canvas');
  const ctx = c.getContext('2d')!;
  const font = `${weight} ${px}px "Be Vietnam Pro", system-ui, sans-serif`;
  const set = () => { ctx.font = font; try { (ctx as unknown as { letterSpacing: string }).letterSpacing = spacing + 'px'; } catch { /* bỏ qua */ } };
  set();
  const w = Math.ceil(ctx.measureText(text).width) + 28;
  c.width = w;
  c.height = px + 28;
  set();
  ctx.textBaseline = 'middle';
  ctx.lineWidth = 9;
  ctx.strokeStyle = 'rgba(5,7,20,0.9)';
  ctx.strokeText(text, 14, c.height / 2);
  ctx.fillStyle = color;
  ctx.fillText(text, 14, c.height / 2);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
  const h = px / 58;
  sp.scale.set((w / c.height) * h, h, 1);
  sp.renderOrder = 10;
  return sp;
}

function beamTexture() {
  const c = document.createElement('canvas');
  c.width = 4; c.height = 128;
  const g = c.getContext('2d')!;
  const gr = g.createLinearGradient(0, 0, 0, 128);
  gr.addColorStop(0, 'rgba(255,255,255,0)');
  gr.addColorStop(1, 'rgba(255,255,255,0.95)');
  g.fillStyle = gr; g.fillRect(0, 0, 4, 128);
  return new THREE.CanvasTexture(c);
}

interface Props {
  lang: Lang;
  era: string | null;
  focus: string | null;
  sheet: number; // 0 đóng, 1 thẻ thu gọn, 2 mở hết
  onPick: (slug: string) => void;
  split?: boolean; // điện thoại dọc: bản đồ là một khung riêng ở trên, không bị thẻ nội dung che
}

interface Pin {
  slug: string; period: string; pos: THREE.Vector3; group: THREE.Group;
  head: THREE.MeshBasicMaterial; beam: THREE.MeshBasicMaterial; ring: THREE.Mesh; ringMat: THREE.MeshBasicMaterial; phase: number;
}

export default function Stage({ lang, era, focus, sheet, onPick, split = false }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const live = useRef({ era, focus, sheet, onPick, split, key: '' });
  live.current.era = era; live.current.focus = focus; live.current.sheet = sheet; live.current.onPick = onPick; live.current.split = split;
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = host.current!;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true });
    } catch {
      setFailed(true);
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 900 ? 1.5 : 1.75));
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const BG = 0x060817;
    scene.background = new THREE.Color(BG);
    scene.fog = new THREE.Fog(BG, 26, 70);
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 200);
    scene.add(new THREE.HemisphereLight(0xbfd0ff, 0x05060f, 0.9));
    const sun = new THREE.DirectionalLight(0xffffff, 1.1);
    sun.position.set(-6, 12, 6);
    scene.add(sun);

    // Mặt biển dạng lưới
    const grid = new THREE.GridHelper(120, 120, 0xffffff, 0x777777);
    grid.position.y = -0.03;
    (grid.material as THREE.Material).transparent = true;
    (grid.material as THREE.Material).opacity = 0.55;
    scene.add(grid);

    // Các nước láng giềng
    const nbMat = new THREE.MeshStandardMaterial({ color: 0x0d1330, roughness: 1 });
    const nbEdge = new THREE.LineBasicMaterial({ color: 0x33448f, transparent: true, opacity: 0.6 });
    Object.values(G.nb).forEach((rings) =>
      rings.forEach((r) => {
        const m = new THREE.Mesh(new THREE.ExtrudeGeometry(shapeOf(r), { depth: 0.03, bevelEnabled: false }), nbMat);
        m.rotation.x = -Math.PI / 2;
        scene.add(m);
        scene.add(new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(r.map(([lon, lat]) => new THREE.Vector3(X(lon), 0.035, Z(lat)))), nbEdge));
      }),
    );

    // Việt Nam: ba vùng văn hóa, viền phát sáng
    const zones = ZONES.map((z) => {
      const full = new THREE.Color(z.color);
      const mat = new THREE.MeshStandardMaterial({ color: 0x0b1030, emissive: full.clone(), emissiveIntensity: 0.2, roughness: 0.6 });
      const edge = new THREE.LineBasicMaterial({ color: full.clone(), transparent: true });
      G.zones[z.id].forEach((r) => {
        const m = new THREE.Mesh(new THREE.ExtrudeGeometry(shapeOf(r), { depth: 0.26, bevelEnabled: false }), mat);
        m.rotation.x = -Math.PI / 2;
        scene.add(m);
        scene.add(new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(r.map(([lon, lat]) => new THREE.Vector3(X(lon), 0.268, Z(lat)))), edge));
      });
      const sp = label((lang === 'vi' ? z.vi : z.en).toUpperCase(), z.color, 40, 800, 3);
      sp.position.set(X(z.at[0]), 1.5, Z(z.at[1]));
      scene.add(sp);
      return { id: z.id, full, mat, edge, sp, cur: full.clone() };
    });

    // Hoàng Sa, Trường Sa, Biển Đông
    const isle = new THREE.MeshBasicMaterial({ color: 0x9fb4ff });
    const islands: [string, string, number, number, number[][]][] = [
      ['Q.đ. Hoàng Sa', 'Hoàng Sa (Paracel) Is.', 112.0, 16.5, [[0, 0], [0.35, 0.2], [-0.3, 0.25], [0.15, -0.3], [-0.25, -0.15]]],
      ['Q.đ. Trường Sa', 'Trường Sa (Spratly) Is.', 114.0, 9.9, [[0, 0], [0.5, 0.4], [-0.45, 0.3], [0.3, -0.5], [-0.35, -0.4], [0.7, -0.1], [-0.1, 0.7]]],
    ];
    islands.forEach(([vi, en, lon, lat, dots]) => {
      dots.forEach(([dx, dz]) => {
        const d = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.06, 10), isle);
        d.position.set(X(lon) + dx, 0.03, Z(lat) + dz);
        scene.add(d);
      });
      const sp = label(lang === 'vi' ? vi : en, '#b9c6ff', 28, 600);
      sp.position.set(X(lon), 0.7, Z(lat));
      scene.add(sp);
    });
    const seaLabel = label(lang === 'vi' ? 'BIỂN ĐÔNG' : 'EAST SEA', '#4a5cb8', 30, 600, 6);
    seaLabel.position.set(X(111.4), 0.3, Z(13.0));
    scene.add(seaLabel);

    // Ghim di tích: cột sáng, đầu sáng và vòng lan trên mặt đất
    const beamTex = beamTexture();
    const pins: Pin[] = [];
    const hits: THREE.Object3D[] = [];
    entries.filter((e) => e.coord).forEach((e, i) => {
      const color = new THREE.Color(periodBySlug[e.period].color);
      const g = new THREE.Group();
      const beam = new THREE.MeshBasicMaterial({ color, map: beamTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
      const b = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.5, 8, 1, true), beam);
      b.position.y = 0.75;
      const head = new THREE.MeshBasicMaterial({ color, transparent: true });
      const h = new THREE.Mesh(new THREE.SphereGeometry(0.1, 18, 14), head);
      h.position.y = 0.06;
      const ringMat = new THREE.MeshBasicMaterial({ color, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
      const ring = new THREE.Mesh(new THREE.RingGeometry(0.2, 0.25, 40), ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.02;
      const hit = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 1.5, 8), new THREE.MeshBasicMaterial({ visible: false }));
      hit.position.y = 0.7;
      hit.userData.slug = e.slug;
      hits.push(hit);
      g.add(b, h, ring, hit);
      const pos = new THREE.Vector3(X(e.coord![0]), 0.27, Z(e.coord![1]));
      g.position.copy(pos);
      scene.add(g);
      pins.push({ slug: e.slug, period: e.period, pos, group: g, head, beam, ring, ringMat, phase: i * 0.37 });
    });

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.55, 0.6, 0.62);
    composer.addPass(bloom);
    composer.addPass(new OutputPass());

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableZoom = false; // để bánh xe chuột và vuốt dọc cuộn trang
    renderer.domElement.style.touchAction = 'pan-y';
    controls.minDistance = 4;
    controls.maxDistance = 46;
    controls.minPolarAngle = 0.2;
    controls.maxPolarAngle = 1.3;
    controls.enableDamping = true;
    let flying = true;
    controls.addEventListener('start', () => { flying = false; });

    let aspect = 1;
    const resize = () => {
      const w = el.clientWidth, h = el.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h);
      composer.setSize(w, h);
      aspect = w / h;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      flying = true;
    };
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    // Góc nhìn mong muốn theo trạng thái
    const want = { t: new THREE.Vector3(), p: new THREE.Vector3() };
    const view = () => {
      const s = live.current;
      const portrait = aspect < 0.9;
      const pin = s.focus ? pins.find((x) => x.slug === s.focus) : null;
      if (s.split) {
        // Khung bản đồ riêng: luôn đặt mục tiêu vào giữa khung, không chừa chỗ cho thẻ
        const k = Math.max(1, 1.25 / aspect);
        if (pin) {
          want.t.copy(pin.pos).setY(0);
          want.t.z -= 0.7; // đẩy điểm đang xem xuống dưới thanh tiêu đề
          want.p.set(want.t.x + 1.2 * k, 5.4 * k, want.t.z + 6.4 * k);
        } else if (s.era === 'van-lang' || s.era === 'au-lac') {
          want.t.set(X(105.9), 0, Z(20.6) - 0.6);
          want.p.set(want.t.x + 1.2 * k, 7.5 * k, want.t.z + 8 * k);
        } else {
          want.t.set(1.4, 0, -1.9);
          want.p.set(want.t.x + 1.2 * k, 20 * k, want.t.z + 14 * k);
        }
        return `${s.focus}|${s.era}|split|${Math.round(aspect * 10)}`;
      }
      if (pin) {
        const k = portrait ? 1.15 : 1;
        want.t.copy(pin.pos).setY(0);
        if (s.sheet) portrait ? (want.t.z -= 1.2) : (want.t.x -= 2.6);
        want.p.set(want.t.x + 1.4 * k, 6.2 * k, want.t.z + 7.4 * k);
      } else if (s.era === 'van-lang' || s.era === 'au-lac') {
        const k = portrait ? 1.5 : 1;
        want.t.set(X(105.9) + (portrait ? 0 : aspect > 1.35 ? -2.6 : -1), 0, Z(20.6) + 0.4);
        want.p.set(want.t.x + 1.2 * k, 8.5 * k, want.t.z + 9 * k);
      } else {
        const k = portrait ? 2.2 : aspect < 1.35 ? 1.3 : 1.0;
        want.t.set(portrait ? 2.2 : aspect < 1.35 ? -0.5 : -3.4, 0, portrait ? 0.4 : 1.2);
        want.p.set(want.t.x + 1.2 * k, 16 * k, want.t.z + 15.5 * k);
      }
      return `${s.focus}|${s.era}|${s.sheet}|${portrait}`;
    };
    resize();
    view();
    controls.target.copy(want.t);
    camera.position.copy(want.p);

    const ray = new THREE.Raycaster();
    let down = { x: 0, y: 0 };
    const onDown = (ev: PointerEvent) => (down = { x: ev.clientX, y: ev.clientY });
    const onUp = (ev: PointerEvent) => {
      if (Math.hypot(ev.clientX - down.x, ev.clientY - down.y) > 7) return;
      const r = renderer.domElement.getBoundingClientRect();
      ray.setFromCamera(new THREE.Vector2(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1), camera);
      const s = live.current;
      const ok = hits.filter((h) => { const p = pins.find((x) => x.slug === h.userData.slug)!; return !s.era || p.period === s.era; });
      const hit = ray.intersectObjects(ok)[0];
      if (hit) s.onPick(hit.object.userData.slug as string);
    };
    renderer.domElement.addEventListener('pointerdown', onDown);
    renderer.domElement.addEventListener('pointerup', onUp);

    const cBg = new THREE.Color(THEMES.intro.bg), cGrid = new THREE.Color(THEMES.intro.grid), tmp = new THREE.Color();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    const tick = (ms: number) => {
      const t = ms / 1000;
      const s = live.current;
      const key = view();
      if (key !== s.key) { s.key = key; flying = true; }
      if (flying) {
        const a = reduce ? 1 : 0.07;
        controls.target.lerp(want.t, a);
        camera.position.lerp(want.p, a);
        if (camera.position.distanceTo(want.p) < 0.03) flying = false;
      }
      controls.update();

      const th = THEMES[s.era || 'intro'];
      cBg.lerp(tmp.set(th.bg), 0.06);
      cGrid.lerp(tmp.set(th.grid), 0.06);
      (scene.background as THREE.Color).copy(cBg);
      scene.fog!.color.copy(cBg);
      (grid.material as THREE.LineBasicMaterial).color.copy(cGrid);
      nbMat.color.copy(cBg).lerp(cGrid, 0.22);
      nbEdge.color.copy(cGrid);
      const three = !s.era || s.era === 'kim-khi';
      zones.forEach((z) => {
        const lit = three || ((s.era === 'van-lang' || s.era === 'au-lac') && z.id === 'dongson');
        if (three) tmp.copy(z.full);
        else if (lit) tmp.set(periodBySlug[s.era!].color);
        else tmp.set(th.land);
        z.cur.lerp(tmp, 0.08);
        z.mat.emissive.copy(z.cur);
        z.mat.emissiveIntensity = lit ? 0.2 : 0.12;
        z.edge.color.copy(z.cur);
        z.edge.opacity = lit ? 1 : 0.55;
        const so = three ? 1 : 0;
        z.sp.material.opacity += (so - z.sp.material.opacity) * 0.1;
      });

      pins.forEach((p) => {
        const inEra = !s.era || p.period === s.era;
        const isFocus = p.slug === s.focus;
        const o = inEra ? 1 : 0.07;
        p.head.opacity += (o - p.head.opacity) * 0.1;
        p.beam.opacity = p.head.opacity * (isFocus ? 1 : 0.75);
        const sc = isFocus ? 1.9 : 1;
        p.group.scale.y += (sc - p.group.scale.y) * 0.1;
        const w = ((t * 0.55 + p.phase) % 1);
        const rs = 1 + w * (isFocus ? 5 : 2.6);
        p.ring.scale.set(rs, rs, 1);
        p.ringMat.opacity = (1 - w) * 0.9 * p.head.opacity;
      });

      composer.render();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      controls.dispose();
      composer.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [lang]);

  return (
    <div className="stage" ref={host}>
      {failed && (
        <p className="stage-fallback">
          {lang === 'vi' ? 'Thiết bị này không hiển thị được bản đồ 3D. Các thẻ nội dung bên dưới vẫn dùng được.' : 'This device cannot display the 3D map. The content cards below still work.'}
        </p>
      )}
    </div>
  );
}
