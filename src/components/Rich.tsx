import { useEffect, useRef, useState, type ReactNode } from 'react';
import type { Lang } from '../data/types';
import { GLOSSARY, type Term } from '../data/glossary';

// Bảng tra từ: mỗi ngôn ngữ một biểu thức chính quy, từ dài khớp trước để "Annan Protectorate" không bị cắt thành "Annan"
const build = (lang: Lang) => {
  const map = new Map<string, Term>();
  GLOSSARY.forEach((t) => t[lang].forEach((w) => map.set(w, t)));
  const words = [...map.keys()].sort((a, b) => b.length - a.length).map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  return { map, re: new RegExp(`(?<![\\p{L}\\p{M}])(${words.join('|')})(?![\\p{L}\\p{M}])`, 'gu') };
};
export const newSeen = () => new Set<Term>();
const TABLE = { vi: build('vi'), en: build('en') };

/** Đoạn văn có gạch chân các từ khó. Truyền cùng một `seen` cho mọi đoạn trong một thẻ để mỗi từ chỉ được đánh dấu một lần trong thẻ. */
export function Rich({ text, lang, seen = new Set<Term>() }: { text: string; lang: Lang; seen?: Set<Term> }) {
  const { map, re } = TABLE[lang];
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(re)) {
    const t = map.get(m[0])!;
    if (seen.has(t)) continue;
    seen.add(t);
    out.push(text.slice(last, m.index));
    out.push(<Gloss key={m.index} word={m[0]} def={t.def[lang]} />);
    last = m.index! + m[0].length;
  }
  if (!out.length) return <>{text}</>;
  out.push(text.slice(last));
  return <>{out}</>;
}

function Gloss({ word, def }: { word: string; def: string }) {
  const [open, setOpen] = useState(false);
  const [shift, setShift] = useState(0);
  const [below, setBelow] = useState(false);
  const wrap = useRef<HTMLSpanElement>(null);
  const pop = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!open) return;
    // Giữ khung giải thích nằm trong màn hình
    const r = pop.current?.getBoundingClientRect();
    if (r) { const pad = 10; setShift(r.left < pad ? pad - r.left : r.right > innerWidth - pad ? innerWidth - pad - r.right : 0); }
    const close = (e: Event) => { if (!wrap.current?.contains(e.target as Node)) setOpen(false); };
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    const other = (e: Event) => { if ((e as CustomEvent).detail !== wrap.current) setOpen(false); };
    document.addEventListener('pointerdown', close); document.addEventListener('keydown', key); document.addEventListener('gloss', other);
    window.addEventListener('scroll', () => setOpen(false), { once: true, passive: true });
    return () => { document.removeEventListener('pointerdown', close); document.removeEventListener('keydown', key); document.removeEventListener('gloss', other); };
  }, [open]);
  return (
    <span className="gloss" ref={wrap}>
      <button type="button" className="term" aria-expanded={open} onClick={(e) => {
        e.stopPropagation(); setShift(0);
        // Từ nằm ở nửa trên màn hình thì mở khung xuống dưới, tránh bị bản đồ phía trên che
        const top = wrap.current?.getBoundingClientRect().top ?? 999; setBelow(top < innerHeight * 0.5);
        if (!open) document.dispatchEvent(new CustomEvent('gloss', { detail: wrap.current }));
        setOpen(!open);
      }}>{word}</button>
      {open && <span className={'term-pop' + (below ? ' below' : '')} role="tooltip" ref={pop} style={{ ['--dx' as string]: shift + 'px' }}><b>{word}</b>{def}</span>}
    </span>
  );
}
