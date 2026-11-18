// Kiểm tra mọi đường dẫn nguồn trong src/data: in ra những link không trả về 200 hoặc trang wiki không tồn tại.
// Chạy: node scripts/check-links.mjs [file-kết-quả.json]
import fs from 'node:fs';
import path from 'node:path';

const files = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : /\.tsx?$/.test(f) && files.push(p); } })('src/data');
const where = new Map();
for (const f of files) for (const m of fs.readFileSync(f, 'utf8').matchAll(/['"`](https?:\/\/[^'"`\s]+)['"`]/g)) { if (!where.has(m[1])) where.set(m[1], f); }
const urls = [...where.keys()].filter((u) => !/\$\{/.test(u));
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36';
async function one(u) {
  for (let t = 0; t < 2; t++) {
    try {
      const r = await fetch(u, { redirect: 'follow', headers: { 'user-agent': UA, 'accept-language': 'vi,en;q=0.8', accept: 'text/html,application/pdf,*/*' }, signal: AbortSignal.timeout(25000) });
      let note = '';
      if (r.ok && /wiki(pedia|source)\.org/.test(u)) { const s = await r.text(); if (/noarticletext|Trang này hiện chưa có|does not have an article|Wikisource does not have/.test(s)) note = 'missing'; } else await r.body?.cancel();
      return { u, s: r.status, f: r.url !== u ? r.url : '', note, file: where.get(u) };
    } catch (e) { if (t) return { u, s: 0, note: String(e.cause?.code || e.name), file: where.get(u) }; }
  }
}
const out = [];
let i = 0;
await Promise.all(Array.from({ length: 10 }, async () => { while (i < urls.length) out.push(await one(urls[i++])); }));
// 401, 403, 429 thường là trang chặn máy chủ tự động chứ không phải link hỏng; ghi riêng
const bad = out.filter((x) => x.s !== 200 || x.note);
const real = bad.filter((x) => x.note || ![202, 401, 403, 429].includes(x.s));
for (const x of real) console.log([x.s, x.note, x.file.replace('src/data/', ''), x.u].join(' | '));
fs.writeFileSync(process.argv[2] || 'link-report.json', JSON.stringify(bad, null, 1));
console.log('Tổng', out.length, 'link; nghi hỏng', real.length, '; bị chặn máy tự động', bad.length - real.length);
