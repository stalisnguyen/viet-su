export type L = { vi: string; en: string };
export type Lang = 'vi' | 'en';
export type Evidence = 'arch' | 'chron' | 'legend';
export type ModelKind = 'drum' | 'coloa' | 'biface' | 'jar' | 'cave' | 'village' | 'paddy';
export type EntryKind = 'site' | 'culture' | 'artifact' | 'figure' | 'legend';

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
