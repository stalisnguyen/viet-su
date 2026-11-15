// Tạo src/data/geo.json: đường bờ Việt Nam, các vùng văn hóa (cắt xấp xỉ) và nước láng giềng.
import fs from 'node:fs';
import { feature } from 'topojson-client';

const load = (f) => JSON.parse(fs.readFileSync(new URL('../node_modules/world-atlas/' + f, import.meta.url)));
const outer = (g) => (g.type === 'Polygon' ? [g.coordinates[0]] : g.coordinates.map((p) => p[0]));
const open = (r) => (r.length > 1 && r[0][0] === r[r.length - 1][0] && r[0][1] === r[r.length - 1][1] ? r.slice(0, -1) : r);

function area(r) {
  let a = 0;
  for (let i = 0; i < r.length; i++) {
    const [x1, y1] = r[i], [x2, y2] = r[(i + 1) % r.length];
    a += x1 * y2 - x2 * y1;
  }
  return Math.abs(a / 2);
}
function simplify(r, eps) {
  const out = [r[0]];
  for (const p of r) {
    const q = out[out.length - 1];
    if (Math.hypot(p[0] - q[0], p[1] - q[1]) > eps) out.push(p);
  }
  return out;
}
function clipEdge(pts, inside, inter) {
  const out = [];
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i], b = pts[(i + 1) % pts.length];
    const ia = inside(a), ib = inside(b);
    if (ia && ib) out.push(b);
    else if (ia && !ib) out.push(inter(a, b));
    else if (!ia && ib) { out.push(inter(a, b)); out.push(b); }
  }
  return out;
}
function clipRect(ring, [x0, y0, x1, y1]) {
  const ix = (x) => (a, b) => [x, a[1] + ((b[1] - a[1]) * (x - a[0])) / (b[0] - a[0])];
  const iy = (y) => (a, b) => [a[0] + ((b[0] - a[0]) * (y - a[1])) / (b[1] - a[1]), y];
  let r = ring;
  r = clipEdge(r, (p) => p[0] >= x0, ix(x0)); if (r.length < 3) return null;
  r = clipEdge(r, (p) => p[0] <= x1, ix(x1)); if (r.length < 3) return null;
  r = clipEdge(r, (p) => p[1] >= y0, iy(y0)); if (r.length < 3) return null;
  r = clipEdge(r, (p) => p[1] <= y1, iy(y1)); if (r.length < 3) return null;
  return r;
}
const round = (r) => r.map(([x, y]) => [+x.toFixed(3), +y.toFixed(3)]);
const clipAll = (rings, rect, minArea) =>
  rings.map((r) => clipRect(r, rect)).filter((r) => r && area(r) > minArea).map(round);

const w10 = load('countries-10m.json');
const w50 = load('countries-50m.json');
const f10 = feature(w10, w10.objects.countries).features;
const f50 = feature(w50, w50.objects.countries).features;

const vnRings = outer(f10.find((f) => f.id === '704').geometry)
  .map(open).filter((r) => area(r) > 0.002).map((r) => simplify(r, 0.012));

// Ranh giới vùng văn hóa là ước lượng để minh họa, không phải đường biên thật.
const zones = {
  dongson: clipAll(vnRings, [100, 17.6, 115, 25], 0.002),
  sahuynh: [...clipAll(vnRings, [100, 12.4, 115, 17.6], 0.002), ...clipAll(vnRings, [107.55, 7, 115, 12.4], 0.002)],
  dongnai: clipAll(vnRings, [100, 7, 107.55, 12.4], 0.002),
};

const box = [98.5, 5.5, 114.5, 25];
const nb = {};
for (const [id, name] of [['156', 'cn'], ['418', 'la'], ['116', 'kh'], ['764', 'th']]) {
  const g = f50.find((f) => f.id === id).geometry;
  nb[name] = clipAll(outer(g).map(open), box, 0.02);
}

fs.mkdirSync(new URL('../src/data/', import.meta.url), { recursive: true });
fs.writeFileSync(new URL('../src/data/geo.json', import.meta.url), JSON.stringify({ zones, nb }));
console.log('geo.json:', Object.fromEntries(Object.entries(zones).map(([k, v]) => [k, v.length])), Object.fromEntries(Object.entries(nb).map(([k, v]) => [k, v.length])));
