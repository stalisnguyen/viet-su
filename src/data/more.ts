import type { Chapter } from './types';

// Mỗi thời kỳ viết sau đợt đầu nằm trong một file riêng ở thư mục chapters và được gom lại ở đây theo thứ tự.
const mods = import.meta.glob('./chapters/*.ts', { eager: true }) as Record<string, { default: Chapter }>;
export const chapters: Chapter[] = Object.values(mods).map((m) => m.default).sort((a, b) => a.order - b.order);
