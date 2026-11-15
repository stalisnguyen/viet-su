import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

// Chữ trên bản đồ được vẽ thẳng lên khung 3D, nên phải chờ phông Be Vietnam Pro (kèm bộ chữ tiếng Việt) tải xong
// rồi mới dựng trang. Nếu vẽ trước khi phông về, trình duyệt dùng phông thay thế và dấu tiếng Việt sẽ lệch, mất nét.
const sample = 'ĐỒNG NAI Hoàng Sa ắệữỗượ';
const fonts = [500, 600, 700, 800].map((w) => document.fonts.load(`${w} 40px "Be Vietnam Pro"`, sample));
const start = () => createRoot(document.getElementById('root')!).render(<App />);
Promise.race([Promise.all(fonts), new Promise((r) => setTimeout(r, 2500))]).then(start, start);
