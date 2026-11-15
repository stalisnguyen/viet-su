import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { Lang, ModelKind } from '../data/types';
import { buildCave, buildPaddy, buildVillage, decorateCoLoa } from './Scenes';

const SCENES: ModelKind[] = ['cave', 'village', 'paddy', 'coloa'];

export const MODEL_INFO: Record<ModelKind, { vi: string; en: string; noteVi: string; noteEn: string }> = {
  drum: {
    vi: 'Trống đồng Đông Sơn', en: 'Đông Sơn bronze drum',
    noteVi: 'Bản dựng giản lược theo kiểu trống Ngọc Lũ: mặt trống có ngôi sao 14 cánh và các vành hoa văn đồng tâm.',
    noteEn: 'Simplified reconstruction after the Ngọc Lũ type: a 14-rayed star and concentric decorated bands on the face.',
  },
  coloa: {
    vi: 'Thành Cổ Loa', en: 'Cổ Loa Citadel',
    noteVi: 'Sơ đồ ba vòng lũy và hào nước theo bình đồ. Chiều cao lũy được phóng đại để dễ nhìn.',
    noteEn: 'Sketch of the three ramparts and moats following the plan. Rampart height is exaggerated for clarity.',
  },
  biface: {
    vi: 'Rìu tay ghè hai mặt', en: 'Bifacial handaxe',
    noteVi: 'Hình khối minh họa một chiếc rìu tay sơ kỳ đá cũ, kiểu tìm thấy ở An Khê.',
    noteEn: 'Illustrative form of a Lower Palaeolithic handaxe of the kind found at An Khê.',
  },
  jar: {
    vi: 'Mộ chum Sa Huỳnh', en: 'Sa Huỳnh burial jar',
    noteVi: 'Hình khối minh họa chum gốm có nắp hình nón cụt dùng để chôn cất.',
    noteEn: 'Illustrative form of a pottery jar with a conical lid used for burial.',
  },
  cave: {
    vi: 'Một hang đá thời đồ đá', en: 'A Stone Age cave',
    noteVi: 'Phỏng dựng theo những gì tìm thấy trong hang: bếp lửa, đống vỏ ốc, công cụ cuội.',
    noteEn: 'Reconstruction based on what is found in the caves: a hearth, a heap of snail shells, pebble tools.',
  },
  village: {
    vi: 'Một làng Đông Sơn', en: 'A Đông Sơn village',
    noteVi: 'Phỏng dựng theo hình khắc trên trống đồng: nhà sàn mái cong, thuyền, người đội mũ lông chim múa quanh trống, người giã gạo.',
    noteEn: 'Reconstruction after the scenes on bronze drums: stilt houses with curved roofs, a boat, feather-crowned dancers around a drum, people pounding rice.',
  },
  paddy: {
    vi: 'Ruộng lúa thời Văn Lang', en: 'Rice fields of Văn Lang',
    noteVi: 'Minh họa nghề trồng lúa nước của cư dân Đông Sơn ở trung du và đồng bằng sông Hồng.',
    noteEn: 'Illustration of wet-rice farming by Đông Sơn people in the Red River midlands and delta.',
  },
};

function tympanum() {
  const S = 1024, c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d')!;
  const R = S / 2;
  g.translate(R, R);
  const base = g.createRadialGradient(0, 0, 40, 0, 0, R);
  base.addColorStop(0, '#8d7a4c');
  base.addColorStop(1, '#5f6b52');
  g.fillStyle = base;
  g.beginPath(); g.arc(0, 0, R, 0, 7); g.fill();
  const dark = '#2e3526', light = '#c9b77e';
  const ring = (r: number, w = 3) => { g.strokeStyle = dark; g.lineWidth = w; g.beginPath(); g.arc(0, 0, r, 0, 7); g.stroke(); };
  // Ngôi sao 14 cánh
  const N = 14, r1 = 62, r2 = 150;
  g.fillStyle = light; g.strokeStyle = dark; g.lineWidth = 3;
  g.beginPath();
  for (let i = 0; i < N * 2; i++) {
    const a = (i * Math.PI) / N, r = i % 2 ? r1 : r2;
    i ? g.lineTo(Math.sin(a) * r, -Math.cos(a) * r) : g.moveTo(Math.sin(a) * r, -Math.cos(a) * r);
  }
  g.closePath(); g.fill(); g.stroke();
  // Họa tiết giữa các cánh sao
  for (let i = 0; i < N; i++) {
    const a = ((i * 2 + 1) * Math.PI) / N;
    g.save(); g.rotate(a); g.strokeStyle = dark; g.lineWidth = 2;
    for (let k = 0; k < 3; k++) { g.beginPath(); g.moveTo(-8 + k * 8, -r1 - 22); g.lineTo(0, -r2 + 14 + k * 4); g.stroke(); }
    g.restore();
  }
  // Các vành hình học
  [160, 172, 204, 216, 250, 262, 330, 342, 408, 420, 462, 474, 500].forEach((r) => ring(r));
  const band = (r: number, n: number, draw: () => void) => {
    for (let i = 0; i < n; i++) { g.save(); g.rotate((i * 2 * Math.PI) / n); g.translate(0, -r); draw(); g.restore(); }
  };
  g.fillStyle = dark; g.strokeStyle = dark;
  band(188, 60, () => { g.beginPath(); g.arc(0, 0, 5, 0, 7); g.stroke(); g.beginPath(); g.arc(0, 0, 1.5, 0, 7); g.fill(); });
  band(233, 90, () => { g.lineWidth = 2; g.beginPath(); g.moveTo(-7, 8); g.lineTo(0, -8); g.lineTo(7, 8); g.stroke(); });
  // Vành người và nhà (cách điệu)
  band(296, 28, () => {
    g.lineWidth = 3; g.beginPath(); g.moveTo(0, 22); g.lineTo(0, -6); g.moveTo(-9, 22); g.lineTo(0, 8); g.lineTo(9, 22);
    g.moveTo(-10, 0); g.lineTo(10, -4); g.stroke();
    g.beginPath(); g.moveTo(-3, -8); g.lineTo(-14, -26); g.lineTo(4, -12); g.fill();
  });
  // Vành chim bay
  band(375, 18, () => {
    g.beginPath(); g.moveTo(-34, 0); g.quadraticCurveTo(0, -12, 30, -2); g.lineTo(44, -6); g.lineTo(32, 4);
    g.quadraticCurveTo(0, 10, -34, 0); g.fill();
    g.beginPath(); g.moveTo(-6, -4); g.lineTo(6, -24); g.lineTo(12, -4); g.fill();
  });
  band(441, 110, () => { g.lineWidth = 2; g.beginPath(); g.moveTo(-6, 9); g.lineTo(0, -9); g.lineTo(6, 9); g.stroke(); });
  band(487, 140, () => { g.beginPath(); g.arc(0, 0, 3, 0, 7); g.fill(); });
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

function bodyBands() {
  const c = document.createElement('canvas');
  c.width = 1024; c.height = 256;
  const g = c.getContext('2d')!;
  g.fillStyle = '#6b6f55'; g.fillRect(0, 0, 1024, 256);
  g.strokeStyle = '#2e3526';
  [20, 34, 96, 110, 170, 184, 236].forEach((y) => { g.lineWidth = 3; g.beginPath(); g.moveTo(0, y); g.lineTo(1024, y); g.stroke(); });
  g.lineWidth = 2;
  for (let x = 0; x < 1024; x += 16) { g.beginPath(); g.moveTo(x, 110); g.lineTo(x + 8, 96); g.lineTo(x + 16, 110); g.stroke(); }
  // Thuyền cách điệu trên tang trống
  g.fillStyle = '#2e3526';
  for (let x = 40; x < 1024; x += 170) {
    g.beginPath(); g.moveTo(x, 60); g.quadraticCurveTo(x + 55, 92, x + 110, 56); g.lineTo(x + 100, 70); g.quadraticCurveTo(x + 55, 84, x + 12, 70); g.fill();
    for (let k = 0; k < 4; k++) g.fillRect(x + 26 + k * 18, 46, 4, 22);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = THREE.RepeatWrapping;
  return t;
}

function buildDrum(scene: THREE.Scene) {
  const prof = [[1.0, 0], [0.93, 0.1], [0.8, 0.36], [0.76, 0.4], [0.73, 0.82], [0.9, 0.9], [1.05, 1.02], [1.08, 1.1], [1.02, 1.2], [0.98, 1.22]]
    .map(([r, y]) => new THREE.Vector2(r, y));
  const mat = new THREE.MeshStandardMaterial({ map: bodyBands(), metalness: 0.75, roughness: 0.42, side: THREE.DoubleSide });
  const body = new THREE.Mesh(new THREE.LatheGeometry(prof, 96), mat);
  const top = new THREE.Mesh(new THREE.CircleGeometry(0.98, 96), new THREE.MeshStandardMaterial({ map: tympanum(), metalness: 0.7, roughness: 0.45 }));
  top.rotation.x = -Math.PI / 2;
  top.position.y = 1.221;
  const g = new THREE.Group();
  g.add(body, top);
  const hm = new THREE.MeshStandardMaterial({ color: 0x6b6f55, metalness: 0.75, roughness: 0.4 });
  for (let i = 0; i < 4; i++) {
    const a = (i * Math.PI) / 2 + (i % 2 ? -0.5 : 0.5);
    const h = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.022, 8, 20, Math.PI), hm);
    h.position.set(Math.cos(a) * 0.86, 0.86, Math.sin(a) * 0.86);
    h.rotation.set(0, -a, -Math.PI / 2);
    g.add(h);
  }
  g.position.y = -0.62;
  scene.add(g);
  return { target: g, cam: [0, 2.7, 3.1] };
}

function sprite(text: string) {
  const c = document.createElement('canvas');
  const g = c.getContext('2d')!;
  const font = '500 40px "Be Vietnam Pro", system-ui, sans-serif';
  g.font = font;
  c.width = Math.ceil(g.measureText(text).width) + 20; c.height = 60;
  g.font = font; g.textBaseline = 'middle';
  g.lineWidth = 7; g.strokeStyle = 'rgba(8,20,22,.9)'; g.strokeText(text, 10, 30);
  g.fillStyle = '#fff3d6'; g.fillText(text, 10, 30);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthTest: false, transparent: true }));
  s.scale.set((c.width / 60) * 0.26, 0.26, 1);
  s.renderOrder = 5;
  return s;
}

function buildCoLoa(scene: THREE.Scene, lang: Lang) {
  const g = new THREE.Group();
  const ground = new THREE.Mesh(new THREE.CircleGeometry(4.6, 64), new THREE.MeshStandardMaterial({ color: 0x24443a, roughness: 1 }));
  ground.rotation.x = -Math.PI / 2;
  g.add(ground);
  const earth = new THREE.MeshStandardMaterial({ color: 0xb08a52, roughness: 0.9, flatShading: true });
  const water = new THREE.MeshStandardMaterial({ color: 0x3f8fb0, roughness: 0.3, metalness: 0.2 });
  const loop = (pts: number[][], closed = true) => new THREE.CatmullRomCurve3(pts.map(([x, z]) => new THREE.Vector3(x, 0, z)), closed, 'catmullrom', 0.5);
  const rampart = (pts: number[][], r: number, h: number) => {
    const m = new THREE.Mesh(new THREE.TubeGeometry(loop(pts), 220, r, 7, true), earth);
    m.scale.y = h; g.add(m);
    const moat = new THREE.Mesh(new THREE.TubeGeometry(loop(pts.map(([x, z]) => [x * 1.07, z * 1.07])), 220, r * 0.8, 6, true), water);
    moat.scale.y = 0.12; moat.position.y = 0.004; g.add(moat);
  };
  // Bình đồ giản lược: hai vòng ngoài không đều, vòng trong hình chữ nhật
  const outer = [[-3.4, 0.4], [-2.9, -1.9], [-1.2, -3.0], [0.9, -3.1], [2.8, -2.2], [3.5, -0.3], [3.1, 1.7], [1.6, 2.8], [-0.6, 3.0], [-2.5, 2.2]];
  const middle = [[-2.3, 0.3], [-2.0, -1.3], [-0.7, -2.0], [1.0, -2.1], [2.2, -1.2], [2.4, 0.4], [1.8, 1.6], [0.3, 2.0], [-1.4, 1.7]];
  rampart(outer, 0.13, 2.2);
  rampart(middle, 0.12, 2.0);
  const wall = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.22, 1.0), earth);
  wall.position.y = 0.11;
  const yard = new THREE.Mesh(new THREE.BoxGeometry(1.34, 0.24, 0.84), new THREE.MeshStandardMaterial({ color: 0x2f5a47, roughness: 1 }));
  yard.position.y = 0.105;
  g.add(wall, yard);
  const roof = new THREE.MeshStandardMaterial({ color: 0x8b4a33, roughness: 0.8 });
  [[-0.3, -0.1], [0.15, 0.12], [0.4, -0.18], [-0.1, 0.2]].forEach(([x, z]) => {
    const h = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.14, 4), roof);
    h.position.set(x, 0.3, z); h.rotation.y = Math.PI / 4; g.add(h);
  });
  // Sông Hoàng Giang chảy qua phía tây nam
  const river = new THREE.Mesh(
    new THREE.TubeGeometry(loop([[-4.4, 1.6], [-3.6, 2.6], [-2.2, 3.3], [-0.4, 3.6], [1.6, 3.9], [3.2, 4.1]], false), 80, 0.2, 6, false), water);
  river.scale.y = 0.1; river.position.y = 0.003; g.add(river);
  const L = (vi: string, en: string, x: number, z: number, y = 0.6) => { const s = sprite(lang === 'vi' ? vi : en); s.position.set(x, y, z); g.add(s); };
  L('Thành Ngoại', 'Outer rampart', 2.9, -2.5);
  L('Thành Trung', 'Middle rampart', -1.9, -1.6);
  L('Thành Nội', 'Inner citadel', 0, 0, 0.62);
  L('Sông Hoàng Giang', 'Hoàng Giang river', -1.4, 3.7, 0.4);
  decorateCoLoa(g, [outer, middle]);
  g.scale.setScalar(0.42);
  scene.add(g);
  return { target: g, cam: [0, 2.3, 2.9] };
}

function buildBiface(scene: THREE.Scene) {
  const geo = new THREE.IcosahedronGeometry(1, 2);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    let x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const n = Math.sin(x * 9.1 + y * 5.3) * Math.cos(z * 7.7 + y * 3.1) * 0.09;
    const taper = 1 - 0.55 * Math.max(0, y);
    p.setXYZ(i, x * 0.62 * taper + n, y * 1.15 + n * 0.5, z * 0.3 * (1 - 0.3 * Math.max(0, y)) + n * 0.4);
  }
  geo.computeVertexNormals();
  const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x7d8487, roughness: 0.85, flatShading: true }));
  m.rotation.z = 0.25;
  scene.add(m);
  return { target: m, cam: [0, 0.4, 3.6] };
}

function buildJar(scene: THREE.Scene) {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 256;
  const x = c.getContext('2d')!;
  x.fillStyle = '#a9683f'; x.fillRect(0, 0, 256, 256);
  x.strokeStyle = 'rgba(70,35,18,.45)'; x.lineWidth = 2;
  for (let i = -256; i < 256; i += 9) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i + 256, 256); x.stroke(); }
  x.strokeStyle = '#5b2f19'; x.lineWidth = 5;
  [28, 44].forEach((y) => { x.beginPath(); x.moveTo(0, y); x.lineTo(256, y); x.stroke(); });
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(6, 1);
  const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9, side: THREE.DoubleSide });
  const body = [[0.02, 0], [0.4, 0.05], [0.62, 0.22], [0.7, 0.5], [0.7, 1.35], [0.66, 1.6], [0.6, 1.7], [0.66, 1.76]].map(([r, y]) => new THREE.Vector2(r, y));
  const lid = [[0.7, 1.8], [0.68, 1.86], [0.42, 2.12], [0.3, 2.16], [0.02, 2.16]].map(([r, y]) => new THREE.Vector2(r, y));
  const g = new THREE.Group();
  g.add(new THREE.Mesh(new THREE.LatheGeometry(body, 64), mat), new THREE.Mesh(new THREE.LatheGeometry(lid, 64), mat));
  g.position.y = -1.05;
  scene.add(g);
  return { target: g, cam: [0, 0.5, 4.3] };
}

export default function Model3D({ kind, lang }: { kind: ModelKind; lang: Lang }) {
  const host = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  // Khung và chú thích luôn giữ nguyên kích thước; chỉ phần dựng 3D là bật khi khung vào tầm nhìn.
  // Nhờ vậy trang không bị xô lệch khi cuộn và không mở quá nhiều khung 3D cùng lúc.
  const [on, setOn] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setOn(e.isIntersecting), { rootMargin: '160px' });
    io.observe(host.current!);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!on) return;
    const el = host.current!;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      setFailed(true);
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    scene.add(new THREE.HemisphereLight(0xe8fff6, 0x101c1d, 1.3));
    const key = new THREE.DirectionalLight(0xffe0ad, 2.2); key.position.set(3, 5, 4); scene.add(key);
    const rim = new THREE.DirectionalLight(0x7fd4c0, 1.1); rim.position.set(-4, 2, -3); scene.add(rim);
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    const built: { target: THREE.Object3D; cam: number[]; update?: (t: number) => void } =
      kind === 'drum' ? buildDrum(scene) : kind === 'coloa' ? buildCoLoa(scene, lang) : kind === 'jar' ? buildJar(scene)
      : kind === 'cave' ? buildCave(scene) : kind === 'village' ? buildVillage(scene) : kind === 'paddy' ? buildPaddy(scene) : buildBiface(scene);
    camera.position.set(built.cam[0], built.cam[1], built.cam[2]);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false; controls.enableZoom = false; controls.enableDamping = true;
    controls.autoRotate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    controls.autoRotateSpeed = kind === 'coloa' ? 0.9 : 1.6;
    if (SCENES.includes(kind)) { controls.maxPolarAngle = 1.36; controls.autoRotateSpeed = 0.7; }
    if (kind === 'cave') { controls.autoRotate = false; controls.minAzimuthAngle = -0.75; controls.maxAzimuthAngle = 0.75; }
    renderer.domElement.style.touchAction = 'pan-y';
    const resize = () => {
      const w = el.clientWidth, h = el.clientHeight;
      renderer.setSize(w, h); camera.aspect = w / h;
      const f = camera.aspect < 1.2 ? (kind === 'coloa' ? 1.75 : SCENES.includes(kind) ? 1.3 : 1) : 1;
      camera.position.set(built.cam[0] * f, built.cam[1] * f, built.cam[2] * f);
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(el);
    let raf = 0;
    const tick = (ms = 0) => { built.update?.(ms / 1000); controls.update(); renderer.render(scene, camera); raf = requestAnimationFrame(tick); };
    tick();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); controls.dispose(); renderer.dispose(); renderer.domElement.remove(); };
  }, [kind, lang, on]);

  const info = MODEL_INFO[kind];
  return (
    <figure className={'model3d' + (SCENES.includes(kind) ? ' scene' : '')}>
      <div className="model3d-canvas" ref={host} />
      {failed && <p className="map3d-fallback">{lang === 'vi' ? 'Thiết bị này không hiển thị được mô hình 3D.' : 'This device cannot display the 3D model.'}</p>}
      <figcaption>
        <strong>{SCENES.includes(kind) ? (lang === 'vi' ? 'Cảnh tái hiện' : 'Reconstructed scene') : (lang === 'vi' ? 'Mô hình 3D' : '3D model')} - {info[lang]}</strong>
        <span>{lang === 'vi' ? info.noteVi : info.noteEn} {lang === 'vi' ? 'Kéo ngang để xoay.' : 'Drag sideways to rotate.'}</span>
      </figcaption>
    </figure>
  );
}
