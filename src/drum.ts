// Mặt trống đồng Đông Sơn vẽ giản lược bằng nét: ngôi sao 14 cánh ở giữa, các vành tròn đồng tâm,
// vành chấm tròn, vành răng cưa, vành vạch chéo và vành chim bay ngược chiều kim đồng hồ.
// Đây là họa tiết gợi theo bố cục mặt trống Ngọc Lũ, không phải bản dập chính xác.
export function drawDrum(g: CanvasRenderingContext2D, S: number, color = '#fff') {
  const c = S / 2, lw = Math.max(1, S / 300);
  g.clearRect(0, 0, S, S);
  g.strokeStyle = color; g.fillStyle = color; g.lineWidth = lw; g.lineJoin = 'round';
  const ring = (r: number, w = lw) => { g.lineWidth = w; g.beginPath(); g.arc(c, c, r * S, 0, Math.PI * 2); g.stroke(); g.lineWidth = lw; };
  const pt = (r: number, a: number): [number, number] => [c + Math.cos(a) * r * S, c + Math.sin(a) * r * S];
  // Ngôi sao 14 cánh
  g.beginPath();
  for (let i = 0; i < 28; i++) { const [x, y] = pt(i % 2 ? 0.075 : 0.2, (i / 28) * Math.PI * 2 - Math.PI / 2); i ? g.lineTo(x, y) : g.moveTo(x, y); }
  g.closePath(); g.fill();
  ring(0.045, lw * 2);
  [0.212, 0.25, 0.3, 0.36, 0.398, 0.46, 0.49].forEach((r) => ring(r, r > 0.48 ? lw * 2.2 : lw));
  // Vành chấm tròn có tâm
  for (let i = 0; i < 44; i++) { const [x, y] = pt(0.275, (i / 44) * Math.PI * 2); g.beginPath(); g.arc(x, y, S * 0.011, 0, 7); g.stroke(); g.beginPath(); g.arc(x, y, S * 0.003, 0, 7); g.fill(); }
  // Vành răng cưa
  const saw = (r0: number, r1: number, n: number) => {
    g.beginPath();
    for (let i = 0; i <= n * 2; i++) { const [x, y] = pt(i % 2 ? r1 : r0, (i / (n * 2)) * Math.PI * 2); i ? g.lineTo(x, y) : g.moveTo(x, y); }
    g.stroke();
  };
  saw(0.305, 0.355, 52);
  // Vành vạch chéo
  for (let i = 0; i < 110; i++) { const a = (i / 110) * Math.PI * 2, [x0, y0] = pt(0.364, a), [x1, y1] = pt(0.394, a + 0.035); g.beginPath(); g.moveTo(x0, y0); g.lineTo(x1, y1); g.stroke(); }
  // Vành chim bay: thân dài, mỏ dài, cánh xòe
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    g.save(); g.translate(...pt(0.429, a)); g.rotate(a - Math.PI / 2); g.scale(S / 512, S / 512);
    g.beginPath(); g.ellipse(0, 0, 17, 4.5, 0, 0, 7); g.fill();
    g.beginPath(); g.moveTo(15, -2); g.lineTo(38, 0); g.lineTo(15, 2); g.fill(); // mỏ
    g.beginPath(); g.moveTo(-15, 0); g.lineTo(-30, -6); g.lineTo(-27, 0); g.lineTo(-30, 6); g.closePath(); g.fill(); // đuôi
    g.beginPath(); g.moveTo(4, -3); g.lineTo(-10, -13); g.lineTo(-6, -3); g.closePath(); g.fill(); // cánh
    g.beginPath(); g.moveTo(4, 3); g.lineTo(-10, 13); g.lineTo(-6, 3); g.closePath(); g.fill();
    g.restore();
  }
  saw(0.487, 0.464, 64);
}

let cache = '';
// Ảnh mặt trống dùng cho phần giao diện (biểu tượng, màn mở đầu)
export function drumUrl() {
  if (cache) return cache;
  const cv = document.createElement('canvas');
  cv.width = cv.height = 512;
  drawDrum(cv.getContext('2d')!, 512);
  cache = cv.toDataURL('image/png');
  return cache;
}
