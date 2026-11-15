// Các cảnh 3D phỏng dựng đời sống. Hình khối giản lược, dùng để minh họa chứ không sao chép hiện vật.
import * as THREE from 'three';

type Built = { target: THREE.Object3D; cam: number[]; update?: (t: number) => void };
const M = (color: number, o: Record<string, unknown> = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.9, flatShading: true, ...o });
const at = <T extends THREE.Object3D>(o: T, x: number, y: number, z: number, ry = 0) => { o.position.set(x, y, z); o.rotation.y = ry; return o; };

function person(cloth = 0x5b4636, h = 0.36, skin = 0x9a6a46) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.07, h * 0.62, 7), M(cloth));
  body.position.y = h * 0.31;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.055, 8, 6), M(skin));
  head.position.y = h * 0.62 + 0.05;
  g.add(body, head);
  return g;
}

function tree(h = 0.9, c = 0x2f6b3a) {
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.06, h * 0.5, 6), M(0x5a3f28));
  trunk.position.y = h * 0.25;
  const top = new THREE.Mesh(new THREE.IcosahedronGeometry(h * 0.34, 0), M(c));
  top.position.y = h * 0.66;
  top.scale.y = 1.2;
  g.add(trunk, top);
  return g;
}

function fire() {
  const g = new THREE.Group();
  const light = new THREE.PointLight(0xff8a3c, 3, 7, 1.6);
  light.position.y = 0.3;
  g.add(light);
  const flames = [0xff5a1f, 0xffa23a, 0xffe08a].map((c, i) => {
    const f = new THREE.Mesh(new THREE.ConeGeometry(0.13 - i * 0.035, 0.36 - i * 0.07, 6), new THREE.MeshBasicMaterial({ color: c }));
    f.position.y = 0.18 - i * 0.02;
    g.add(f);
    return f;
  });
  for (let i = 0; i < 4; i++) {
    const log = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.34, 5), M(0x3a2718));
    log.rotation.set(Math.PI / 2, 0, (i * Math.PI) / 4);
    log.position.y = 0.03;
    g.add(log);
  }
  const N = 26, pos = new Float32Array(N * 3), seed = Array.from({ length: N }, () => [Math.random(), Math.random(), Math.random()]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.add(new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xffc46b, size: 0.035, transparent: true, opacity: 0.9 })));
  const update = (t: number) => {
    light.intensity = 2.8 + Math.sin(t * 13) * 0.5 + Math.sin(t * 7.3) * 0.4;
    flames.forEach((f, i) => { f.scale.y = 1 + Math.sin(t * (9 + i * 3) + i) * 0.18; f.rotation.y = t * (1 + i); });
    seed.forEach(([a, b, c], i) => {
      const k = (t * (0.25 + c * 0.3) + a) % 1;
      pos[i * 3] = Math.sin(a * 40 + t) * 0.12 * k;
      pos[i * 3 + 1] = 0.2 + k * 1.3;
      pos[i * 3 + 2] = Math.cos(b * 40 + t) * 0.12 * k;
    });
    geo.attributes.position.needsUpdate = true;
  };
  return { g, update };
}

// Mái nhà sàn cong hai đầu, theo hình nhà khắc trên trống đồng
function roof(len: number, r: number, color: number) {
  const geo = new THREE.CylinderGeometry(r, r, len, 3, 8);
  geo.rotateX(-Math.PI / 2);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const k = p.getZ(i) / (len / 2);
    p.setY(i, p.getY(i) * 0.75 + 0.3 * k * k);
    p.setX(i, p.getX(i) * 1.25);
  }
  geo.computeVertexNormals();
  return new THREE.Mesh(geo, M(color));
}

function house() {
  const g = new THREE.Group();
  const post = M(0x4a3524);
  [[-0.3, -0.45], [0.3, -0.45], [-0.3, 0], [0.3, 0], [-0.3, 0.45], [0.3, 0.45]].forEach(([x, z]) => {
    g.add(at(new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.36, 5), post), x, 0.18, z));
  });
  g.add(at(new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.04, 1.1), M(0x6b4f33)), 0, 0.37, 0));
  g.add(at(new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.26, 0.96), M(0xb89a5e)), 0, 0.52, 0));
  g.add(at(roof(1.5, 0.46, 0x7a5a34), 0, 0.83, 0));
  const ladder = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.02, 0.5), post);
  ladder.position.set(0.5, 0.18, 0.2);
  ladder.rotation.z = -0.8;
  g.add(ladder);
  return g;
}

function smallDrum() {
  const prof = [[0.2, 0], [0.16, 0.08], [0.15, 0.17], [0.21, 0.22], [0.2, 0.25]].map(([r, y]) => new THREE.Vector2(r, y));
  const mat = new THREE.MeshStandardMaterial({ color: 0x8a7a45, metalness: 0.7, roughness: 0.45 });
  const g = new THREE.Group();
  g.add(new THREE.Mesh(new THREE.LatheGeometry(prof, 24), mat));
  const top = new THREE.Mesh(new THREE.CircleGeometry(0.2, 24), mat);
  top.rotation.x = -Math.PI / 2;
  top.position.y = 0.251;
  g.add(top);
  return g;
}

function boat() {
  const geo = new THREE.BoxGeometry(1.7, 0.12, 0.3, 12, 1, 1);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const k = p.getX(i) / 0.85;
    p.setY(i, p.getY(i) + 0.26 * k * k);
    p.setZ(i, p.getZ(i) * (1 - 0.75 * k * k));
  }
  geo.computeVertexNormals();
  const g = new THREE.Group();
  g.add(new THREE.Mesh(geo, M(0x5a3f28)));
  for (let i = 0; i < 4; i++) {
    const m = at(person(0x7a3b2a, 0.28), -0.45 + i * 0.3, 0.05, 0);
    const paddle = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.45, 4), M(0xcbb38a));
    paddle.position.set(0, 0.16, 0.14);
    paddle.rotation.x = 0.5;
    m.add(paddle);
    g.add(m);
  }
  return g;
}

const ground = (r: number, c: number) => {
  const m = new THREE.Mesh(new THREE.CircleGeometry(r, 48), M(c));
  m.rotation.x = -Math.PI / 2;
  return m;
};
const dim = (scene: THREE.Scene, k: number) => scene.children.forEach((l) => { if ((l as THREE.Light).isLight) (l as THREE.Light).intensity *= k; });

export function buildCave(scene: THREE.Scene): Built {
  dim(scene, 0.2);
  const g = new THREE.Group();
  g.add(ground(2.8, 0x4a3d30));
  const shellGeo = new THREE.SphereGeometry(2.4, 20, 12, 0, Math.PI * 1.3, 0, Math.PI / 2);
  const p = shellGeo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const n = 1 + Math.sin(p.getX(i) * 3.1 + p.getY(i) * 4.7) * Math.cos(p.getZ(i) * 3.7) * 0.07;
    p.setXYZ(i, p.getX(i) * n, p.getY(i) * 0.72 * n, p.getZ(i) * n);
  }
  shellGeo.computeVertexNormals();
  const shell = new THREE.Mesh(shellGeo, M(0x5b5148, { side: THREE.DoubleSide }));
  shell.rotation.y = Math.PI - 0.47;
  g.add(shell);
  [[-0.9, -0.8, 0.5], [0.6, -1.1, 0.42], [1.2, -0.2, 0.34], [-0.2, -1.5, 0.3], [-1.4, 0.1, 0.3], [0.2, -0.3, 0.26]].forEach(([x, z, h]) => {
    const top = 0.72 * Math.sqrt(Math.max(0.1, 2.4 * 2.4 - x * x - z * z));
    const s = new THREE.Mesh(new THREE.ConeGeometry(0.09, h, 5), M(0x6a6056));
    s.rotation.x = Math.PI;
    g.add(at(s, x, top - h / 2 - 0.04, z));
  });
  const f = fire();
  g.add(f.g);
  [0.4, 1.7, 3.0, 4.4].forEach((a) => {
    const m = person(0x4f3b2a, 0.26);
    g.add(at(m, Math.cos(a) * 0.75, 0, Math.sin(a) * 0.75, -a + Math.PI / 2));
  });
  const guard = person(0x4f3b2a, 0.4);
  const spear = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.75, 4), M(0xb9a17a));
  spear.position.set(0.09, 0.36, 0);
  guard.add(spear);
  g.add(at(guard, 1.5, 0, 0.9, -0.6));
  // Đống vỏ ốc và công cụ cuội
  for (let i = 0; i < 26; i++) {
    const s = new THREE.Mesh(new THREE.SphereGeometry(0.035, 5, 4), M(0xe6dfd0));
    g.add(at(s, -1.45 + Math.random() * 0.5, 0.03 + Math.random() * 0.08, -0.5 + Math.random() * 0.5));
  }
  for (let i = 0; i < 7; i++) {
    const s = new THREE.Mesh(new THREE.IcosahedronGeometry(0.06, 0), M(0x7d8487));
    s.scale.set(1.4, 0.6, 1);
    g.add(at(s, 0.9 + Math.random() * 0.5, 0.03, -0.9 + Math.random() * 0.4, Math.random() * 3));
  }
  scene.add(g);
  return { target: g, cam: [0, 1.0, 4.3], update: f.update };
}

export function buildVillage(scene: THREE.Scene): Built {
  const g = new THREE.Group();
  g.add(ground(4.2, 0x6f7d45));
  const river = new THREE.Mesh(new THREE.PlaneGeometry(9, 1.7), new THREE.MeshStandardMaterial({ color: 0x3b86a8, roughness: 0.25, metalness: 0.3 }));
  river.rotation.x = -Math.PI / 2;
  g.add(at(river, 0, 0.012, 2.5));
  const b = boat();
  g.add(at(b, 0, 0.06, 2.5));
  g.add(at(house(), -1.7, 0, -0.9, 0.35), at(house(), 1.6, 0, -1.1, -0.45), at(house(), 0, 0, -2.2, 1.5));
  g.add(at(smallDrum(), 0, 0, 0.5));
  const ring = new THREE.Group();
  ring.position.set(0, 0, 0.5);
  const dancers = Array.from({ length: 6 }, (_, i) => {
    const a = (i * Math.PI) / 3;
    const m = person(0x7a3b2a, 0.34);
    const feather = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.16, 4), M(0xf2ead8));
    feather.position.set(0, 0.36, -0.03);
    feather.rotation.x = -0.4;
    m.add(feather);
    ring.add(at(m, Math.cos(a) * 0.62, 0, Math.sin(a) * 0.62, -a - Math.PI / 2));
    return m;
  });
  g.add(ring);
  // Hai người giã gạo
  const mortar = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.07, 0.16, 8), M(0x5a3f28));
  g.add(at(mortar, 1.5, 0.08, 0.7));
  const pestles = [-1, 1].map((s) => {
    g.add(at(person(0x6b5a3a, 0.34), 1.5 + s * 0.2, 0, 0.7, s > 0 ? -Math.PI / 2 : Math.PI / 2));
    const pe = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.5, 4), M(0xcbb38a));
    g.add(at(pe, 1.5 + s * 0.04, 0.4, 0.7));
    return pe;
  });
  [[-2.8, 0.6], [2.9, 0.3], [-3.0, -1.8], [2.6, -2.4], [-0.9, -3.0], [3.3, -1.0], [-2.2, 1.2]].forEach(([x, z], i) => g.add(at(tree(0.8 + (i % 3) * 0.2), x, 0, z)));
  g.scale.setScalar(0.62);
  scene.add(g);
  return {
    target: g, cam: [0, 2.0, 4.2],
    update: (t) => {
      ring.rotation.y = t * 0.35;
      dancers.forEach((m, i) => (m.position.y = Math.abs(Math.sin(t * 3 + i)) * 0.05));
      pestles.forEach((pe, i) => (pe.position.y = 0.36 + Math.abs(Math.sin(t * 2.4 + i * Math.PI / 2)) * 0.16));
      b.position.x = Math.sin(t * 0.25) * 1.8;
      b.position.y = 0.06 + Math.sin(t * 2) * 0.01;
    },
  };
}

export function buildPaddy(scene: THREE.Scene): Built {
  const g = new THREE.Group();
  g.add(ground(4.2, 0x5f4d33));
  const greens = [0x7fb04a, 0x93c25a, 0x6aa23f, 0xa7cf6a];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 5; c++) {
      const wet = (r + c) % 4 === 0;
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(1.02, 0.78),
        wet ? new THREE.MeshStandardMaterial({ color: 0x5b9aa6, roughness: 0.25, metalness: 0.35 }) : M(greens[(r * 3 + c) % 4]),
      );
      m.rotation.x = -Math.PI / 2;
      g.add(at(m, -2.2 + c * 1.1, 0.012, -0.6 + r * 0.86));
    }
  }
  // Người cấy lúa
  [[-2.2, -0.6], [-1.9, -0.45], [1.1, 1.1], [1.4, 1.25], [2.2, 0.25]].forEach(([x, z], i) => {
    const m = person(0x6b5a3a, 0.32);
    m.rotation.x = 0.7;
    g.add(at(m, x, 0.02, z, i));
  });
  g.add(at(house(), -2.6, 0, -1.9, 0.5), at(house(), 2.5, 0, -1.9, -0.4));
  [[-1.6, 1.5, 0x2d5a4a], [0.3, 2.0, 0x356856], [2.0, 1.4, 0x2a5246]].forEach(([x, h, c]) => {
    g.add(at(new THREE.Mesh(new THREE.ConeGeometry(1.5, h, 7), M(c)), x, h / 2, -3.3));
  });
  [[-3.4, -0.4], [3.5, 0.6], [-0.4, -2.0], [3.2, -2.9]].forEach(([x, z]) => g.add(at(tree(1.0), x, 0, z)));
  // Đàn chim bay vòng
  const flock = new THREE.Group();
  const wings: THREE.Mesh[] = [];
  for (let i = 0; i < 5; i++) {
    const bird = new THREE.Group();
    [-1, 1].forEach((s) => {
      const w = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.012, 0.07), M(0xf2ead8));
      w.position.x = s * 0.1;
      w.userData.s = s;
      wings.push(w);
      bird.add(w);
    });
    const a = (i * Math.PI * 2) / 5;
    flock.add(at(bird, Math.cos(a) * (1.4 + (i % 2) * 0.4), 1.7 + (i % 3) * 0.15, Math.sin(a) * (1.4 + (i % 2) * 0.4), -a));
  }
  g.add(flock);
  g.scale.setScalar(0.62);
  scene.add(g);
  return {
    target: g, cam: [0, 2.1, 4.3],
    update: (t) => {
      flock.rotation.y = -t * 0.3;
      wings.forEach((w, i) => (w.rotation.z = w.userData.s * Math.sin(t * 7 + i) * 0.5));
    },
  };
}

// Lính nỏ và cờ trên lũy thành Cổ Loa
export function decorateCoLoa(g: THREE.Group, loops: number[][][]) {
  loops.forEach((pts, li) => {
    pts.forEach(([x, z], i) => {
      if ((i + li) % 2) return;
      const m = person(0x7a2f2f, 0.3);
      const bow = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.015, 0.02), M(0xcbb38a));
      bow.position.set(0, 0.2, 0.09);
      const stock = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.015, 0.16), M(0xcbb38a));
      stock.position.set(0, 0.2, 0.05);
      m.add(bow, stock);
      g.add(at(m, x, 0.24, z, Math.atan2(x, z)));
    });
  });
}
