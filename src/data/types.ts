export type L = { vi: string; en: string };
export type Lang = 'vi' | 'en';
export type Evidence = 'arch' | 'chron' | 'legend';
export type ModelKind = 'drum' | 'coloa' | 'biface' | 'jar' | 'cave' | 'village' | 'paddy' | 'bell' | 'situla' | 'chamtower' | 'pillar' | 'onepillar' | 'khuevan' | 'steles' | 'urn';
export type EntryKind = 'site' | 'culture' | 'artifact' | 'figure' | 'legend' | 'event';

export interface Period {
  slug: string;
  name: L;
  range: L;
  color: string;
  summary: L;
  detail: L[];
  scholarly: L[];
  model?: ModelKind;
  sources: string[];
  // Các trường dưới đây dùng cho những thời kỳ viết sau đợt đầu
  start?: L; // mốc bắt đầu, viết ngắn, hiện trên dải thời kỳ (ví dụ "179 TCN" / "179 BCE")
  question?: L; // một câu hỏi lớn mở đầu thời kỳ
  view?: 'all' | 'north' | 'central' | 'south' | 'sea'; // bản đồ nhìn vào đâu khi mở thời kỳ (sea: Biển Đông và hai quần đảo)
  theme?: boolean; // chuyên đề xuyên suốt nhiều thời kỳ, không tính vào 23 thời kỳ
  // Vùng nào sáng lên trong thời kỳ này và mang tên gì. Ba vùng là ước lượng thô: bắc (từ Hoành Sơn trở ra),
  // trung (Hoành Sơn đến khoảng Phan Rang), nam (Nam Bộ và cực Nam Trung Bộ). Không phải biên giới chính xác.
  regions?: { north?: L; central?: L; south?: L };
}

/** Một thời kỳ trọn vẹn: nội dung, nguồn, câu hỏi và các dòng "cùng lúc đó trên thế giới". */
export interface Chapter {
  order: number; // vị trí trong 23 thời kỳ (5 - 23)
  period: Period;
  entries: Entry[];
  sources: Source[];
  hooks: Record<string, L>; // một câu mời đọc cho mỗi mục, khóa là slug của mục
  world: { text: L; source: string }[];
  quiz: { q: L; options: L[]; answer: number; why: L }[];
  badge: L;
  photos?: Record<string, { file: string; by: string; license: string; caption: L; tall?: boolean }>;
}

export interface Entry {
  slug: string;
  period: string;
  kind: EntryKind;
  name: L;
  date: L;
  sort: number; // số năm trước hiện tại, dùng để sắp xếp
  place?: L;
  coord?: [number, number]; // [kinh độ, vĩ độ]
  evidence: Evidence[];
  summary: L;
  detail: L[];
  scholarly: L[];
  model?: ModelKind;
  sources: string[];
}

export interface Source {
  id: string;
  cite: string;
  url?: string;
  kind: 'museum' | 'paper' | 'reference' | 'news' | 'primary';
}

export const l = (vi: string, en: string): L => ({ vi, en });
