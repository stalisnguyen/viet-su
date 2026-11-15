// Âm thanh tổng hợp bằng Web Audio, không dùng tệp ghi âm. Chỉ bật sau khi người xem bấm nút.
type Amb = { stop: () => void };

const SET: Record<string, { f: number; wind: number }> = {
  intro: { f: 110, wind: 0.22 },
  'do-da': { f: 73.4, wind: 0.5 },
  'kim-khi': { f: 98, wind: 0.2 },
  'van-lang': { f: 110, wind: 0.28 },
  'au-lac': { f: 65.4, wind: 0.34 },
};
const PENTA = [1, 1.125, 1.333, 1.5, 1.6875, 2];

class Sound {
  private ctx: AudioContext | null = null;
  private master!: GainNode;
  private brown!: AudioBuffer;
  private white!: AudioBuffer;
  private amb: Amb | null = null;
  private era: string | undefined;
  on = false;

  enable() {
    try {
      if (!this.ctx) {
        const C = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const c = (this.ctx = new C());
        this.master = c.createGain();
        this.master.gain.value = 0;
        this.master.connect(c.destination);
        const make = (brown: boolean) => {
          const b = c.createBuffer(1, c.sampleRate * 2, c.sampleRate);
          const d = b.getChannelData(0);
          let last = 0;
          for (let i = 0; i < d.length; i++) {
            const w = Math.random() * 2 - 1;
            if (brown) { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; } else d[i] = w;
          }
          return b;
        };
        this.brown = make(true);
        this.white = make(false);
      }
      void this.ctx.resume();
      this.master.gain.cancelScheduledValues(this.ctx.currentTime);
      this.master.gain.linearRampToValueAtTime(0.6, this.ctx.currentTime + 0.8);
      this.on = true;
      return true;
    } catch {
      this.on = false;
      return false;
    }
  }

  disable() {
    this.on = false;
    this.era = undefined;
    this.amb?.stop();
    this.amb = null;
    if (this.ctx) this.master.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.5);
  }

  setEra(era: string | null) {
    const key = era || 'intro';
    if (!this.ctx || !this.on || key === this.era) return;
    this.era = key;
    this.amb?.stop();
    this.amb = this.build(key);
  }

  private tone(dest: AudioNode, freq: number, dur: number, gain: number, type: OscillatorType = 'sine', partials = [1]) {
    const c = this.ctx!, t = c.currentTime;
    partials.forEach((m, i) => {
      const o = c.createOscillator(), g = c.createGain();
      o.type = type;
      o.frequency.value = freq * m;
      g.gain.setValueAtTime(gain / (i + 1), t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur / (1 + i * 0.4));
      o.connect(g).connect(dest);
      o.start(t);
      o.stop(t + dur);
    });
  }

  private burst(dest: AudioNode, dur: number, gain: number, type: BiquadFilterType, f0: number, f1 = f0) {
    const c = this.ctx!, t = c.currentTime;
    const n = c.createBufferSource(), fl = c.createBiquadFilter(), g = c.createGain();
    n.buffer = this.white;
    fl.type = type;
    fl.frequency.setValueAtTime(f0, t);
    fl.frequency.exponentialRampToValueAtTime(f1, t + dur);
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    n.connect(fl).connect(g).connect(dest);
    n.start(t, Math.random());
    n.stop(t + dur + 0.02);
  }

  private thump(dest: AudioNode, gain: number) {
    const c = this.ctx!, t = c.currentTime;
    const o = c.createOscillator(), g = c.createGain();
    o.frequency.setValueAtTime(120, t);
    o.frequency.exponentialRampToValueAtTime(46, t + 0.28);
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.6);
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(t + 0.65);
    this.burst(dest, 0.04, gain * 0.5, 'lowpass', 900);
  }

  private build(key: string): Amb {
    const c = this.ctx!, P = SET[key] || SET.intro;
    const out = c.createGain();
    out.gain.value = 0;
    out.connect(this.master);
    out.gain.linearRampToValueAtTime(1, c.currentTime + 2);
    const srcs: AudioScheduledSourceNode[] = [];
    [1, 1.5, 2.005].forEach((m, i) => {
      const o = c.createOscillator(), g = c.createGain();
      o.type = i ? 'sine' : 'triangle';
      o.frequency.value = P.f * m;
      g.gain.value = [0.09, 0.05, 0.03][i];
      o.connect(g).connect(out);
      o.start();
      srcs.push(o);
    });
    const n = c.createBufferSource(), lp = c.createBiquadFilter(), ng = c.createGain();
    n.buffer = this.brown;
    n.loop = true;
    lp.type = 'lowpass';
    lp.frequency.value = 520;
    ng.gain.value = P.wind;
    n.connect(lp).connect(ng).connect(out);
    n.start();
    srcs.push(n);

    let alive = true;
    const every = (ms: number, jitter: number, fn: () => void) => {
      const loop = () => { if (!alive) return; fn(); window.setTimeout(loop, ms * (1 - jitter / 2 + Math.random() * jitter)); };
      window.setTimeout(loop, ms * Math.random());
    };
    const pick = () => PENTA[Math.floor(Math.random() * PENTA.length)];
    if (key === 'do-da') every(170, 1.4, () => this.burst(out, 0.03 + Math.random() * 0.04, 0.05 + Math.random() * 0.1, 'highpass', 1800));
    if (key === 'kim-khi') every(2600, 1, () => this.tone(out, 392 * pick(), 2.2, 0.05, 'sine', [1, 2.76, 5.4]));
    if (key === 'van-lang') every(1300, 1, () => this.tone(out, 220 * pick(), 1.1, 0.07, 'triangle'));
    if (key === 'au-lac') every(1700, 0.1, () => this.thump(out, 0.3));
    if (key === 'intro') every(4200, 1, () => this.tone(out, 330 * pick(), 2.6, 0.04));

    return {
      stop: () => {
        alive = false;
        out.gain.cancelScheduledValues(c.currentTime);
        out.gain.setValueAtTime(out.gain.value, c.currentTime);
        out.gain.linearRampToValueAtTime(0, c.currentTime + 1.2);
        window.setTimeout(() => { srcs.forEach((s) => { try { s.stop(); } catch { /* đã dừng */ } }); out.disconnect(); }, 1400);
      },
    };
  }

  hit(kind: 'drum' | 'step' | 'ok' | 'no') {
    if (!this.ctx || !this.on) return;
    const d = this.master;
    if (kind === 'drum') { this.thump(d, 0.7); this.tone(d, 196, 1.8, 0.12, 'sine', [1, 1.5, 2.76]); }
    if (kind === 'step') this.burst(d, 0.4, 0.12, 'bandpass', 300, 1600);
    if (kind === 'ok') { this.tone(d, 660, 0.5, 0.12); window.setTimeout(() => this.tone(d, 880, 0.7, 0.12), 110); }
    if (kind === 'no') this.tone(d, 185, 0.35, 0.14, 'triangle');
  }
}

export const sound = new Sound();
