import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import Stage, { ZONES } from './components/Stage';
import Model3D from './components/Model3D';
import { entries, entryBySlug } from './data/entries';
import { periodBySlug, periods, upcoming } from './data/periods';
import { sourceById, sources } from './data/sources';
import { hooks } from './data/hooks';
import { badges, quiz, world } from './data/extras';
import { sound } from './sound';
import type { Entry, Evidence, L, Lang, Period } from './data/types';

type Depth = 'quick' | 'full' | 'scholar';
const AUTO_MS = 9000;

const store = {
  get(k: string, d: string) { try { return localStorage.getItem(k) || d; } catch { return d; } },
  set(k: string, v: string) { try { localStorage.setItem(k, v); } catch { /* bỏ qua */ } },
};

const T = {
  quick: { vi: 'Đọc nhanh', en: 'Quick' },
  full: { vi: 'Đầy đủ', en: 'Full' },
  scholar: { vi: 'Học thuật', en: 'Scholarly' },
  detail: { vi: 'Chi tiết', en: 'In detail' },
  scholarH: { vi: 'Góc học thuật', en: 'Scholarly notes' },
  srcH: { vi: 'Nguồn tham khảo', en: 'References' },
  soon: { vi: 'Sắp có', en: 'Coming' },
  open: { vi: 'Mở nguồn', en: 'Open source' },
};
const EV: Record<Evidence, L> = {
  arch: { vi: 'Khảo cổ', en: 'Archaeology' },
  chron: { vi: 'Sử cũ', en: 'Chronicles' },
  legend: { vi: 'Truyền thuyết', en: 'Legend' },
};
const KIND: Record<Entry['kind'], L> = {
  site: { vi: 'Di tích', en: 'Site' },
  culture: { vi: 'Văn hóa khảo cổ', en: 'Culture' },
  artifact: { vi: 'Hiện vật', en: 'Artefact' },
  figure: { vi: 'Nhân vật', en: 'Figure' },
  legend: { vi: 'Truyền thuyết', en: 'Legend' },
};
const START: Record<string, L> = {
  'do-da': { vi: '800.000 năm trước', en: '800,000 years ago' },
  'kim-khi': { vi: '2000 TCN', en: '2000 BCE' },
  'van-lang': { vi: 'Thế kỷ 7 TCN', en: '7th c. BCE' },
  'au-lac': { vi: '257 TCN', en: '257 BCE' },
};

// Thứ tự hành trình: theo thời kỳ, trong mỗi thời kỳ đi từ xưa đến gần
const journey = periods.flatMap((p) => entries.filter((e) => e.period === p.slug).sort((a, b) => b.sort - a.sort));
const pad = (n: number) => String(n).padStart(2, '0');
// Đi tới một phần: gần thì trượt mượt, xa thì nhảy thẳng để không phải chờ trang cuộn qua hàng chục màn hình
const jump = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const far = Math.abs(el.getBoundingClientRect().top) > window.innerHeight * 2.5;
  el.scrollIntoView({ behavior: (far ? 'instant' : 'smooth') as ScrollBehavior, block: 'start' });
};
// Khi thu gọn phần chi tiết, đưa thẻ về lại đầu khung nhìn để người đọc không bị lạc chỗ
const foldTo = (el: HTMLElement | null) => {
  if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'start' });
};
const SPLIT = '(max-width: 899px) and (orientation: portrait)';
function useMedia(q: string) {
  const [m, setM] = useState(() => window.matchMedia(q).matches);
  useEffect(() => {
    const mq = window.matchMedia(q);
    const f = () => setM(mq.matches);
    mq.addEventListener('change', f);
    return () => mq.removeEventListener('change', f);
  }, [q]);
  return m;
}
// Toàn bộ các phần của trang theo đúng thứ tự cuộn, dùng cho nút Trước, Tiếp và mục lục
const STEPS: { id: string; title: L }[] = [
  { id: 'top', title: { vi: 'Mở đầu', en: 'Start' } },
  ...periods.flatMap((p) => [
    { id: 'p-' + p.slug, title: p.name },
    ...journey.filter((e) => e.period === p.slug).map((e) => ({ id: 'e-' + e.slug, title: e.name })),
    { id: 'q-' + p.slug, title: { vi: 'Câu hỏi - ' + p.name.vi, en: 'Quiz - ' + p.name.en } },
  ]),
  { id: 'lo-trinh', title: { vi: 'Lộ trình 23 thời kỳ', en: 'Roadmap of 23 periods' } },
  { id: 'nguon', title: { vi: 'Nguồn và cách làm', en: 'Sources and method' } },
];

function Badges({ ev, lang }: { ev: Evidence[]; lang: Lang }) {
  return <span className="badges">{ev.map((e) => <span key={e} className={'badge ' + e}>{EV[e][lang]}</span>)}</span>;
}

function SourceList({ ids, lang }: { ids: string[]; lang: Lang }) {
  return (
    <section className="block">
      <h3>{T.srcH[lang]}</h3>
      <ol className="srclist">
        {ids.map((id) => {
          const s = sourceById[id];
          return <li key={id}>{s.cite} {s.url && <a href={s.url} target="_blank" rel="noreferrer">{T.open[lang]}</a>}</li>;
        })}
      </ol>
    </section>
  );
}

function Depths({ depth, setDepth, lang }: { depth: Depth; setDepth: (d: Depth) => void; lang: Lang }) {
  return (
    <div className="seg" role="group" aria-label={lang === 'vi' ? 'Mức độ đọc' : 'Reading depth'}>
      {(['quick', 'full', 'scholar'] as Depth[]).map((d) => (
        <button key={d} className={depth === d ? 'on' : ''} onClick={() => setDepth(d)}>{T[d][lang]}</button>
      ))}
    </div>
  );
}

function More({ detail, scholarly, depth, lang }: { detail: L[]; scholarly: L[]; depth: Depth; lang: Lang }) {
  return (
    <>
      {depth !== 'quick' && (
        <section className="block">
          <h3>{T.detail[lang]}</h3>
          {detail.map((p, i) => <p key={i}>{p[lang]}</p>)}
        </section>
      )}
      {depth === 'scholar' && (
        <section className="block scholar">
          <h3>{T.scholarH[lang]}</h3>
          {scholarly.map((p, i) => <p key={i}>{p[lang]}</p>)}
        </section>
      )}
    </>
  );
}

// Giọng kể phần tóm tắt thời kỳ (tiếng Việt), tệp âm thanh nằm trong thư mục audio của trang
function Narrate({ slug, lang }: { slug: string; lang: Lang }) {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [on, setOn] = useState(false);
  useEffect(() => () => { ref.current?.pause(); }, []);
  const toggle = () => {
    if (!ref.current) {
      ref.current = new Audio('audio/' + slug + '.mp3');
      ref.current.addEventListener('ended', () => setOn(false));
    }
    if (on) { ref.current.pause(); setOn(false); }
    else ref.current.play().then(() => setOn(true)).catch(() => setOn(false));
  };
  return (
    <button className={'ghost listen' + (on ? ' on' : '')} onClick={toggle} aria-pressed={on}>
      <svg viewBox="0 0 24 24" aria-hidden="true">{on ? <path d="M7 5h4v14H7zM13 5h4v14h-4z" /> : <path d="M7 4l13 8-13 8z" />}</svg>
      {on ? (lang === 'vi' ? 'Dừng giọng kể' : 'Stop narration') : (lang === 'vi' ? 'Nghe giọng kể' : 'Listen (Vietnamese)')}
    </button>
  );
}

function World({ slug, lang }: { slug: string; lang: Lang }) {
  return (
    <section className="block world">
      <h3>{lang === 'vi' ? 'Cùng lúc đó trên thế giới' : 'Meanwhile, elsewhere'}</h3>
      <ul>
        {world[slug].map((w, i) => {
          const s = sourceById[w.source];
          return <li key={i}>{w.text[lang]} {s?.url && <a href={s.url} target="_blank" rel="noreferrer">{lang === 'vi' ? 'Nguồn' : 'Source'}</a>}</li>;
        })}
      </ul>
    </section>
  );
}

function Quiz({ slug, lang, earned, onPass }: { slug: string; lang: Lang; earned: boolean; onPass: () => void }) {
  const qs = quiz[slug];
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const done = i >= qs.length;
  const pass = score >= 2;
  useEffect(() => { if (done && pass) onPass(); }, [done]);
  if (done) {
    return (
      <>
        <h2>{score}/{qs.length} {lang === 'vi' ? 'câu đúng' : 'correct'}</h2>
        {pass ? (
          <div className="medal">
            <span className="medal-disc" aria-hidden="true" />
            <div><small>{lang === 'vi' ? 'Bạn nhận huy hiệu' : 'Badge earned'}</small><strong>{badges[slug][lang]}</strong></div>
          </div>
        ) : (
          <p className="lead">{lang === 'vi' ? 'Cần đúng ít nhất 2 câu để nhận huy hiệu của thời kỳ này.' : 'You need at least 2 correct answers to earn this period\'s badge.'}</p>
        )}
        <div className="cta"><button className="ghost" onClick={() => { setI(0); setPick(null); setScore(0); }}>{lang === 'vi' ? 'Làm lại' : 'Retry'}</button></div>
      </>
    );
  }
  const q = qs[i];
  return (
    <>
      <h2 className="q">{q.q[lang]}</h2>
      <div className="opts">
        {q.options.map((o, k) => {
          const cls = pick === null ? '' : k === q.answer ? ' right' : k === pick ? ' wrong' : ' off';
          return (
            <button key={k} className={'opt' + cls} disabled={pick !== null} onClick={() => {
              setPick(k);
              if (k === q.answer) { setScore(score + 1); sound.hit('ok'); } else sound.hit('no');
            }}>{o[lang]}</button>
          );
        })}
      </div>
      {pick !== null && (
        <>
          <p className="why">{q.why[lang]}</p>
          <div className="cta"><button className="primary" onClick={() => { setI(i + 1); setPick(null); }}>{i + 1 < qs.length ? (lang === 'vi' ? 'Câu tiếp theo' : 'Next question') : (lang === 'vi' ? 'Xem kết quả' : 'See result')}</button></div>
        </>
      )}
      {earned && pick === null && i === 0 && <p className="muted">{lang === 'vi' ? 'Bạn đã có huy hiệu của thời kỳ này.' : 'You already have this period\'s badge.'}</p>}
    </>
  );
}

function PeriodStep({ p, lang, depth, setDepth }: { p: Period; lang: Lang; depth: Depth; setDepth: (d: Depth) => void }) {
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLElement>(null);
  const toggle = () => { if (open) requestAnimationFrame(() => foldTo(box.current)); setOpen(!open); };
  const i = periods.indexOf(p);
  return (
    <section ref={box} className="step era" id={'p-' + p.slug} data-step data-era={p.slug} style={{ ['--c' as string]: p.color }}>
      <div className="panel">
        <p className="eyebrow">{lang === 'vi' ? 'Thời kỳ' : 'Period'} {pad(i + 1)} / {periods.length + upcoming.length}</p>
        <h1>{p.name[lang]}</h1>
        <p className="range">{p.range[lang]}</p>
        <p className="lead">{p.summary[lang]}</p>
        <div className="cta">
          <Narrate slug={p.slug} lang={lang} />
          <button className="ghost" onClick={toggle} aria-expanded={open}>{open ? (lang === 'vi' ? 'Thu gọn' : 'Collapse') : (lang === 'vi' ? 'Đọc tổng quan' : 'Read overview')}</button>
        </div>
        <figure className="art">
          <img src={'img/' + p.slug + '.jpg'} loading="lazy" alt={lang === 'vi' ? 'Ảnh minh họa thời kỳ ' + p.name.vi : 'Illustration of the period ' + p.name.en} />
          <figcaption>{lang === 'vi' ? 'Ảnh minh họa do AI tạo để gợi không khí thời kỳ, không phải ảnh chụp hay tư liệu khảo cổ.' : 'AI-generated illustration to evoke the period, not a photograph or archaeological record.'}</figcaption>
        </figure>
        {p.model && <Model3D kind={p.model} lang={lang} />}
        {open && (
          <>
            <Depths depth={depth} setDepth={setDepth} lang={lang} />
            <More detail={p.detail} scholarly={p.scholarly} depth={depth} lang={lang} />
            <SourceList ids={p.sources} lang={lang} />
          </>
        )}
        <World slug={p.slug} lang={lang} />
        {open && <div className="cta"><button className="ghost" onClick={toggle}>{lang === 'vi' ? 'Thu gọn tổng quan' : 'Collapse overview'}</button></div>}
      </div>
    </section>
  );
}

function EntryStep({ e, lang, depth, setDepth, seen }: { e: Entry; lang: Lang; depth: Depth; setDepth: (d: Depth) => void; seen: boolean }) {
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLElement>(null);
  const toggle = () => { if (open) requestAnimationFrame(() => foldTo(box.current)); setOpen(!open); };
  const idx = journey.indexOf(e);
  return (
    <section ref={box} className="step" id={'e-' + e.slug} data-step data-era={e.period} data-focus={e.slug} style={{ ['--c' as string]: periodBySlug[e.period].color }}>
      <div className={'panel' + (seen ? ' seen' : '')}>
        <p className="eyebrow">{pad(idx + 1)} / {journey.length} - {KIND[e.kind][lang]} - {e.date[lang]}</p>
        <h2>{e.name[lang]}</h2>
        <p className="hook">{hooks[e.slug][lang]}</p>
        <div className="meta"><Badges ev={e.evidence} lang={lang} />{e.place && <span>{e.place[lang]}</span>}</div>
        <p className="lead">{e.summary[lang]}</p>
        {e.model && <Model3D kind={e.model} lang={lang} />}
        {open && (
          <>
            <Depths depth={depth} setDepth={setDepth} lang={lang} />
            <More detail={e.detail} scholarly={e.scholarly} depth={depth} lang={lang} />
            <SourceList ids={e.sources} lang={lang} />
          </>
        )}
        <div className="cta">
          <button className="ghost" onClick={toggle} aria-expanded={open}>{open ? (lang === 'vi' ? 'Thu gọn' : 'Collapse') : (lang === 'vi' ? 'Đọc chi tiết và nguồn' : 'Read details and sources')}</button>
        </div>
      </div>
    </section>
  );
}

function Index({ lang, seen, got, here, onGo, bare }: { lang: Lang; seen: Set<string>; got: Set<string>; here: string; onGo: (id: string) => void; bare?: boolean }) {
  const [q, setQ] = useState('');
  const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
  const k = norm(q.trim());
  const match = (e: Entry) => !k || norm(e.name.vi + ' ' + e.name.en + ' ' + (e.place?.vi || '')).includes(k);
  const any = useMemo(() => entries.some(match), [k]);
  return (
    <>
      {!bare && <p className="eyebrow">{lang === 'vi' ? 'Lộ trình' : 'Roadmap'}</p>}
      {!bare && <h2>{lang === 'vi' ? '23 thời kỳ, từ đồ đá đến hôm nay' : '23 periods, from stone to today'}</h2>}
      <input className="search" aria-label={lang === 'vi' ? 'Tìm trong trang' : 'Search this site'} type="search" value={q} onChange={(e) => setQ(e.target.value)}
        placeholder={lang === 'vi' ? 'Tìm di tích, nhân vật, hiện vật' : 'Search sites, people, artefacts'} />
      {bare && <p className="muted">{lang === 'vi' ? 'Chạm một mục để tới thẳng đó. Mục có dấu ✓ là mục bạn đã xem.' : 'Tap an item to go straight there. Items marked ✓ are ones you have seen.'}</p>}
      {!any && <p className="muted">{lang === 'vi' ? 'Chưa có mục nào khớp. Đợt 1 mới có nội dung đến hết Âu Lạc.' : 'No match yet. Release 1 covers up to Âu Lạc.'}</p>}
      <ol className="road">
        {periods.map((p, i) => {
          const list = journey.filter((e) => e.period === p.slug && match(e));
          if (k && !list.length) return null;
          return (
            <li key={p.slug} className="ready" style={{ ['--c' as string]: p.color }}>
              <button className={'road-head' + (here === 'p-' + p.slug ? ' here' : '')} onClick={() => onGo('p-' + p.slug)}>
                <em>{pad(i + 1)}</em><strong>{p.name[lang]}</strong><span>{p.range[lang]}</span>
              </button>
              <div className="road-items">
                {list.map((e) => (
                  <button key={e.slug} onClick={() => onGo('e-' + e.slug)} className={(seen.has(e.slug) ? 'seen' : '') + (here === 'e-' + e.slug ? ' here' : '')} aria-current={here === 'e-' + e.slug ? 'location' : undefined}>{e.name[lang]}</button>
                ))}
                {!k && <button onClick={() => onGo('q-' + p.slug)} className={'quizlink' + (got.has(p.slug) ? ' got' : '') + (here === 'q-' + p.slug ? ' here' : '')}>{got.has(p.slug) ? badges[p.slug][lang] : (lang === 'vi' ? '3 câu hỏi nhận huy hiệu' : '3 questions for a badge')}</button>}
              </div>
            </li>
          );
        })}
        {!k && upcoming.map((u, i) => (
          <li key={i}>
            <div className="road-head"><em>{pad(i + 1 + periods.length)}</em><strong>{u.name[lang]}</strong><span>{u.range} - {T.soon[lang]}</span></div>
          </li>
        ))}
      </ol>
    </>
  );
}

function Sources({ lang }: { lang: Lang }) {
  const groups: [string, L][] = [
    ['primary', { vi: 'Tư liệu gốc', en: 'Primary texts' }],
    ['museum', { vi: 'Bảo tàng', en: 'Museums' }],
    ['paper', { vi: 'Bài nghiên cứu', en: 'Research papers' }],
    ['reference', { vi: 'Tra cứu tổng hợp', en: 'Reference works' }],
    ['news', { vi: 'Báo chí', en: 'News reports' }],
  ];
  return (
    <>
      <p className="eyebrow">{lang === 'vi' ? 'Nguồn và cách làm' : 'Sources and method'}</p>
      <h2>{lang === 'vi' ? 'Mỗi thông tin đều có nguồn' : 'Every statement has a source'}</h2>
      <p className="lead">
        {lang === 'vi'
          ? 'Nội dung được viết lại từ các nguồn dưới đây, không sao chép nguyên văn. Mỗi mục từ có nhãn cho biết thông tin đến từ đâu.'
          : 'The text is rewritten from the sources below, not copied. Each entry carries labels showing where its information comes from.'}
      </p>
      <section className="block">
        <p><span className="badge arch">{EV.arch[lang]}</span> {lang === 'vi' ? 'Di tích, di vật và kết quả định tuổi do các cuộc khai quật công bố.' : 'Sites, artefacts and dating results published from excavations.'}</p>
        <p><span className="badge chron">{EV.chron[lang]}</span> {lang === 'vi' ? 'Điều được chép trong sử Việt hoặc sử Trung Hoa, thường viết sau sự kiện nhiều thế kỷ.' : 'What Vietnamese or Chinese histories record, usually written centuries after the events.'}</p>
        <p><span className="badge legend">{EV.legend[lang]}</span> {lang === 'vi' ? 'Chuyện kể truyền miệng, có giá trị văn hóa nhưng không dùng làm chứng cứ cho niên đại.' : 'Oral tradition, culturally valuable but not used as evidence for dates.'}</p>
        <p className="muted">
          {lang === 'vi'
            ? 'Ranh giới ba vùng trên bản đồ là ước lượng để minh họa. Các cảnh 3D là phỏng dựng giản lược. Ảnh minh họa và giọng kể do AI tạo. Âm nền được tổng hợp bằng máy, không phải bản ghi nhạc cụ cổ. Nền bản đồ: Natural Earth.'
            : 'Zone boundaries on the map are illustrative. The 3D scenes are simplified reconstructions. Illustrations and narration are AI-generated. Ambient sound is synthesised, not a recording of ancient instruments. Base map: Natural Earth.'}
        </p>
      </section>
      {groups.map(([g, name]) => (
        <details className="srcgroup" key={g}>
          <summary>{name[lang]} ({sources.filter((s) => s.kind === g).length})</summary>
          <ol className="srclist">
            {sources.filter((s) => s.kind === g).map((s) => (
              <li key={s.id}>{s.cite} {s.url && <a href={s.url} target="_blank" rel="noreferrer">{T.open[lang]}</a>}</li>
            ))}
          </ol>
        </details>
      ))}
    </>
  );
}

// Mục lục mở đè lên trang: chọn một mục là tới thẳng đó, đóng lại thì vẫn ở đúng chỗ đang đọc
function Drawer({ lang, onClose, children }: { lang: Lang; onClose: () => void; children: ReactNode }) {
  const x = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    x.current?.focus();
    document.querySelector('.drawer .here')?.scrollIntoView({ block: 'center', behavior: 'instant' as ScrollBehavior });
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', k);
    document.documentElement.classList.add('locked');
    return () => { window.removeEventListener('keydown', k); document.documentElement.classList.remove('locked'); };
  }, []);
  return (
    <div className="drawer" role="dialog" aria-modal="true" aria-label={lang === 'vi' ? 'Mục lục' : 'Contents'}>
      <button className="drawer-back" tabIndex={-1} aria-label={lang === 'vi' ? 'Đóng mục lục' : 'Close contents'} onClick={onClose} />
      <div className="drawer-body">
        <div className="drawer-top">
          <strong>{lang === 'vi' ? 'Mục lục' : 'Contents'}</strong>
          <button ref={x} className="pill icon" onClick={onClose} aria-label={lang === 'vi' ? 'Đóng mục lục' : 'Close contents'}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" className="wave" /></svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLangS] = useState<Lang>(() => (store.get('annalis-lang', 'vi') === 'en' ? 'en' : 'vi'));
  const [depth, setDepthS] = useState<Depth>(() => store.get('annalis-depth', 'full') as Depth);
  const [seen, setSeen] = useState<Set<string>>(() => new Set(store.get('annalis-seen', '').split(',').filter((s) => entryBySlug[s])));
  const [got, setGot] = useState<Set<string>>(() => new Set(store.get('annalis-badges', '').split(',').filter((s) => periodBySlug[s])));
  const [active, setActive] = useState<{ id: string; era: string | null; focus: string | null }>({ id: 'top', era: null, focus: null });
  const [auto, setAuto] = useState(false);
  const [snd, setSnd] = useState(false);
  const [toc, setToc] = useState(false);
  const [resume] = useState(() => { const r = store.get('annalis-last', ''); return STEPS.find((x) => x.id === r && x.id !== 'top') || null; });
  const split = useMedia(SPLIT);
  const setLang = (l: Lang) => { setLangS(l); store.set('annalis-lang', l); };
  const setDepth = (d: Depth) => { setDepthS(d); store.set('annalis-depth', d); };
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  // Phần nào đang nằm giữa màn hình thì bản đồ theo phần đó
  useEffect(() => {
    const io = new IntersectionObserver((list) => {
      list.forEach((e) => {
        if (!e.isIntersecting) return;
        const d = (e.target as HTMLElement).dataset;
        setActive({ id: e.target.id, era: d.era || null, focus: d.focus || null });
      });
    }, { rootMargin: split ? '-55% 0px -45% 0px' : '-45% 0px -45% 0px' });
    document.querySelectorAll('[data-step]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [split]);
  useEffect(() => { if (active.id !== 'top') store.set('annalis-last', active.id); }, [active.id]);

  const idx = Math.max(0, STEPS.findIndex((x) => x.id === active.id));
  const go = (d: number) => { const n = STEPS[idx + d]; if (n) jump(n.id); };
  const goFromToc = (id: string) => { setToc(false); window.setTimeout(() => jump(id), 0); };
  // Phím mũi tên trái, phải (hoặc J, K) để sang phần trước, phần kế tiếp
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (toc || e.metaKey || e.ctrlKey || e.altKey || /INPUT|TEXTAREA|SELECT/.test(t.tagName)) return;
      if (e.key === 'ArrowRight' || e.key === 'j') { e.preventDefault(); go(1); }
      if (e.key === 'ArrowLeft' || e.key === 'k') { e.preventDefault(); go(-1); }
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [idx, toc]);

  useEffect(() => {
    const f = active.focus;
    if (f && !seen.has(f)) {
      const n = new Set(seen); n.add(f); setSeen(n); store.set('annalis-seen', [...n].join(','));
    }
    if (f && snd) sound.hit(/trong-dong|dong-son/.test(f) ? 'drum' : 'step');
  }, [active.focus]);
  useEffect(() => { if (snd) sound.setEra(active.era); }, [snd, active.era]);

  // Tự chạy: cứ vài giây cuộn sang phần kế tiếp, dừng khi người xem tự cuộn hoặc chạm
  useEffect(() => {
    if (!auto) return;
    const t = window.setTimeout(() => {
      const steps = [...document.querySelectorAll<HTMLElement>('[data-step]')];
      const i = steps.findIndex((s) => s.id === active.id);
      const next = steps[i + 1];
      if (next) next.scrollIntoView({ behavior: 'smooth', block: 'start' }); else setAuto(false);
    }, active.id === 'top' ? 600 : AUTO_MS);
    const stop = () => setAuto(false);
    window.addEventListener('wheel', stop, { passive: true });
    window.addEventListener('touchstart', stop, { passive: true });
    window.addEventListener('keydown', stop);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener('wheel', stop);
      window.removeEventListener('touchstart', stop);
      window.removeEventListener('keydown', stop);
    };
  }, [auto, active.id]);

  const toggleSound = () => { if (snd) { sound.disable(); setSnd(false); } else setSnd(sound.enable()); };
  const startAuto = () => { if (!snd) setSnd(sound.enable()); setAuto(true); };
  const pass = (slug: string) => {
    if (got.has(slug)) return;
    const n = new Set(got); n.add(slug); setGot(n); store.set('annalis-badges', [...n].join(','));
  };
  const color = active.era ? periodBySlug[active.era].color : '#7c8cff';

  return (
    <div className="app" style={{ ['--c' as string]: color }}>
      <Stage lang={lang} era={active.era} focus={active.focus} sheet={!split && active.focus ? 1 : 0} split={split} onPick={(s) => jump('e-' + s)} />
      <div className="shade" />

      <header className="bar">
        <button className="brand" onClick={() => jump('top')}>VIỆT SỬ TOÀN ĐỒ</button>
        <button className="pill progress" onClick={() => setToc(true)} aria-haspopup="dialog" aria-label={lang === 'vi' ? `Mở mục lục, đã khám phá ${seen.size} trên ${journey.length} mục` : `Open contents, ${seen.size} of ${journey.length} explored`}>
          <svg viewBox="0 0 36 36" aria-hidden="true">
            <circle cx="18" cy="18" r="15" />
            <circle cx="18" cy="18" r="15" className="arc" strokeDasharray={`${(seen.size / journey.length) * 94.2} 94.2`} />
          </svg>
          <b>{lang === 'vi' ? 'Mục lục' : 'Contents'}</b>
          <span>{seen.size}/{journey.length}</span>
        </button>
        <button className={'pill icon' + (snd ? ' on' : '')} onClick={toggleSound} aria-pressed={snd} aria-label={lang === 'vi' ? 'Bật hoặc tắt âm thanh' : 'Toggle sound'}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 9v6h4l5 4V5L8 9H4z" />
            {snd ? <path d="M16 8.5a5 5 0 010 7M18.5 6a8.5 8.5 0 010 12" className="wave" /> : <path d="M17 9l5 6M22 9l-5 6" className="wave" />}
          </svg>
        </button>
        <div className="seg lang" role="group" aria-label="Language">
          <button className={lang === 'vi' ? 'on' : ''} onClick={() => setLang('vi')}>VI</button>
          <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
        </div>
      </header>

      <main className="flow">
        <section className="step hero" id="top" data-step>
          <div className="panel bare">
            <p className="eyebrow">{lang === 'vi' ? 'Lịch sử Việt Nam - đợt 1' : 'History of Vietnam - release 1'}</p>
            <h1>{lang === 'vi' ? <>800.000 năm<br />trên một bản đồ sống</> : <>800,000 years<br />on one living map</>}</h1>
            <p className="lead">
              {lang === 'vi'
                ? 'Cuộn xuống để đi qua lịch sử Việt Nam từ chiếc rìu đá đầu tiên. Bản đồ sẽ đổi theo từng thời kỳ và bay tới từng di tích. Bạn cũng có thể chạm vào một cột sáng trên bản đồ để tới thẳng di tích đó.'
                : 'Scroll down to travel through the history of Vietnam from the first stone axe. The map changes with each period and flies to each site. You can also tap a beam of light on the map to go straight to that site.'}
            </p>
            <div className="cta">
              {resume && <button className="primary" onClick={() => jump(resume.id)}>{lang === 'vi' ? 'Đọc tiếp: ' : 'Continue: '}{resume.title[lang]}</button>}
              <button className={resume ? 'ghost' : 'primary'} onClick={() => jump('p-' + periods[0].slug)}>{lang === 'vi' ? 'Bắt đầu từ thời đồ đá' : 'Start from the Stone Age'}</button>
              <button className="ghost" onClick={startAuto}>{lang === 'vi' ? 'Tự chạy như phim' : 'Play as a film'}</button>
            </div>
            <div className="zones">
              {ZONES.map((z) => <span key={z.id}><i style={{ background: z.color }} />{lang === 'vi' ? 'Vùng ' + z.vi : z.en + ' zone'}</span>)}
            </div>
          </div>
        </section>

        {periods.map((p, i) => (
          <div key={p.slug}>
            <PeriodStep p={p} lang={lang} depth={depth} setDepth={setDepth} />
            {journey.filter((e) => e.period === p.slug).map((e) => (
              <EntryStep key={e.slug} e={e} lang={lang} depth={depth} setDepth={setDepth} seen={seen.has(e.slug)} />
            ))}
            <section className="step" id={'q-' + p.slug} data-step data-era={p.slug} style={{ ['--c' as string]: p.color }}>
              <div className="panel">
                <p className="eyebrow">{lang === 'vi' ? 'Thử lại trí nhớ' : 'Quick check'} - {p.name[lang]}</p>
                <Quiz slug={p.slug} lang={lang} earned={got.has(p.slug)} onPass={() => pass(p.slug)} />
                <div className="cta">
                  {periods[i + 1]
                    ? <button className="primary" onClick={() => jump('p-' + periods[i + 1].slug)}>{lang === 'vi' ? 'Sang thời kỳ' : 'On to'} {periods[i + 1].name[lang]}</button>
                    : <button className="primary" onClick={() => jump('lo-trinh')}>{lang === 'vi' ? 'Xem lộ trình tiếp theo' : 'See what comes next'}</button>}
                </div>
              </div>
            </section>
          </div>
        ))}

        <section className="step" id="lo-trinh" data-step>
          <div className="panel"><Index lang={lang} seen={seen} got={got} here="" onGo={jump} /></div>
        </section>
        <section className="step last" id="nguon" data-step>
          <div className="panel"><Sources lang={lang} /></div>
        </section>
      </main>

      <nav className="dock" aria-label={lang === 'vi' ? 'Di chuyển trong trang' : 'Page navigation'}>
        <i className="prog" style={{ width: (idx / (STEPS.length - 1)) * 100 + '%' }} />
        <button className="navb" onClick={() => go(-1)} disabled={idx <= 0} aria-label={lang === 'vi' ? 'Phần trước' : 'Previous section'}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg><span>{lang === 'vi' ? 'Trước' : 'Back'}</span>
        </button>
        <div className="scrub">
          {periods.map((p) => (
            <button key={p.slug} onClick={() => jump('p-' + p.slug)} className={active.era === p.slug ? 'on' : ''} style={{ ['--c' as string]: p.color }}>
              <i /><b>{p.name[lang]}</b><span>{START[p.slug][lang]}</span>
            </button>
          ))}
          <button onClick={() => jump('lo-trinh')} className="more"><i /><b>+{upcoming.length}</b><span>{T.soon[lang]}</span></button>
        </div>
        <button className="herebtn" onClick={() => setToc(true)} aria-haspopup="dialog">
          <small>{idx + 1}/{STEPS.length} - {lang === 'vi' ? 'chạm để mở mục lục' : 'tap for contents'}</small>
          <b>{STEPS[idx].title[lang]}</b>
        </button>
        <button className="navb next" onClick={() => go(1)} disabled={idx >= STEPS.length - 1} aria-label={lang === 'vi' ? 'Phần kế tiếp' : 'Next section'}>
          <span>{lang === 'vi' ? 'Tiếp' : 'Next'}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
        </button>
      </nav>
      {toc && (
        <Drawer lang={lang} onClose={() => setToc(false)}>
          <Index lang={lang} seen={seen} got={got} here={active.id} onGo={goFromToc} bare />
          <div className="cta">
            <button className="ghost" onClick={() => goFromToc('nguon')}>{lang === 'vi' ? 'Nguồn và cách làm' : 'Sources and method'}</button>
            <button className="ghost" onClick={() => goFromToc('top')}>{lang === 'vi' ? 'Về đầu trang' : 'Back to top'}</button>
          </div>
        </Drawer>
      )}
      {auto && <button className="stopauto" onClick={() => setAuto(false)}>{lang === 'vi' ? 'Dừng tự chạy' : 'Stop autoplay'}</button>}
    </div>
  );
}
