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
import { drawDrum } from '../drum';

type Ring = number[][];
const G = geo as { zones: Record<string, Ring[]>; nb: Record<string, Ring[]> };

export const ZONES = [
  { id: 'dongson', color: '#f2a531', vi: 'Đông Sơn', en: 'Đông Sơn', at: [104.4, 21.6] },
  { id: 'sahuynh', color: '#e8563f', vi: 'Sa Huỳnh', en: 'Sa Huỳnh', at: [108.2, 14.9] },
  { id: 'dongnai', color: '#35c2ae', vi: 'Đồng Nai', en: 'Đồng Nai', at: [105.7, 10.0] },
];
// Tông nền của từng thời kỳ: đá vôi và tro bếp, gỉ đồng, ruộng lúa, đất lũy và chiến trận
const THEMES: Record<string, { bg: string; grid: string; land: string }> = {
  intro: { bg: '#090708', grid: '#5a4320', land: '#6b5a3a' }, // sơn then và vàng: nền sơn mài
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
  head: THREE.MeshBasicMaterial; beam: THREE.MeshBasicMaterial; ring: THREE.Mesh; ringMat: THREE.MeshBasicMaterial; phase: number; tag: THREE.Sprite; tagY: number; solo: boolean; ll: [number, number];
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
    const BG = 0x090708;
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
    (grid.material as THREE.Material).opacity = 0.26;
    scene.add(grid);

    // Quầng sáng mềm dưới dải đất Việt Nam, đổi màu theo thời kỳ
    const haloC = document.createElement('canvas');
    haloC.width = haloC.height = 256;
    const hx = haloC.getContext('2d')!;
    const hg = hx.createRadialGradient(128, 128, 0, 128, 128, 128);
    hg.addColorStop(0, 'rgba(255,255,255,0.55)'); hg.addColorStop(0.45, 'rgba(255,255,255,0.16)'); hg.addColorStop(1, 'rgba(255,255,255,0)');
    hx.fillStyle = hg; hx.fillRect(0, 0, 256, 256);
    const haloMat = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(haloC), color: 0xe6b450, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false });
    const halo = new THREE.Mesh(new THREE.PlaneGeometry(26, 34), haloMat);
    halo.rotation.x = -Math.PI / 2;
    halo.position.set(0.6, -0.02, 0.2);
    scene.add(halo);

    // ĐỊA HÌNH: một tấm lưới phủ cả vùng, nhô cao theo độ cao thật, vẽ theo kiểu bàn chiếu hologram
    // (đường đồng mức, bóng đổ theo sườn núi). Việt Nam sáng theo màu vùng, các nước láng giềng mờ.
    const LON0 = 101.25, LON1 = 112.5, LAT0 = 7.5, LAT1 = 24, NX = 250, NZ = 366, EX = 0.00036; // EX: mét -> đơn vị bản đồ
    const mask = document.createElement('canvas');
    mask.width = NX + 1; mask.height = NZ + 1;
    const mx = mask.getContext('2d', { willReadFrequently: true })!;
    const mpx = (lon: number) => ((lon - LON0) / (LON1 - LON0)) * NX, mpy = (lat: number) => ((LAT1 - lat) / (LAT1 - LAT0)) * NZ;
    const fillRings = (rings: Ring[], v: number) => {
      mx.fillStyle = `rgb(${v},0,0)`;
      rings.forEach((r) => { mx.beginPath(); r.forEach(([lon, lat], i) => (i ? mx.lineTo(mpx(lon), mpy(lat)) : mx.moveTo(mpx(lon), mpy(lat)))); mx.closePath(); mx.fill(); });
    };
    mx.fillStyle = '#000'; mx.fillRect(0, 0, mask.width, mask.height);
    Object.values(G.nb).forEach((r) => fillRings(r, 50));
    ZONES.forEach((z, i) => fillRings(G.zones[z.id], 100 + i * 50));
    const md = mx.getImageData(0, 0, mask.width, mask.height).data;
    const nV = (NX + 1) * (NZ + 1);
    const tPos = new Float32Array(nV * 3), tW = new Float32Array(nV * 4), tH = new Float32Array(nV);
    for (let j = 0; j <= NZ; j++) for (let i = 0; i <= NX; i++) {
      const k = j * (NX + 1) + i, lon = LON0 + (i / NX) * (LON1 - LON0), lat = LAT1 - (j / NZ) * (LAT1 - LAT0);
      tPos[k * 3] = X(lon); tPos[k * 3 + 1] = 0.01; tPos[k * 3 + 2] = Z(lat);
      const v = md[k * 4];
      if (v >= 175) tW[k * 4 + 2] = 1; else if (v >= 125) tW[k * 4 + 1] = 1; else if (v >= 75) tW[k * 4] = 1; else if (v >= 25) tW[k * 4 + 3] = 1;
    }
    const tIdx = new Uint32Array(NX * NZ * 6);
    for (let j = 0, q = 0; j < NZ; j++) for (let i = 0; i < NX; i++) {
      const a0 = j * (NX + 1) + i, b0 = a0 + 1, c0 = a0 + NX + 1, d0 = c0 + 1;
      tIdx[q++] = a0; tIdx[q++] = c0; tIdx[q++] = b0; tIdx[q++] = b0; tIdx[q++] = c0; tIdx[q++] = d0;
    }
    const tGeo = new THREE.BufferGeometry();
    tGeo.setAttribute('position', new THREE.BufferAttribute(tPos, 3));
    tGeo.setAttribute('aW', new THREE.BufferAttribute(tW, 4));
    tGeo.setAttribute('aH', new THREE.BufferAttribute(tH, 1));
    tGeo.setIndex(new THREE.BufferAttribute(tIdx, 1));
    const tU = {
      uZ1: { value: new THREE.Color() }, uZ2: { value: new THREE.Color() }, uZ3: { value: new THREE.Color() }, uNb: { value: new THREE.Color(0x1a2350) },
      uLit: { value: new THREE.Vector3(1, 1, 1) }, uT: { value: 0 }, uSweep: { value: 99 }, uFocus: { value: new THREE.Vector3(0, 0, 0) },
    };
    const terrain = new THREE.Mesh(tGeo, new THREE.ShaderMaterial({
      uniforms: tU, transparent: true,
      vertexShader: `attribute vec4 aW; attribute float aH; varying vec4 vW; varying float vH; varying vec3 vP;
        void main(){ vW=aW; vH=aH; vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader: `uniform vec3 uZ1,uZ2,uZ3,uNb,uLit,uFocus; uniform float uT,uSweep; varying vec4 vW; varying float vH; varying vec3 vP;
        void main(){
          float land=vW.x+vW.y+vW.z+vW.w; if(land<0.5) discard;
          float vn=(vW.x+vW.y+vW.z)/land;
          vec3 zc=(uZ1*vW.x*uLit.x+uZ2*vW.y*uLit.y+uZ3*vW.z*uLit.z+uNb*vW.w)/land;
          vec3 n=normalize(cross(dFdx(vP),dFdy(vP))); if(n.y<0.0) n=-n;
          float sh=clamp(dot(n,normalize(vec3(-0.55,0.62,0.45))),0.0,1.0);
          float c=vH/200.0; float line=1.0-clamp(abs(fract(c-0.5)-0.5)/max(fwidth(c),1e-4),0.0,1.0);
          float elev=clamp(vH/2200.0,0.0,1.0);
          vec3 col=zc*(0.07+0.78*sh*sh*sh+0.30*elev*elev);
          col+=zc*line*step(40.0,vH)*mix(0.10,0.55,vn);
          col+=zc*smoothstep(0.7,0.0,abs(vP.z-uSweep))*0.55*vn;
          float d=distance(vP.xz,uFocus.xy);
          col+=zc*smoothstep(0.86,1.0,sin(d*7.0-uT*2.2)*0.5+0.5)*smoothstep(3.6,0.3,d)*uFocus.z*0.4;
          gl_FragColor=vec4(col,mix(0.5,0.97,vn));
        }`,
    }));
    terrain.frustumCulled = false;
    scene.add(terrain);

    // Đường biên: các nước láng giềng mờ, ba vùng văn hóa của Việt Nam viền sáng. Các đường này sẽ ôm theo địa hình khi có dữ liệu độ cao.
    const borders: { geo: THREE.BufferGeometry; ll: Ring }[] = [];
    const border = (r: Ring, mat: THREE.LineBasicMaterial) => {
      const geo = new THREE.BufferGeometry().setFromPoints(r.map(([lon, lat]) => new THREE.Vector3(X(lon), 0.03, Z(lat))));
      const ln = new THREE.LineLoop(geo, mat);
      ln.renderOrder = 3;
      scene.add(ln);
      borders.push({ geo, ll: r });
    };
    const nbEdge = new THREE.LineBasicMaterial({ color: 0x33448f, transparent: true, opacity: 0.5, depthTest: false });
    Object.values(G.nb).forEach((rings) => rings.forEach((r) => border(r, nbEdge)));
    const zones = ZONES.map((z, zi) => {
      const full = new THREE.Color(z.color);
      const edge = new THREE.LineBasicMaterial({ color: full.clone(), transparent: true, depthTest: false });
      G.zones[z.id].forEach((r) => border(r, edge));
      const sp = label((lang === 'vi' ? z.vi : z.en).toUpperCase(), z.color, 40, 800, 3);
      sp.position.set(X(z.at[0]), 1.9, Z(z.at[1]));
      scene.add(sp);
      return { id: z.id, full, edge, sp, cur: full.clone(), u: [tU.uZ1, tU.uZ2, tU.uZ3][zi].value, zi };
    });

    // Độ cao thật: 8 ô dữ liệu Terrarium (bộ Terrain Tiles công khai trên AWS, tổng hợp từ SRTM và các nguồn mở khác).
    // Không tải được thì bản đồ vẫn chạy, chỉ là phẳng.
    const TZ = 6, TX0 = 50, TY0 = 27, TW = 2, TH = 4;
    let heights: Float32Array | null = null, dead = false;
    const hAt = (lon: number, lat: number) => {
      if (!heights) return 0;
      const fx = ((lon + 180) / 360) * 64 - TX0, r = (lat * Math.PI) / 180;
      const fy = ((1 - Math.asinh(Math.tan(r)) / Math.PI) / 2) * 64 - TY0;
      const px = Math.min(TW * 256 - 1.001, Math.max(0, fx * 256)), py = Math.min(TH * 256 - 1.001, Math.max(0, fy * 256));
      const x0 = Math.floor(px), y0 = Math.floor(py), dx = px - x0, dy = py - y0, W = TW * 256;
      const g = (x: number, y: number) => heights![y * W + x];
      return Math.max(0, (g(x0, y0) * (1 - dx) + g(x0 + 1, y0) * dx) * (1 - dy) + (g(x0, y0 + 1) * (1 - dx) + g(x0 + 1, y0 + 1) * dx) * dy);
    };
    const tile = (x: number, y: number) => new Promise<HTMLImageElement>((ok, no) => {
      const im = new Image();
      im.crossOrigin = 'anonymous';
      im.onload = () => ok(im); im.onerror = no;
      im.src = `https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${TZ}/${TX0 + x}/${TY0 + y}.png`;
    });
    const jobs: Promise<[number, number, HTMLImageElement]>[] = [];
    for (let y = 0; y < TH; y++) for (let x = 0; x < TW; x++) jobs.push(tile(x, y).then((im) => [x, y, im]));
    Promise.all(jobs).then((tiles) => {
      if (dead) return;
      const c = document.createElement('canvas');
      c.width = TW * 256; c.height = TH * 256;
      const cx = c.getContext('2d')!;
      tiles.forEach(([x, y, im]) => cx.drawImage(im, x * 256, y * 256));
      const d = cx.getImageData(0, 0, c.width, c.height).data;
      heights = new Float32Array(c.width * c.height);
      for (let i = 0; i < heights.length; i++) heights[i] = d[i * 4] * 256 + d[i * 4 + 1] + d[i * 4 + 2] / 256 - 32768;
      for (let j = 0; j <= NZ; j++) for (let i = 0; i <= NX; i++) {
        const k = j * (NX + 1) + i;
        const h = hAt(LON0 + (i / NX) * (LON1 - LON0), LAT1 - (j / NZ) * (LAT1 - LAT0));
        tH[k] = h; tPos[k * 3 + 1] = 0.01 + h * EX;
      }
      tGeo.attributes.position.needsUpdate = true; tGeo.attributes.aH.needsUpdate = true;
      borders.forEach(({ geo, ll }) => {
        const pos = geo.attributes.position as THREE.BufferAttribute;
        ll.forEach(([lon, lat], i) => pos.setY(i, 0.035 + hAt(lon, lat) * EX));
        pos.needsUpdate = true;
      });
      pins.forEach((p) => { p.pos.y = 0.03 + hAt(p.ll[0], p.ll[1]) * EX; p.group.position.y = p.pos.y; });
      tU.uSweep.value = -10; // quét một lượt khi địa hình hiện ra
    }).catch(() => { /* giữ bản đồ phẳng */ });

    // Hoàng Sa, Trường Sa, Biển Đông
    const isle = new THREE.MeshBasicMaterial({ color: 0xd9c79a });
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
      const sp = label(lang === 'vi' ? vi : en, '#e8dcc0', 28, 600);
      sp.position.set(X(lon), 0.7, Z(lat));
      scene.add(sp);
    });
    const seaLabel = label(lang === 'vi' ? 'BIỂN ĐÔNG' : 'EAST SEA', '#8a7448', 30, 600, 6);
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
      // Tên di tích ngay trên bản đồ, để người xem thấy bản đồ và thẻ nội dung đang nói về cùng một nơi
      const short = e.name[lang].split(' (')[0].replace(/^Quần thể di chỉ |^Văn hóa /, '').replace(/ culture.*$/, '');
      const tag = label(short, '#ffffff', 30, 700);
      const tagY = 1.75 + (i % 3) * 0.34;
      tag.position.y = tagY;
      tag.material.opacity = 0;
      tag.userData.sx = tag.scale.x; tag.userData.sy = tag.scale.y;
      g.add(b, h, ring, hit, tag);
      const pos = new THREE.Vector3(X(e.coord![0]), 0.03, Z(e.coord![1]));
      g.position.copy(pos);
      scene.add(g);
      pins.push({ slug: e.slug, period: e.period, pos, group: g, head, beam, ring, ringMat, phase: i * 0.37, tag, tagY, ll: e.coord!, solo: !pins.some((q) => q.period === e.period && q.solo && q.pos.distanceTo(pos) < 2.2) });
    });

    // Mặt trống đồng chiếu xuống đất quanh di tích đang xem, quay chậm
    const dc = document.createElement('canvas');
    dc.width = dc.height = 512;
    drawDrum(dc.getContext('2d')!, 512);
    const discMat = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(dc), transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false });
    const disc = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), discMat);
    disc.rotation.x = -Math.PI / 2;
    disc.renderOrder = 2;
    scene.add(disc);

    // Đường cong sáng nối di tích vừa xem với di tích đang xem
    const ARC = 48;
    const arcGeo = new THREE.BufferGeometry();
    arcGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(ARC * 3), 3));
    const arcMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
    const arc = new THREE.Line(arcGeo, arcMat);
    arc.frustumCulled = false;
    scene.add(arc);
    let arcT = 9, lastFocus: string | null = null;
    const setArc = (a: THREE.Vector3, b: THREE.Vector3) => {
      const mid = a.clone().add(b).multiplyScalar(0.5);
      mid.y = 0.6 + a.distanceTo(b) * 0.3;
      const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
      const pos = arcGeo.attributes.position as THREE.BufferAttribute;
      curve.getPoints(ARC - 1).forEach((v, i) => pos.setXYZ(i, v.x, v.y, v.z));
      pos.needsUpdate = true;
      arcT = 0;
    };

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
    let flying = true; // false khi người xem tự kéo xoay bản đồ, cho tới khi nội dung chuyển sang phần khác
    controls.addEventListener('start', () => { flying = false; });
    let lift = 0, lastMs = 0, lastEra: string | null = null;
    const goal = new THREE.Vector3();

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
          want.t.z -= 1.0; // đẩy điểm đang xem xuống dưới thanh tiêu đề
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
      const dt = Math.min(0.05, lastMs ? (ms - lastMs) / 1000 : 0.016);
      lastMs = ms;
      const key = view();
      if (key !== s.key) {
        s.key = key; flying = true;
        if (s.era !== lastEra) { lastEra = s.era; tU.uSweep.value = -10; } // sang thời kỳ khác thì quét lại một lượt
        // Bay xa thì nhấc máy quay lên cao rồi hạ xuống, bay gần thì lướt thẳng
        lift = reduce ? 0 : Math.min(5, controls.target.distanceTo(want.t) * 0.45);
        if (s.focus !== lastFocus) {
          const a = pins.find((x) => x.slug === lastFocus), b = pins.find((x) => x.slug === s.focus);
          if (a && b && a.period === b.period) { arcMat.color.set(periodBySlug[b.period].color); setArc(a.pos, b.pos); } else arcT = 9;
          lastFocus = s.focus;
        }
      }
      lift *= Math.exp(-dt * 1.5);
      if (flying) {
        const a = reduce ? 1 : 1 - Math.exp(-dt * 2.6);
        goal.copy(want.p);
        goal.y += lift; goal.z += lift * 0.5;
        if (!reduce) goal.x += Math.sin(t * 0.3) * 0.3; // đung đưa rất nhẹ để bản đồ không đứng im
        controls.target.lerp(want.t, a);
        camera.position.lerp(goal, a);
      }
      // Đường nối: vẽ dần trong hơn một giây rồi mờ bớt
      arcT += dt;
      arcGeo.setDrawRange(0, Math.max(2, Math.round(Math.min(1, arcT / 1.1) * ARC)));
      arcMat.opacity = arcT > 8 ? 0 : arcT < 1.1 ? 0.95 : Math.max(0.3, 0.95 - (arcT - 1.1) * 0.4);
      controls.update();

      const th = THEMES[s.era || 'intro'];
      cBg.lerp(tmp.set(th.bg), 0.06);
      cGrid.lerp(tmp.set(th.grid), 0.06);
      (scene.background as THREE.Color).copy(cBg);
      scene.fog!.color.copy(cBg);
      (grid.material as THREE.LineBasicMaterial).color.copy(cGrid);
      tU.uNb.value.copy(cBg).lerp(cGrid, 0.5);
      tU.uT.value = t;
      if (tU.uSweep.value < 12) tU.uSweep.value += dt * 9;
      const fp = s.focus ? pins.find((x) => x.slug === s.focus) : null;
      if (fp) { disc.position.set(fp.pos.x, fp.pos.y + 0.04, fp.pos.z); discMat.color.set(periodBySlug[fp.period].color); }
      discMat.opacity += ((fp ? 0.6 : 0) - discMat.opacity) * 0.07;
      const ds = 1.5 + discMat.opacity * 1.8;
      disc.scale.set(ds, ds, 1);
      if (!reduce) disc.rotation.z += dt * 0.12;
      tU.uFocus.value.set(fp ? fp.pos.x : 0, fp ? fp.pos.z : 0, tU.uFocus.value.z + ((fp ? 1 : 0) - tU.uFocus.value.z) * 0.08);
      nbEdge.color.copy(cGrid);
      const three = !s.era || s.era === 'kim-khi';
      zones.forEach((z) => {
        const lit = three || ((s.era === 'van-lang' || s.era === 'au-lac') && z.id === 'dongson');
        if (three) tmp.copy(z.full);
        else if (lit) tmp.set(periodBySlug[s.era!].color);
        else tmp.set(th.land);
        z.cur.lerp(tmp, 0.08);
        z.u.copy(z.cur);
        tU.uLit.value.setComponent(z.zi, tU.uLit.value.getComponent(z.zi) + ((lit ? 1 : 0.5) - tU.uLit.value.getComponent(z.zi)) * 0.08);
        z.edge.color.copy(z.cur);
        z.edge.opacity = lit ? 1 : 0.55;
        const so = three ? (s.focus ? 0.22 : 1) : 0; // khi đang xem một di tích thì tên vùng lùi xuống, nhường chỗ cho tên di tích
        z.sp.material.opacity += (so - z.sp.material.opacity) * 0.1;
      });

      haloMat.color.lerp(tmp.set(s.era ? periodBySlug[s.era].color : '#e6b450'), 0.05);
      pins.forEach((p) => {
        const inEra = !s.era || p.period === s.era;
        const isFocus = p.slug === s.focus;
        // Nhãn tên: mục đang xem hiện rõ, các mục cùng thời kỳ hiện khi đang xem tổng quan thời kỳ
        const to = isFocus ? 1 : s.era && inEra && !s.focus && p.solo ? 0.8 : 0; // các điểm nằm sát nhau chỉ hiện một nhãn để không chồng chữ
        p.tag.material.opacity += (to - p.tag.material.opacity) * 0.12;
        // Nhãn giữ cỡ chữ dễ đọc dù máy quay ở gần hay xa
        const gy = p.group.scale.y, tk = (isFocus ? 1.2 : 1) * Math.min(2.8, Math.max(1, camera.position.distanceTo(p.pos) / 9));
        p.tag.position.y = (isFocus ? 1.3 : p.tagY * Math.min(2, tk)) / gy;
        p.tag.scale.set(p.tag.userData.sx * tk, (p.tag.userData.sy * tk) / gy, 1);
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
      dead = true;
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
