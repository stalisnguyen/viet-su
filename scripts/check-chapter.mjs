// Kiểm tra một file thời kỳ trong src/data/chapters trước khi đưa vào trang.
// Cách dùng: node scripts/check-chapter.mjs src/data/chapters/05-nam-viet.ts
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { stripTypeScriptTypes } from 'node:module';

const file = process.argv[2];
if (!file) { console.error('Thiếu đường dẫn file'); process.exit(2); }
const src = fs.readFileSync(file, 'utf8');
let js = stripTypeScriptTypes(src);
js = js.replace(/import\s*\{[^}]*\}\s*from\s*['"]\.\.\/types['"];?/g, 'const l = (vi, en) => ({ vi, en });');
if (/\bimport\b[^;]*from/.test(js)) { console.error('LỖI: chỉ được import từ ../types'); process.exit(1); }
const tmp = path.join(os.tmpdir(), 'chapter-' + process.pid + '.mjs');
fs.writeFileSync(tmp, js);
const c = (await import(pathToFileURL(tmp).href)).default;
fs.unlinkSync(tmp);

const errs = [], warns = [];
const E = (m) => errs.push(m), W = (m) => warns.push(m);
const isL = (x) => x && typeof x.vi === 'string' && typeof x.en === 'string' && x.vi.trim() && x.en.trim();
const bad = /[—→←↔·]/; // gạch dài, mũi tên, chấm giữa
const scan = (x, where) => {
  if (typeof x === 'string') { if (bad.test(x)) E(`${where}: có ký tự cấm (gạch dài, mũi tên hoặc chấm giữa)`); }
  else if (Array.isArray(x)) x.forEach((y, i) => scan(y, `${where}[${i}]`));
  else if (x && typeof x === 'object') Object.entries(x).forEach(([k, y]) => scan(y, `${where}.${k}`));
};
scan(c, 'chapter');
if (!c || typeof c.order !== 'number' || c.order < 5 || c.order > 27) E('order phải từ 5 đến 27 (24 trở đi là chuyên đề)');
const p = c.period || {};
const slugRe = /^[a-z0-9]+(-[a-z0-9]+)*$/;
if (!slugRe.test(p.slug || '')) E('period.slug sai dạng');
for (const k of ['name', 'range', 'summary', 'start', 'question']) if (!isL(p[k])) E(`period.${k} thiếu vi hoặc en`);
if (!/^#[0-9a-f]{6}$/i.test(p.color || '')) E('period.color phải là mã #rrggbb');
if (!['all', 'north', 'central', 'south', 'sea'].includes(p.view)) E('period.view phải là all, north, central, south hoặc sea');
if (!Array.isArray(p.detail) || p.detail.length < 2 || !p.detail.every(isL)) E('period.detail cần ít nhất 2 đoạn song ngữ');
if (!Array.isArray(p.scholarly) || p.scholarly.length < 2 || !p.scholarly.every(isL)) E('period.scholarly cần ít nhất 2 đoạn song ngữ');
if (p.regions) for (const [k, v] of Object.entries(p.regions)) { if (!['north', 'central', 'south'].includes(k) || !isL(v)) E(`period.regions.${k} sai`); }
const src2 = new Map((c.sources || []).map((s) => [s.id, s]));
if (src2.size !== (c.sources || []).length) E('sources có id trùng nhau');
for (const s of c.sources || []) {
  if (!slugRe.test(s.id || '')) E(`source ${s.id}: id sai dạng`);
  if (!s.cite || s.cite.length < 20) E(`source ${s.id}: cite quá ngắn`);
  if (!['museum', 'paper', 'reference', 'news', 'primary'].includes(s.kind)) E(`source ${s.id}: kind sai`);
  if (s.kind !== 'primary' && !/^https:\/\//.test(s.url || '')) E(`source ${s.id}: thiếu url https`);
}
const need = (ids, where, min) => {
  if (!Array.isArray(ids) || ids.length < min) E(`${where}: cần ít nhất ${min} nguồn`);
  for (const id of ids || []) if (!src2.has(id)) E(`${where}: nguồn "${id}" không có trong sources của file`);
};
need(p.sources, 'period.sources', 3);
const es = c.entries || [];
if (es.length < 4 || es.length > 14) E(`cần 4 đến 14 mục, đang có ${es.length}`);
const seen = new Set();
for (const e of es) {
  const w = `entry ${e.slug}`;
  if (!slugRe.test(e.slug || '') || seen.has(e.slug)) E(`${w}: slug sai hoặc trùng`);
  seen.add(e.slug);
  if (e.period !== p.slug) E(`${w}: period phải là "${p.slug}"`);
  if (!['site', 'culture', 'artifact', 'figure', 'legend', 'event'].includes(e.kind)) E(`${w}: kind sai`);
  for (const k of ['name', 'date', 'summary']) if (!isL(e[k])) E(`${w}: ${k} thiếu vi hoặc en`);
  if (e.place && !isL(e.place)) E(`${w}: place sai`);
  if (typeof e.sort !== 'number') E(`${w}: sort phải là số (số năm trước hiện tại)`);
  if (e.coord) { const [lon, lat] = e.coord; const sea = p.view === 'sea'; if (!(lon > 101.5 && lon < (sea ? 117.5 : 112.4) && lat > (sea ? 6 : 7.6) && lat < 23.9)) E(`${w}: coord [kinh độ, vĩ độ] nằm ngoài khung bản đồ`); }
  else W(`${w}: không có coord nên không hiện trên bản đồ`);
  if (!Array.isArray(e.evidence) || !e.evidence.length || !e.evidence.every((x) => ['arch', 'chron', 'legend'].includes(x))) E(`${w}: evidence sai`);
  if (!Array.isArray(e.detail) || e.detail.length < 2 || !e.detail.every(isL)) E(`${w}: detail cần ít nhất 2 đoạn`);
  if (!Array.isArray(e.scholarly) || e.scholarly.length < 2 || !e.scholarly.every(isL)) E(`${w}: scholarly cần ít nhất 2 đoạn`);
  need(e.sources, `${w}.sources`, 3);
  if (!isL((c.hooks || {})[e.slug])) E(`${w}: thiếu hooks["${e.slug}"]`);
  const n = e.summary.vi.split(/\s+/).length;
  if (n > 75) W(`${w}: summary tiếng Việt dài ${n} chữ, nên dưới 70`);
}
for (const k of Object.keys(c.hooks || {})) if (!seen.has(k)) E(`hooks["${k}"] không khớp mục nào`);
if (!Array.isArray(c.world) || c.world.length < 2) E('world cần ít nhất 2 dòng');
for (const [i, w] of (c.world || []).entries()) { if (!isL(w.text)) E(`world[${i}].text sai`); if (!src2.has(w.source)) E(`world[${i}].source không có trong sources`); }
if (!Array.isArray(c.quiz) || c.quiz.length !== 3) E('quiz cần đúng 3 câu');
for (const [i, q] of (c.quiz || []).entries()) {
  if (!isL(q.q) || !isL(q.why)) E(`quiz[${i}] thiếu q hoặc why`);
  if (!Array.isArray(q.options) || q.options.length !== 3 || !q.options.every(isL)) E(`quiz[${i}] cần đúng 3 lựa chọn`);
  if (![0, 1, 2].includes(q.answer)) E(`quiz[${i}].answer phải là 0, 1 hoặc 2`);
}
if (!isL(c.badge)) E('badge thiếu vi hoặc en');
const used = new Set([...(p.sources || []), ...es.flatMap((e) => e.sources || []), ...(c.world || []).map((w) => w.source)]);
for (const id of src2.keys()) if (!used.has(id)) W(`source ${id} không được dùng ở đâu`);
warns.forEach((m) => console.log('CẢNH BÁO: ' + m));
errs.forEach((m) => console.log('LỖI: ' + m));
console.log(errs.length ? `KHÔNG ĐẠT: ${errs.length} lỗi` : `ĐẠT: ${es.length} mục, ${src2.size} nguồn, ${warns.length} cảnh báo`);
process.exit(errs.length ? 1 : 0);
