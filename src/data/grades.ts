import { l, type L } from './types';

// Các thời kỳ trên trang ứng với phần lịch sử Việt Nam của từng lớp, ghép theo Chương trình giáo dục phổ thông 2018
// (Thông tư 32/2018/TT-BGDĐT): môn Lịch sử và Địa lí lớp 6 - 9, môn Lịch sử lớp 10 - 12. Chỉ ghép ở mức chủ đề,
// không theo một bộ sách giáo khoa cụ thể.
export interface Grade { n: number; topic: L; periods: string[] }

export const grades: Grade[] = [
  { n: 6, topic: l('Thời nguyên thủy; Việt Nam từ khoảng thế kỷ 7 TCN đến đầu thế kỷ 10: Văn Lang, Âu Lạc, thời Bắc thuộc, Champa, Phù Nam và bước ngoặt năm 938.', 'Prehistory; Vietnam from about the 7th century BCE to the early 10th century: Văn Lang, Âu Lạc, Chinese rule, Champa, Funan and the turning point of 938.'),
    periods: ['do-da', 'kim-khi', 'van-lang', 'au-lac', 'nam-viet', 'hai-ba-trung', 'bac-thuoc-2', 'phu-nam', 'champa', 'van-xuan', 'bac-thuoc-3', 'tu-chu'] },
  { n: 7, topic: l('Việt Nam từ đầu thế kỷ 10 đến đầu thế kỷ 16: Ngô, Đinh, Tiền Lê, Lý, Trần, Hồ, khởi nghĩa Lam Sơn, Lê sơ và vùng đất phía nam.', 'Vietnam from the early 10th to the early 16th century: Ngô, Đinh, Early Lê, Lý, Trần, Hồ, the Lam Sơn uprising, the Early Lê and the southern lands.'),
    periods: ['tu-chu', 'dinh-tien-le', 'ly', 'tran', 'ho-minh', 'le-so', 'champa'] },
  { n: 8, topic: l('Việt Nam từ đầu thế kỷ 16 đến đầu thế kỷ 20: Nam - Bắc triều, Trịnh - Nguyễn, mở cõi, Tây Sơn, nhà Nguyễn, Pháp xâm lược; chủ đề Biển Đông.', 'Vietnam from the early 16th to the early 20th century: the Southern and Northern courts, Trịnh and Nguyễn, southward expansion, the Tây Sơn, the Nguyễn, the French conquest; the East Sea topic.'),
    periods: ['mac-trinh-nguyen', 'tay-son', 'nguyen', 'phap-thuoc', 'bien-dao'] },
  { n: 9, topic: l('Việt Nam từ năm 1918 đến nay; chủ đề Biển Đông.', 'Vietnam from 1918 to today; the East Sea topic.'),
    periods: ['phap-thuoc', '1945-1975', 'sau-1975', 'bien-dao'] },
  { n: 10, topic: l('Một số nền văn minh trên đất nước Việt Nam trước năm 1858: Văn Lang - Âu Lạc, Champa, Phù Nam và văn minh Đại Việt.', 'Civilisations on Vietnamese soil before 1858: Văn Lang - Âu Lạc, Champa, Funan and Đại Việt civilisation.'),
    periods: ['kim-khi', 'van-lang', 'au-lac', 'champa', 'phu-nam', 'ly', 'tran', 'le-so', 'van-hoa'] },
  { n: 11, topic: l('Chiến tranh bảo vệ Tổ quốc và giải phóng dân tộc trước năm 1945; các cuộc cải cách lớn trước năm 1858; chủ quyền ở Biển Đông.', 'Wars of defence and liberation before 1945; major reforms before 1858; sovereignty in the East Sea.'),
    periods: ['hai-ba-trung', 'tu-chu', 'dinh-tien-le', 'ly', 'tran', 'ho-minh', 'le-so', 'tay-son', 'nguyen', 'phap-thuoc', 'bien-dao'] },
  { n: 12, topic: l('Cách mạng tháng Tám năm 1945, các cuộc kháng chiến và bảo vệ Tổ quốc từ năm 1945, công cuộc Đổi mới và Hồ Chí Minh trong lịch sử Việt Nam.', 'The August Revolution of 1945, the wars of liberation and defence since 1945, Đổi Mới, and Hồ Chí Minh in Vietnamese history.'),
    periods: ['1945-1975', 'sau-1975'] },
];
