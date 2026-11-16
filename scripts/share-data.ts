// Dữ liệu cho các trang chia sẻ (/e/<mục>/, /p/<thời kỳ>/), sitemap và ảnh xem trước. Chỉ dùng lúc build.
import { periods } from '../src/data/periods';
import { entries } from '../src/data/entries';
import { hooks } from '../src/data/hooks';

export interface ShareItem {
  kind: 'e' | 'p';
  slug: string;
  id: string; // id của phần trên trang (#e-..., #p-...)
  title: string;
  kicker: string; // dòng nhỏ phía trên tên: thời kỳ, niên đại
  k1: string; // tên thời kỳ (hoặc chữ Thời kỳ, Chuyên đề)
  k2: string; // niên đại
  line: string; // câu mời đọc
  text: string[]; // nội dung tĩnh cho máy tìm kiếm
  color: string;
}

export function shareItems(): ShareItem[] {
  const out: ShareItem[] = [];
  for (const p of periods) {
    out.push({
      kind: 'p', slug: p.slug, id: 'p-' + p.slug, title: p.name.vi,
      kicker: (p.theme ? 'Chuyên đề' : 'Thời kỳ') + ' - ' + p.range.vi, k1: p.theme ? 'Chuyên đề' : 'Thời kỳ', k2: p.range.vi,
      line: p.question?.vi || p.summary.vi,
      text: [p.summary.vi, ...p.detail.map((d) => d.vi)],
      color: p.color,
    });
    const es = entries.filter((e) => e.period === p.slug).sort((a, b) => b.sort - a.sort);
    for (const e of es) {
      out.push({
        kind: 'e', slug: e.slug, id: 'e-' + e.slug, title: e.name.vi,
        kicker: p.name.vi + ' - ' + e.date.vi, k1: p.name.vi, k2: e.date.vi,
        line: hooks[e.slug]?.vi || e.summary.vi,
        text: [e.summary.vi, ...e.detail.map((d) => d.vi)],
        color: p.color,
      });
    }
  }
  return out;
}
