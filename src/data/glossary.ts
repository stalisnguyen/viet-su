import { l, type L } from './types';

// Từ khó: chạm vào từ trong bài để xem giải thích ngắn. `vi` và `en` là các dạng chữ xuất hiện trong bài
// (khớp đúng chữ hoa, chữ thường). Mỗi đoạn văn chỉ gạch chân lần xuất hiện đầu tiên của mỗi từ.
export interface Term { vi: string[]; en: string[]; def: L }

export const GLOSSARY: Term[] = [
  { vi: ['Lạc tướng'], en: ['Lạc lords', 'Lạc lord'], def: l(
    'Thủ lĩnh cha truyền con nối của người Lạc Việt, mỗi người cai quản một vùng thời Văn Lang, Âu Lạc. Những năm đầu Bắc thuộc, nhà Hán vẫn phải để họ giữ đất.',
    'Hereditary chiefs of the Lạc Việt, each ruling a district in the Văn Lang and Âu Lạc era. In the first period of Chinese rule the Han still had to leave them in charge of their lands.') },
  { vi: ['Lạc hầu'], en: [], def: l(
    'Theo sử cũ và truyền thuyết, là hàng quan văn giúp vua Hùng, đứng trên các Lạc tướng.',
    'According to old records and legend, the civil officials who assisted the Hùng kings, ranking above the Lạc lords.') },
  { vi: ['Hùng Vương', 'vua Hùng'], en: ['Hùng kings'], def: l(
    'Các vị vua của nước Văn Lang theo truyền thuyết và sử cũ. Người Việt coi các vua Hùng là tổ tiên chung và giỗ Tổ ngày 10 tháng 3 âm lịch.',
    'The kings of Văn Lang in legend and the old chronicles. Vietnamese regard them as common ancestors and honour them on the 10th day of the third lunar month.') },
  { vi: ['thái thú'], en: [], def: l(
    'Viên quan đứng đầu một quận do triều đình phương Bắc cử sang cai trị.',
    'The official at the head of a commandery, sent by the northern court to govern it.') },
  { vi: ['thứ sử'], en: [], def: l(
    'Viên quan phương Bắc đứng đầu một châu, coi cả mấy quận, ví dụ Giao Châu gồm Giao Chỉ, Cửu Chân, Nhật Nam.',
    'A northern official heading a province (châu) that oversaw several commanderies, for example Jiaozhou over Jiaozhi, Jiuzhen and Rinan.') },
  { vi: ['đô hộ phủ'], en: ['Annan Protectorate', 'Protectorate General'], def: l(
    'Cơ quan quân sự và hành chính nhà Đường đặt ra để cai trị vùng đất người Việt từ năm 679, đóng ở Tống Bình (Hà Nội).',
    'The military and civil office the Tang set up from 679 to rule the Vietnamese lands, based at Tống Bình (Hanoi).') },
  { vi: ['tiết độ sứ'], en: ['jiedushi'], def: l(
    'Chức quan võ đứng đầu một vùng thời Đường. Năm 905 Khúc Thừa Dụ, người Việt, tự nắm chức này, mở đầu thời tự chủ.',
    'A Tang military governor. In 905 Khúc Thừa Dụ, a Vietnamese, took this post for himself, opening the era of self-rule.') },
  { vi: ['sứ quân'], en: ['twelve lords'], def: l(
    'Các thủ lĩnh địa phương chia nhau cát cứ sau khi Ngô Quyền mất, cho đến khi Đinh Bộ Lĩnh thống nhất đất nước năm 968.',
    'Local strongmen who divided the country after Ngô Quyền died, until Đinh Bộ Lĩnh reunified it in 968.') },
  { vi: ['Văn Lang'], en: [], def: l(
    'Nhà nước đầu tiên của người Việt theo truyền thuyết và sử cũ, do các vua Hùng đứng đầu, trung tâm ở vùng Phú Thọ.',
    'The first Vietnamese state in legend and the old chronicles, ruled by the Hùng kings, centred on Phú Thọ.') },
  { vi: ['Âu Lạc'], en: [], def: l(
    'Nhà nước của An Dương Vương, hợp người Âu Việt và Lạc Việt, đóng đô ở Cổ Loa.',
    'The state of King An Dương, uniting the Âu Việt and Lạc Việt, with its capital at Cổ Loa.') },
  { vi: ['Giao Chỉ'], en: ['Jiaozhi'], def: l(
    'Tên quận phương Bắc đặt ở đồng bằng sông Hồng từ năm 111 TCN. Thời Minh đô hộ (1407 - 1427), tên này được dùng lại cho cả nước.',
    'The commandery the northern empire set up in the Red River delta from 111 BCE. During the Ming occupation (1407 - 1427) the name was used again for the whole country.') },
  { vi: ['Cửu Chân'], en: ['Jiuzhen'], def: l(
    'Tên quận thời Bắc thuộc ở vùng Thanh Hóa ngày nay.',
    'A commandery of the period of Chinese rule, in what is now Thanh Hóa.') },
  { vi: ['An Nam'], en: ['Annan'], def: l(
    'Tên nhà Đường đặt cho vùng đất người Việt từ năm 679, nghĩa là phương Nam đã bị dẹp yên. Về sau Trung Hoa vẫn quen gọi nước ta như vậy, còn người Pháp dùng chữ Annam cho miền Trung.',
    'The name the Tang gave the Vietnamese lands in 679, meaning the pacified south. China kept using it for Vietnam, and the French used Annam for the centre of the country.') },
  { vi: ['Lĩnh Nam'], en: [], def: l(
    'Nghĩa là phía nam dãy Ngũ Lĩnh, tên chung cho vùng Lưỡng Quảng và Bắc Bộ thời xưa.',
    'Literally south of the Five Ranges, an old name for the region covering Guangdong, Guangxi and northern Vietnam.') },
  { vi: ['Đại Cồ Việt'], en: [], def: l(
    'Quốc hiệu do Đinh Tiên Hoàng đặt năm 968, dùng đến năm 1054.',
    'The country name chosen by Đinh Tiên Hoàng in 968 and used until 1054.') },
  { vi: ['Đại Việt'], en: [], def: l(
    'Quốc hiệu từ năm 1054 thời Lý Thánh Tông, dùng qua các triều Lý, Trần, Lê, Mạc, Tây Sơn đến năm 1804 (trừ thời nhà Hồ).',
    'The country name from 1054 under Lý Thánh Tông, used through the Lý, Trần, Lê, Mạc and Tây Sơn dynasties until 1804, except under the Hồ.') },
  { vi: ['Đại Nam'], en: [], def: l(
    'Quốc hiệu vua Minh Mạng đặt năm 1838, dùng đến cuối triều Nguyễn.',
    'The country name Emperor Minh Mạng adopted in 1838, used until the end of the Nguyễn dynasty.') },
  { vi: ['triều cống'], en: ['tribute'], def: l(
    'Lệ các triều đại Việt Nam định kỳ gửi sứ và lễ vật sang Trung Hoa. Đó là một cách ngoại giao để giữ hòa bình; trong nước, vua Việt vẫn tự trị và xưng đế.',
    'The custom by which Vietnamese courts sent envoys and gifts to China at set intervals. It was diplomacy to keep the peace; at home the Vietnamese ruler governed independently and called himself emperor.') },
  { vi: ['Nho giáo'], en: ['Confucianism', 'Neo-Confucian'], def: l(
    'Học thuyết của Khổng Tử về đạo làm người và phép trị nước, trở thành nền tảng của thi cử và bộ máy nhà nước Việt Nam từ thế kỷ 15.',
    'The teachings of Confucius on ethics and government, which became the basis of Vietnam\'s examinations and state from the 15th century.') },
  { vi: ['khoa cử'], en: ['civil examinations'], def: l(
    'Chế độ thi để chọn người làm quan, mở khoa đầu tiên năm 1075 và kết thúc năm 1919.',
    'The examination system for choosing officials, from the first exam in 1075 to the last in 1919.') },
  { vi: ['tiến sĩ'], en: [], def: l(
    'Học vị cao nhất của khoa cử, dành cho người đỗ kỳ thi Hội và thi Đình.',
    'The highest degree in the examination system, for those who passed the metropolitan and palace examinations.') },
  { vi: ['chữ Nôm'], en: ['Nôm'], def: l(
    'Chữ viết người Việt tự tạo dựa trên chữ Hán để ghi tiếng Việt, dùng nhiều nhất từ thế kỷ 13 đến đầu thế kỷ 20. Truyện Kiều được viết bằng chữ Nôm.',
    'A script Vietnamese created from Chinese characters to write their own language, most used from the 13th to the early 20th century. The Tale of Kiều was written in it.') },
  { vi: ['Quốc ngữ', 'chữ Quốc ngữ'], en: ['Quốc ngữ'], def: l(
    'Chữ viết tiếng Việt bằng mẫu tự Latinh, do các giáo sĩ phương Tây và người Việt xây dựng từ thế kỷ 17, trở thành chữ viết chính thức của Việt Nam trong thế kỷ 20.',
    'The Latin-alphabet script for Vietnamese, developed from the 17th century by Western missionaries and Vietnamese, which became the country\'s official script in the 20th century.') },
  { vi: ['Hán Việt'], en: ['Sino-Vietnamese'], def: l(
    'Lớp từ tiếng Việt gốc chữ Hán, đọc theo cách đọc riêng của người Việt.',
    'Vietnamese words of Chinese origin, read with a distinctly Vietnamese pronunciation.') },
  { vi: ['Toàn thư', 'Đại Việt sử ký toàn thư'], en: [], def: l(
    'Bộ quốc sử lớn nhất của Việt Nam thời quân chủ, soạn từ thời Lê, in lần đầu năm 1697.',
    'The greatest official history of premodern Vietnam, compiled from the Lê period and first printed in 1697.') },
  { vi: ['Cương mục', 'Khâm định Việt sử thông giám cương mục'], en: [], def: l(
    'Bộ sử do Quốc sử quán triều Nguyễn soạn từ năm 1856, khắc in năm 1884, có nhiều lời bàn và khảo chứng.',
    'A history compiled by the Nguyễn court\'s History Office from 1856 and printed in 1884, with many critical notes and comments.') },
  { vi: ['Đại Nam thực lục'], en: [], def: l(
    'Bộ sử biên niên chính thức của triều Nguyễn, chép việc từng đời chúa và vua.',
    'The official chronicle of the Nguyễn, recording events reign by reign.') },
  { vi: ['châu bản'], en: [], def: l(
    'Văn bản hành chính triều Nguyễn có lời phê bằng mực son của nhà vua. Châu bản triều Nguyễn là Di sản tư liệu thế giới khu vực châu Á - Thái Bình Dương.',
    'Nguyễn court documents bearing the emperor\'s annotations in red ink, listed in UNESCO\'s Memory of the World register for Asia and the Pacific.') },
  { vi: ['Đàng Trong'], en: [], def: l(
    'Vùng đất phía nam sông Gianh do các chúa Nguyễn cai quản thời Trịnh - Nguyễn phân tranh.',
    'The land south of the Gianh river ruled by the Nguyễn lords during the Trịnh - Nguyễn division.') },
  { vi: ['Đàng Ngoài'], en: [], def: l(
    'Vùng đất phía bắc sông Gianh do chúa Trịnh nắm quyền dưới danh nghĩa vua Lê.',
    'The land north of the Gianh river, held by the Trịnh lords in the name of the Lê kings.') },
  { vi: ['Cần Vương'], en: [], def: l(
    'Nghĩa là giúp vua. Phong trào chống Pháp hưởng ứng chiếu của vua Hàm Nghi năm 1885.',
    'Literally aid the king: the resistance against France that answered Emperor Hàm Nghi\'s call of 1885.') },
  { vi: ['Việt Minh'], en: [], def: l(
    'Việt Nam Độc lập Đồng minh, mặt trận do Hồ Chí Minh lập năm 1941 để giành độc lập.',
    'The League for the Independence of Vietnam, the front Hồ Chí Minh founded in 1941 to win independence.') },
  { vi: ['bảo hộ'], en: ['protectorate'], def: l(
    'Hình thức cai trị của Pháp ở Bắc Kỳ và Trung Kỳ: triều Nguyễn vẫn còn, nhưng thực quyền nằm trong tay người Pháp.',
    'France\'s form of rule over Tonkin and Annam: the Nguyễn court remained, but real power lay with the French.') },
  { vi: ['tập kết'], en: ['regrouped', 'regroupment'], def: l(
    'Việc chuyển quân và cán bộ của mỗi bên về vùng được chia theo Hiệp định Genève năm 1954.',
    'The movement of each side\'s troops and cadres into its own zone under the 1954 Geneva Accords.') },
  { vi: ['Đổi Mới'], en: ['Đổi Mới'], def: l(
    'Công cuộc đổi mới kinh tế bắt đầu từ năm 1986, chuyển sang kinh tế thị trường và mở cửa với thế giới.',
    'The reforms begun in 1986 that moved Vietnam to a market economy and opened it to the world.') },
  { vi: ['văn hóa Đông Sơn'], en: ['Đông Sơn culture'], def: l(
    'Văn hóa thời đồng thau và sắt sớm ở Bắc Bộ và Bắc Trung Bộ, khoảng thế kỷ 7 TCN đến thế kỷ 1, nổi tiếng với trống đồng.',
    'The Bronze and early Iron Age culture of northern Vietnam, roughly the 7th century BCE to the 1st century CE, famous for its bronze drums.') },
  { vi: ['văn hóa Sa Huỳnh'], en: ['Sa Huỳnh culture'], def: l(
    'Văn hóa thời kim khí ở miền Trung và Nam Trung Bộ, nổi tiếng với tục chôn người trong chum gốm.',
    'The metal-age culture of central and south-central Vietnam, known for burying the dead in pottery jars.') },
  { vi: ['Óc Eo'], en: [], def: l(
    'Thương cảng lớn của vương quốc Phù Nam ở An Giang ngày nay, giao thương với Ấn Độ, Trung Hoa và cả La Mã.',
    'The great port of the kingdom of Funan in today\'s An Giang, trading with India, China and even Rome.') },
  { vi: ['kalan'], en: ['kalan'], def: l(
    'Ngôi tháp thờ chính trong một khu đền Chăm, nơi đặt tượng hoặc linga của vị thần.',
    'The main sanctuary tower of a Cham temple, housing the image or linga of the god.') },
  { vi: ['thủ phủ'], en: [], def: l(
    'Nơi đặt bộ máy cai trị của một vùng, như tỉnh lỵ ngày nay.',
    'The seat of government of a region, like a provincial capital today.') },
];
