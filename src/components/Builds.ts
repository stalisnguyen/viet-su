import * as THREE from 'three';

// Các mô hình hiện vật và công trình, dựng bằng khối cơ bản. Kích thước và tỉ lệ theo dáng chung của hiện vật,
// không phải số đo chính xác. Lớp hiển thị hologram được áp ở Model3D, nên ở đây chỉ cần hình khối.
export interface Built { target: THREE.Object3D; cam: number[]; update?: (t: number) => void }

const M = () => new THREE.MeshStandardMaterial({ color: 0xb08d4f });
const lathe = (pts: [number, number][], seg = 64) => new THREE.Mesh(new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg), M());
const box = (w: number, h: number, d: number, x = 0, y = 0, z = 0) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), M()); m.position.set(x, y + h / 2, z); return m; };
const cyl = (rt: number, rb: number, h: number, seg = 32, x = 0, y = 0, z = 0) => { const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), M()); m.position.set(x, y + h / 2, z); return m; };
const ring = (r: number, tube: number, y: number) => { const m = new THREE.Mesh(new THREE.TorusGeometry(r, tube, 8, 64), M()); m.rotation.x = Math.PI / 2; m.position.y = y; return m; };
// Mái bốn mặt (mái chồng diêm) có góc đao cong lên ở bốn góc
function roof(w: number, h: number, y: number, curl = 0.12) {
  const g = new THREE.Group();
  const p = new THREE.Mesh(new THREE.ConeGeometry(w * 0.72, h, 4, 1), M());
  p.rotation.y = Math.PI / 4; p.position.y = y + h / 2; g.add(p);
  for (let i = 0; i < 4; i++) {
    const a = Math.PI / 4 + (i * Math.PI) / 2, d = w * 0.72;
    const c = new THREE.Mesh(new THREE.ConeGeometry(0.025, curl * 1.4, 6), M());
    c.position.set(Math.cos(a) * d, y + curl * 0.45, Math.sin(a) * d);
    c.rotation.z = -Math.cos(a) * 0.7; c.rotation.x = Math.sin(a) * 0.7;
    g.add(c);
  }
  return g;
}

// Chuông Thanh Mai (năm 798): thân tròn hơi loe, các đai ngang dọc chia ô, hai núm đánh chuông, quai trên đỉnh
export function buildBell(scene: THREE.Scene): Built {
  const g = new THREE.Group();
  g.add(lathe([[0.001, 1.26], [0.2, 1.25], [0.33, 1.21], [0.41, 1.13], [0.44, 1.02], [0.45, 0.6], [0.47, 0.2], [0.5, 0.06], [0.52, 0.0], [0.49, 0.0]]));
  [0.2, 0.62, 1.02].forEach((y) => g.add(ring(y === 1.02 ? 0.445 : y === 0.62 ? 0.452 : 0.47, 0.018, y)));
  for (let i = 0; i < 4; i++) {
    const a = (i * Math.PI) / 2, b = box(0.05, 0.82, 0.03, 0, 0.2);
    b.position.set(Math.cos(a) * 0.455, 0.2 + 0.41, Math.sin(a) * 0.455); b.rotation.y = -a; g.add(b);
  }
  [Math.PI / 4, (5 * Math.PI) / 4].forEach((a) => {
    const k = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.09, 0.05, 16), M());
    k.rotation.z = Math.PI / 2; k.rotation.y = -a; k.position.set(Math.cos(a) * 0.47, 0.36, Math.sin(a) * 0.47); g.add(k);
  });
  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.045, 10, 32, Math.PI), M());
  handle.position.y = 1.25; g.add(handle);
  [-0.16, 0.16].forEach((x) => { const h = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 12), M()); h.position.set(x, 1.27, 0); h.scale.set(1, 0.8, 1.3); g.add(h); });
  g.position.y = -0.62; scene.add(g);
  return { target: g, cam: [0, 0.5, 3.4] };
}

// Thạp đồng Đông Sơn (kiểu thạp Đào Thịnh): thân trụ hơi thót, các băng hoa văn, hai quai, nắp có tượng người
export function buildSitula(scene: THREE.Scene): Built {
  const g = new THREE.Group();
  g.add(lathe([[0.001, 0.0], [0.5, 0.0], [0.52, 0.03], [0.6, 0.55], [0.6, 0.95], [0.56, 1.18], [0.57, 1.2], [0.55, 1.2]]));
  [0.12, 0.3, 0.7, 0.88, 1.08].forEach((y) => g.add(ring(y < 0.5 ? 0.52 + y * 0.15 : y > 1 ? 0.575 : 0.6, 0.012, y)));
  [0, Math.PI].forEach((a) => {
    const h = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.022, 8, 20, Math.PI), M());
    h.position.set(Math.cos(a) * 0.6, 1.0, Math.sin(a) * 0.6); h.rotation.y = -a + Math.PI / 2; h.rotation.x = Math.PI / 2; g.add(h);
  });
  const lid = new THREE.Group();
  lid.add(cyl(0.6, 0.6, 0.05, 64, 0, 1.2));
  lid.add(cyl(0.12, 0.16, 0.06, 32, 0, 1.25));
  for (let i = 0; i < 4; i++) {
    const a = (i * Math.PI) / 2 + Math.PI / 4;
    for (const off of [-0.06, 0.06]) {
      const p = new THREE.Group();
      p.add(cyl(0.035, 0.045, 0.14, 12, 0, 0));
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.035, 12, 10), M()); head.position.y = 0.17; p.add(head);
      p.position.set(Math.cos(a) * 0.4 + Math.cos(a + Math.PI / 2) * off, 1.25, Math.sin(a) * 0.4 + Math.sin(a + Math.PI / 2) * off);
      lid.add(p);
    }
  }
  g.add(lid);
  g.position.y = -0.7; scene.add(g);
  return { target: g, cam: [0, 1.2, 3.3] };
}

// Tháp Chăm (kiểu tháp chính Po Nagar): đế, thân vuông có trụ áp tường và cửa giả, ba tầng mái thu nhỏ có tháp góc, chóp
export function buildChamTower(scene: THREE.Scene): Built {
  const g = new THREE.Group();
  g.add(box(1.0, 0.14, 1.0));
  g.add(box(0.76, 0.86, 0.76, 0, 0.14));
  for (let i = 0; i < 4; i++) {
    const a = (i * Math.PI) / 2, f = new THREE.Group();
    [-0.3, 0.3].forEach((x) => f.add(box(0.06, 0.86, 0.04, x, 0.14, 0.39)));
    f.add(box(0.22, 0.56, 0.1, 0, 0.14, 0.4));
    const arch = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.34, 4), M()); arch.rotation.y = Math.PI / 4; arch.position.set(0, 0.87, 0.42); arch.scale.z = 0.35; f.add(arch);
    f.rotation.y = a; g.add(f);
  }
  let y = 1.0, w = 0.86;
  for (let t = 0; t < 3; t++) {
    g.add(box(w, 0.05, w, 0, y)); y += 0.05;
    const tw = w * 0.74, th = 0.3 - t * 0.04;
    g.add(box(tw, th, tw, 0, y));
    [[1, 1], [1, -1], [-1, 1], [-1, -1]].forEach(([sx, sz]) => {
      const c = tw / 2 + 0.03;
      g.add(box(0.1 - t * 0.015, th * 0.7, 0.1 - t * 0.015, sx * c, y, sz * c));
      const pk = new THREE.Mesh(new THREE.ConeGeometry(0.06 - t * 0.01, 0.12, 4), M()); pk.rotation.y = Math.PI / 4; pk.position.set(sx * c, y + th * 0.7 + 0.06, sz * c); g.add(pk);
    });
    y += th; w = tw;
  }
  const top = new THREE.Mesh(new THREE.ConeGeometry(w * 0.6, 0.32, 4), M()); top.rotation.y = Math.PI / 4; top.position.y = y + 0.16; g.add(top);
  const fin = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 10), M()); fin.position.y = y + 0.36; g.add(fin);
  g.position.y = -1.0; scene.add(g);
  return { target: g, cam: [0, 0.6, 3.9] };
}

// Cột kinh Phật đỉnh tôn thắng ở Hoa Lư: cột đá tám mặt trên đế sen, đỉnh có mũ. Chữ khắc không được dựng lại.
export function buildPillar(scene: THREE.Scene): Built {
  const g = new THREE.Group();
  g.add(cyl(0.34, 0.38, 0.1, 8));
  const lotus = lathe([[0.001, 0.1], [0.34, 0.1], [0.3, 0.22], [0.2, 0.28], [0.001, 0.28]], 8); g.add(lotus);
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2, p = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), M());
    p.scale.set(0.6, 1.2, 0.4); p.position.set(Math.cos(a) * 0.29, 0.2, Math.sin(a) * 0.29); p.rotation.y = -a; g.add(p);
  }
  const SH = 0.86, SR = 0.22;
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(SR, SR, SH, 8), M()); shaft.position.y = 0.28 + SH / 2; g.add(shaft);
  // các mặt cột có khung chữ; chỉ dựng khung, không dựng chữ
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + Math.PI / 8, d = SR * Math.cos(Math.PI / 8) + 0.004;
    const f = new THREE.Mesh(new THREE.BoxGeometry(0.11, SH - 0.12, 0.006), M());
    f.position.set(Math.cos(a) * d, 0.28 + SH / 2, Math.sin(a) * d); f.rotation.y = -a + Math.PI / 2; g.add(f);
  }
  const top = 0.28 + SH;
  g.add(cyl(0.3, 0.24, 0.07, 8, 0, top));
  const cap = new THREE.Mesh(new THREE.ConeGeometry(0.36, 0.2, 8, 1), M()); cap.position.y = top + 0.07 + 0.1; g.add(cap);
  g.add(lathe([[0.001, top + 0.2], [0.07, top + 0.22], [0.08, top + 0.28], [0.04, top + 0.34], [0.001, top + 0.37]], 8));
  g.position.y = -0.7; scene.add(g);
  return { target: g, cam: [0.6, 0.7, 3.0] };
}

// Chùa Một Cột: hồ vuông, cột đá giữa hồ, hệ con sơn đỡ đài, điện nhỏ mái cong, bậc lên
export function buildOnePillar(scene: THREE.Scene): Built {
  const g = new THREE.Group();
  g.add(box(1.7, 0.04, 1.7));
  const water = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.02, 1.5), M()); water.position.y = 0.035; g.add(water);
  g.add(cyl(0.1, 0.1, 0.62, 24, 0, 0.04));
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2, s = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.42), M());
    s.position.set(Math.cos(a) * 0.17, 0.58, Math.sin(a) * 0.17); s.lookAt(Math.cos(a) * 0.4, 0.7, Math.sin(a) * 0.4); g.add(s);
  }
  g.add(box(0.66, 0.05, 0.66, 0, 0.66));
  for (let i = 0; i < 4; i++) {
    const a = (i * Math.PI) / 2; const r = box(0.62, 0.06, 0.02); r.position.set(Math.cos(a) * 0.31, 0.74, Math.sin(a) * 0.31); r.rotation.y = a + Math.PI / 2; g.add(r);
  }
  g.add(box(0.44, 0.3, 0.44, 0, 0.71));
  g.add(roof(0.66, 0.26, 1.0, 0.16));
  g.add(box(0.06, 0.04, 0.06, 0, 1.25));
  for (let s = 0; s < 6; s++) g.add(box(0.09, 0.03, 0.26, -0.86 + s * 0.085, 0.04 + s * 0.11, 0));
  g.position.y = -0.55; scene.add(g);
  return { target: g, cam: [1.2, 0.75, 2.9] };
}

// Khuê Văn Các (1805): bốn trụ gạch, gác vuông bằng gỗ có cửa sổ tròn bốn mặt, lan can, mái hai tầng
export function buildKhueVanCac(scene: THREE.Scene): Built {
  const g = new THREE.Group();
  g.add(box(1.0, 0.06, 1.0));
  [[1, 1], [1, -1], [-1, 1], [-1, -1]].forEach(([sx, sz]) => g.add(box(0.18, 0.62, 0.18, sx * 0.3, 0.06, sz * 0.3)));
  g.add(box(0.86, 0.06, 0.86, 0, 0.68));
  for (let i = 0; i < 4; i++) {
    const a = (i * Math.PI) / 2; const r = box(0.84, 0.08, 0.02); r.position.set(Math.cos(a) * 0.42, 0.78, Math.sin(a) * 0.42); r.rotation.y = a + Math.PI / 2; g.add(r);
  }
  g.add(box(0.56, 0.34, 0.56, 0, 0.74));
  for (let i = 0; i < 4; i++) {
    const a = (i * Math.PI) / 2;
    const w = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.014, 8, 32), M());
    w.position.set(Math.cos(a) * 0.285, 0.91, Math.sin(a) * 0.285); w.rotation.y = -a + Math.PI / 2; g.add(w);
    for (let k = 0; k < 8; k++) {
      const ray = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.17, 0.006), M());
      ray.rotation.z = (k / 8) * Math.PI;
      const holder = new THREE.Group(); holder.add(ray); holder.position.copy(w.position); holder.rotation.y = -a + Math.PI / 2; g.add(holder);
    }
  }
  g.add(roof(0.9, 0.12, 1.08, 0.14));
  g.add(box(0.36, 0.1, 0.36, 0, 1.17));
  g.add(roof(0.62, 0.22, 1.25, 0.14));
  g.position.y = -0.7; scene.add(g);
  return { target: g, cam: [0.3, 1.0, 3.3] };
}

// Bia tiến sĩ Văn Miếu: bia đá đặt trên lưng rùa, trán bia cong; dựng ba bia đứng thành hàng
export function buildSteles(scene: THREE.Scene): Built {
  const g = new THREE.Group();
  [-0.72, 0, 0.72].forEach((x, i) => {
    const s = new THREE.Group();
    s.add(box(0.56, 0.06, 0.8));
    const shell = new THREE.Mesh(new THREE.SphereGeometry(0.3, 24, 16), M()); shell.scale.set(0.85, 0.42, 1.15); shell.position.y = 0.1; s.add(shell);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 12), M()); head.scale.set(0.9, 0.8, 1.3); head.position.set(0, 0.14, 0.42); s.add(head);
    [[1, 1], [1, -1], [-1, 1], [-1, -1]].forEach(([sx, sz]) => s.add(cyl(0.05, 0.06, 0.08, 10, sx * 0.2, 0.04, sz * 0.24)));
    const slab = box(0.46, 0.66, 0.07, 0, 0.2); s.add(slab);
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.23, 0.23, 0.07, 32, 1, false, Math.PI / 2, Math.PI), M());
    crown.rotation.x = Math.PI / 2; crown.position.set(0, 0.86, 0); s.add(crown);
    s.add(box(0.36, 0.5, 0.075, 0, 0.27));
    s.position.set(x, 0, i === 1 ? -0.2 : 0); s.rotation.y = 0;
    g.add(s);
  });
  g.position.y = -0.55; scene.add(g);
  return { target: g, cam: [0, 1.1, 3.4] };
}

// Cửu đỉnh Huế: đỉnh đồng thân tròn phình, miệng loe, hai quai đứng trên miệng, ba chân
export function buildUrn(scene: THREE.Scene): Built {
  const g = new THREE.Group();
  g.add(lathe([[0.001, 0.36], [0.28, 0.36], [0.46, 0.5], [0.55, 0.72], [0.52, 0.95], [0.44, 1.06], [0.47, 1.12], [0.52, 1.14], [0.5, 1.15], [0.42, 1.08]]));
  [0.55, 0.72, 0.9].forEach((y) => g.add(ring(y === 0.72 ? 0.552 : y === 0.55 ? 0.49 : 0.535, 0.012, y)));
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2 + Math.PI / 2;
    const leg = lathe([[0.06, 0], [0.08, 0.04], [0.06, 0.2], [0.09, 0.42], [0.001, 0.42]], 16);
    leg.position.set(Math.cos(a) * 0.3, 0, Math.sin(a) * 0.3); g.add(leg);
  }
  [-1, 1].forEach((sx) => {
    const ear = new THREE.Group();
    [-0.07, 0.07].forEach((dz) => ear.add(box(0.05, 0.24, 0.04, 0, 0, dz)));
    ear.add(box(0.05, 0.05, 0.18, 0, 0.22, 0));
    ear.position.set(sx * 0.48, 1.14, 0); g.add(ear);
  });
  g.position.y = -0.72; scene.add(g);
  return { target: g, cam: [0, 0.9, 3.4] };
}
