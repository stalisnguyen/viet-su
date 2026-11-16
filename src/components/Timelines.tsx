import type { Entry, Lang } from '../data/types';
import { entries } from '../data/entries';
import { periodBySlug } from '../data/periods';

// Đọc mốc năm từ chuỗi ngày tháng tiếng Việt của mục ("1228 - 1300", "mất năm 1300", "207 - 137 TCN").
// Bỏ phần ngày/tháng ("27/1/1973" chỉ lấy 1973). Trả về [bắt đầu, kết thúc] hoặc null nếu không có năm.
export function yearsOf(date: string): [number, number] | null {
  const bce = /TCN/.test(date);
  const clean = date.replace(/\b\d{1,2}\/\d{1,2}\/(\d{3,4})\b/g, '$1').replace(/\b\d{1,2}\/\d{1,2}\b/g, '').replace(/thế kỷ \d+/g, '');
  let ys = [...clean.matchAll(/\d{1,4}/g)].map((m) => +m[0] * (bce ? -1 : 1)).filter((y) => Math.abs(y) > 0);
  // có năm từ 100 trở lên thì bỏ các số nhỏ lẫn vào (số thứ tự, số tuổi)
  if (ys.some((y) => Math.abs(y) >= 100)) ys = ys.filter((y) => Math.abs(y) >= 100);
  if (!ys.length) return null;
  return [Math.min(...ys), Math.max(...ys)];
}

// Thang thời gian hai đoạn: trước năm 800 nén lại (ít nhân vật, ít mốc), từ 800 đến nay giãn ra để thanh đời người đủ dài mà đọc
const Y0 = -300, YB = 800, Y1 = 2030, PB = 18;
const pct = (y: number) => {
  const v = Math.max(Y0, Math.min(Y1, y));
  return v < YB ? ((v - Y0) / (YB - Y0)) * PB : PB + ((v - YB) / (Y1 - YB)) * (100 - PB);
};
const TICKS = [800, 1200, 1600, 2000];

export function Lifelines({ lang, onGo }: { lang: Lang; onGo: (id: string) => void }) {
  const rows = entries
    .filter((e) => e.kind === 'figure')
    .map((e) => ({ e, y: yearsOf(e.date.vi) }))
    .filter((r): r is { e: Entry; y: [number, number] } => !!r.y)
    .sort((a, b) => a.y[0] - b.y[0]);
  return (
    <div className="life" role="list">
      <p className="muted">{lang === 'vi' ? 'Mỗi thanh là khoảng năm ghi ở mục đó: có mục là đời người, có mục là thời gian trị vì hay hoạt động. Các thanh chồng lên nhau theo chiều dọc là người cùng thời. Thang thời gian trước năm 800 được nén lại cho gọn. Chạm để tới mục.' : 'Each bar spans the years given in that entry: a lifetime for some, a reign or period of activity for others. Bars that overlap vertically were contemporaries. The scale before 800 CE is compressed. Tap to open.'}</p>
      <div className="life-axis" aria-hidden="true">
        {TICKS.map((t) => <span key={t} style={{ left: pct(t) + '%' }}>{t < 0 ? (lang === 'vi' ? `${-t} TCN` : `${-t} BCE`) : t}</span>)}
      </div>
      {rows.map(({ e, y }, i) => {
        const a = pct(y[0]), b = pct(y[1]), w = Math.max(1.6, b - a);
        return (
          <button key={e.slug} role="listitem" className="life-row" onClick={() => onGo('e-' + e.slug)} style={{ ['--c' as string]: periodBySlug[e.period].color, ['--d' as string]: `${Math.min(i, 30) * 40}ms` }}>
            <b>{e.name[lang]}</b>
            <span className="life-track">
              {TICKS.map((t) => <i key={t} style={{ left: pct(t) + '%' }} />)}
              <span className="life-bar" style={{ left: a + '%', width: w + '%' }} />
              <em style={{ left: Math.min(a, 72) + '%' }}>{e.date[lang]}</em>
            </span>
          </button>
        );
      })}
    </div>
  );
}

// "Ngày này trong lịch sử": tìm các mục có ghi ngày cụ thể trùng hôm nay, nếu không có thì lấy những ngày sắp tới trong 3 tuần
interface DayHit { e: Entry; d: number; m: number; y: number }
function dayHits(): DayHit[] {
  const out: DayHit[] = [];
  entries.forEach((e) => {
    const s = e.date.vi;
    // "18 - 29/12/1972" -> ngày đầu của khoảng; "10/3 - 30/4/1975" và "27/1/1973"
    const yAll = [...s.matchAll(/\/(\d{3,4})\b/g)].map((m) => +m[1]);
    const lastY = yAll.length ? yAll[yAll.length - 1] : 0;
    const span = s.match(/\b(\d{1,2}) - \d{1,2}\/(\d{1,2})\/(\d{3,4})/);
    if (span) out.push({ e, d: +span[1], m: +span[2], y: +span[3] });
    for (const m of s.matchAll(/\b(\d{1,2})\/(\d{1,2})(?:\/(\d{3,4}))?/g)) {
      const d = +m[1], mo = +m[2], y = m[3] ? +m[3] : lastY;
      if (d >= 1 && d <= 31 && mo >= 1 && mo <= 12 && y) out.push({ e, d, m: mo, y });
    }
  });
  const seen = new Set<string>();
  return out.filter((h) => { const k = h.e.slug + h.d + '/' + h.m; if (seen.has(k)) return false; seen.add(k); return true; });
}
// mỗi mục chỉ hiện một lần, lấy ngày gần nhất
function firstPer(list: DayHit[]) {
  const seen = new Set<string>();
  return list.filter((h) => (seen.has(h.e.slug) ? false : (seen.add(h.e.slug), true)));
}

export function OnThisDay({ lang, onGo }: { lang: Lang; onGo: (id: string) => void }) {
  const now = new Date(), y = now.getFullYear();
  const hits = dayHits();
  const ahead = (h: DayHit) => {
    let t = new Date(y, h.m - 1, h.d).getTime();
    const today = new Date(y, now.getMonth(), now.getDate()).getTime();
    if (t < today) t = new Date(y + 1, h.m - 1, h.d).getTime();
    return Math.round((t - today) / 864e5);
  };
  const today = firstPer(hits.filter((h) => ahead(h) === 0));
  const soon = firstPer(hits.filter((h) => ahead(h) > 0 && ahead(h) <= 21).sort((a, b) => ahead(a) - ahead(b))).slice(0, 2);
  const list = today.length ? today.slice(0, 3) : soon;
  if (!list.length) return null;
  const head = today.length ? (lang === 'vi' ? 'Ngày này trong lịch sử' : 'On this day') : (lang === 'vi' ? 'Sắp tới trong lịch sử' : 'Coming up in history');
  return (
    <div className="otd">
      <p className="eyebrow">{head}</p>
      {list.map((h) => (
        <button key={h.e.slug + h.d + h.m} onClick={() => onGo('e-' + h.e.slug)} style={{ ['--c' as string]: periodBySlug[h.e.period].color }}>
          <span className="otd-date"><b>{h.d}</b>{lang === 'vi' ? `/${h.m}` : ` ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][h.m - 1]}`}<i>{h.y}</i></span>
          <span className="otd-name">{h.e.name[lang]}{!today.length && <em>{lang === 'vi' ? ` còn ${ahead(h)} ngày` : ` in ${ahead(h)} days`}</em>}</span>
        </button>
      ))}
    </div>
  );
}
