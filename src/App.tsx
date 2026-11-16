import { Rich, newSeen } from './components/Rich';
import { BATTLES } from './data/battles';
import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import Stage, { ZONES } from './components/Stage';
import Model3D from './components/Model3D';
import { outLinks } from './data/links';
import { Lifelines, OnThisDay } from './components/Timelines';
import { entries, entryBySlug } from './data/entries';
import { periodBySlug, periods, upcoming } from './data/periods';
import { sourceById, sources } from './data/sources';
import { CITE_EN } from './data/citeEn';
import { hooks } from './data/hooks';
import { badges, quiz, world, type Q } from './data/extras';
import { photos } from './data/photos';
import { grades } from './data/grades';
import { drumUrl, loadDrumFace } from './drum';
import { sound } from './sound';
import type { Entry, Evidence, L, Lang, Period } from './data/types';

type Depth = 'quick' | 'full' | 'scholar';

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
  event: { vi: 'Sự kiện', en: 'Event' },
  legend: { vi: 'Truyền thuyết', en: 'Legend' },
};
// Bốn thời kỳ đầu có ảnh minh họa và giọng kể riêng; các thời kỳ sau dùng ảnh thật làm hình mở đầu
const LEGACY = new Set(['do-da', 'kim-khi', 'van-lang', 'au-lac']);
const START: Record<string, L> = {
  'do-da': { vi: '800.000 năm trước', en: '800,000 years ago' },
  'kim-khi': { vi: '2000 TCN', en: '2000 BCE' },
  'van-lang': { vi: 'Thế kỷ 7 TCN', en: '7th c. BCE' },
  'au-lac': { vi: '257 TCN', en: '257 BCE' },
};

// Màn mở đầu thời kỳ: khi cuộn sang thời kỳ mới, tên thời kỳ hiện lớn trên bản đồ kèm năm số chạy, rồi tự tắt
const yearOf = (t: string) => {
  const m = t.match(/^(?:khoảng |c\. )?(\d{1,4})(?:\s*(TCN|BCE))?$/);
  return m ? Number(m[1]) * (m[2] ? -1 : 1) : null;
};
const fmtYear = (y: number, lang: Lang) => (y < 0 ? `${-y} ${lang === 'vi' ? 'TCN' : 'BCE'}` : String(y));
function EraCard({ era, prev, lang, mark }: { era: string; prev: string | null; lang: Lang; mark: string }) {
  const p = periodBySlug[era];
  const idx = periods.findIndex((x) => x.slug === era);
  const label = (START[era] || p.start || p.range)[lang];
  const to = yearOf(label), from = prev ? yearOf((START[prev] || periodBySlug[prev].start || periodBySlug[prev].range)[lang]) : null;
  const [shown, setShown] = useState(from !== null && to !== null ? fmtYear(from, lang) : label);
  useEffect(() => {
    if (from === null || to === null || matchMedia('(prefers-reduced-motion: reduce)').matches) { setShown(label); return; }
    let raf = 0; const t0 = performance.now();
    const step = (now: number) => {
      const k = Math.min(1, (now - t0) / 1100), e = 1 - Math.pow(1 - k, 3);
      const y = Math.round(from + (to - from) * e);
      setShown(k < 1 ? fmtYear(y === 0 ? 1 : y, lang) : label);
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [era]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="eracard" aria-hidden="true" style={{ ['--c' as string]: p.color }}>
      <img src={mark} alt="" />
      <p className="n">{p.theme ? (lang === 'vi' ? 'Chuyên đề' : 'Topic') : `${lang === 'vi' ? 'Thời kỳ' : 'Period'} ${pad(idx + 1)}`}</p>
      <h2>{p.name[lang]}</h2>
      <p className="y">{shown}</p>
    </div>
  );
}

// Thứ tự hành trình: theo thời kỳ, trong mỗi thời kỳ đi từ xưa đến gần
const journey = periods.flatMap((p) => entries.filter((e) => e.period === p.slug).sort((a, b) => b.sort - a.sort));
const pad = (n: number) => String(n).padStart(2, '0');
// Đi tới một phần: gần thì trượt mượt, xa thì nhảy thẳng để không phải chờ trang cuộn qua hàng chục màn hình
const jump = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  // Thẻ được nhảy tới thì hiện ngay, không chờ hiệu ứng hiện dần
  el.querySelectorAll<HTMLElement>('.panel').forEach((p) => { p.dataset.in = '1'; });
  const far = Math.abs(el.getBoundingClientRect().top) > window.innerHeight * 2.5 || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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
  { id: 'lo-trinh', title: { vi: 'Mục lục toàn bộ', en: 'Full index' } },
  { id: 'nguon', title: { vi: 'Nguồn và cách làm', en: 'Sources and method' } },
];

function Badges({ ev, lang }: { ev: Evidence[]; lang: Lang }) {
  // Mỗi mức chứng cứ có ký hiệu riêng (khảo cổ: hình thoi đặc, sử cũ: ô vuông rỗng, truyền thuyết: vòng chấm) để không phải dựa vào màu
  return <span className="badges">{ev.map((e) => <span key={e} className={'badge ' + e}><i aria-hidden="true" />{EV[e][lang]}</span>)}</span>;
}

function SourceList({ ids, lang }: { ids: string[]; lang: Lang }) {
  return (
    <section className="block">
      <h3>{T.srcH[lang]}</h3>
      <ol className="srclist">
        {ids.map((id) => {
          const s = sourceById[id];
          return <li key={id}>{lang === 'en' ? CITE_EN[s.id] ?? s.cite : s.cite} {s.url && <a href={s.url} target="_blank" rel="noreferrer">{T.open[lang]}</a>}</li>;
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

function More({ detail, scholarly, depth, lang, gl }: { detail: L[]; scholarly: L[]; depth: Depth; lang: Lang; gl?: ReturnType<typeof newSeen> }) {
  return (
    <>
      {depth !== 'quick' && (
        <section className="block">
          <h3>{T.detail[lang]}</h3>
          {detail.map((p, i) => <p key={i}><Rich text={p[lang]} lang={lang} seen={gl} /></p>)}
        </section>
      )}
      {depth === 'scholar' && (
        <section className="block scholar">
          <h3>{T.scholarH[lang]}</h3>
          {scholarly.map((p, i) => <p key={i}><Rich text={p[lang]} lang={lang} seen={gl} /></p>)}
        </section>
      )}
    </>
  );
}

// Ảnh thật từ Wikimedia Commons. Nếu ảnh không tải được thì ẩn cả khung để không để lại ô trống.
function RealPhoto({ slug, lang }: { slug: string; lang: Lang }) {
  const ph = photos[slug];
  const [bad, setBad] = useState(false);
  const [ok, setOk] = useState(false);
  if (!ph) return null;
  const f = encodeURIComponent(ph.file.replace(/ /g, '_'));
  return (
    <figure className={'art photo' + (ph.tall ? ' tall' : '')}>
      {bad
        ? <div className="nophoto">{lang === 'vi' ? 'Ảnh chưa tải được. Bạn có thể mở ảnh gốc ở liên kết bên dưới.' : 'The photo could not be loaded. You can open the original at the link below.'}</div>
        : <div className={'frame' + (ok ? ' ok' : '')}><img src={'https://commons.wikimedia.org/wiki/Special:FilePath/' + f + '?width=960'} loading="lazy" alt={ph.caption[lang]} onLoad={() => setOk(true)} onError={() => setBad(true)} /></div>}
      <figcaption>
        {ph.caption[lang]} {lang === 'vi' ? 'Ảnh: ' : 'Photo: '}{ph.by}, {ph.license}, <a href={'https://commons.wikimedia.org/wiki/File:' + f} target="_blank" rel="noreferrer">Wikimedia Commons</a>.
      </figcaption>
    </figure>
  );
}

// Giọng kể phần tóm tắt thời kỳ (tiếng Việt), tệp âm thanh nằm trong thư mục audio của trang
// Chỉ một giọng kể phát tại một thời điểm: bật cái mới thì cái đang phát dừng lại
let speaking: HTMLAudioElement | null = null;
function Narrate({ slug, lang }: { slug: string; lang: Lang }) {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [on, setOn] = useState(false);
  useEffect(() => () => { ref.current?.pause(); }, []);
  const toggle = () => {
    if (!ref.current) {
      ref.current = new Audio('audio/' + slug + '.mp3');
      ref.current.addEventListener('ended', () => setOn(false));
      ref.current.addEventListener('pause', () => setOn(false));
    }
    if (on) { ref.current.pause(); setOn(false); }
    else {
      if (speaking && speaking !== ref.current) speaking.pause();
      speaking = ref.current;
      ref.current.play().then(() => setOn(true)).catch(() => setOn(false));
    }
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
        {(world[slug] || []).map((w, i) => {
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
  // Chọn xong thì đưa nút sang câu tiếp vào tầm nhìn và đặt tiêu điểm vào đó
  const nextBtn = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (pick !== null && nextBtn.current) { nextBtn.current.focus({ preventScroll: true }); nextBtn.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } }, [pick]);
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
          <div className="cta"><button ref={nextBtn} className="primary qnext" onClick={() => { setI(i + 1); setPick(null); }}>{i + 1 < qs.length ? (lang === 'vi' ? 'Câu tiếp theo' : 'Next question') : (lang === 'vi' ? 'Xem kết quả' : 'See result')}</button></div>
        </>
      )}
      {earned && pick === null && i === 0 && <p className="muted">{lang === 'vi' ? 'Bạn đã có huy hiệu của thời kỳ này.' : 'You already have this period\'s badge.'}</p>}
    </>
  );
}

// Bài ôn nhiều thời kỳ: như Quiz nhưng không có huy hiệu, mỗi câu ghi thời kỳ mà câu hỏi thuộc về
function ReviewQuiz({ qs, lang, onAgain }: { qs: (Q & { from: string })[]; lang: Lang; onAgain: () => void }) {
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const nextBtn = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (pick !== null && nextBtn.current) { nextBtn.current.focus({ preventScroll: true }); nextBtn.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } }, [pick]);
  if (i >= qs.length) {
    return (
      <>
        <h3>{score}/{qs.length} {lang === 'vi' ? 'câu đúng' : 'correct'}</h3>
        <div className="cta"><button className="ghost" onClick={onAgain}>{lang === 'vi' ? 'Làm bộ câu hỏi khác' : 'Try another set'}</button></div>
      </>
    );
  }
  const q = qs[i];
  return (
    <>
      <p className="eyebrow">{lang === 'vi' ? 'Câu' : 'Question'} {i + 1}/{qs.length} - {periodBySlug[q.from].name[lang]}</p>
      <h3 className="q">{q.q[lang]}</h3>
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
          <div className="cta"><button ref={nextBtn} className="primary qnext" onClick={() => { setI(i + 1); setPick(null); }}>{i + 1 < qs.length ? (lang === 'vi' ? 'Câu tiếp theo' : 'Next question') : (lang === 'vi' ? 'Xem kết quả' : 'See result')}</button></div>
        </>
      )}
    </>
  );
}

function PeriodStep({ p, lang, depth, setDepth }: { p: Period; lang: Lang; depth: Depth; setDepth: (d: Depth) => void }) {
  const gl = newSeen();
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLElement>(null);
  const toggle = () => { if (open) requestAnimationFrame(() => foldTo(box.current)); setOpen(!open); };
  const i = periods.indexOf(p);
  return (
    <section ref={box} className="step era" id={'p-' + p.slug} data-step data-era={p.slug} style={{ ['--c' as string]: p.color }}>
      <div className="panel">
        <p className="eyebrow">{p.theme ? (lang === 'vi' ? 'Chuyên đề' : 'Special topic') : <>{lang === 'vi' ? 'Thời kỳ' : 'Period'} {pad(i + 1)} / {periods.filter((x) => !x.theme).length + upcoming.length}</>}</p>
        <h1>{p.name[lang]}</h1>
        <p className="range">{p.range[lang]}</p>
        {p.question && <p className="ask">{p.question[lang]}</p>}
        <p className="lead"><Rich text={p.summary[lang]} lang={lang} seen={gl} /></p>
        <div className="cta">
          {LEGACY.has(p.slug) && <Narrate slug={p.slug} lang={lang} />}
          <button className="ghost" onClick={toggle} aria-expanded={open}>{open ? (lang === 'vi' ? 'Thu gọn' : 'Collapse') : (lang === 'vi' ? 'Đọc tổng quan' : 'Read overview')}</button>
        </div>
        {!LEGACY.has(p.slug) && <RealPhoto slug={p.slug} lang={lang} />}
        {LEGACY.has(p.slug) && <figure className="art">
          <img src={'img/' + p.slug + '.jpg'} loading="lazy" alt={lang === 'vi' ? 'Ảnh minh họa thời kỳ ' + p.name.vi : 'Illustration of the period ' + p.name.en} />
          <figcaption>{lang === 'vi' ? 'Ảnh minh họa do AI tạo để gợi không khí thời kỳ, không phải ảnh chụp hay tư liệu khảo cổ.' : 'AI-generated illustration to evoke the period, not a photograph or archaeological record.'}</figcaption>
        </figure>}
        {p.model && <Model3D kind={p.model} lang={lang} />}
        {open && (
          <>
            <Depths depth={depth} setDepth={setDepth} lang={lang} />
            <More detail={p.detail} scholarly={p.scholarly} depth={depth} lang={lang} gl={gl} />
            <SourceList ids={p.sources} lang={lang} />
          </>
        )}
        <World slug={p.slug} lang={lang} />
        {open && <div className="cta"><button className="ghost" onClick={toggle}>{lang === 'vi' ? 'Thu gọn tổng quan' : 'Collapse overview'}</button></div>}
      </div>
    </section>
  );
}

// Thời gian một bước trận đánh trên bản đồ (khớp với Stage: các đạo quân lần lượt đi, cách nhau 1,3 giây, mỗi đạo 3 giây)
const stepMs = (n: number) => ((Math.max(1, n) - 1) * 1.3 + 3.0) * 1000;

// Trình phát diễn biến trận đánh: từng bước có mốc thời gian và một câu thuật lại; bản đồ chạy theo bước đang chọn
interface BP { i: number; play: boolean; done: boolean; go: (i: number) => void; toggle: () => void }
function BattlePlayer({ slug, lang, bp }: { slug: string; lang: Lang; bp: BP }) {
  const b = BATTLES[slug];
  const st = b.steps[bp.i];
  const last = b.steps.length - 1;
  return (
    <section className="battle" aria-label={lang === 'vi' ? 'Diễn biến trận đánh' : 'How the battle unfolded'}>
      <div className="battle-top">
        <p className="eyebrow">{lang === 'vi' ? 'Diễn biến trên bản đồ' : 'On the map'} - {bp.i + 1} / {b.steps.length}</p>
        <span className="legend"><i className="vn" />{lang === 'vi' ? 'Quân Việt' : 'Vietnamese'} <i className="foe" />{lang === 'vi' ? 'Quân xâm lược' : 'Invaders'}</span>
      </div>
      <div className="battle-step" key={bp.i} aria-live="polite">
        <b>{st.t[lang]}</b>
        <p>{st.text[lang]}</p>
      </div>
      <div className="battle-ctl">
        <button onClick={() => bp.go(Math.max(0, bp.i - 1))} disabled={bp.i === 0} aria-label={lang === 'vi' ? 'Bước trước' : 'Previous step'}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg></button>
        <button className="play" onClick={bp.toggle} aria-label={bp.play ? (lang === 'vi' ? 'Tạm dừng' : 'Pause') : (lang === 'vi' ? 'Phát diễn biến' : 'Play')}>
          {bp.play ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14" /></svg> : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4l13 8-13 8z" /></svg>}
          <span>{bp.play ? (lang === 'vi' ? 'Tạm dừng' : 'Pause') : bp.i === last ? (lang === 'vi' ? 'Xem lại' : 'Replay') : (lang === 'vi' ? 'Phát' : 'Play')}</span>
        </button>
        <div className="dots">{b.steps.map((x, k) => <button key={k} className={k === bp.i ? 'on' : k < bp.i ? 'done' : ''} onClick={() => bp.go(k)} aria-label={x.t[lang]} />)}</div>
        <button onClick={() => bp.go(Math.min(last, bp.i + 1))} disabled={bp.i === last} aria-label={lang === 'vi' ? 'Bước sau' : 'Next step'}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg></button>
      </div>
      {bp.i === last && bp.done && (
        <div className="battle-result"><b>{lang === 'vi' ? 'Kết thúc trận đánh' : 'End of the battle'}</b><p>{b.result[lang]}</p></div>
      )}
      <p className="battle-note">{lang === 'vi' ? 'Sơ đồ minh họa, đường hành quân là ước lượng theo các địa danh trong bài.' : 'Illustrative sketch; routes are approximate, drawn through the places named in the text.'}</p>
    </section>
  );
}

function EntryStep({ e, lang, depth, setDepth, seen, bp }: { e: Entry; lang: Lang; depth: Depth; setDepth: (d: Depth) => void; seen: boolean; bp?: BP }) {
  const gl = newSeen();
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLElement>(null);
  const toggle = () => { if (open) requestAnimationFrame(() => foldTo(box.current)); setOpen(!open); };
  const idx = journey.indexOf(e);
  return (
    <section ref={box} className="step" id={'e-' + e.slug} data-step data-era={e.period} data-focus={e.slug} style={{ ['--c' as string]: periodBySlug[e.period].color }}>
      <div className={'panel ev-' + (e.evidence.includes('arch') ? 'arch' : e.evidence.includes('chron') ? 'chron' : 'legend') + (seen ? ' seen' : '')}>
        <p className="eyebrow">{pad(idx + 1)} / {journey.length} - {KIND[e.kind][lang]} - {e.date[lang]}</p>
        <h2>{e.name[lang]}</h2>
        <p className="hook">{hooks[e.slug][lang]}</p>
        <div className="meta"><Badges ev={e.evidence} lang={lang} /><span className="srcn">{lang === 'vi' ? `${e.sources.length} nguồn` : `${e.sources.length} sources`}</span>{e.place && <span>{e.place[lang]}</span>}</div>
        <p className="lead"><Rich text={e.summary[lang]} lang={lang} seen={gl} /></p>
        {bp && <BattlePlayer slug={e.slug} lang={lang} bp={bp} />}
        {/* Mỗi thẻ một hình chính: có mô hình 3D thì ảnh thật nằm trong phần chi tiết, không thì ảnh thật là hình chính */}
        {!e.model && <RealPhoto slug={e.slug} lang={lang} />}
        {e.model && <Model3D kind={e.model} lang={lang} />}
        <OutLinks slug={e.slug} lang={lang} />
        {open && (
          <>
            {e.model && <RealPhoto slug={e.slug} lang={lang} />}
            <Depths depth={depth} setDepth={setDepth} lang={lang} />
            <More detail={e.detail} scholarly={e.scholarly} depth={depth} lang={lang} gl={gl} />
            <SourceList ids={e.sources} lang={lang} />
          </>
        )}
        <div className="cta">
          <button className="ghost" onClick={toggle} aria-expanded={open}>{open ? (lang === 'vi' ? 'Thu gọn' : 'Collapse') : (lang === 'vi' ? 'Đọc chi tiết và nguồn' : 'Read details and sources')}</button>
          <ShareBtn path={'e/' + e.slug} title={e.name[lang]} lang={lang} />
        </div>
      </div>
    </section>
  );
}

// Nút chia sẻ: mở bảng chia sẻ của máy nếu có, không thì chép đường dẫn. Đường dẫn trỏ tới trang riêng của mục để ảnh xem trước đúng mục đó.
function ShareBtn({ path, title, lang }: { path: string; title: string; lang: Lang }) {
  const [done, setDone] = useState(false);
  const url = 'https://vietsutoando.com/' + path + '/';
  const go = async () => {
    try {
      if (navigator.share && matchMedia('(pointer: coarse)').matches) { await navigator.share({ title: title + ' - Việt Sử Toàn Đồ', url }); return; }
      await navigator.clipboard.writeText(url);
      setDone(true); window.setTimeout(() => setDone(false), 2000);
    } catch { /* người xem đóng bảng chia sẻ */ }
  };
  return (
    <button className="ghost share" onClick={go} aria-live="polite">
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M12 3v12M7 8l5-5 5 5M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      {done ? (lang === 'vi' ? 'Đã chép đường dẫn' : 'Link copied') : (lang === 'vi' ? 'Chia sẻ' : 'Share')}
    </button>
  );
}

function OutLinks({ slug, lang }: { slug: string; lang: Lang }) {
  const ls = outLinks[slug];
  if (!ls) return null;
  const groups: ['text' | '3d', string][] = [['text', lang === 'vi' ? 'Văn bản gốc - Wikisource' : 'Original text - Wikisource'], ['3d', lang === 'vi' ? 'Bản quét 3D - Bảo tàng Lịch sử quốc gia' : '3D scan - National Museum of History']];
  return (
    <div className="outl">
      {groups.map(([k, t]) => {
        const g = ls.filter(x => x.kind === k);
        if (!g.length) return null;
        return (
          <div key={k} className={'outg ' + k}>
            <p className="outt">{t}</p>
            <div className="outr">{g.map(x => <a key={x.url} href={x.url} target="_blank" rel="noopener noreferrer" className="outa">{x.label[lang]}<svg aria-hidden="true" viewBox="0 0 12 12" width="11" height="11"><path d="M4 2h6v6M10 2 3 9" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg></a>)}</div>
          </div>
        );
      })}
    </div>
  );
}

// Học theo lớp: các thời kỳ ứng với chương trình từng lớp và một bài ôn 10 câu lấy ngẫu nhiên từ câu hỏi của các thời kỳ đó
function GradeView({ lang, onGo }: { lang: Lang; onGo: (id: string) => void }) {
  const [n, setN] = useState(() => Number(store.get('annalis-grade', '6')) || 6);
  const [run, setRun] = useState(0); // đổi số này để bốc lại bộ câu hỏi
  const g = grades.find((x) => x.n === n)!;
  const pick = (k: number) => { setN(k); setRun(0); store.set('annalis-grade', String(k)); };
  const qs = useMemo(() => {
    if (!run) return [];
    const all = g.periods.flatMap((s) => (quiz[s] || []).map((q) => ({ ...q, from: s })));
    for (let i = all.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [all[i], all[j]] = [all[j], all[i]]; }
    return all.slice(0, 10);
  }, [n, run]);
  return (
    <div className="grade">
      <div className="filters" role="group" aria-label={lang === 'vi' ? 'Chọn lớp' : 'Choose a grade'}>
        {grades.map((x) => <button key={x.n} className={'chip' + (x.n === n ? ' on' : '')} aria-pressed={x.n === n} onClick={() => pick(x.n)}>{lang === 'vi' ? 'Lớp ' + x.n : 'Grade ' + x.n}</button>)}
      </div>
      <p className="lead">{g.topic[lang]}</p>
      <div className="road-items">
        {g.periods.map((s) => <button key={s} onClick={() => onGo('p-' + s)} style={{ ['--c' as string]: periodBySlug[s].color }}>{periodBySlug[s].name[lang]}</button>)}
      </div>
      {!run
        ? <div className="cta"><button className="primary" onClick={() => setRun(1)}>{lang === 'vi' ? `Ôn tập lớp ${n}: 10 câu hỏi` : `Grade ${n} review: 10 questions`}</button></div>
        : <div className="gquiz"><ReviewQuiz key={n + '-' + run} qs={qs} lang={lang} onAgain={() => setRun(run + 1)} /></div>}
      <p className="muted">{lang === 'vi' ? 'Ghép theo phần lịch sử Việt Nam trong Chương trình giáo dục phổ thông 2018 (Thông tư 32/2018/TT-BGDĐT), ở mức chủ đề. Trang không bám một bộ sách giáo khoa cụ thể nên chỉ dùng để đọc thêm và ôn tập, không thay bài học trên lớp.' : 'Matched at topic level to the Vietnamese history content of the 2018 national curriculum (Circular 32/2018/TT-BGDĐT). It follows no particular textbook, so use it for extra reading and review, not in place of lessons.'}</p>
    </div>
  );
}

function Index({ lang, seen, got, here, onGo, bare }: { lang: Lang; seen: Set<string>; got: Set<string>; here: string; onGo: (id: string) => void; bare?: boolean }) {
  const [q, setQ] = useState('');
  const [mode, setMode] = useState<'all' | 'who' | 'life' | 'grade'>('all'); // tất cả, chỉ nhân vật, hoặc biểu đồ dòng đời nhân vật
  const who = mode === 'who' || mode === 'life';
  const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
  const k = norm(q.trim());
  // Khớp theo đầu từ (gõ "hùng" không ra "Phùng Nguyên"); tên thời kỳ khớp thì hiện mọi mục của thời kỳ đó
  const hit = (text: string) => (' ' + norm(text)).includes(' ' + k);
  const match = (e: Entry) => (!who || e.kind === 'figure') && (!k || hit(e.name.vi + ' ' + e.name.en + ' ' + (e.place?.vi || '')) || hit(periodBySlug[e.period].name.vi + ' ' + periodBySlug[e.period].name.en));
  const any = useMemo(() => entries.some(match), [k, who]);
  const nPeriods = periods.filter((p) => !p.theme).length;
  return (
    <>
      {!bare && <p className="eyebrow">{lang === 'vi' ? 'Mục lục toàn bộ' : 'Full index'}</p>}
      {!bare && <h2>{lang === 'vi' ? `${nPeriods} thời kỳ, từ đồ đá đến hôm nay` : `${nPeriods} periods, from stone to today`}</h2>}
      {!q && mode === 'all' && <OnThisDay lang={lang} onGo={onGo} />}
      <input className="search" aria-label={lang === 'vi' ? 'Tìm trong trang' : 'Search this site'} type="search" value={q} onChange={(e) => setQ(e.target.value)}
        placeholder={lang === 'vi' ? 'Tìm di tích, nhân vật, hiện vật' : 'Search sites, people, artefacts'} />
      <div className="filters" role="group" aria-label={lang === 'vi' ? 'Lọc mục lục' : 'Filter the index'}>
        <button className={'chip' + (mode === 'all' ? ' on' : '')} aria-pressed={mode === 'all'} onClick={() => setMode('all')}>{lang === 'vi' ? 'Tất cả' : 'Everything'}</button>
        <button className={'chip' + (mode === 'who' ? ' on' : '')} aria-pressed={mode === 'who'} onClick={() => setMode('who')}>{lang === 'vi' ? `Nhân vật (${entries.filter((e) => e.kind === 'figure').length})` : `People (${entries.filter((e) => e.kind === 'figure').length})`}</button>
        <button className={'chip' + (mode === 'life' ? ' on' : '')} aria-pressed={mode === 'life'} onClick={() => setMode('life')}>{lang === 'vi' ? 'Dòng đời nhân vật' : 'Lifelines'}</button>
        <button className={'chip' + (mode === 'grade' ? ' on' : '')} aria-pressed={mode === 'grade'} onClick={() => setMode('grade')}>{lang === 'vi' ? 'Theo lớp học' : 'By school grade'}</button>
      </div>
      {mode === 'life' && <Lifelines lang={lang} onGo={onGo} />}
      {mode === 'grade' && <GradeView lang={lang} onGo={onGo} />}
      {bare && <p className="muted">{lang === 'vi' ? 'Chạm một mục để tới thẳng đó. Mục có dấu ✓ là mục bạn đã xem.' : 'Tap an item to go straight there. Items marked ✓ are ones you have seen.'}</p>}
      {mode !== 'life' && mode !== 'grade' && !any && <p className="muted">{lang === 'vi' ? 'Không có mục nào khớp. Thử gõ tên khác, ví dụ tên địa danh hoặc tên thời kỳ.' : 'No match. Try another name, such as a place or a period.'}</p>}
      {mode !== 'life' && mode !== 'grade' && <ol className="road">
        {periods.map((p, i) => {
          const list = journey.filter((e) => e.period === p.slug && match(e));
          if ((k || who) && !list.length) return null;
          return (
            <li key={p.slug} className="ready" style={{ ['--c' as string]: p.color }}>
              <button className={'road-head' + (here === 'p-' + p.slug ? ' here' : '')} onClick={() => onGo('p-' + p.slug)}>
                <em>{pad(i + 1)}</em><strong>{p.name[lang]}</strong><span>{p.range[lang]}</span>
              </button>
              <div className="road-items">
                {list.map((e) => (
                  <button key={e.slug} onClick={() => onGo('e-' + e.slug)} className={(seen.has(e.slug) ? 'seen' : '') + (here === 'e-' + e.slug ? ' here' : '')} aria-current={here === 'e-' + e.slug ? 'location' : undefined}>{e.name[lang]}</button>
                ))}
                {!k && !who && <button onClick={() => onGo('q-' + p.slug)} className={'quizlink' + (got.has(p.slug) ? ' got' : '') + (here === 'q-' + p.slug ? ' here' : '')}>{got.has(p.slug) ? badges[p.slug][lang] : (lang === 'vi' ? '3 câu hỏi nhận huy hiệu' : '3 questions for a badge')}</button>}
              </div>
            </li>
          );
        })}
        {!k && !who && upcoming.map((u, i) => (
          <li key={i}>
            <div className="road-head"><em>{pad(i + 1 + periods.length)}</em><strong>{u.name[lang]}</strong><span>{lang === 'vi' ? u.range : u.range.replace(/TCN/g, 'BCE').replace(/tk /g, 'c. ').replace('nay', 'present')} - {T.soon[lang]}</span></div>
          </li>
        ))}
      </ol>}
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
            ? 'Ranh giới ba vùng trên bản đồ là ước lượng để minh họa. Các đường đứt nét đánh dấu những mốc mở đất về phía nam (1069, 1306, 1471, 1611) và sơ đồ hành quân của các trận đánh cũng là đường ước lượng, vẽ theo các địa danh được nêu trong bài. Địa hình trên bản đồ dùng dữ liệu độ cao mở (Terrain Tiles trên AWS, tổng hợp từ SRTM và các nguồn khác). Các mô hình 3D là phỏng dựng giản lược, hiển thị kiểu hologram. Hoa văn mặt trống đồng dùng làm biểu tượng là bản vẽ mặt trống Ngọc Lũ thuộc phạm vi công cộng trên Wikimedia Commons (NgocLu2.gif). Ảnh ở các mục từ là ảnh thật từ Wikimedia Commons, có ghi tác giả và giấy phép dưới mỗi ảnh. Ảnh minh họa đầu mỗi thời kỳ và giọng kể do AI tạo. Âm nền và âm thanh trận đánh được tổng hợp bằng máy, không phải bản ghi nhạc cụ cổ hay trận đánh thật. Nền bản đồ: Natural Earth.'
            : 'Zone boundaries on the map are illustrative. The dashed lines marking the southward expansion (1069, 1306, 1471, 1611) and the battle sketches are approximate too, drawn through the places named in the text. Map terrain uses open elevation data (Terrain Tiles on AWS, compiled from SRTM and other sources). The 3D models are simplified reconstructions shown as holograms. The bronze-drum motif used as the site emblem is a public-domain drawing of the Ngọc Lũ drum face from Wikimedia Commons (NgocLu2.gif). Photos in the entries are real photographs from Wikimedia Commons, credited with author and licence under each one. The illustration opening each period and the narration are AI-generated. Ambient sound and battle sounds are synthesised, not recordings of ancient instruments or real battles. Base map: Natural Earth.'}
        </p>
      </section>
      {groups.map(([g, name]) => (
        <details className="srcgroup" key={g}>
          <summary>{name[lang]} ({sources.filter((s) => s.kind === g).length})</summary>
          <ol className="srclist">
            {sources.filter((s) => s.kind === g).map((s) => (
              <li key={s.id}>{lang === 'en' ? CITE_EN[s.id] ?? s.cite : s.cite} {s.url && <a href={s.url} target="_blank" rel="noreferrer">{T.open[lang]}</a>}</li>
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
    const opener = document.activeElement as HTMLElement | null;
    x.current?.focus();
    document.querySelector('.drawer .here')?.scrollIntoView({ block: 'center', behavior: 'instant' as ScrollBehavior });
    const k = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key !== 'Tab') return;
      // Giữ tiêu điểm bàn phím trong mục lục
      const f = [...document.querySelectorAll<HTMLElement>('.drawer-body button, .drawer-body input, .drawer-body a')].filter((el) => el.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    window.addEventListener('keydown', k);
    document.documentElement.classList.add('locked');
    return () => { window.removeEventListener('keydown', k); document.documentElement.classList.remove('locked'); opener?.focus?.({ preventScroll: true }); };
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
  const [lang, setLangS] = useState<Lang>(() => {
    // Mặc định tiếng Việt. Bản Anh mở bằng ?lang=en hoặc khi người xem đã tự chọn EN trước đó
    const q = new URLSearchParams(location.search).get('lang');
    if (q === 'vi' || q === 'en') return q;
    const saved = store.get('annalis-lang', '');
    if (saved === 'vi' || saved === 'en') return saved;
    return 'vi';
  });
  const [depth, setDepthS] = useState<Depth>(() => store.get('annalis-depth', 'full') as Depth);
  const [seen, setSeen] = useState<Set<string>>(() => new Set(store.get('annalis-seen', '').split(',').filter((s) => entryBySlug[s])));
  const [got, setGot] = useState<Set<string>>(() => new Set(store.get('annalis-badges', '').split(',').filter((s) => periodBySlug[s])));
  const [active, setActive] = useState<{ id: string; era: string | null; focus: string | null }>({ id: 'top', era: null, focus: null });
  const [auto, setAuto] = useState(false);
  const [snd, setSnd] = useState(false);
  const [toc, setToc] = useState(false);
  const [resume] = useState(() => { const r = store.get('annalis-last', ''); return STEPS.find((x) => x.id === r && x.id !== 'top') || null; });
  const split = useMedia(SPLIT);
  // Biểu tượng mặt trống: dùng bản vẽ giản lược trước, đổi sang hoa văn thật của trống Ngọc Lũ khi tải xong
  const [mark, setMark] = useState(drumUrl);
  // Diễn biến trận đánh: bước đang xem và tự phát
  const [bs, setBs] = useState({ slug: '', i: 0, play: false });
  const [bDone, setBDone] = useState(false);
  useEffect(() => {
    setBDone(false);
    const b = BATTLES[bs.slug]; if (!b) return;
    const t = window.setTimeout(() => setBDone(true), matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : stepMs(b.steps[bs.i].units.length) + 1200);
    return () => window.clearTimeout(t);
  }, [bs.slug, bs.i]);
  // Màn mở đầu thời kỳ: hiện khi thời kỳ đang xem đổi sang một thời kỳ khác (không hiện ở phần mở đầu trang)
  const [eraCard, setEraCard] = useState<{ era: string; prev: string | null; n: number } | null>(null);
  const lastEra = useRef<string | null>(null);
  useEffect(() => { let on = true; loadDrumFace().then((cv) => { if (on) setMark(cv.toDataURL('image/png')); }); return () => { on = false; }; }, []);
  const [intro, setIntro] = useState(() => { try { return !sessionStorage.getItem('vstd-intro') && !location.hash; } catch { return false; } });
  useEffect(() => {
    if (!intro) return;
    try { sessionStorage.setItem('vstd-intro', '1'); } catch { /* bỏ qua */ }
    // Màn mở đầu đứng yên cho tới khi người xem chạm, cuộn hoặc bấm phím
    const close = () => setIntro(false);
    const onKey = (e: KeyboardEvent) => { if (e.key !== 'Tab') close(); };
    window.addEventListener('wheel', close, { passive: true });
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('wheel', close); window.removeEventListener('keydown', onKey); };
  }, [intro]);
  // Mỗi phần có đường dẫn riêng (#p-..., #e-...) để chia sẻ; mở đường dẫn đó là tới thẳng phần ấy
  useEffect(() => {
    const id = location.hash.slice(1);
    if (id && STEPS.some((x) => x.id === id)) window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'start' }), 350);
  }, []);
  useEffect(() => {
    const h = () => { const id = location.hash.slice(1); if (id && STEPS.some((x) => x.id === id)) jump(id); };
    window.addEventListener('hashchange', h);
    return () => window.removeEventListener('hashchange', h);
  }, []);
  // Lần đầu mở trang bằng đường dẫn có #id thì giữ nguyên địa chỉ cho tới khi phần đó hiện ra
  const keepHash = useRef(!!location.hash);
  useEffect(() => {
    if (active.id === 'top' && keepHash.current) return;
    keepHash.current = false;
    try { history.replaceState(null, '', active.id === 'top' ? location.pathname : '#' + active.id); } catch { /* bỏ qua */ }
  }, [active.id]);
  // Thẻ nội dung hiện dần lên khi cuộn tới
  useEffect(() => {
    const io = new IntersectionObserver((list) => list.forEach((e) => { if (e.isIntersecting) (e.target as HTMLElement).dataset.in = '1'; }), { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.panel').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  const setLang = (l: Lang) => { setLangS(l); store.set('annalis-lang', l); };
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === 'vi' ? 'Việt Sử Toàn Đồ - Lịch sử Việt Nam kể trên bản đồ' : 'Việt Sử Toàn Đồ - The history of Vietnam, told on a map';
  }, [lang]);
  const setDepth = (d: Depth) => { setDepthS(d); store.set('annalis-depth', d); };
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  // Phần nào đang nằm giữa màn hình thì bản đồ theo phần đó
  useEffect(() => {
    const io = new IntersectionObserver((list) => {
      list.forEach((e) => {
        if (!e.isIntersecting) return;
        const d = (e.target as HTMLElement).dataset;
        e.target.querySelectorAll<HTMLElement>('.panel').forEach((p) => { p.dataset.in = '1'; }); // phần đang đọc luôn hiện, kể cả khi hiệu ứng chưa kịp chạy
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
  useEffect(() => {
    const f = active.focus;
    if (f && BATTLES[f] && bs.slug !== f) setBs({ slug: f, i: 0, play: !matchMedia('(prefers-reduced-motion: reduce)').matches });
  }, [active.focus]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!bs.play || !BATTLES[bs.slug]) return;
    const last = BATTLES[bs.slug].steps.length - 1;
    const t = window.setTimeout(() => setBs((b) => (b.i < last ? { ...b, i: b.i + 1 } : { ...b, play: false })), stepMs(BATTLES[bs.slug].steps[bs.i].units.length) + 3200);
    return () => window.clearTimeout(t);
  }, [bs]);
  // Âm thanh theo từng bước trận đánh (chỉ khi người xem đã bật âm thanh)
  useEffect(() => {
    if (!snd || bs.slug !== active.focus) return;
    const b = BATTLES[bs.slug]; if (!b) return;
    const st = b.steps[bs.i]; if (!st) return;
    const kinds = new Set(st.units.map((u) => u.kind));
    sound.battle({
      army: kinds.has('army'), fleet: kinds.has('fleet'), air: kinds.has('air'), clash: !!st.clash?.length,
      lose: st.units.some((u) => u.fate === 'lose'), tide: st.tide, modern: !!b.modern || b.steps.some((x) => x.units.some((u) => u.kind === 'air')),
      last: bs.i === b.steps.length - 1, dur: stepMs(st.units.length),
    });
  }, [bs.slug, bs.i, snd, active.focus]); // eslint-disable-line react-hooks/exhaustive-deps
  const bpFor = (slug: string): BP | undefined => {
    const b = BATTLES[slug]; if (!b) return undefined;
    const mine = bs.slug === slug;
    return {
      i: mine ? bs.i : 0, play: mine && bs.play, done: mine && bDone,
      go: (i) => setBs({ slug, i, play: false }),
      toggle: () => setBs((x) => {
        const cur = x.slug === slug ? x : { slug, i: 0, play: false };
        if (cur.play) return { ...cur, play: false };
        return { slug, i: cur.i >= b.steps.length - 1 ? 0 : cur.i, play: true };
      }),
    };
  };
  useEffect(() => {
    // Chờ thời kỳ đứng yên một chút rồi mới hiện, để khi nhảy xa qua nhiều thời kỳ chỉ hiện một lần
    if (!active.era || active.era === lastEra.current) return;
    const era = active.era;
    const t1 = window.setTimeout(() => {
      const prev = lastEra.current; lastEra.current = era;
      setEraCard((c) => ({ era, prev, n: (c?.n || 0) + 1 }));
      if (snd) sound.hit('drum');
    }, 280);
    const t2 = window.setTimeout(() => setEraCard((c) => (c && c.era === era ? null : c)), 280 + 2600);
    return () => { window.clearTimeout(t1); window.clearTimeout(t2); };
  }, [active.era]); // eslint-disable-line react-hooks/exhaustive-deps
  // Kéo dải thời kỳ tới thời kỳ đang xem. Chỉ cuộn ngang bên trong dải, không dùng scrollIntoView vì nó có thể làm xê dịch cả trang.
  useEffect(() => {
    const btn = document.querySelector<HTMLElement>('.scrub button.on'), sc = btn?.parentElement;
    if (btn && sc) sc.scrollTo({ left: btn.offsetLeft - sc.clientWidth / 2 + btn.clientWidth / 2, behavior: 'smooth' });
  }, [active.era]);

  // Tự cuộn: trang trôi đều xuống như phụ đề phim, dừng ngay khi người xem chạm, lăn chuột hoặc bấm phím
  useEffect(() => {
    if (!auto) return;
    const speed = split ? 48 : 66; // điểm ảnh mỗi giây
    let raf = 0, last = 0, acc = 0;
    const tick = (ms: number) => {
      if (last) {
        acc += Math.min((ms - last) / 1000, 0.1) * speed;
        const d = Math.floor(acc);
        if (d >= 1) {
          acc -= d;
          window.scrollBy({ top: d, behavior: 'instant' as ScrollBehavior });
          if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) { setAuto(false); return; }
        }
      }
      last = ms;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const stop = (e: Event) => { if (e.type === 'keydown' && (e.target as HTMLElement).closest?.('.autob')) return; setAuto(false); };
    window.addEventListener('wheel', stop, { passive: true });
    window.addEventListener('touchstart', stop, { passive: true });
    window.addEventListener('keydown', stop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('wheel', stop);
      window.removeEventListener('touchstart', stop);
      window.removeEventListener('keydown', stop);
    };
  }, [auto, split]);

  const toggleSound = () => { if (snd) { sound.disable(); setSnd(false); } else setSnd(sound.enable()); };
  const pass = (slug: string) => {
    if (got.has(slug)) return;
    const n = new Set(got); n.add(slug); setGot(n); store.set('annalis-badges', [...n].join(','));
  };
  const fe = active.focus ? entryBySlug[active.focus] : null;
  const fp = active.era ? periodBySlug[active.era] : null;
  const coord = fe?.coord
    ? (lang === 'vi'
      ? `${fe.coord[1].toFixed(2).replace('.', ',')}° B - ${fe.coord[0].toFixed(2).replace('.', ',')}° Đ`
      : `${fe.coord[1].toFixed(2)}° N - ${fe.coord[0].toFixed(2)}° E`)
    : '';
  const color = active.era ? periodBySlug[active.era].color : '#e6b450';

  return (
    <div className="app" style={{ ['--c' as string]: color }}>
      <Stage lang={lang} era={active.era} focus={active.focus} sheet={!split && active.focus ? 1 : 0} split={split} onPick={(s) => jump('e-' + s)} bstep={bs.slug === active.focus ? bs.i : 0} />
      <div className="shade" />

      <header className="bar">
        <button className="brand" onClick={() => jump('top')}><img className="mark" src={mark} alt="" /><span>VIỆT SỬ TOÀN ĐỒ</span></button>
        <button className="pill progress" onClick={() => setToc(true)} aria-haspopup="dialog" aria-label={lang === 'vi' ? `Mở mục lục, đã xem ${seen.size} trên ${journey.length} mục` : `Open contents, ${seen.size} of ${journey.length} explored`}>
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

      {(() => {
        const b = active.focus && bs.slug === active.focus ? BATTLES[active.focus] : null;
        if (!b) return null;
        const st = b.steps[bs.i], last = bs.i === b.steps.length - 1;
        return (
          <>
            {!(last && bDone) && <div className="bcap" key={bs.slug + bs.i} aria-hidden="true" style={{ ['--c' as string]: periodBySlug[active.era || '']?.color || '#e6b450' }}>
              <p className="n">{bs.i === 0 ? (lang === 'vi' ? 'Bắt đầu - ' : 'Start - ') : ''}{lang === 'vi' ? 'Bước' : 'Step'} {bs.i + 1}/{b.steps.length} - {st.t[lang]}</p>
              <p>{st.text[lang]}</p>
            </div>}
            {last && bDone && (
              <div className="bresult" style={{ ['--c' as string]: periodBySlug[active.era || '']?.color || '#e6b450' }}>
                <p className="n">{lang === 'vi' ? 'Kết thúc trận đánh' : 'End of the battle'}</p>
                <p>{b.result[lang]}</p>
                <button onClick={() => setBs({ slug: bs.slug, i: 0, play: true })}>{lang === 'vi' ? 'Xem lại từ đầu' : 'Watch again'}</button>
              </div>
            )}
          </>
        );
      })()}
      {eraCard && <EraCard key={eraCard.n} era={eraCard.era} prev={eraCard.prev} lang={lang} mark={mark} />}
      {(fe || fp) && (
        <aside className={`hud${active.focus && BATTLES[active.focus] ? ' in-battle' : ''}`} aria-hidden="true" key={active.id}>
          {fe ? (
            <>
              {coord && <p><span>{lang === 'vi' ? 'Tọa độ' : 'Position'}</span><b>{coord}</b></p>}
              <p><span>{lang === 'vi' ? 'Niên đại' : 'Date'}</span><b>{fe.date[lang]}</b></p>
            </>
          ) : (
            <p><span>{lang === 'vi' ? 'Thời kỳ' : 'Period'}</span><b>{fp!.range[lang]}</b></p>
          )}
        </aside>
      )}

      <main className="flow">
        <section className="step hero" id="top" data-step>
          <div className="panel bare">
            <p className="eyebrow">{lang === 'vi' ? 'Lịch sử Việt Nam' : 'History of Vietnam'}</p>
            <h1>{lang === 'vi' ? <>800.000 năm<br />kể trên một tấm bản đồ</> : <>800,000 years<br />told on one map</>}</h1>
            <p className="lead">
              {lang === 'vi'
                ? 'Cuộn xuống để đi qua lịch sử Việt Nam từ chiếc rìu đá đầu tiên. Bản đồ sẽ đổi theo từng thời kỳ và bay tới từng di tích. Bạn cũng có thể chạm vào một cột sáng trên bản đồ để tới thẳng di tích đó.'
                : 'Vietnam lies on the eastern edge of mainland Southeast Asia, between China and the sea. Scroll down to travel through its history from the first stone axe. The map changes with each period and flies to each site. You can also tap a beam of light on the map to go straight to that site.'}
            </p>
            <div className="cta">
              {resume && <button className="primary" onClick={() => jump(resume.id)}>{lang === 'vi' ? 'Đọc tiếp: ' : 'Continue: '}{resume.title[lang]}</button>}
              <button className={resume ? 'ghost' : 'primary'} onClick={() => jump('p-' + periods[0].slug)}>{lang === 'vi' ? 'Bắt đầu từ thời đồ đá' : 'Start from the Stone Age'}</button>
              {periodBySlug['bien-dao'] && <button className="ghost sea" onClick={() => jump('p-bien-dao')}>{lang === 'vi' ? 'Chuyên đề: Hoàng Sa - Trường Sa' : 'Topic: Hoàng Sa and Trường Sa'}</button>}
              <button className="ghost" onClick={() => setAuto(true)}>{lang === 'vi' ? 'Tự cuộn trang' : 'Auto-scroll'}</button>
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
              <EntryStep key={e.slug} e={e} lang={lang} depth={depth} setDepth={setDepth} seen={seen.has(e.slug)} bp={bpFor(e.slug)} />
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

      {intro && (
        <button className="intro" onClick={() => setIntro(false)} aria-label={lang === 'vi' ? 'Bỏ qua phần mở đầu' : 'Skip the opening'}>
          <img src={mark} alt="" />
          <strong>VIỆT SỬ TOÀN ĐỒ</strong>
          <span>{lang === 'vi' ? '800.000 năm lịch sử Việt Nam, kể trên một tấm bản đồ' : '800,000 years of Vietnamese history, told on one map'}</span>
          <em>{lang === 'vi' ? 'Chạm để vào' : 'Tap to enter'}</em>
        </button>
      )}
      <nav className="dock" aria-label={lang === 'vi' ? 'Di chuyển trong trang' : 'Page navigation'}>
        {/* Dải 23 thời kỳ luôn hiện: thời kỳ đã có nội dung mang màu của nó, thời kỳ sắp có để mờ */}
        <div className="eras" role="presentation">
          {periods.map((p) => (
            <button key={p.slug} tabIndex={-1} aria-hidden="true" onClick={() => jump('p-' + p.slug)} className={active.era === p.slug ? 'on' : ''} style={{ ['--c' as string]: p.color }} />
          ))}
          {upcoming.map((u, i) => <i key={i} />)}
        </div>
        <button className="navb" onClick={() => go(-1)} disabled={idx <= 0} aria-label={lang === 'vi' ? 'Phần trước' : 'Previous section'}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg><span>{lang === 'vi' ? 'Trước' : 'Back'}</span>
        </button>
        <div className="scrub">
          {periods.map((p) => (
            <button key={p.slug} onClick={() => jump('p-' + p.slug)} className={active.era === p.slug ? 'on' : ''} style={{ ['--c' as string]: p.color }}>
              <i /><b>{p.name[lang]}</b><span>{(START[p.slug] || p.start || p.range)[lang]}</span>
            </button>
          ))}
          {upcoming.length > 0 && <button onClick={() => jump('lo-trinh')} className="more"><i /><b>+{upcoming.length}</b><span>{T.soon[lang]}</span></button>}
        </div>
        <button className="herebtn" onClick={() => setToc(true)} aria-haspopup="dialog">
          <small>{idx + 1}/{STEPS.length} - {lang === 'vi' ? 'chạm để mở mục lục' : 'tap for contents'}</small>
          <b>{STEPS[idx].title[lang]}</b>
        </button>
  <button className={'autob' + (auto ? ' on' : '')} onClick={() => setAuto(!auto)} aria-pressed={auto} aria-label={auto ? (lang === 'vi' ? 'Dừng tự cuộn' : 'Stop auto-scroll') : (lang === 'vi' ? 'Tự cuộn trang' : 'Auto-scroll the page')}>
        <svg viewBox="0 0 24 24" aria-hidden="true">{auto ? <path d="M7 5h4v14H7zM13 5h4v14h-4z" /> : <path d="M8 5l11 7-11 7z" />}</svg>
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

    </div>
  );
}
