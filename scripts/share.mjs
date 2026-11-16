// Sau khi build: tạo trang chia sẻ cho từng thời kỳ và từng mục (/p/<slug>/, /e/<slug>/) cùng sitemap.xml.
// Mỗi trang là bản sao của index.html với tiêu đề, mô tả và ảnh xem trước riêng; nội dung tĩnh của mục nằm sẵn trong #root
// để máy tìm kiếm đọc được, rồi ứng dụng thay thế khi chạy. Trước khi ứng dụng tải, địa chỉ được đổi về /#<id>
// nên mọi đường dẫn tương đối vẫn đúng và trang mở thẳng tới phần đó.
import fs from 'node:fs';
import path from 'node:path';
import { createServer } from 'vite';

const SITE = 'https://vietsutoando.com';
const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
const { shareItems } = await vite.ssrLoadModule('/scripts/share-data.ts');
const items = shareItems();
await vite.close();

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const clip = (s, n) => (s.length <= n ? s : s.slice(0, s.lastIndexOf(' ', n - 1)) + '...');
const base = fs.readFileSync('dist/index.html', 'utf8');
const today = new Date().toISOString().slice(0, 10);
const urls = [SITE + '/'];

for (const it of items) {
  const url = `${SITE}/${it.kind}/${it.slug}/`;
  const og = fs.existsSync(`public/og/${it.kind}-${it.slug}.jpg`) ? `${SITE}/og/${it.kind}-${it.slug}.jpg` : `${SITE}/og.jpg`;
  const title = `${it.title} - Việt Sử Toàn Đồ`;
  const desc = clip(it.line === it.text[0] ? it.line : `${it.line} ${it.text[0]}`, 200);
  let html = base
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(desc)}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(title)}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(desc)}`)
    .replace(/(<meta property="og:image" content=")[^"]*/, `$1${og}`)
    .replace(/<meta property="og:type" content="website" \/>/, '<meta property="og:type" content="article" />')
    .replace(/(["'(])\.\/assets\//g, '$1/assets/')
    .replace('<head>', `<head>\n    <script>try{history.replaceState(null,'','/#${it.id}')}catch(e){}</script>\n    <link rel="canonical" href="${url}" />\n    <style>.seo{position:absolute;left:-9999px;width:1px;overflow:hidden}</style>`)
    .replace('<div id="root"></div>', `<div id="root"><article class="seo"><p>${esc(it.kicker)}</p><h1>${esc(it.title)}</h1>${it.text.map((t) => `<p>${esc(t)}</p>`).join('')}<p><a href="/#${it.id}">Xem trên bản đồ</a></p></article></div>`);
  const dir = path.join('dist', it.kind, it.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  urls.push(url);
}

// Trang chủ cũng có canonical
fs.writeFileSync('dist/index.html', base.replace('<head>', `<head>\n    <link rel="canonical" href="${SITE}/" />`));
fs.writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>\n`);
console.log(`Trang chia sẻ: ${items.length}, sitemap: ${urls.length} địa chỉ`);
