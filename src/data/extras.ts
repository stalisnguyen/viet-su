import { l, type L } from './types';
import { chapters } from './more';

// Cùng lúc đó trên thế giới: mỗi dòng có nguồn riêng (id trong sources.ts)
export const world: Record<string, { text: L; source: string }[]> = {
  'do-da': [
    { text: l('Ở Chu Khẩu Điếm gần Bắc Kinh, người đứng thẳng đã có mặt từ khoảng 770.000 năm trước, gần cùng thời với An Khê.', 'At Zhoukoudian near Beijing, Homo erectus was present from about 770,000 years ago, close in time to An Khê.'), source: 'brit-zhoukoudian' },
    { text: l('Người Bắc Kinh ở đó tồn tại đến khoảng 230.000 năm trước, và vẫn xuất hiện sau người Java.', 'Peking man there lasted until about 230,000 years ago, and still came after Java man.'), source: 'brit-peking' },
  ],
  'kim-khi': [
    { text: l('Nhà Thương (khoảng 1600 - 1046 TCN) là triều đại Trung Hoa đầu tiên có cả tư liệu viết lẫn bằng chứng khảo cổ, nổi tiếng về đồ đồng.', 'The Shang dynasty (c. 1600 - 1046 BCE) is the first Chinese dynasty with both written and archaeological evidence, famous for its bronzes.'), source: 'brit-shang' },
    { text: l('Chữ Hán sớm nhất còn lại là chữ khắc trên xương bói thời Thương muộn (khoảng 1250 - 1046 TCN).', 'The earliest surviving Chinese writing is on oracle bones of the Late Shang (c. 1250 - 1046 BCE).'), source: 'wiki-lateshang' },
  ],
  'van-lang': [
    { text: l('Trung Hoa đang ở thời Xuân Thu (770 - 481 TCN), nhà Chu suy yếu và các nước chư hầu tranh giành nhau.', 'China was in the Spring and Autumn period (770 - 481 BCE), with the Zhou in decline and regional states competing.'), source: 'brit-confucius' },
    { text: l('Khổng Tử sống trong giai đoạn này, từ năm 551 đến 479 TCN.', 'Confucius lived in this period, from 551 to 479 BCE.'), source: 'brit-confucius' },
  ],
  'au-lac': [
    { text: l('Năm 221 TCN, vua nước Tần thống nhất Trung Hoa và xưng là Thủy Hoàng Đế.', 'In 221 BCE the king of Qin unified China and took the title First Emperor.'), source: 'whe-shihuangdi' },
    { text: l('Năm 218 TCN, Hannibal đưa quân và voi chiến vượt dãy Alps để đánh La Mã.', 'In 218 BCE Hannibal took his army and war elephants across the Alps to attack Rome.'), source: 'wiki-210s' },
    { text: l('Năm 210 TCN, Tần Thủy Hoàng mất và được chôn cùng đội quân đất nung.', 'In 210 BCE the First Emperor died and was buried with the terracotta army.'), source: 'whe-shihuangdi' },
  ],
};

export const badges: Record<string, L> = {
  'do-da': l('Người giữ lửa', 'Keeper of the Fire'),
  'kim-khi': l('Thợ đúc đồng', 'Bronze Caster'),
  'van-lang': l('Con Rồng cháu Tiên', 'Child of the Dragon'),
  'au-lac': l('Người giữ thành', 'Guardian of the Citadel'),
};

export interface Q { q: L; options: L[]; answer: number; why: L }

export const quiz: Record<string, Q[]> = {
  'do-da': [
    { q: l('Con số 800.000 năm ở An Khê đến từ việc định tuổi cái gì?', 'What was dated to get the figure of 800,000 years at An Khê?'),
      options: [l('Mảnh thiên thạch nằm cùng lớp với công cụ', 'Tektites lying in the same layer as the tools'), l('Chính những chiếc rìu tay', 'The handaxes themselves'), l('Vỏ ốc trong hang', 'Snail shells in a cave')], answer: 0,
      why: l('Niên đại được đo trên thiên thạch cùng lớp đất, không đo trực tiếp trên công cụ.', 'The date was measured on tektites in the same layer, not directly on the tools.') },
    { q: l('Kỹ thuật mới nào xuất hiện ở cư dân Hòa Bình và Bắc Sơn?', 'Which new technique appears among Hòa Bình and Bắc Sơn people?'),
      options: [l('Luyện đồng', 'Smelting bronze'), l('Mài lưỡi rìu đá', 'Grinding the edge of stone axes'), l('Làm gốm bằng bàn xoay', 'Wheel-made pottery')], answer: 1,
      why: l('Mài lưỡi tạo ra công cụ sắc và bền hơn hẳn công cụ chỉ ghè đẽo.', 'Edge grinding produced tools much sharper and more durable than flaked ones.') },
    { q: l('Vì sao niên đại của Núi Đọ còn tranh luận?', 'Why is the age of Núi Đọ still debated?'),
      options: [l('Hiện vật đã bị thất lạc', 'The finds were lost'), l('Chưa ai nghiên cứu di chỉ này', 'Nobody has studied the site'), l('Hiện vật nằm trên bề mặt, không có địa tầng để định tuổi', 'The finds lay on the surface with no layers to date')], answer: 2,
      why: l('Không có địa tầng và mẫu định tuổi tuyệt đối, niên đại chỉ dựa vào hình dáng công cụ.', 'Without stratigraphy or absolute dates, the age rests only on tool shape.') },
  ],
  'kim-khi': [
    { q: l('Thứ tự đúng của bốn văn hóa ở lưu vực sông Hồng là gì?', 'What is the correct order of the four Red River cultures?'),
      options: [l('Đông Sơn - Gò Mun - Đồng Đậu - Phùng Nguyên', 'Đông Sơn - Gò Mun - Đồng Đậu - Phùng Nguyên'), l('Phùng Nguyên - Đồng Đậu - Gò Mun - Đông Sơn', 'Phùng Nguyên - Đồng Đậu - Gò Mun - Đông Sơn'), l('Đồng Đậu - Phùng Nguyên - Đông Sơn - Gò Mun', 'Đồng Đậu - Phùng Nguyên - Đông Sơn - Gò Mun')], answer: 1,
      why: l('Qua từng giai đoạn, đồ đá ít dần và đồ đồng tăng dần.', 'Through each phase stone tools decrease and bronze increases.') },
    { q: l('Tục chôn cất nào là đặc trưng của văn hóa Sa Huỳnh?', 'Which burial custom is typical of the Sa Huỳnh culture?'),
      options: [l('Chôn trong chum gốm', 'Burial in pottery jars'), l('Chôn trong thuyền gỗ', 'Burial in wooden boats'), l('Chôn trong hang đá', 'Burial in caves')], answer: 0,
      why: l('Người Sa Huỳnh hỏa táng rồi đặt tro cốt vào chum có nắp, kèm đồ tùy táng.', 'Sa Huỳnh people cremated the dead and placed the remains in lidded jars with grave goods.') },
    { q: l('Ngôi sao giữa mặt trống đồng Ngọc Lũ có bao nhiêu cánh?', 'How many rays does the star on the Ngọc Lũ drum have?'),
      options: [l('8 cánh', '8 rays'), l('12 cánh', '12 rays'), l('14 cánh', '14 rays')], answer: 2,
      why: l('Phần lớn trống Đông Sơn có 12 cánh. Ngọc Lũ thuộc nhóm nhỏ có 14 cánh.', 'Most Đông Sơn drums have 12 rays. Ngọc Lũ belongs to a small group with 14.') },
  ],
  'van-lang': [
    { q: l('Truyện các vua Hùng được đưa vào chính sử từ khi nào?', 'When did the Hùng kings story enter the official chronicle?'),
      options: [l('Ngay từ thời Văn Lang', 'During the Văn Lang period itself'), l('Cuối thế kỷ 15', 'In the late 15th century'), l('Thế kỷ 20', 'In the 20th century')], answer: 1,
      why: l('Đại Việt sử ký toàn thư hoàn thành năm 1479 đã đưa truyện vào phần Ngoại kỷ.', 'The Đại Việt sử ký toàn thư, completed in 1479, placed the story in its Outer Annals.') },
    { q: l('18 đời vua cho giai đoạn 2879 - 258 TCN nghĩa là mỗi đời trị vì trung bình bao lâu?', '18 kings for 2879 - 258 BCE means an average reign of about how long?'),
      options: [l('Khoảng 30 năm', 'About 30 years'), l('Khoảng 70 năm', 'About 70 years'), l('Khoảng 146 năm', 'About 146 years')], answer: 2,
      why: l('Con số này không thể có thật, nên niên đại truyền thống được xem là mang tính truyền thuyết.', 'That is impossible, so the traditional dates are treated as legendary.') },
    { q: l('Về mặt khảo cổ, thời Văn Lang tương ứng với văn hóa nào?', 'Archaeologically, which culture corresponds to Văn Lang?'),
      options: [l('Văn hóa Đông Sơn', 'Đông Sơn culture'), l('Văn hóa Hòa Bình', 'Hòa Bình culture'), l('Văn hóa Sa Huỳnh', 'Sa Huỳnh culture')], answer: 0,
      why: l('Giới nghiên cứu xem Văn Lang là xã hội của cư dân Đông Sơn với các thủ lĩnh vùng.', 'Scholars see Văn Lang as the society of Đông Sơn people led by regional chiefs.') },
  ],
  'au-lac': [
    { q: l('Thành Cổ Loa có mấy vòng lũy?', 'How many ramparts does Cổ Loa have?'),
      options: [l('Hai vòng', 'Two'), l('Ba vòng', 'Three'), l('Chín vòng', 'Nine')], answer: 1,
      why: l('Ba vòng là Thành Ngoại, Thành Trung và Thành Nội.', 'The three are the outer, middle and inner enclosures.') },
    { q: l('Theo Sử ký của Tư Mã Thiên, Triệu Đà thu phục Âu Lạc sau mốc nào?', 'According to Sima Qian\'s Shiji, Zhao Tuo subdued Âu Lạc after which event?'),
      options: [l('Sau khi Lữ hậu nhà Hán mất năm 180 TCN', 'After the death of Empress Lü in 180 BCE'), l('Sau khi Tần Thủy Hoàng lên ngôi', 'After the First Emperor took the throne'), l('Sau khi nhà Hán diệt Nam Việt', 'After the Han destroyed Nanyue')], answer: 0,
      why: l('Vì vậy nhiều nhà sử học lấy mốc khoảng 179 TCN thay cho mốc 208 TCN của Toàn thư.', 'This is why many historians use about 179 BCE instead of the 208 BCE given by the Toàn thư.') },
    { q: l('Lớp đắp sớm nhất của lũy Cổ Loa có niên đại khoảng 300 TCN. Điều đó cho thấy gì?', 'The earliest rampart layers at Cổ Loa date to about 300 BCE. What does that show?'),
      options: [l('Thành do nhà Hán xây', 'The citadel was built by the Han'), l('Thành được xây ở thế kỷ 10', 'It was built in the 10th century'), l('Phần lõi của thành có trước khi nhà Hán cai trị, do xã hội bản địa xây', 'Its core predates Han rule and was built by a local society')], answer: 2,
      why: l('Đây là kết quả cuộc khai quật lũy Thành Trung năm 2007 - 2008.', 'This is the result of the 2007 - 2008 excavation of the middle rampart.') },
  ],
};
chapters.forEach((c) => { world[c.period.slug] = c.world; quiz[c.period.slug] = c.quiz; badges[c.period.slug] = c.badge; });
