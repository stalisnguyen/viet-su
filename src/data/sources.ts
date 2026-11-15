import type { Source } from './types';
import { chapters } from './more';

const base: Source[] = [
  // Tư liệu gốc
  { id: 'toanthu', kind: 'primary', cite: 'Ngô Sĩ Liên và các sử thần triều Lê, Đại Việt sử ký toàn thư, Ngoại kỷ, quyển 1 (hoàn thành 1479, khắc in 1697).' },
  { id: 'linhnam', kind: 'primary', cite: 'Lĩnh Nam chích quái, truyện Hồng Bàng thị (biên soạn khoảng thời Trần, Vũ Quỳnh và Kiều Phú hiệu chỉnh cuối thế kỷ 15).' },
  { id: 'vietsuluoc', kind: 'primary', cite: 'Khuyết danh, Việt sử lược (Đại Việt sử lược), quyển 1 (thời Trần, thế kỷ 13 - 14).' },
  { id: 'suky', kind: 'primary', cite: 'Tư Mã Thiên, Sử ký, Nam Việt Úy Đà liệt truyện (khoảng thế kỷ 1 TCN).' },
  { id: 'cuongmuc', kind: 'primary', cite: 'Quốc sử quán triều Nguyễn, Khâm định Việt sử thông giám cương mục, Tiền biên (thế kỷ 19).' },

  // Bảo tàng
  { id: 'nmh-handaxe', kind: 'museum', cite: 'Bảo tàng Lịch sử Quốc gia, chú thích hiện vật "Hand-axe" (Núi Đọ) và "Teeth of hominids" (Thẩm Khuyên, Thẩm Hai).', url: 'https://baotanglichsu.vn/en/Articles/1005/28086/hand-axe.html' },
  { id: 'nmh-hoabinh', kind: 'museum', cite: 'Bảo tàng Lịch sử Quốc gia, chú thích hiện vật "Axes, pebble, Hoa Binh culture, c. 18,000 - 7,000 BP".', url: 'https://baotanglichsu.vn/en/Articles/1005/28080/axes.html' },
  { id: 'nmh-predongson', kind: 'museum', cite: 'Bảo tàng Lịch sử Quốc gia, "Pre-Dong Son cultures: Phung Nguyen, Dong Dau, Go Mun".', url: 'https://baotanglichsu.vn/en/Articles/4191/pre-dong-son-cultures-phung-nguyen-dong-dau-go-mun-c-4-000-2-5000-bp' },
  { id: 'nmh-ngoclu', kind: 'museum', cite: 'Bảo tàng Lịch sử Quốc gia, "National treasures: The Ngọc Lũ drum" (2023).', url: 'https://baotanglichsu.vn/en/Articles/1004/73640/national-treasures-the-ngoc-lu-drum.html' },
  { id: 'unesco-coloa', kind: 'reference', cite: 'UNESCO World Heritage Centre, Tentative Lists: "The Complex of Co Loa Ancient Citadel" (nộp ngày 16/10/2026).', url: 'https://whc.unesco.org/en/tentativelists/7056/' },

  // Bài nghiên cứu
  { id: 'derev2018', kind: 'paper', cite: 'A.P. Derevianko, A.V. Kandyba, Nguyễn Khắc Sử và cộng sự (2018), bài về kỹ nghệ ghè hai mặt An Khê, Archaeology, Ethnology & Anthropology of Eurasia 46(3): 3-21. doi:10.17746/1563-0110.2018.46.3.003-021.', url: 'https://journal.archaeology.nsc.ru/jour/article/download/386/533' },
  { id: 'derev2020', kind: 'paper', cite: 'A.P. Derevianko, A.V. Kandyba, Nguyễn Khắc Sử và cộng sự (2020), "Palaeolithic and Bifacial Industries of Vietnam in Comparison with Those in East, Southeast, and South Asia", Vietnam Social Sciences.', url: 'https://www.vjol.info.vn/index.php/VSS/article/download/74488/63293' },
  { id: 'ciochon1996', kind: 'paper', cite: 'R. Ciochon, Vũ Thế Long và cộng sự (1996), "Dated co-occurrence of Homo erectus and Gigantopithecus from Tham Khuyen Cave, Vietnam", PNAS 93(7): 3016-3020.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC39753' },
  { id: 'boriskovsky', kind: 'paper', cite: 'P.I. Boriskovsky, báo cáo tổng quan về các di chỉ thời đại đá ở Việt Nam sau các đợt công tác 1960-1963 (bản lưu trên CORE).', url: 'https://core.ac.uk/download/5105028.pdf' },
  { id: 'yi2008', kind: 'paper', cite: 'Seonbok Yi và cộng sự (2008), "New data on the Hoabinhian: investigations at Hang Cho cave, northern Vietnam", IPPA Bulletin 28: 73-79.', url: 'https://journals.lib.washington.edu/index.php/BIPPA/article/view/12018/10643' },
  { id: 'kandyba2023', kind: 'paper', cite: 'A.V. Kandyba, Nguyễn Khắc Sử và cộng sự (2023), "Diem Cave: A Stratified Late Pleistocene and Early Holocene Site in Northern Vietnam", AEAE 51(3): 130-139.', url: 'https://archaeology.nsc.ru/en/publications/jr-aeae-en/23-51-3/annot-16/' },
  { id: 'chung2022', kind: 'paper', cite: 'Trình Năng Chung (2022), "Bắc Sơn Culture: New Research Findings", Vietnam Social Sciences.', url: 'https://vjol.info.vn/VSS/en/article/view/74630' },
  { id: 'vss2021', kind: 'paper', cite: 'Bài về các văn hóa trung kỳ đá mới sau Hòa Bình (Cái Bèo, Đa Bút, Quỳnh Văn), Vietnam Social Sciences, số 5 (205), 2021.', url: 'https://www.vjol.info.vn/index.php/VSS/article/download/74526/63331' },
  { id: 'glover', kind: 'paper', cite: 'Ian Glover và Nguyễn Kim Dung, chương về văn hóa Sa Huỳnh và nguồn gốc các tiểu quốc Champa (bản trên Academia.edu).', url: 'https://www.academia.edu/7230641' },
  { id: 'lmd2023', kind: 'paper', cite: 'Lâm Thị Mỹ Dung (2023), "Sa Huỳnh Culture and Its Relationship with the Islands of Southeast Asia", Vietnam Social Sciences.', url: 'https://vjol.info.vn/VSS/en/article/view/88620' },
  { id: 'manh2014', kind: 'paper', cite: 'Phạm Đức Mạnh (2014), "Dấu ấn Đông Sơn ở Phương Nam Việt Nam", Tạp chí Phát triển Khoa học và Công nghệ 17(X4).', url: 'https://stdj.scienceandtechnology.com.vn/index.php/stdj/article/download/1562/1896' },
  { id: 'kim2010', kind: 'paper', cite: 'Nam C. Kim, Lại Văn Tới, Trịnh Hoàng Hiệp (2010), "Co Loa: an investigation of Vietnam\'s ancient capital", Antiquity 84(326): 1011-1027.', url: 'https://doi.org/10.1017/S0003598X00067041' },
  { id: 'kim2016', kind: 'paper', cite: 'Lauren Hilgers (2016), "Vietnam\'s First City", Archaeology, số tháng 7-8 (phỏng vấn Nam C. Kim).', url: 'https://www.anthropology.wisc.edu/wp-content/uploads/2016/08/NCKim-Hilgers_VNs-First-City-Arch-Mag_2016.pdf' },
  { id: 'hungmyth', kind: 'paper', cite: '"A mythographical journey to modernity: The textual and symbolic transformations of the Hùng Kings founding myths", Journal of Southeast Asian Studies (Cambridge University Press, 2013).' },

  // Tra cứu tổng hợp
  { id: 'wiki-hoabinh', kind: 'reference', cite: 'Wikipedia (tiếng Anh), "Hoabinhian" (CC BY-SA).', url: 'https://en.wikipedia.org/wiki/Hoabinhian' },
  { id: 'wiki-phungnguyen', kind: 'reference', cite: 'Wikipedia (tiếng Anh), "Phùng Nguyên culture" (CC BY-SA).', url: 'https://en.wikipedia.org/wiki/Ph%C3%B9ng_Nguy%C3%AAn_culture' },
  { id: 'universalis', kind: 'reference', cite: 'Encyclopædia Universalis, "Phung-nguyên, culture de".', url: 'https://www.universalis.fr/encyclopedie/culture-de-phung-nguyen/' },
  { id: 'wiki-dongson', kind: 'reference', cite: 'Wikipedia (tiếng Anh), "Đông Sơn culture" (CC BY-SA).', url: 'https://en.wikipedia.org/wiki/%C4%90%C3%B4ng_S%C6%A1n_culture' },
  { id: 'britannica', kind: 'reference', cite: 'Encyclopaedia Britannica, "Dong Son culture".', url: 'https://www.britannica.com/topic/Dong-Son-culture' },
  { id: 'wiki-drum', kind: 'reference', cite: 'Wikipedia (tiếng Anh), "Dong Son drum" (CC BY-SA).', url: 'https://en.wikipedia.org/wiki/Dong_Son_drum' },
  { id: 'smarthistory', kind: 'reference', cite: 'Smarthistory, "Đông Sơn Drums".', url: 'https://smarthistory.org/?p=69520' },
  { id: 'wiki-sahuynh', kind: 'reference', cite: 'Wikipedia (tiếng Anh), "Sa Huỳnh culture" (CC BY-SA).', url: 'https://en.wikipedia.org/wiki/Sa_Hu%E1%BB%B3nh_culture' },
  { id: 'wiki-hung', kind: 'reference', cite: 'Wikipedia (tiếng Anh), "Hùng king" (CC BY-SA).', url: 'https://en.wikipedia.org/wiki/H%C3%B9ng_king' },
  { id: 'wiki-aulac', kind: 'reference', cite: 'Wikipedia (tiếng Anh), "Âu Lạc" (CC BY-SA).', url: 'https://en.wikipedia.org/wiki/%C3%82u_L%E1%BA%A1c' },
  { id: 'wiki-adv', kind: 'reference', cite: 'Wikipedia (tiếng Anh), "An Dương Vương" (CC BY-SA).', url: 'https://en.wikipedia.org/wiki/An_D%C6%B0%C6%A1ng_V%C6%B0%C6%A1ng' },
  { id: 'wiki-coloa', kind: 'reference', cite: 'Wikipedia (tiếng Anh), "Cổ Loa Citadel" (CC BY-SA).', url: 'https://en.wikipedia.org/wiki/C%E1%BB%95_Loa_Citadel' },

  { id: 'brit-zhoukoudian', kind: 'reference', cite: 'Encyclopaedia Britannica, "Zhoukoudian".', url: 'https://www.britannica.com/place/Zhoukoudian' },
  { id: 'brit-peking', kind: 'reference', cite: 'Encyclopaedia Britannica, "Peking man".', url: 'https://www.britannica.com/topic/Peking-man' },
  { id: 'brit-shang', kind: 'reference', cite: 'Encyclopaedia Britannica, "Shang dynasty".', url: 'https://www.britannica.com/topic/Shang-dynasty' },
  { id: 'wiki-lateshang', kind: 'reference', cite: 'Wikipedia (tiếng Anh), "Late Shang" (CC BY-SA).', url: 'https://en.wikipedia.org/wiki/Late_Shang' },
  { id: 'brit-confucius', kind: 'reference', cite: 'Encyclopaedia Britannica, "Confucius".', url: 'https://www.britannica.com/biography/Confucius' },
  { id: 'whe-shihuangdi', kind: 'reference', cite: 'World History Encyclopedia, "Shi Huangdi Timeline".', url: 'https://www.worldhistory.org/timeline/Shi_Huangdi' },
  { id: 'wiki-210s', kind: 'reference', cite: 'Wikipedia (tiếng Anh), "210s BC" (CC BY-SA).', url: 'https://en.wikipedia.org/wiki/210s_BC' },

  // Báo chí
  { id: 'stimpson2025', kind: 'paper', cite: 'Stimpson C.M. và cộng sự (2025), "TBH1: 12 000-year-old human skeleton and projectile point shed light on demographics and mortality in Terminal Pleistocene Southeast Asia", Proceedings of the Royal Society B 292: 20251819.', url: 'https://doi.org/10.1098/rspb.2025.1819' },
  { id: 'nhm-tbh1', kind: 'museum', cite: 'Natural History Museum, London (2025), thông cáo báo chí về bộ xương TBH1 ở hang Thung Bình 1.', url: 'https://www.nhm.ac.uk/press-office/press-releases/ancient-cave-discovery-points-to-southeast-asia-s-earliest-human.html' },
  { id: 'ls-tbh1', kind: 'news', cite: 'Live Science (2025), "An exotic quartz arrow may have killed a man 12,000 years ago in Vietnam".', url: 'https://www.livescience.com/archaeology/an-exotic-quartz-arrow-may-have-killed-a-man-12-000-years-ago-in-vietnam' },
  { id: 'vne-tbh1', kind: 'news', cite: 'VnExpress (9/2025), "Phát hiện di cốt \'chiến binh\' hơn 12.000 năm tại Tràng An".', url: 'https://vnexpress.net/phat-hien-di-cot-chien-binh-hon-12-000-nam-tai-trang-an-4944373.html' },
  { id: 'bvh-ankhe', kind: 'news', cite: 'Báo Văn Hóa, "Những phát hiện khảo cổ tại An Khê (Gia Lai)".', url: 'https://baovanhoa.vn/di-san/nhung-phat-hien-khao-co-tai-an-khe-gia-lai-mot-cai-noi-co-xua-nhat-cua-loai-nguoi-tren-the-gioi-56784.html' },
  { id: 'tt-ankhe', kind: 'news', cite: 'Tuổi Trẻ (13/8/2025), "Lập hồ sơ đề nghị công nhận di tích Rộc Tưng - Gò Đá là di sản thế giới".', url: 'https://tuoitre.vn/lap-ho-so-de-nghi-cong-nhan-di-tich-roc-tung-go-da-la-di-san-the-gioi-20250813182701051.htm' },
  { id: 'nd-ankhe', kind: 'news', cite: 'Nhân Dân, "Dấu tích Buổi bình minh...".', url: 'https://nhandan.vn/dau-tich-buoi-binh-minh-post283697.html' },
  { id: 'bpl-sonvi', kind: 'news', cite: 'Báo Pháp Luật Việt Nam, "Phát hiện dấu tích người Việt cổ ở thung lũng Thần Sa".', url: 'https://baophapluat.vn/phat-hien-dau-tich-nguoi-viet-co-o-thung-lung-than-sa-post284423.html' },
  { id: 'ht-dongson', kind: 'news', cite: 'Hanoi Times (2025), "Vietnam\'s ancient Dong Son drum found in Timor Leste".', url: 'https://m.hanoitimes.vn/vietnams-ancient-dong-son-drum-found-in-timor-leste-14110.html' },
  { id: 'kt-docchua', kind: 'news', cite: 'Kiến Thức, bài về tượng thú bằng đồng Dốc Chùa (văn hóa Đồng Nai).', url: 'https://kienthuc.net.vn/kho-tri-thuc/soi-buc-tuong-ti-hon-bang-dong-bi-hiem-nhat-viet-nam-1128703.html' },
];

// Nguồn của các thời kỳ sau được gộp vào; trùng id thì giữ bản có trước
export const sources: Source[] = [...base];
chapters.forEach((c) => c.sources.forEach((x) => { if (!sources.some((y) => y.id === x.id)) sources.push(x); }));
export const sourceById = Object.fromEntries(sources.map((s) => [s.id, s]));
