// Chạy trong bước build trên Vercel (có sẵn BLOB_READ_WRITE_TOKEN của store viet-su-audio).
// Tải các gói giọng kể đã tạo sẵn (tar) từ AUDIO_SRC rồi đưa từng file lên Vercel Blob ở audio/<id>.mp3.
// File đã có trên Blob thì bỏ qua. Không có AUDIO_SRC hoặc token thì không làm gì.
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { head, put } from '@vercel/blob';

const src = (process.env.AUDIO_SRC || '').split(/\s+/).filter((u) => u.startsWith('http'));
if (!src.length || !process.env.BLOB_READ_WRITE_TOKEN) { console.log('sync-audio: bỏ qua'); process.exit(0); }
const dir = fs.mkdtempSync('/tmp/audio-');
for (const u of src) {
  let r;
  try { r = await fetch(u, { signal: AbortSignal.timeout(60000) }); } catch (e) { console.log('sync-audio: không tải được', u, String(e)); continue; }
  if (!r.ok) { console.log('sync-audio: không tải được', u, r.status); continue; }
  fs.writeFileSync(path.join(dir, 'a.tar'), Buffer.from(await r.arrayBuffer()));
  execSync(`tar xf a.tar`, { cwd: dir });
}
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mp3'));
let up = 0;
for (const f of files) {
  const key = 'audio/' + f;
  try { await head(key); continue; } catch { /* chưa có */ }
  await put(key, fs.readFileSync(path.join(dir, f)), { access: 'public', addRandomSuffix: false, contentType: 'audio/mpeg', cacheControlMaxAge: 31536000 });
  up++;
}
console.log(`sync-audio: ${files.length} file, tải lên mới ${up}`);
