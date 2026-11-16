import { l, type L } from './types';

// Liên kết ra ngoài cho từng mục: văn bản gốc (Wikisource tiếng Việt) và bản quét 3D của Bảo tàng Lịch sử quốc gia.
// Mỗi đường dẫn đã được mở thử ngày 16/11/2026 trước khi gắn.
export interface Out { kind: 'text' | '3d'; label: L; url: string }

const WS = 'https://vi.wikisource.org/wiki/';
const BV = 'https://baovatquocgia.baotangso.com/bao-vat/';
const ws = (page: string, label: L): Out => ({ kind: 'text', label, url: WS + encodeURIComponent(page.replace(/ /g, '_')) });
const bv = (id: string, label: L): Out => ({ kind: '3d', label, url: BV + id });

const nqsh = ws('Nam quốc sơn hà', l('Nam quốc sơn hà', 'Nam quốc sơn hà (Vietnamese and Chinese)'));
const bndc = ws('Bình Ngô đại cáo', l('Bình Ngô đại cáo', 'Bình Ngô đại cáo (Vietnamese and Chinese)'));
const lkg = ws('Lời kêu gọi toàn quốc kháng chiến', l('Lời kêu gọi toàn quốc kháng chiến', 'Call for national resistance (Vietnamese)'));

export const outLinks: Record<string, Out[]> = {
  'trong-dong-ngoc-lu': [bv('trong-ngoc-lu', l('Trống Ngọc Lũ', 'The Ngọc Lũ drum')), bv('trong-hoang-ha', l('Trống Hoàng Hạ', 'The Hoàng Hạ drum'))],
  'dong-son': [
    bv('thap-dao-thinh', l('Thạp Đào Thịnh', 'The Đào Thịnh jar')),
    bv('tuong-hai-nguoi-cong-nhau-thoi-khen', l('Tượng hai người cõng nhau thổi khèn', 'Statue of two men playing the khèn')),
    bv('cay-den-hinh-nguoi-quy', l('Cây đèn hình người quỳ', 'Lamp in the shape of a kneeling man')),
    bv('mo-thuyen-viet-khe', l('Mộ thuyền Việt Khê', 'The Việt Khê boat coffin')),
  ],
  'bia-vo-canh': [bv('bia-vo-canh', l('Bia Võ Cạnh', 'The Võ Cạnh stele'))],
  'nam-quoc-son-ha': [nqsh],
  'ly-thuong-kiet-nhu-nguyet': [nqsh],
  'ly-cong-uan': [ws('Chiếu dời đô', l('Chiếu dời đô', 'Edict on moving the capital (Vietnamese and Chinese)'))],
  'tran-hung-dao': [ws('Hịch tướng sĩ', l('Hịch tướng sĩ', 'Proclamation to the officers (Vietnamese and Chinese)'))],
  'chi-lang-dong-quan-binh-ngo': [bndc],
  'nguyen-trai-le-chi-vien-1442': [bndc],
  'cach-mang-thang-tam-tuyen-ngon-doc-lap': [
    ws('Tuyên ngôn Độc lập Việt Nam', l('Tuyên ngôn Độc lập 1945', 'Declaration of Independence 1945 (Vietnamese)')),
    bv('an-dai-nam-thu-thien-vinh-menh-truyen-quoc-ty', l('Ấn truyền quốc tỷ triều Nguyễn', 'The Nguyễn dynasty state seal')),
  ],
  'khang-chien-chong-phap-dien-bien-phu': [lkg, bv('ban-thao-loi-keu-goi-toan-quoc-khang-chien-cua-chu-tich-ho-chi-minh', l('Bản thảo Lời kêu gọi', 'Manuscript of the Call'))],
  'ho-chi-minh': [
    bv('cuon-duong-kach-menh-cua-lanh-tu-nguyen-ai-quoc', l('Cuốn Đường Kách mệnh', 'The book Đường Kách mệnh')),
    bv('tac-pham-nhat-ky-trong-tu-cua-lanh-tu-ho-chi-minh', l('Nhật ký trong tù', 'Prison Diary')),
  ],
};
