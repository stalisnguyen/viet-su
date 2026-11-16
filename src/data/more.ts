import type { Chapter } from './types';

// Mỗi thời kỳ viết sau đợt đầu nằm trong một file riêng ở thư mục chapters và được gom lại ở đây theo thứ tự.
// Chỉ những thời kỳ đã kiểm chéo mới được đưa lên trang; các file nháp vẫn nằm trong thư mục nhưng không hiện.
const LIVE = new Set([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27]);
const mods = import.meta.glob('./chapters/*.ts', { eager: true }) as Record<string, { default: Chapter }>;
export const chapters: Chapter[] = Object.values(mods)
  .map((m) => m.default)
  .filter((c) => LIVE.has(c.order))
  .sort((a, b) => a.order - b.order);
