import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { BATTLES } from '../data/battles';
import { FRONTIERS, FRONTIER_BY_ERA } from '../data/frontiers';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import geo from '../data/geo.json';
import { entries } from '../data/entries';
import { periodBySlug } from '../data/periods';
import type { Lang } from '../data/types';
import { drawDrum, loadDrumFace } from '../drum';

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
  // Chừa đủ chỗ phía trên cho chữ hoa có hai tầng dấu (Ồ, Ễ, Ẩ...) và phía dưới cho dấu nặng
  c.height = Math.round(px * 2 + 24);
  const by = Math.round(px * 1.42 + 8);
  set();
  ctx.textBaseline = 'alphabetic';
  ctx.lineWidth = 9;
  ctx.strokeStyle = 'rgba(5,7,20,0.9)';
  ctx.strokeText(text, 14, by);
  ctx.fillStyle = color;
  ctx.fillText(text, 14, by);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
  const h = (px / 58) * (c.height / (px + 28)); // giữ nguyên cỡ chữ trên bản đồ dù khung vẽ cao hơn
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
  bstep?: number; // bước đang xem trong diễn biến trận đánh
}

interface Pin {
  slug: string; period: string; pos: THREE.Vector3; group: THREE.Group;
  head: THREE.MeshBasicMaterial; beam: THREE.MeshBasicMaterial; ring: THREE.Mesh; ringMat: THREE.MeshBasicMaterial; phase: number; tag: THREE.Sprite; tagY: number; solo: boolean; ll: [number, number];
}

export default function Stage({ lang, era, focus, sheet, onPick, split = false, bstep = 0 }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const live = useRef({ era, focus, sheet, onPick, split, bstep, key: '' });
  live.current.era = era; live.current.focus = focus; live.current.sheet = sheet; live.current.onPick = onPick; live.current.split = split; live.current.bstep = bstep;
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
    const LON0 = 101.25, LON1 = 112.5, LAT0 = 7.5, LAT1 = 24, NX = 250, NZ = 366, EX = 0.0003; // EX: mét -> đơn vị bản đồ
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
    tGeo.computeVertexNormals();
    const tU = {
      uZ1: { value: new THREE.Color() }, uZ2: { value: new THREE.Color() }, uZ3: { value: new THREE.Color() }, uNb: { value: new THREE.Color(0x1a2350) },
      uLit: { value: new THREE.Vector3(1, 1, 1) }, uT: { value: 0 }, uSweep: { value: 99 }, uFocus: { value: new THREE.Vector3(0, 0, 0) },
    };
    const terrain = new THREE.Mesh(tGeo, new THREE.ShaderMaterial({
      uniforms: tU, transparent: true,
      vertexShader: `attribute vec4 aW; attribute float aH; varying vec4 vW; varying float vH; varying vec3 vP; varying vec3 vNr;
        void main(){ vW=aW; vH=aH; vP=position; vNr=normal; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader: `uniform vec3 uZ1,uZ2,uZ3,uNb,uLit,uFocus; uniform float uT,uSweep; varying vec4 vW; varying float vH; varying vec3 vP; varying vec3 vNr;
        void main(){
          float land=vW.x+vW.y+vW.z+vW.w; if(land<0.5) discard;
          float vn=(vW.x+vW.y+vW.z)/land;
          vec3 zc=(uZ1*vW.x*uLit.x+uZ2*vW.y*uLit.y+uZ3*vW.z*uLit.z+uNb*vW.w)/land;
          vec3 n=normalize(vNr); if(n.y<0.0) n=-n;
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
      return { id: z.id, full, edge, sp, cur: full.clone(), u: [tU.uZ1, tU.uZ2, tU.uZ3][zi].value, zi, alt: new Map<string, THREE.Sprite>() };
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
        tH[k] = h;
      }
      // Làm mượt hai lượt để núi thành khối liền, không lởm chởm do dữ liệu chi tiết hơn lưới
      const tmpH = new Float32Array(nV), W1 = NX + 1;
      for (let pass = 0; pass < 2; pass++) {
        for (let j = 0; j <= NZ; j++) for (let i = 0; i <= NX; i++) {
          let sum = 0, n = 0;
          for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) {
            const ii = i + di, jj = j + dj;
            if (ii < 0 || jj < 0 || ii > NX || jj > NZ) continue;
            const w = di === 0 && dj === 0 ? 4 : di === 0 || dj === 0 ? 2 : 1;
            sum += tH[jj * W1 + ii] * w; n += w;
          }
          tmpH[j * W1 + i] = sum / n;
        }
        tH.set(tmpH);
      }
      for (let k = 0; k < nV; k++) tPos[k * 3 + 1] = 0.01 + tH[k] * EX;
      tGeo.computeVertexNormals();
      tGeo.attributes.position.needsUpdate = true; tGeo.attributes.aH.needsUpdate = true;
      borders.forEach(({ geo, ll }) => {
        const pos = geo.attributes.position as THREE.BufferAttribute;
        ll.forEach(([lon, lat], i) => pos.setY(i, 0.035 + hAt(lon, lat) * EX));
        pos.needsUpdate = true;
      });
      pins.forEach((p) => { p.pos.y = 0.03 + hAt(p.ll[0], p.ll[1]) * EX; p.group.position.y = p.pos.y; });
      tU.uSweep.value = -10; // quét một lượt khi địa hình hiện ra
    }).catch(() => { /* giữ bản đồ phẳng */ });

    // Quần đảo Hoàng Sa và Trường Sa: vẽ các đảo, đá chính theo vị trí gần đúng, có quầng sáng để luôn nổi bật trên bản đồ
    const isle = new THREE.MeshBasicMaterial({ color: 0xffe3a3 });
    const isleGlow = new THREE.MeshBasicMaterial({ map: haloMat.map, color: 0xffc860, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false });
    const islands: [string, string, number, number, [number, number][]][] = [
      ['QUẦN ĐẢO HOÀNG SA', 'HOÀNG SA (PARACEL) ISLANDS', 111.9, 17.25, [
        [112.335, 16.835], [111.603, 16.535], [111.2, 15.78], [112.73, 16.67], [111.7, 16.45], [111.74, 16.46], [111.58, 16.52], [111.75, 16.06], [112.27, 16.98],
      ]],
      ['QUẦN ĐẢO TRƯỜNG SA', 'TRƯỜNG SA (SPRATLY) ISLANDS', 113.6, 11.95, [
        [114.33, 11.43], [114.36, 11.45], [114.36, 10.38], [114.37, 10.18], [114.33, 9.88], [111.92, 8.64], [112.92, 7.87], [114.28, 11.05], [114.42, 10.68], [114.28, 9.72], [115.53, 9.9], [112.89, 9.55],
      ]],
    ];
    islands.forEach(([vi, en, lon, lat, pts]) => {
      pts.forEach(([plon, plat]) => {
        const d = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.07, 12), isle);
        d.position.set(X(plon), 0.04, Z(plat));
        scene.add(d);
        const g = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.9), isleGlow);
        g.rotation.x = -Math.PI / 2;
        g.position.set(X(plon), 0.02, Z(plat));
        scene.add(g);
      });
      const sp = label(lang === 'vi' ? vi : en, '#ffd27a', 32, 800, 3);
      sp.position.set(X(lon), 0.9, Z(lat));
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
      // Nhãn trên bản đồ phải ngắn: bỏ phần trong ngoặc và phần sau dấu hai chấm, cắt ở chữ "và" nếu còn dài
      let short = e.name[lang].split(/ \(|: /)[0].replace(/^Quần thể di chỉ |^Văn hóa /, '').replace(/ culture.*$/, '');
      if (short.length > 26) short = short.split(/ và | and /)[0];
      if (short.length > 30) short = short.slice(0, 28).replace(/\s+\S*$/, '') + '...';
      const tag = label(short, '#d6ccb8', 30, 700); // màu ngà dịu để chữ không bị lóa
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
    loadDrumFace().then((cv) => { if (!dead) { discMat.map = new THREE.CanvasTexture(cv); discMat.needsUpdate = true; } });
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

    // Diễn biến trận đánh: mỗi bước có các đạo quân (thuyền, lá cờ, máy bay) chạy dọc đường hành quân,
    // để lại vệt đường đi; chỗ giao chiến lóe sáng; bãi cọc nhô lên khi triều rút.
    const tubeMat = (c: string, air = false) => new THREE.ShaderMaterial({
      uniforms: { uP: { value: 0 }, uT: { value: 0 }, uO: { value: 1 }, uC: { value: new THREE.Color(c) }, uAir: { value: air ? 1 : 0 } },
      transparent: true, depthWrite: false,
      vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
      fragmentShader: `uniform vec3 uC; uniform float uP; uniform float uT; uniform float uO; uniform float uAir; varying vec2 vUv;
        void main(){ if (vUv.x > uP) discard;
          float dash = uAir > 0.5 ? step(0.5, fract(vUv.x * 18.0 - uT * 0.8)) : 1.0;
          float flow = 0.55 + 0.45 * smoothstep(0.0, 0.08, fract(vUv.x * 4.0 - uT * 0.5)) * (1.0 - fract(vUv.x * 4.0 - uT * 0.5));
          gl_FragColor = vec4(min(vec3(1.0), uC * (0.75 + 0.35 * flow)), dash * uO); }`,
    });
    // Quân cờ: biểu tượng luôn quay về phía máy quay (thuyền buồm cho thủy quân, lá cờ cho bộ binh, máy bay),
    // có viền tối và quầng sáng để nổi trên mọi màu nền
    const iconCache = new Map<string, THREE.Texture>();
    const icon = (kind: string, col: string) => {
      const key = kind + col;
      if (iconCache.has(key)) return iconCache.get(key)!;
      const c = document.createElement('canvas'); c.width = c.height = 128;
      const x = c.getContext('2d')!;
      const g = x.createRadialGradient(64, 70, 4, 64, 70, 60); g.addColorStop(0, col + 'aa'); g.addColorStop(1, col + '00');
      x.fillStyle = g; x.beginPath(); x.arc(64, 70, 60, 0, Math.PI * 2); x.fill();
      x.lineJoin = 'round'; x.lineWidth = 7; x.strokeStyle = '#140d08'; x.fillStyle = col;
      const draw = (f: () => void) => { x.beginPath(); f(); x.stroke(); x.fill(); };
      if (kind === 'fleet') {
        draw(() => { x.moveTo(22, 82); x.lineTo(106, 82); x.lineTo(94, 100); x.lineTo(34, 100); x.closePath(); });
        draw(() => { x.moveTo(62, 24); x.lineTo(62, 78); x.lineTo(30, 78); x.closePath(); });
        draw(() => { x.moveTo(68, 34); x.lineTo(68, 78); x.lineTo(94, 78); x.closePath(); });
      } else if (kind === 'air') {
        draw(() => { x.moveTo(64, 18); x.lineTo(72, 50); x.lineTo(112, 66); x.lineTo(112, 74); x.lineTo(72, 66); x.lineTo(70, 96); x.lineTo(84, 106); x.lineTo(84, 112); x.lineTo(44, 112); x.lineTo(44, 106); x.lineTo(58, 96); x.lineTo(56, 66); x.lineTo(16, 74); x.lineTo(16, 66); x.lineTo(56, 50); x.closePath(); });
      } else {
        x.fillStyle = '#140d08'; x.fillRect(36, 18, 9, 92);
        x.fillStyle = col; draw(() => { x.moveTo(45, 22); x.lineTo(104, 30); x.lineTo(90, 46); x.lineTo(104, 62); x.lineTo(45, 62); x.closePath(); });
        x.fillStyle = col; draw(() => { x.ellipse(40, 108, 22, 8, 0, 0, Math.PI * 2); });
      }
      const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; iconCache.set(key, t); return t;
    };
    const token = (kind: string, col: string) => {
      const g = new THREE.Group();
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: icon(kind, col), transparent: true, depthWrite: false, depthTest: false }));
      sp.center.set(0.5, 0.15); sp.scale.setScalar(0.24); sp.renderOrder = 9; g.add(sp);
      return g;
    };
    const flashTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d')!; const gr = x.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,240,1)'); gr.addColorStop(0.3, 'rgba(255,190,90,0.8)'); gr.addColorStop(1, 'rgba(255,90,40,0)'); x.fillStyle = gr; x.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();
    interface BUnit { tube: THREE.Mesh; tok: THREE.Group; curve: THREE.CatmullRomCurve3; lose: boolean }
    interface BStep { units: BUnit[]; flashes: THREE.Sprite[]; box: { cx: number; cz: number; r: number }; tide?: string }
    let battleG: THREE.Group | null = null, bSteps: BStep[] = [], bStakes: THREE.Group | null = null, bStakeFrom = 99, bMarks: THREE.Sprite[] = [];
    let battleBox: { cx: number; cz: number; r: number; k: number } | null = null, bCur = -1, bT = 0, bSize = 1;
    const onGround = (lon: number, lat: number, up = 0.07) => new THREE.Vector3(X(lon), up + hAt(lon, lat) * EX, Z(lat));
    const clearBattle = () => {
      if (!battleG) return;
      scene.remove(battleG);
      battleG.traverse((o) => { const m = o as THREE.Mesh; m.geometry?.dispose?.(); const mt = m.material as THREE.Material & { map?: THREE.Texture }; if (mt?.map && mt.map !== flashTex && ![...iconCache.values()].includes(mt.map)) mt.map.dispose(); mt?.dispose?.(); });
      battleG = null; bSteps = []; bStakes = null; bMarks = []; battleBox = null; bCur = -1;
    };
    const boxOf = (pts: [number, number][]) => {
      let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9;
      pts.forEach(([lon, lat]) => { x0 = Math.min(x0, X(lon)); x1 = Math.max(x1, X(lon)); z0 = Math.min(z0, Z(lat)); z1 = Math.max(z1, Z(lat)); });
      return { cx: (x0 + x1) / 2, cz: (z0 + z1) / 2, r: Math.max(0.25, Math.max(x1 - x0, z1 - z0) / 2) };
    };
    const showBattle = (slug: string | null) => {
      clearBattle();
      const b = slug ? BATTLES[slug] : null;
      if (!b) return;
      battleG = new THREE.Group();
      // Cỡ quân cờ và nét vẽ theo quy mô cả trận để nhìn rõ ở mọi mức thu phóng
      const all = boxOf(b.steps.flatMap((st) => st.units.flatMap((u) => u.path)));
      bSize = Math.max(0.35, all.r / 1.4);
      bSteps = b.steps.map((st) => {
        const pts: [number, number][] = [];
        const units = st.units.map((u) => {
          pts.push(...u.path);
          const air = u.kind === 'air';
          const vs = u.path.map(([lon, lat]) => onGround(lon, lat, air ? 0.5 : 0.06));
          if (air) { vs[0].y -= 0.3; vs[vs.length - 1].y -= 0.35; }
          const curve = new THREE.CatmullRomCurve3(vs, false, 'centripetal');
          const col = u.side === 'vn' ? '#ffcf5a' : '#5cc8ff';
          const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, Math.max(24, vs.length * 24), 0.013 * bSize, 6, false), tubeMat(col, air));
          tube.renderOrder = 5; tube.visible = false; battleG!.add(tube);
          const tok = token(u.kind, col); tok.visible = false; battleG!.add(tok);
          return { tube, tok, curve, lose: u.fate === 'lose' };
        });
        const flashes = (st.clash || []).map((c) => {
          pts.push(c);
          const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: flashTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 }));
          sp.position.copy(onGround(c[0], c[1], 0.15)); sp.visible = false; sp.renderOrder = 8; battleG!.add(sp);
          return sp;
        });
        return { units, flashes, box: boxOf(pts), tide: st.tide };
      });
      // Bãi cọc: các cọc nghiêng, ẩn dưới nước lúc triều lên, nhô lên khi triều rút
      if (b.stakes) {
        bStakes = new THREE.Group();
        const sm = new THREE.MeshBasicMaterial({ color: '#e8c995' });
        b.stakes.forEach(([lon, lat], i) => {
          for (let k = 0; k < 9; k++) {
            const a = (k / 9) * Math.PI * 2 + i, rr = (0.03 + (k % 3) * 0.025) * bSize;
            const st = new THREE.Mesh(new THREE.ConeGeometry(0.012 * bSize, 0.18 * bSize, 4), sm);
            st.position.copy(onGround(lon, lat, 0.0)).add(new THREE.Vector3(Math.cos(a) * rr, 0, Math.sin(a) * rr));
            st.position.y += 0.09 * bSize;
            st.rotation.z = 0.5; st.rotation.y = a;
            bStakes!.add(st);
          }
        });
        bStakes.visible = false; battleG.add(bStakes);
        bStakeFrom = b.steps.findIndex((st) => st.stakes);
      }
      b.marks.forEach((mk) => {
        const sp = label(mk.name[lang], '#fff2d0', 26, 700, 1);
        sp.position.copy(onGround(mk.at[0], mk.at[1], 0.12 + 0.25 * Math.min(0.95, bSize))); sp.scale.multiplyScalar(Math.min(0.95, 0.72 * bSize));
        sp.material.opacity = 0; sp.renderOrder = 7; sp.userData.base = sp.scale.clone().divideScalar(Math.min(0.95, 0.72 * bSize)); sp.userData.gy = onGround(mk.at[0], mk.at[1], 0).y; battleG!.add(sp); bMarks.push(sp);
      });
      scene.add(battleG);
    };
    // Khung máy quay cho bước đang xem
    const frameStep = (i: number) => {
      const st = bSteps[i]; if (!st) return;
      battleBox = { cx: st.box.cx, cz: st.box.cz, r: st.box.r, k: Math.max(0.3, st.box.r / 1.3) };
    };
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
    // Bản đồ nhìn vào đâu khi mở một thời kỳ: cả nước, miền Bắc, miền Trung hay miền Nam
    const CENTER: Record<string, [number, number]> = { north: [105.9, 20.6], central: [108.0, 15.3], south: [106.4, 10.7], sea: [111.2, 12.6] };
    const eraView = (era: string | null) => (!era ? 'all' : era === 'van-lang' || era === 'au-lac' ? 'north' : periodBySlug[era]?.view || 'all');
    // Ranh giới phía nam qua các mốc mở đất: đường đứt nét vẽ theo thời kỳ đang xem
    let frontG: THREE.Group | null = null, frontFor: string | null = '-', frontT = 0;
    const showFrontier = (era: string | null) => {
      if (frontG) { scene.remove(frontG); frontG.traverse((o) => { const m = o as THREE.Mesh; m.geometry?.dispose?.(); const mt = m.material as THREE.Material & { map?: THREE.Texture }; mt?.map?.dispose?.(); mt?.dispose?.(); }); frontG = null; }
      const years = era ? FRONTIER_BY_ERA[era] : null;
      if (!years) return;
      frontG = new THREE.Group(); frontT = 0;
      years.forEach((y, i) => {
        const f = FRONTIERS.find((x) => x.year === y)!;
        const last = i === years.length - 1;
        const pts: THREE.Vector3[] = [];
        for (let k = 0; k <= 40; k++) { const lon = f.a[0] + (f.b[0] - f.a[0]) * (k / 40), lat = f.a[1] + (f.b[1] - f.a[1]) * (k / 40); pts.push(new THREE.Vector3(X(lon), 0.06 + hAt(lon, lat) * EX, Z(lat))); }
        const fm = new THREE.ShaderMaterial({
          uniforms: { uC: { value: new THREE.Color(last ? '#fff0c8' : '#c9b88f') }, opacity: { value: 0 } }, transparent: true, depthWrite: false,
          vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
          fragmentShader: 'uniform vec3 uC; uniform float opacity; varying vec2 vUv; void main(){ if (fract(vUv.x * 26.0) > 0.6) discard; gl_FragColor = vec4(uC, opacity); }',
        });
        const line = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 60, last ? 0.045 : 0.026, 5, false), fm);
        line.renderOrder = 4; line.userData.max = last ? 0.95 : 0.45; frontG!.add(line);
        const sp = label(f.name[lang], last ? '#fff0c8' : '#c9b88f', 30, 700, 1);
        sp.position.set(X(f.b[0]) + 0.15, 0.25, Z(f.b[1])); sp.center.set(0, 0.5); sp.scale.multiplyScalar(last ? 1.3 : 1);
        sp.material.opacity = 0; sp.userData.max = last ? 0.95 : 0.45; sp.renderOrder = 4; frontG!.add(sp);
      });
      scene.add(frontG);
    };
    let battleFor: string | null = '-', battleKey = -1;
    const view = () => {
      const s = live.current;
      if (s.focus !== battleFor) { battleFor = s.focus; showBattle(s.focus); }
      if (s.era !== frontFor) { frontFor = s.era; showFrontier(s.era); }
      const vw = eraView(s.era), vc = CENTER[vw];
      const portrait = aspect < 0.9;
      const pin = s.focus ? pins.find((x) => x.slug === s.focus) : null;
      if (s.split) {
        // Khung bản đồ riêng: luôn đặt mục tiêu vào giữa khung, không chừa chỗ cho thẻ
        const k = Math.max(1, 1.25 / aspect) * (vw === 'sea' ? 1.9 : 1);
        if (pin && battleBox) {
          const kb = k * battleBox.k * 0.8;
          want.t.set(battleBox.cx, 0, battleBox.cz - 0.6 * kb);
          want.p.set(want.t.x + 1.0 * kb, 5.2 * kb, want.t.z + 6.2 * kb);
        } else if (pin) {
          want.t.copy(pin.pos).setY(0);
          want.t.z -= 1.0; // đẩy điểm đang xem xuống dưới thanh tiêu đề
          want.p.set(want.t.x + 1.2 * k, 5.4 * k, want.t.z + 6.4 * k);
        } else if (vc) {
          want.t.set(X(vc[0]), 0, Z(vc[1]) - 0.6);
          want.p.set(want.t.x + 1.2 * k, 7.5 * k, want.t.z + 8 * k);
        } else {
          want.t.set(1.4, 0, -1.9);
          want.p.set(want.t.x + 1.2 * k, 20 * k, want.t.z + 14 * k);
        }
        return `${s.focus}|${s.era}|split|${Math.round(aspect * 10)}|${battleKey}`;
      }
      if (pin && battleBox) {
        // Đang xem một trận đánh: lùi máy quay để thấy trọn sơ đồ hành quân
        const k = (portrait ? 1.5 : 1) * battleBox.k;
        want.t.set(battleBox.cx, 0, battleBox.cz);
        if (s.sheet) portrait ? (want.t.z -= 1.2 * k) : (want.t.x -= 2.4 * k);
        want.p.set(want.t.x + 1.0 * k, 5.6 * k, want.t.z + 6.2 * k);
      } else if (pin) {
        const k = portrait ? 1.15 : 1;
        want.t.copy(pin.pos).setY(0);
        if (s.sheet) portrait ? (want.t.z -= 1.2) : (want.t.x -= 2.6);
        want.p.set(want.t.x + 1.4 * k, 6.2 * k, want.t.z + 7.4 * k);
      } else if (vc) {
        const k = (portrait ? 1.5 : 1) * (vw === 'sea' ? 1.8 : 1);
        want.t.set(X(vc[0]) + (portrait ? 0 : aspect > 1.35 ? -2.6 : -1), 0, Z(vc[1]) + 0.4);
        want.p.set(want.t.x + 1.2 * k, 8.5 * k, want.t.z + 9 * k);
      } else {
        const k = portrait ? 2.2 : aspect < 1.35 ? 1.3 : 1.0;
        want.t.set(portrait ? 2.2 : aspect < 1.35 ? -0.5 : -3.4, 0, portrait ? 0.4 : 1.2);
        want.p.set(want.t.x + 1.2 * k, 16 * k, want.t.z + 15.5 * k);
      }
      return `${s.focus}|${s.era}|${s.sheet}|${portrait}|${battleKey}`;
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
      const s = live.current;
      // Chọn ghim có cột sáng gần điểm bấm nhất trên màn hình (không dùng tia chiếu vì các cột đứng sát nhau che lẫn nhau)
      const px = ev.clientX - r.left, py = ev.clientY - r.top;
      const toScreen = (v: THREE.Vector3) => { const q = v.clone().project(camera); return { x: (q.x * 0.5 + 0.5) * r.width, y: (-q.y * 0.5 + 0.5) * r.height, ok: q.z < 1 }; };
      let best: Pin | null = null, bd = 30;
      pins.forEach((p) => {
        if (s.era && p.period !== s.era) return;
        const a0 = toScreen(p.pos), b0 = toScreen(p.pos.clone().setY(p.pos.y + 1.5 * p.group.scale.y));
        if (!a0.ok || !b0.ok) return;
        const dx = b0.x - a0.x, dy = b0.y - a0.y, len = dx * dx + dy * dy || 1;
        const k = Math.max(0, Math.min(1, ((px - a0.x) * dx + (py - a0.y) * dy) / len));
        const d = Math.hypot(px - (a0.x + dx * k), py - (a0.y + dy * k));
        if (d < bd) { bd = d; best = p; }
      });
      if (best) s.onPick((best as Pin).slug);
    };
    renderer.domElement.addEventListener('pointerdown', onDown);
    renderer.domElement.addEventListener('pointerup', onUp);

    const cBg = new THREE.Color(THEMES.intro.bg), cGrid = new THREE.Color(THEMES.intro.grid), tmp = new THREE.Color();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    const slow: number[] = []; let lastTune = 0, quality = 2;
    const tick = (ms: number) => {
      const t = ms / 1000;
      const s = live.current;
      const raw = lastMs ? ms - lastMs : 16;
      const dt = Math.min(0.05, raw / 1000);
      lastMs = ms;
      // Tự hạ chất lượng trên máy yếu: đo thời gian mỗi khung hình, nếu chậm kéo dài thì giảm độ phân giải, rồi tắt hiệu ứng phát sáng
      if (raw < 250) { slow.push(raw); if (slow.length > 90) slow.shift(); }
      if (slow.length === 90 && ms - lastTune > 3000) {
        const med = [...slow].sort((a, b) => a - b)[45];
        if (med > 24 && quality > 0) {
          quality--; lastTune = ms; slow.length = 0;
          if (quality === 1) { renderer.setPixelRatio(1); composer.setPixelRatio(1); renderer.setSize(el.clientWidth, el.clientHeight); composer.setSize(el.clientWidth, el.clientHeight); }
          else bloom.enabled = false;
          el.dataset.q = String(quality);
        }
      }
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
      if (battleG) {
        const want = Math.min(bSteps.length - 1, Math.max(0, live.current.bstep));
        if (want !== bCur) { bCur = want; bT = 0; frameStep(bCur); battleKey = bCur; }
        bT += reduce ? 10 : dt;
        const pp = Math.min(1, bT / 2.8), ease = 1 - Math.pow(1 - pp, 2);
        bSteps.forEach((st, i) => {
          st.units.forEach((u) => {
            const um = u.tube.material as THREE.ShaderMaterial;
            um.uniforms.uT.value = t;
            u.tube.visible = i <= bCur;
            um.uniforms.uP.value = i < bCur ? 1 : i === bCur ? ease : 0;
            um.uniforms.uO.value = i < bCur ? 0.35 : 1;
            // Quân cờ chỉ hiện ở bước đang xem; bên thua chìm xuống và mờ dần ở cuối đường
            u.tok.visible = i === bCur;
            if (i === bCur) {
              const at = Math.min(0.999, Math.max(0.001, ease));
              u.tok.position.copy(u.curve.getPointAt(at));
              const tg = u.curve.getTangentAt(at); tg.y = 0;
              if (tg.lengthSq() > 1e-6) u.tok.rotation.y = Math.atan2(-tg.z, tg.x);
              const sink = u.lose ? Math.min(1, Math.max(0, (bT - 2.8) / 1.4)) : 0;
              u.tok.position.y -= sink * 0.12 * bSize;
              u.tok.children.forEach((c) => { ((c as THREE.Mesh).material as THREE.MeshBasicMaterial).opacity = 1 - sink; });
              if (!u.lose) u.tok.position.y += Math.sin(t * 6) * 0.004 * bSize;
            }
          });
          st.flashes.forEach((f, j) => {
            f.visible = i === bCur && pp > 0.7;
            if (f.visible) { const k = (t * 1.6 + j * 0.37) % 1; const sc = (0.25 + k * 0.55) * (battleBox ? battleBox.k : bSize); f.scale.set(sc, sc, 1); f.material.opacity = 0.75 * (1 - k) * Math.min(1, (pp - 0.7) * 5); }
          });
        });
        if (bStakes) {
          bStakes.visible = bCur >= bStakeFrom;
          const tideUp = bSteps[bCur]?.tide !== 'low';
          bStakes.scale.y += ((tideUp ? 0.12 : 1) - bStakes.scale.y) * Math.min(1, dt * 2);
        }
        // Nhãn địa danh và quân cờ giữ cỡ nhìn được ổn định theo mức thu phóng của bước đang xem
        const kz = battleBox ? battleBox.k : 1;
        bMarks.forEach((m) => { m.material.opacity += (1 - m.material.opacity) * 0.08; m.scale.copy(m.userData.base).multiplyScalar(0.62 * kz); m.position.y = m.userData.gy + 0.1 + 0.2 * kz; });
        bSteps.forEach((st) => st.units.forEach((u) => u.tok.scale.setScalar(3.4 * kz)));
      }
      if (frontG) {
        frontT += dt;
        frontG.children.forEach((o) => {
          const want = battleG ? 0 : (o.userData.max as number) * Math.min(1, frontT * 1.5), a = Math.min(1, dt * 4);
          const sm = (o as THREE.Mesh).material as THREE.ShaderMaterial & { opacity: number };
          if (sm.uniforms) sm.uniforms.opacity.value += (want - sm.uniforms.opacity.value) * a; else sm.opacity += (want - sm.opacity) * a;
        });
      }
      arcT += dt;
      arcGeo.setDrawRange(0, Math.max(2, Math.round(Math.min(1, arcT / 1.1) * ARC)));
      arcMat.opacity = arcT > 8 ? 0 : arcT < 1.1 ? 0.95 : Math.max(0.3, 0.95 - (arcT - 1.1) * 0.4);
      controls.update();

      // Thời kỳ viết sau chưa có bảng màu riêng thì suy ra từ màu của thời kỳ đó
      let th = THEMES[s.era || 'intro'];
      if (!th) {
        const pc = new THREE.Color(periodBySlug[s.era!].color);
        th = THEMES[s.era!] = {
          bg: '#' + pc.clone().multiplyScalar(0.07).getHexString(),
          grid: '#' + pc.clone().multiplyScalar(0.36).getHexString(),
          land: '#' + pc.clone().multiplyScalar(0.34).lerp(new THREE.Color(0x6b5a3a), 0.35).getHexString(),
        };
      }
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
      discMat.opacity += ((fp && !battleG ? 0.6 : 0) - discMat.opacity) * 0.07;
      const ds = 1.5 + discMat.opacity * 1.8;
      disc.scale.set(ds, ds, 1);
      if (!reduce) disc.rotation.z += dt * 0.12;
      tU.uFocus.value.set(fp ? fp.pos.x : 0, fp ? fp.pos.z : 0, tU.uFocus.value.z + ((fp && !battleG ? 1 : 0) - tU.uFocus.value.z) * 0.08);
      nbEdge.color.copy(cGrid);
      const three = !s.era || s.era === 'kim-khi';
      const regs = s.era ? periodBySlug[s.era]?.regions : undefined;
      zones.forEach((z) => {
        const reg = regs ? regs[z.id === 'dongson' ? 'north' : z.id === 'sahuynh' ? 'central' : 'south'] : undefined;
        const lit = three || !!reg || ((s.era === 'van-lang' || s.era === 'au-lac') && z.id === 'dongson');
        if (three) tmp.copy(z.full);
        else if (lit) tmp.set(periodBySlug[s.era!].color);
        else tmp.set(th.land);
        z.cur.lerp(tmp, 0.08);
        z.u.copy(z.cur);
        tU.uLit.value.setComponent(z.zi, tU.uLit.value.getComponent(z.zi) + ((lit ? 1 : 0.5) - tU.uLit.value.getComponent(z.zi)) * 0.08);
        z.edge.color.copy(z.cur);
        z.edge.opacity = lit ? 1 : 0.55;
        const so = battleG ? 0 : three ? (s.focus ? 0.22 : 1) : 0; // khi đang xem một di tích thì tên vùng lùi xuống, nhường chỗ cho tên di tích
        z.sp.material.opacity += (so - z.sp.material.opacity) * 0.1;
        // Tên vùng riêng của thời kỳ (ví dụ Giao Chỉ, Champa, Phù Nam), tạo khi cần lần đầu
        const want2 = !three && reg ? reg[lang].toUpperCase() : '';
        if (want2 && !z.alt.has(want2)) {
          const sp2 = label(want2, '#f1e6cf', want2.length > 16 ? 24 : want2.length > 10 ? 30 : 36, 800, 3); // tên vùng dài thì chữ nhỏ lại để không lấn bảng chỉ số
          const at2 = z.id === 'dongson' ? [104.0, 20.5] : z.id === 'sahuynh' ? [107.9, 14.4] : [105.5, 9.5];
          sp2.position.set(X(at2[0]), 1.1, Z(at2[1]));
          sp2.material.opacity = 0;
          scene.add(sp2);
          z.alt.set(want2, sp2);
        }
        z.alt.forEach((sp2, key) => { sp2.material.opacity += ((key === want2 && !battleG ? (s.focus ? 0.12 : 0.95) : 0) - sp2.material.opacity) * 0.1; });
      });

      haloMat.color.lerp(tmp.set(s.era ? periodBySlug[s.era].color : '#e6b450'), 0.05);
      pins.forEach((p) => {
        const inEra = !s.era || p.period === s.era;
        const isFocus = p.slug === s.focus;
        // Nhãn tên: mục đang xem hiện rõ, các mục cùng thời kỳ hiện khi đang xem tổng quan thời kỳ
        // Khi tên ba vùng văn hóa đang hiện (màn mở đầu và Thời kim khí) thì không hiện thêm tên di tích, tránh lặp chữ như "Sa Huỳnh" hai lần.
        // Các điểm nằm sát nhau chỉ hiện một nhãn để không chồng chữ.
        const to = isFocus ? 1 : s.era && !three && inEra && !s.focus && p.solo ? 0.8 : 0;
        p.tag.material.opacity += (to - p.tag.material.opacity) * 0.12;
        // Nhãn giữ cỡ chữ dễ đọc dù máy quay ở gần hay xa
        const gy = p.group.scale.y, tk = (isFocus ? 1 : 0.8) * Math.min(1.7, Math.max(1, camera.position.distanceTo(p.pos) / 9));
        p.tag.position.y = (isFocus ? 1.3 : p.tagY) / gy; // nhãn nằm ngay trên cột sáng của chính nó
        p.tag.scale.set(p.tag.userData.sx * tk, (p.tag.userData.sy * tk) / gy, 1);
        const o = inEra && (!battleG || isFocus) ? 1 : 0; // ghim của thời kỳ khác ẩn hẳn để bản đồ không rối; khi xem sơ đồ trận đánh chỉ giữ ghim đang xem
        p.group.visible = battleG ? false : p.head.opacity > 0.02 || inEra;
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
      // Giải phóng hình khối, vật liệu và ảnh vân để bộ nhớ không phình lên mỗi lần đổi ngôn ngữ
      scene.traverse((o) => {
        const m = o as THREE.Mesh;
        m.geometry?.dispose?.();
        const mats = Array.isArray(m.material) ? m.material : m.material ? [m.material] : [];
        mats.forEach((mt) => { (mt as THREE.MeshBasicMaterial).map?.dispose?.(); mt.dispose?.(); });
      });
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
