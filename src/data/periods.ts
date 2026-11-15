import { l, type L, type Period } from './types';
import { chapters } from './more';

const base: Period[] = [
  {
    slug: 'do-da',
    name: l('Thời đồ đá', 'The Stone Age'),
    range: l('khoảng 800.000 - 4.000 năm trước', 'c. 800,000 - 4,000 years ago'),
    color: '#e9dcc6',
    summary: l(
      'Dấu vết con người trên đất Việt Nam kéo dài gần một triệu năm. Từ những nhóm người ghè rìu tay ở An Khê đến các nhóm săn bắt, hái lượm sống trong hang đá vôi ở Hòa Bình và Bắc Sơn, họ chưa có chữ viết và chỉ để lại công cụ đá, mộ táng và tàn tích bữa ăn.',
      'Human traces in what is now Vietnam reach back almost a million years. From the makers of handaxes at An Khê to the foragers who lived in the limestone caves of Hòa Bình and Bắc Sơn, these people had no writing. What they left are stone tools, burials and the remains of meals.',
    ),
    detail: [
      l(
        'Giai đoạn sớm nhất là sơ kỳ đá cũ. Ở An Khê (Gia Lai), các lớp đất chứa rìu tay ghè hai mặt nằm cùng những mảnh thiên thạch được định tuổi khoảng 800.000 năm. Ở hang Thẩm Khuyên (Lạng Sơn), răng của người đứng thẳng Homo erectus được định tuổi khoảng 475.000 năm. Núi Đọ (Thanh Hóa) từng được xem là di chỉ cổ nhất, nhưng niên đại của nó đến nay vẫn còn tranh luận.',
        'The earliest phase is the Lower Palaeolithic. At An Khê (Gia Lai), layers containing bifacial handaxes lie together with tektites dated to about 800,000 years. At Thẩm Khuyên cave (Lạng Sơn), teeth of Homo erectus are dated to about 475,000 years. Núi Đọ (Thanh Hóa) was once regarded as the oldest site, but its age is still debated.',
      ),
      l(
        'Từ khoảng 20.000 năm trước, dấu vết dày lên rõ rệt. Cư dân Sơn Vi dùng công cụ cuội ghè trên các đồi gò trung du. Cư dân Hòa Bình và Bắc Sơn sống trong hang và mái đá, săn bắt, hái lượm, bắt ốc suối, và bắt đầu mài lưỡi rìu. Kỹ thuật mài là một bước chuyển quan trọng vì nó tạo ra công cụ sắc và bền hơn hẳn.',
        'From about 20,000 years ago the record becomes much denser. Sơn Vi groups used flaked pebble tools on the midland hills. Hòa Bình and Bắc Sơn groups lived in caves and rock shelters, hunted, gathered, collected stream snails, and began to grind the edges of their axes. Edge grinding was a major step because it produced sharper and more durable tools.',
      ),
      l(
        'Khoảng 7.000 - 4.000 năm trước, nhiều nhóm rời hang động xuống đồng bằng và ven biển. Các văn hóa Cái Bèo, Đa Bút, Quỳnh Văn để lại những đống vỏ sò điệp lớn, đồ gốm và rìu mài toàn thân. Đây là nền cho nghề trồng lúa và nghề luyện kim ở giai đoạn sau.',
        'Between about 7,000 and 4,000 years ago many groups left the caves for the plains and the coast. The Cái Bèo, Đa Bút and Quỳnh Văn cultures left large shell middens, pottery and fully polished axes. This is the base on which rice farming and metallurgy later developed.',
      ),
    ],
    scholarly: [
      l(
        'Toàn bộ hiểu biết về giai đoạn này đến từ khảo cổ học, không có tư liệu viết. Niên đại "cách ngày nay" (BP) trong các công bố được tính từ năm 1950. Các nguồn thường đưa khung niên đại khác nhau cho cùng một văn hóa, vì số mẫu định tuổi tuyệt đối còn ít và phương pháp khác nhau. Trang này ghi rõ nguồn của từng con số.',
        'Everything known about this period comes from archaeology; there are no written records. Dates "before present" (BP) in publications are counted from 1950. Sources often give different date ranges for the same culture, because absolute dates are few and methods differ. This site states the source of each figure.',
      ),
      l(
        'Giới khảo cổ Việt Nam thường gọi Sơn Vi, Hòa Bình, Bắc Sơn là "văn hóa khảo cổ". Nhiều nhà nghiên cứu quốc tế chỉ coi Hòa Bình là một "kỹ nghệ" chế tác đá phân bố khắp Đông Nam Á, không gắn với một cộng đồng người cụ thể. Hai cách gọi phản ánh hai cách diễn giải cùng một bộ di vật.',
        'Vietnamese archaeologists usually call Sơn Vi, Hòa Bình and Bắc Sơn "archaeological cultures". Many international researchers treat the Hoabinhian only as a stone-working "industry" found across Southeast Asia, not tied to one specific community. The two terms reflect two readings of the same assemblages.',
      ),
    ],
    sources: ['derev2018', 'ciochon1996', 'nmh-hoabinh', 'vss2021', 'wiki-hoabinh'],
  },
  {
    slug: 'kim-khi',
    name: l('Thời kim khí', 'The Metal Age'),
    range: l('khoảng 2000 TCN - thế kỷ 2 SCN', 'c. 2000 BCE - 2nd century CE'),
    color: '#f2a531',
    summary: l(
      'Con người biết luyện đồng, rồi luyện sắt. Trên đất Việt Nam hình thành ba trung tâm văn hóa lớn: Đông Sơn ở miền Bắc, Sa Huỳnh ở miền Trung và Đồng Nai ở miền Nam. Trống đồng Đông Sơn và mộ chum Sa Huỳnh là hai dấu ấn dễ nhận ra nhất của thời kỳ này.',
      'People learned to work bronze, then iron. Three major cultural centres formed in what is now Vietnam: Đông Sơn in the north, Sa Huỳnh in the centre and Đồng Nai in the south. Đông Sơn bronze drums and Sa Huỳnh jar burials are the most recognisable marks of this period.',
    ),
    detail: [
      l(
        'Ở lưu vực sông Hồng, các nhà khảo cổ lập được một chuỗi phát triển liên tục: Phùng Nguyên, Đồng Đậu, Gò Mun rồi Đông Sơn. Qua từng giai đoạn, đồ đá ít dần và thô dần, còn đồ đồng tăng về số lượng và loại hình, từ những cục xỉ đồng ở Phùng Nguyên đến trống, thạp, rìu, giáo ở Đông Sơn.',
        'In the Red River basin archaeologists have established a continuous sequence: Phùng Nguyên, Đồng Đậu, Gò Mun and then Đông Sơn. Through each phase stone tools become fewer and cruder while bronze grows in quantity and variety, from lumps of slag at Phùng Nguyên to the drums, situlae, axes and spears of Đông Sơn.',
      ),
      l(
        'Ở ven biển miền Trung, cư dân Sa Huỳnh hỏa táng người chết và chôn trong chum gốm lớn, dùng nhiều đồ sắt, và trao đổi hạt thủy tinh, mã não, khuyên tai đá ngọc với Philippines, Đài Loan và Thái Lan. Ở Đông Nam Bộ, cư dân Đồng Nai đúc đồng bằng khuôn sa thạch và sau này mở đường cho văn hóa Óc Eo.',
        'On the central coast, Sa Huỳnh people cremated their dead and buried them in large pottery jars, used iron widely, and exchanged glass and carnelian beads and nephrite earrings with the Philippines, Taiwan and Thailand. In the southeast, Đồng Nai people cast bronze in sandstone moulds and later opened the way for the Óc Eo culture.',
      ),
      l(
        'Ba trung tâm không tách biệt nhau. Trống Đông Sơn được tìm thấy ở cả miền Trung và miền Nam, và đồ trang sức kiểu Sa Huỳnh xuất hiện trong mộ ở Đông Nam Bộ. Bản đồ trên trang này chia ba vùng để dễ hình dung, còn ngoài thực địa các vùng đan xen vào nhau.',
        'The three centres were not isolated. Đông Sơn drums have been found in the centre and the south, and Sa Huỳnh-style ornaments appear in graves in the southeast. The map on this site divides three zones for clarity; on the ground the zones overlap.',
      ),
    ],
    scholarly: [
      l(
        'Niên đại là chỗ các nguồn lệch nhau nhiều nhất. Văn hóa Đông Sơn được ghi bắt đầu từ khoảng 1000 TCN, 700 TCN hoặc muộn hơn tùy tác giả. Bách khoa Britannica vẫn giữ quan điểm cũ rằng nghề đồng du nhập từ phương bắc khoảng 300 TCN, trong khi chuỗi Phùng Nguyên - Đồng Đậu - Gò Mun cho thấy một quá trình phát triển tại chỗ dài hơn nhiều.',
        'Dating is where sources diverge most. The Đông Sơn culture is said to begin around 1000 BCE, 700 BCE or later, depending on the author. Britannica still keeps the older view that bronze working arrived from the north around 300 BCE, whereas the Phùng Nguyên - Đồng Đậu - Gò Mun sequence shows a much longer local development.',
      ),
      l(
        'Việc gắn một văn hóa khảo cổ với một tộc người trong sử sách cần thận trọng. Đông Sơn thường được gắn với người Lạc Việt, Sa Huỳnh với tổ tiên người Chăm. Đây là những giả thuyết được nhiều người chấp nhận, nhưng di vật không tự nói lên ngôn ngữ hay tên gọi của chủ nhân.',
        'Linking an archaeological culture to a people named in texts calls for caution. Đông Sơn is usually linked to the Lạc Việt and Sa Huỳnh to the ancestors of the Cham. These are widely accepted hypotheses, but artefacts do not by themselves reveal the language or name of their makers.',
      ),
    ],
    sources: ['nmh-predongson', 'wiki-dongson', 'britannica', 'wiki-sahuynh', 'manh2014'],
  },
  {
    slug: 'van-lang',
    name: l('Văn Lang', 'Văn Lang'),
    range: l('truyền thống: 2879 - 258 TCN', 'traditional dates: 2879 - 258 BCE'),
    color: '#57d38c',
    summary: l(
      'Văn Lang là nhà nước đầu tiên trong truyền thống sử Việt, do các vua Hùng đứng đầu, kinh đô ở Phong Châu (Phú Thọ). Câu chuyện đến từ truyền thuyết và được đưa vào chính sử ở thế kỷ 15. Phía khảo cổ, thời kỳ này tương ứng với văn hóa Đông Sơn.',
      'Văn Lang is the first state in the Vietnamese historical tradition, ruled by the Hùng kings from Phong Châu (Phú Thọ). The story comes from legend and entered the official chronicles in the 15th century. Archaeologically, the period corresponds to the Đông Sơn culture.',
    ),
    detail: [
      l(
        'Theo Đại Việt sử ký toàn thư, họ Hồng Bàng bắt đầu từ Kinh Dương Vương năm 2879 TCN và kết thúc năm 258 TCN, truyền 18 đời vua Hùng. Nước chia làm 15 bộ, giúp việc cho vua có lạc hầu và lạc tướng, dân gọi là người Lạc Việt.',
        'According to the Đại Việt sử ký toàn thư, the Hồng Bàng line began with Kinh Dương Vương in 2879 BCE and ended in 258 BCE, through 18 generations of Hùng kings. The realm was divided into 15 regions, the king was assisted by lạc hầu and lạc tướng, and the people were called Lạc Việt.',
      ),
      l(
        'Các truyền thuyết nổi tiếng nhất của người Việt đều đặt vào thời này: Lạc Long Quân và Âu Cơ, Thánh Gióng, Sơn Tinh - Thủy Tinh, bánh chưng bánh giầy. Giỗ Tổ Hùng Vương ngày 10 tháng 3 âm lịch tại Đền Hùng (Phú Thọ) hiện là quốc lễ.',
        'The best-known Vietnamese legends are all set in this age: Lạc Long Quân and Âu Cơ, Saint Gióng, the Mountain Spirit and the Water Spirit, and the square and round rice cakes. The Hùng Kings commemoration on the 10th day of the 3rd lunar month at the Hùng Temple (Phú Thọ) is now a national holiday.',
      ),
    ],
    scholarly: [
      l(
        'Con số 2879 - 258 TCN cho 18 đời vua nghĩa là mỗi đời trị vì trung bình khoảng 146 năm, điều không thể có thật. Chính các sử gia thời Lê và Nguyễn đã ghi lại sự ngờ vực này. Một bộ sử sớm hơn, Việt sử lược, đặt việc dựng nước Văn Lang vào đời Chu Trang Vương, tức thế kỷ 7 TCN, gần hơn với niên đại khảo cổ của văn hóa Đông Sơn.',
        'The span 2879 - 258 BCE for 18 kings means an average reign of about 146 years, which is impossible. Lê and Nguyễn dynasty historians themselves recorded this doubt. An earlier chronicle, the Việt sử lược, places the founding of Văn Lang in the reign of King Zhuang of Zhou, the 7th century BCE, closer to the archaeological dating of the Đông Sơn culture.',
      ),
      l(
        'Truyện vua Hùng xuất hiện trong văn bản từ thế kỷ 14 (Việt điện u linh tập, 1329) và được đưa vào chính sử ở cuối thế kỷ 15. Giới nghiên cứu ngày nay thường xem Văn Lang là sự kết hợp giữa ký ức truyền miệng và một xã hội có thật của cư dân Đông Sơn, với các thủ lĩnh vùng chứ chưa hẳn một vương triều tập quyền.',
        'The Hùng kings story appears in texts from the 14th century (Việt điện u linh tập, 1329) and entered the official chronicle in the late 15th century. Scholars today usually see Văn Lang as a blend of oral memory and a real Đông Sơn society led by regional chiefs, not quite a centralised dynasty.',
      ),
    ],
    sources: ['toanthu', 'vietsuluoc', 'linhnam', 'wiki-hung', 'hungmyth', 'wiki-dongson'],
  },
  {
    slug: 'au-lac',
    name: l('Âu Lạc', 'Âu Lạc'),
    range: l('257 - 208 TCN hoặc 208 - 179 TCN', '257 - 208 BCE or 208 - 179 BCE'),
    color: '#ef4b55',
    summary: l(
      'Thục Phán hợp nhất người Âu Việt và Lạc Việt, lập nước Âu Lạc, xưng An Dương Vương và đóng đô ở Cổ Loa (Đông Anh, Hà Nội). Nước Âu Lạc mất về tay Triệu Đà. Thành Cổ Loa với ba vòng lũy đất đến nay vẫn còn trên mặt đất.',
      'Thục Phán united the Âu Việt and the Lạc Việt, founded Âu Lạc, took the title An Dương Vương and ruled from Cổ Loa (Đông Anh, Hanoi). Âu Lạc fell to Zhao Tuo (Triệu Đà). The three earthen ramparts of Cổ Loa still stand today.',
    ),
    detail: [
      l(
        'Đây là thời kỳ đầu tiên mà truyền thuyết, sử sách và khảo cổ cùng nói về một địa điểm. Truyền thuyết kể về thần Kim Quy giúp xây thành và trao móng làm nỏ thần. Sử sách ghi cuộc chiến với Triệu Đà. Khảo cổ tìm thấy lũy thành đồ sộ, trống đồng và hàng vạn mũi tên đồng ngay tại Cổ Loa.',
        'This is the first period in which legend, chronicles and archaeology all speak about the same place. Legend tells of the Golden Turtle spirit who helped build the citadel and gave a claw for the magic crossbow. Chronicles record the war with Zhao Tuo. Archaeology has found massive ramparts, a bronze drum and tens of thousands of bronze arrowheads at Cổ Loa itself.',
      ),
      l(
        'Kết cục của Âu Lạc gắn với chuyện Mỵ Châu - Trọng Thủy: con trai Triệu Đà ở rể, đánh tráo lẫy nỏ, Âu Lạc thua trận. Sau đó vùng đất này thuộc nước Nam Việt của họ Triệu, rồi thuộc nhà Hán từ năm 111 TCN, mở đầu hơn một nghìn năm Bắc thuộc.',
        'The end of Âu Lạc is tied to the story of Mỵ Châu and Trọng Thủy: Zhao Tuo\'s son married into the court, swapped the crossbow trigger, and Âu Lạc was defeated. The land then belonged to the Zhao kingdom of Nanyue (Nam Việt), and from 111 BCE to the Han, opening more than a thousand years of northern rule.',
      ),
    ],
    scholarly: [
      l(
        'Có hai khung niên đại. Đại Việt sử ký toàn thư chép An Dương Vương trị vì 50 năm, từ năm Giáp Thìn (257 TCN) đến năm Quý Tỵ (208 TCN). Sử ký của Tư Mã Thiên lại cho biết Triệu Đà chỉ đánh chiếm Âu Lạc sau khi Lữ hậu nhà Hán mất (180 TCN), nên nhiều nhà sử học hiện nay lấy mốc khoảng 179 TCN và cho rằng Âu Lạc thành lập muộn hơn, khoảng 208 TCN.',
        'There are two chronologies. The Đại Việt sử ký toàn thư records that An Dương Vương ruled for 50 years, from the Giáp Thìn year (257 BCE) to the Quý Tỵ year (208 BCE). Sima Qian\'s Shiji states that Zhao Tuo only conquered Âu Lạc after the death of the Han Empress Lü (180 BCE), so many historians now use about 179 BCE and hold that Âu Lạc was founded later, around 208 BCE.',
      ),
      l(
        'Các cuộc khai quật lũy thành từ năm 2007 cho thấy những lớp đắp sớm nhất có trước khi nhà Hán có mặt ở vùng này nhiều thế kỷ. Kết quả đó ủng hộ cách hiểu rằng Cổ Loa do một xã hội bản địa xây dựng.',
        'Excavations of the ramparts since 2007 show that the earliest construction layers predate the Han presence in the region by centuries. This supports the reading that Cổ Loa was built by a local society.',
      ),
    ],
    sources: ['toanthu', 'suky', 'wiki-aulac', 'kim2010', 'kim2016'],
  },
];

export const periods: Period[] = [...base, ...chapters.map((c) => c.period)];
export const periodBySlug = Object.fromEntries(periods.map((p) => [p.slug, p]));

// Các thời kỳ sẽ làm ở những đợt sau, theo thứ tự thời gian.
const planned: { slug: string; name: L; range: string }[] = [
  { slug: 'nam-viet', name: l('Nam Việt và Bắc thuộc lần thứ nhất', 'Nanyue and the first northern domination'), range: '179 TCN - 40' },
  { slug: 'hai-ba-trung', name: l('Hai Bà Trưng', 'The Trưng Sisters'), range: '40 - 43' },
  { slug: 'bac-thuoc-2', name: l('Bắc thuộc lần thứ hai', 'Second northern domination'), range: '43 - 544' },
  { slug: 'phu-nam', name: l('Phù Nam - Óc Eo và Chân Lạp', 'Funan - Óc Eo and Chenla'), range: 'tk 1 - tk 8' },
  { slug: 'champa', name: l('Champa', 'Champa'), range: '192 - 1832' },
  { slug: 'van-xuan', name: l('Vạn Xuân', 'Vạn Xuân'), range: '544 - 602' },
  { slug: 'bac-thuoc-3', name: l('Bắc thuộc lần thứ ba', 'Third northern domination'), range: '602 - 905' },
  { slug: 'tu-chu', name: l('Tự chủ: họ Khúc, Dương, Ngô', 'Autonomy: Khúc, Dương, Ngô'), range: '905 - 967' },
  { slug: 'dinh-tien-le', name: l('Đinh và Tiền Lê', 'Đinh and Early Lê'), range: '968 - 1009' },
  { slug: 'ly', name: l('Nhà Lý', 'Lý dynasty'), range: '1009 - 1225' },
  { slug: 'tran', name: l('Nhà Trần', 'Trần dynasty'), range: '1225 - 1400' },
  { slug: 'ho-minh', name: l('Nhà Hồ và thuộc Minh', 'Hồ dynasty and Ming rule'), range: '1400 - 1427' },
  { slug: 'le-so', name: l('Lê sơ', 'Early Later Lê'), range: '1428 - 1527' },
  { slug: 'mac-trinh-nguyen', name: l('Mạc, Lê trung hưng, Trịnh - Nguyễn', 'Mạc, Revival Lê, Trịnh - Nguyễn'), range: '1527 - 1789' },
  { slug: 'tay-son', name: l('Tây Sơn', 'Tây Sơn'), range: '1778 - 1802' },
  { slug: 'nguyen', name: l('Nhà Nguyễn', 'Nguyễn dynasty'), range: '1802 - 1945' },
  { slug: 'phap-thuoc', name: l('Pháp thuộc', 'French colonial period'), range: '1858 - 1945' },
  { slug: '1945-1975', name: l('1945 - 1975', '1945 - 1975'), range: '1945 - 1975' },
  { slug: 'sau-1975', name: l('Từ 1975 đến nay', 'From 1975 to the present'), range: '1975 - nay' },
];
export const upcoming = planned.filter((u) => !chapters.some((c) => c.period.slug === u.slug));
