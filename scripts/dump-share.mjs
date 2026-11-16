// In danh sách trang chia sẻ ra JSON (dùng cho script tạo ảnh)
import { createServer } from 'vite';
const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
const { shareItems } = await vite.ssrLoadModule('/scripts/share-data.ts');
const items = shareItems();
await vite.close();
const fs = await import('node:fs');
fs.writeFileSync(process.argv[2] || 'share.json', JSON.stringify(items, null, 1));
console.log(items.length, 'trang');
