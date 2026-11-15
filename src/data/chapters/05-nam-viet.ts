import { l, type Chapter } from '../types';

const chapter: Chapter = {
  order: 5,
  period: {
    slug: 'nam-viet',
    name: l('Nam Việt và Bắc thuộc lần thứ nhất', 'Nanyue and the first northern domination'),
    range: l('179 TCN - 40', '179 BCE - 40 CE'),
    start: l('179 TCN', '179 BCE'),
    color: '#c9a227',
    view: 'north',
    regions: { north: l('Giao Chỉ - Cửu Chân', 'Jiaozhi - Jiuzhen') },
    question: l(
      'Khi quyền cai trị nằm trong tay người phương bắc, đời sống ở đồng bằng sông Hồng và sông Mã đã đổi khác đến đâu, và điều gì vẫn được giữ lại?',
      'When power passed to rulers from the north, how much did life in the Red River and Mã River plains really change, and what stayed the same?',
    ),
    summary: l(
      'Sau khi Âu Lạc thất thủ, vùng đất này thuộc nước Nam Việt của Triệu Đà, rồi từ năm 111 TCN thuộc nhà Hán với ba quận Giao Chỉ, Cửu Chân, Nhật Nam. Trong khoảng một thế kỷ rưỡi, các Lạc tướng vẫn giữ đất của mình và văn hóa Đông Sơn vẫn tiếp tục, cho đến khi quan lại nhà Hán siết chặt dần quyền kiểm soát.',
      'After the fall of Âu Lạc the land belonged to Zhao Tuo\'s (Triệu Đà) kingdom of Nanyue, and from 111 BCE to the Han empire as the commanderies of Jiaozhi (Giao Chỉ), Jiuzhen (Cửu Chân) and Rinan (Nhật Nam). For about a century and a half the Lạc lords kept their lands and Đông Sơn culture carried on, until Han officials gradually tightened their grip.',
    ),
    detail: [
      l(
        'Triệu Đà vốn là tướng nhà Tần, lập nước Nam Việt với kinh đô Phiên Ngung (Quảng Châu ngày nay). Sau khi thu phục Âu Lạc, ông không đưa quân sang đóng giữ khắp nơi mà cử hai viên sứ giả trông coi Giao Chỉ và Cửu Chân. Các Lạc hầu, Lạc tướng tiếp tục quản dân như trước. Mốc Âu Lạc thất thủ có hai cách tính, 208 TCN hoặc khoảng 179 TCN, đã được trình bày ở thời kỳ Âu Lạc.',
        'Zhao Tuo, a former Qin general, founded Nanyue with its capital at Panyu (modern Guangzhou). After subduing Âu Lạc he did not garrison the country but posted two legates to oversee Jiaozhi and Jiuzhen, while the Lạc lords went on governing their people as before. The fall of Âu Lạc is dated either to 208 BCE or to about 179 BCE; the two chronologies are discussed in the Âu Lạc period.',
      ),
      l(
        'Năm 111 TCN, quân của Hán Vũ Đế hạ thành Phiên Ngung. Hai viên sứ giả mang trâu bò, rượu ra đón quân Hán và xin hàng, nên đồng bằng sông Hồng không trải qua trận đánh lớn nào. Nhà Hán chia đất Nam Việt thành các quận, trong đó Giao Chỉ, Cửu Chân, Nhật Nam nằm trên đất Việt Nam ngày nay. Trị sở đặt ở Luy Lâu, một bến cảng giữa đồng ruộng thuộc Bắc Ninh.',
        'In 111 BCE the armies of Emperor Wu of Han took Panyu. The two legates met the Han army with cattle and wine and offered submission, so the Red River plain saw no major battle. The Han divided Nanyue into commanderies, three of which, Jiaozhi, Jiuzhen and Rinan, lay in present-day Vietnam. Headquarters were at Luy Lâu, a port among the fields in what is now Bắc Ninh.',
      ),
      l(
        'Suốt thế kỷ đầu, nhà Hán cai trị gián tiếp: trao ấn và dải thao cho các thủ lĩnh bản địa rồi nhận cống nạp. Đến đầu Công nguyên, người phương bắc di cư xuống đông hơn, các thái thú như Tích Quang và Nhâm Diên thúc đẩy cày cấy, hôn lễ và trường học theo kiểu Hán. Năm 39, sử chép thái thú Tô Định tham lam và tàn bạo. Thời kỳ này khép lại khi cuộc khởi nghĩa của Hai Bà Trưng nổ ra năm 40.',
        'For the first century Han rule was indirect: local chiefs received seals and ribbons and sent tribute. Around the start of the Common Era more northerners moved south, and governors such as Xi Guang (Tích Quang) and Ren Yan (Nhâm Diên) promoted Han-style farming, marriage rites and schools. Under the year 39 the chronicle calls the governor Su Ding (Tô Định) greedy and violent. The period closes when the Trưng Sisters rose in 40 CE.',
      ),
    ],
    scholarly: [
      l(
        'Sử liệu về thời kỳ này gần như đều do người phương bắc viết: Sử ký (thiên Nam Việt Úy Đà liệt truyện), Hán thư và Hậu Hán thư. Đại Việt sử ký toàn thư soạn sau đó hơn một nghìn năm và chủ yếu dựa vào các sách ấy. Vì vậy tiếng nói của người bản địa chỉ hiện ra gián tiếp, qua khảo cổ học và qua những chi tiết mà quan lại nhà Hán vô tình ghi lại.',
        'Almost all written evidence for this period comes from northern authors: the Shiji (the account of Zhao Tuo of Nanyue), the Hanshu and the Hou Hanshu. The Đại Việt sử ký toàn thư was compiled more than a thousand years later and draws mainly on those books. Local voices therefore appear only indirectly, through archaeology and through details that Han officials recorded in passing.',
      ),
      l(
        'Cách gọi tên thời kỳ cũng là một lựa chọn. Toàn thư chép "Kỷ nhà Triệu" như một triều đại chính thống và chỉ tính thời thuộc Tây Hán từ năm 110 TCN. Sử học Việt Nam hiện nay phần lớn coi nhà Triệu là thế lực từ ngoài vào và tính Bắc thuộc từ năm 179 TCN. Trang này dùng mốc 179 TCN theo cách phân kỳ phổ biến hiện nay, và trình bày cuộc tranh luận ở mục Triệu Đà.',
        'Even the name of the period is a choice. The Toàn thư has "Annals of the Triệu" as a legitimate dynasty and counts the Western Han period only from 110 BCE. Most Vietnamese historians today treat the Triệu as an outside power and date northern rule from 179 BCE. This site follows the now common 179 BCE periodisation and sets out the debate in the entry on Zhao Tuo.',
      ),
      l(
        'Số liệu duy nhất về dân số là cuộc điều tra năm 2 chép trong Hán thư: ba quận có 143.643 hộ, 981.735 người. K.W. Taylor ngờ rằng con số này không đến từ việc đăng ký dân thật sự, nhưng vẫn coi đó là chứng cứ hợp lý về một cư dân định cư đông đúc. Jennifer Holmgren thì nhấn mạnh rằng trước thời Vương Mãng (9 - 23), chính quyền hầu như để các thủ lĩnh bản địa tự quản.',
        'The only population figure is the census of 2 CE in the Hanshu: 143,643 households and 981,735 people in the three commanderies. K.W. Taylor doubts that these numbers came from a real registration, yet treats them as plausible evidence of a large settled population. Jennifer Holmgren stresses that before Wang Mang\'s time (9 - 23 CE) the authorities largely left native chiefs to run their own areas.',
      ),
    ],
    sources: ['nv-taylor2013', 'nv-toanthu-nk2', 'nv-toanthu-nk3', 'suky', 'nv-holmgren1980', 'nv-nhandan2005', 'nv-wiki-first'],
  },

  entries: [
    {
      slug: 'trieu-da',
      period: 'nam-viet',
      kind: 'figure',
      name: l('Triệu Đà và nước Nam Việt', 'Zhao Tuo (Triệu Đà) and the kingdom of Nanyue'),
      date: l('trị vì khoảng 207 hoặc 204 - 137 TCN', 'reigned c. 207 or 204 - 137 BCE'),
      sort: 2179,
      place: l('Kinh đô Phiên Ngung (Quảng Châu, Trung Quốc), ngoài khung bản đồ', 'Capital at Panyu (Guangzhou, China), outside the map frame'),
      evidence: ['chron', 'arch'],
      summary: l(
        'Triệu Đà là viên tướng nhà Tần quê ở Chân Định, người lập nước Nam Việt và thu phục Âu Lạc. Ông vừa xưng đế trong nước vừa chịu làm vương trước nhà Hán. Suốt nhiều thế kỷ, sử Việt tranh luận nên coi ông là vị vua mở nước hay là người đã lấy mất nước của An Dương Vương.',
        'Zhao Tuo was a Qin general from Zhending who founded Nanyue and subdued Âu Lạc. He called himself emperor at home while accepting the rank of king before the Han. For centuries Vietnamese historians have argued over whether he was a founding ruler or the man who took An Dương Vương\'s country.',
      ),
      detail: [
        l(
          'Triệu Đà quê ở Chân Định (nay thuộc Hà Bắc, Trung Quốc), theo quân Tần xuống phương nam. Khi nhà Tần sụp đổ, ông tự lập làm vua Nam Việt, đóng đô ở Phiên Ngung. Năm 196 TCN, nhà Hán sai Lục Giả sang công nhận ông làm Nam Việt vương, đổi lấy việc ông thần phục trên danh nghĩa. Lãnh thổ Nam Việt gồm phần lớn Quảng Đông, Quảng Tây và miền bắc Việt Nam ngày nay.',
          'Zhao Tuo came from Zhending (now in Hebei, China) and went south with the Qin armies. When Qin collapsed he made himself king of Nanyue with his capital at Panyu. In 196 BCE the Han sent Lu Jia to recognise him as king of Nanyue in return for nominal submission. The kingdom covered most of modern Guangdong and Guangxi and the north of present-day Vietnam.',
        ),
        l(
          'Dưới thời Lữ hậu (187 - 180 TCN), nhà Hán cấm bán đồ sắt và gia súc cho Nam Việt. Triệu Đà đoạn tuyệt với nhà Hán và xưng đế. Cuộc tiến đánh của nhà Hán năm 181 TCN thất bại. Sau khi Lữ hậu mất, ông dùng cả binh lực lẫn của cải để khiến Mân Việt, Tây Âu và Lạc thần phục. Với Hán Văn Đế, ông bỏ đế hiệu trong thư từ nhưng ở trong nước vẫn giữ.',
          'Under Empress Lü (187 - 180 BCE) the Han banned the sale of iron goods and livestock to Nanyue. Zhao Tuo broke with the Han and declared himself emperor. A Han attack in 181 BCE failed. After the empress died he used both troops and gifts to bring Minyue, the Western Ou and the Luo (Lạc) into submission. Towards Emperor Wen he dropped the imperial title in correspondence but kept it at home.',
        ),
        l(
          'Ông mất năm 137 TCN, cháu nội là Triệu Mạt nối ngôi và trị vì đến năm 122 TCN. Năm 1983, lăng Triệu Mạt được phát hiện ở Quảng Châu. Trong số đồ tùy táng có một chiếc ấn vàng nhỏ, mỗi cạnh chừng 3 cm, khắc bốn chữ có nghĩa là ấn của Văn Đế. Chiếc ấn cho thấy vua Nam Việt vẫn dùng đế hiệu ở trong nước, đúng như Sử ký chép. Lăng nằm ngoài khung bản đồ của trang này nên không có điểm đánh dấu.',
          'He died in 137 BCE and was succeeded by his grandson Zhao Mo, who reigned until 122 BCE. In 1983 Zhao Mo\'s tomb was found in Guangzhou. Among the grave goods was a small gold seal, about 3 cm square, with four characters meaning the seal of Emperor Wen. It shows that the kings of Nanyue went on using the imperial title at home, just as the Shiji says. The tomb lies outside this site\'s map frame, so it has no marker.',
        ),
      ],
      scholarly: [
        l(
          'Nguồn gốc là thiên Nam Việt Úy Đà liệt truyện trong Sử ký, viết sau khi Nam Việt mất chưa đầy một thế kỷ. Niên đại lập nước lệch nhau: Toàn thư và Britannica ghi 207 TCN, nhiều tài liệu khác ghi 204 hoặc 203 TCN. Về tuổi thọ, Toàn thư chép ông ở ngôi 71 năm và thọ 121 tuổi, một con số khó tin. Sử ký tính nhà Triệu truyền 5 đời, 93 năm, còn Toàn thư tính 97 năm từ 207 đến 111 TCN.',
          'The basic source is the account of Zhao Tuo in the Shiji, written less than a century after Nanyue fell. Founding dates differ: the Toàn thư and Britannica give 207 BCE, many other works 204 or 203 BCE. On his lifespan, the Toàn thư says he reigned 71 years and lived to 121, which is hard to credit. The Shiji counts five reigns and 93 years for the house of Zhao; the Toàn thư counts 97 years, from 207 to 111 BCE.',
        ),
        l(
          'Thế kỷ 13, Lê Văn Hưu khen Triệu Vũ Đế mở mang nước Việt, tự làm đế một cõi và chống lại nhà Hán. Ngô Sĩ Liên giữ "Kỷ nhà Triệu" trong Toàn thư, và Bình Ngô đại cáo của Nguyễn Trãi (1428) xếp họ Triệu đứng đầu các triều dựng nước. Đến thế kỷ 18, Ngô Thì Sĩ thường được nhắc đến như người đầu tiên coi nhà Triệu là một chính quyền riêng của người phương bắc chứ không phải triều đại chính thống của nước Việt.',
          'In the 13th century Lê Văn Hưu praised Emperor Wu of Triệu for enlarging Việt, ruling as emperor in his own realm and standing up to the Han. Ngô Sĩ Liên kept the "Annals of the Triệu" in the Toàn thư, and Nguyễn Trãi\'s Bình Ngô đại cáo (1428) put the Triệu first among the dynasties that built the country. In the 18th century Ngô Thì Sĩ is usually credited as the first to treat the Triệu as a separate northern regime rather than a legitimate Vietnamese dynasty.',
        ),
        l(
          'Sử học chính thống ở Việt Nam ngày nay theo hướng của Ngô Thì Sĩ. Một bài trên báo Nhân Dân năm 2005 gọi đây là cuộc xâm lược và mô tả Nam Việt là nhà nước cát cứ của tướng lĩnh, quan lại người Hán. Cũng có ý kiến đề nghị nhìn lại, như Trần Ngọc Vương (2021), người nhắc rằng nhiều bậc tiền nhân từng tính lịch sử dựng nước từ họ Triệu. Lập luận hai bên xoay quanh gốc gác của vua, nơi đặt kinh đô và việc ông chống nhà Hán.',
          'Mainstream historiography in Vietnam today follows Ngô Thì Sĩ. A 2005 article in the newspaper Nhân Dân calls the episode an invasion and describes Nanyue as a breakaway state of Han generals and officials. Others have asked for a second look, among them Trần Ngọc Vương (2021), who recalls that many earlier writers began the country\'s history with the Triệu. The arguments turn on the ruler\'s origin, the location of his capital and his defiance of the Han.',
        ),
      ],
      sources: ['suky', 'nv-toanthu-nk2', 'nv-brit-namviet', 'nv-taylor2013', 'nv-wiki-ngothisi', 'nv-nhandan2005', 'nv-vuong2021', 'nv-gac-seal', 'nv-chinadaily-nanyue'],
    },
    {
      slug: 'han-diet-nam-viet',
      period: 'nam-viet',
      kind: 'event',
      name: l('Nhà Hán diệt Nam Việt', 'The Han conquest of Nanyue'),
      date: l('112 - 111 TCN', '112 - 111 BCE'),
      sort: 2111,
      place: l('Cổ Loa, Hà Nội (trận chính diễn ra ở Phiên Ngung, ngoài khung bản đồ)', 'Cổ Loa, Hanoi (the main fighting was at Panyu, outside the map frame)'),
      coord: [105.87, 21.12],
      evidence: ['chron'],
      summary: l(
        'Một cuộc tranh chấp trong triều Nam Việt về việc có nên thần phục nhà Hán đã dẫn tới chiến tranh. Năm 111 TCN, quân Hán hạ kinh đô Phiên Ngung, nhà Triệu chấm dứt sau năm đời vua. Giao Chỉ và Cửu Chân đổi chủ mà gần như không có giao tranh, vì hai viên sứ giả của Nam Việt ra hàng.',
        'A quarrel at the Nanyue court over whether to submit to the Han led to war. In 111 BCE Han armies took the capital Panyu and the house of Zhao ended after five kings. Jiaozhi and Jiuzhen changed hands almost without fighting, because Nanyue\'s two legates surrendered.',
      ),
      detail: [
        l(
          'Dưới đời vua thứ tư là Ai Vương, thái hậu Nam Việt muốn đưa nước này về dưới quyền nhà Hán. Thừa tướng Lữ Gia, một người Việt, đứng đầu phe phản đối. Năm 112 TCN, ông giết Ai Vương, thái hậu cùng sứ giả nhà Hán rồi lập Kiến Đức lên ngôi. Hán Vũ Đế sai tướng Lộ Bác Đức đem quân tiến về Phiên Ngung.',
          'Under the fourth king, Ai, the queen dowager of Nanyue wanted to place the kingdom under Han authority. The chief minister Lü Jia (Lữ Gia), a Yue man, led the opposition. In 112 BCE he killed King Ai, the dowager and the Han envoy and put Jiande (Kiến Đức) on the throne. Emperor Wu sent General Lu Bode against Panyu.',
        ),
        l(
          'Thành Phiên Ngung thất thủ năm 111 TCN. Toàn thư chép rằng ban đêm vua và Lữ Gia cùng vài trăm người chạy ra biển, rồi đều bị bắt. Ở phía nam, hai viên sứ giả Nam Việt coi Giao Chỉ và Cửu Chân đem trâu bò, rượu và vật làm tin ra biên giới Giao Chỉ đón Lộ Bác Đức. Nhờ vậy vùng đất của người Lạc được chuyển giao nguyên vẹn cho nhà Hán.',
          'Panyu fell in 111 BCE. The Toàn thư says that the king and Lü Jia fled out to sea by night with a few hundred men and were both captured. In the south, the two Nanyue legates for Jiaozhi and Jiuzhen brought cattle, wine and tokens of submission to the Jiaozhi border to meet Lu Bode. The land of the Lạc thus passed to the Han intact.',
        ),
      ],
      scholarly: [
        l(
          'Có một chi tiết liên quan đến Cổ Loa. Hán thư ghi một người tên Hoàng Đồng giết "Tây Vu vương" và được nhà Hán ban thưởng. Taylor hiểu đây là một thủ lĩnh Âu Lạc lật đổ vị vua mà Nam Việt đặt ở Cổ Loa. Một cách đọc khác, được nêu trên Wikipedia, cho rằng Tây Vu vương nổi dậy chống nhà Hán rồi bị thuộc hạ giết. Sử liệu quá ngắn để phân định, và điểm đánh dấu ở Cổ Loa trên bản đồ dựa theo cách hiểu thứ nhất.',
          'One detail touches Cổ Loa. The Hanshu records that a man named Huang Tong (Hoàng Đồng) killed the "king of Xiyu (Tây Vu)" and was rewarded by the Han. Taylor reads this as an Âu Lạc lord overthrowing the king whom Nanyue had installed at Cổ Loa. Another reading, cited on Wikipedia, has the king of Tây Vu rising against the Han and being killed by a subordinate. The record is too brief to decide, and the marker at Cổ Loa follows the first reading.',
        ),
        l(
          'Lữ Gia được nhìn nhận rất khác nhau. Trong Toàn thư, Lê Văn Hưu ghi nhận lời can ngăn của ông là biết quý trọng nước Việt, nhưng vẫn kết luận tội giết vua của ông không thể tha. Ngô Sĩ Liên thì than rằng họ Triệu mất thì nước mất, dòng vua đứt và đất Việt bị chia cắt. Toàn thư tổng kết nhà Triệu truyền năm đời, cộng 97 năm. Cả hai lời bàn đều viết từ chỗ đứng coi nhà Triệu là triều đại của nước Việt, khác với cách nhìn phổ biến ngày nay.',
          'Lü Jia has been judged very differently. In the Toàn thư, Lê Văn Hưu grants that his remonstrance showed real regard for Việt, yet concludes that his crime of killing the king cannot be excused. Ngô Sĩ Liên laments that when the Zhao fell the country was lost, the royal line was broken and Việt was divided. The Toàn thư sums up the Triệu as five reigns and 97 years. Both comments are written from a standpoint that treats the Triệu as a dynasty of Việt, unlike the view that prevails today.',
        ),
      ],
      sources: ['suky', 'nv-hanshu', 'nv-toanthu-nk2', 'nv-taylor2013', 'nv-wiki-nanyue', 'nv-brit-namviet'],
    },
    {
      slug: 'ba-quan-giao-chi-cuu-chan-nhat-nam',
      period: 'nam-viet',
      kind: 'event',
      name: l('Ba quận Giao Chỉ, Cửu Chân, Nhật Nam', 'Jiaozhi, Jiuzhen and Rinan commanderies'),
      date: l('từ 111 TCN', 'from 111 BCE'),
      sort: 2110,
      place: l('Bắc Bộ, Bắc Trung Bộ và dải ven biển phía nam Hoành Sơn', 'Northern Vietnam, the north-central coast and the coast south of Hoành Sơn'),
      evidence: ['chron'],
      summary: l(
        'Sau năm 111 TCN, nhà Hán chia đất Nam Việt cũ thành chín quận. Ba quận nằm trên đất Việt Nam ngày nay là Giao Chỉ ở đồng bằng sông Hồng, Cửu Chân ở đồng bằng sông Mã và sông Cả, và Nhật Nam ở xa hơn về phía nam. Lần đầu tiên dân số vùng này được ghi thành con số.',
        'After 111 BCE the Han divided the former Nanyue into nine commanderies. Three lay in present-day Vietnam: Jiaozhi in the Red River plain, Jiuzhen in the plains of the Mã and Cả rivers, and Rinan further south. For the first time the population of the region was written down as numbers.',
      ),
      detail: [
        l(
          'Chín quận gồm Nam Hải, Hợp Phố, Thương Ngô, Uất Lâm, Châu Nhai, Đạm Nhĩ, Giao Chỉ, Cửu Chân và Nhật Nam. Theo Hán thư, Giao Chỉ có 10 huyện, Cửu Chân 7 huyện, Nhật Nam 5 huyện, tổng cộng 22 huyện. Trong số các huyện của Giao Chỉ có Luy Lâu, Mê Linh và Long Biên, những cái tên còn gặp lại nhiều lần về sau. Nhà Hán đặt hai đồn binh ở biên giới, một ở Mê Linh nhìn lên thượng nguồn sông Hồng, một ở Nhật Nam.',
          'The nine were Nanhai, Hepu, Cangwu, Yulin, Zhuya, Dan\'er, Jiaozhi, Jiuzhen and Rinan. According to the Hanshu, Jiaozhi had 10 counties, Jiuzhen 7 and Rinan 5, 22 in all. The counties of Jiaozhi included Leilou (Luy Lâu), Miling (Mê Linh) and Longbian (Long Biên), names that recur for centuries. The Han set up two frontier garrisons, one at Mê Linh facing up the Red River and one in Rinan.',
        ),
        l(
          'Cuộc điều tra dân số năm 2 ghi Giao Chỉ có 92.440 hộ với 746.237 người, Cửu Chân 35.743 hộ với 166.013 người, Nhật Nam 15.460 hộ với 69.485 người. Cộng lại là 143.643 hộ và 981.735 người. Cùng lúc đó, vùng Quảng Đông và Quảng Tây chỉ ghi 71.805 hộ với 390.555 người, tức chưa bằng một nửa số hộ của ba quận phía nam.',
          'The census of 2 CE recorded 92,440 households and 746,237 people in Jiaozhi, 35,743 households and 166,013 people in Jiuzhen, and 15,460 households and 69,485 people in Rinan: 143,643 households and 981,735 people in all. At the same date Guangdong and Guangxi recorded only 71,805 households and 390,555 people, less than half the households of the three southern commanderies.',
        ),
      ],
      scholarly: [
        l(
          'Các nguồn lệch nhau về thời điểm và trị sở. Sử ký và Hán thư gắn việc lập quận với năm 111 TCN. Toàn thư lại bắt đầu thời thuộc Tây Hán từ năm Tân Mùi (110 TCN), chép Thạch Đái làm thứ sử và nói trị sở ở Long Uyên, tức Long Biên. Taylor thì đặt đầu não của Giao Chỉ và cả vùng ở Luy Lâu. Holmgren viết rằng trong phần lớn thời Hậu Hán trị sở quận Giao Chỉ ở Luy Lâu, có giai đoạn ở Long Biên, và bà không tin Long Biên là Hà Nội như cách nhận định truyền thống.',
          'Sources differ on date and seat. The Shiji and Hanshu tie the commanderies to 111 BCE. The Toàn thư starts the Western Han period in the Tân Mùi year (110 BCE), names Shi Dai (Thạch Đái) as inspector and puts the seat at Longyuan, that is Long Biên. Taylor places the headquarters of Jiaozhi and of the whole region at Luy Lâu. Holmgren writes that for most of the Later Han the seat of Jiaozhi commandery was Luy Lâu, with a stage at Long Biên, and she doubts the traditional identification of Long Biên with Hanoi.',
        ),
        l(
          'Con số năm 2 cần được đọc cẩn thận. Taylor viết rằng khó có chuyện các số này đến từ một cuộc đăng ký dân thật sự, và 22 huyện có thể chỉ được "tổ chức, hoặc ít nhất là hình dung" trên giấy. Dù vậy, tỷ lệ giữa các quận vẫn có ý nghĩa: Giao Chỉ chiếm khoảng ba phần tư dân số ghi được. Vị trí chính xác của Nhật Nam còn chưa chắc chắn, nên mục này không có điểm đánh dấu trên bản đồ.',
          'The figures for 2 CE need careful reading. Taylor writes that they are unlikely to come from a real registration of people, and that the 22 counties may only have been "organized, or at least theorized" on paper. Even so the proportions mean something: Jiaozhi accounts for about three quarters of the recorded population. The exact location of Rinan remains uncertain, so this entry has no marker on the map.',
        ),
      ],
      sources: ['nv-hanshu', 'nv-toanthu-nk3', 'nv-taylor2013', 'nv-holmgren1980', 'nv-wiki-first'],
    },
    {
      slug: 'lac-tuong-thoi-han',
      period: 'nam-viet',
      kind: 'culture',
      name: l('Lạc tướng dưới quyền nhà Hán', 'The Lạc lords under Han rule'),
      date: l('111 TCN - 40', '111 BCE - 40 CE'),
      sort: 2100,
      place: l('Mê Linh, Hà Nội', 'Mê Linh, Hanoi'),
      coord: [105.733, 21.156],
      evidence: ['chron'],
      summary: l(
        'Trong hơn một thế kỷ, nhà Hán không thay các thủ lĩnh bản địa. Lạc hầu, Lạc tướng vẫn cai quản dân và ruộng của mình, nhận ấn và dải thao của triều đình rồi nộp cống. Cách cai trị gián tiếp này giải thích vì sao xã hội Lạc Việt còn nguyên sức mạnh khi khởi nghĩa nổ ra năm 40.',
        'For more than a century the Han did not replace the local chiefs. The Lạc lords went on governing their own people and fields, received seals and ribbons from the court and sent tribute. This indirect rule explains why Lạc society was still strong when revolt broke out in 40 CE.',
      ),
      detail: [
        l(
          'Dưới thời Nam Việt, hai viên sứ giả chỉ trông coi từ xa và lập các điểm buôn bán thông ra biển. Nhà Hán giữ nguyên cách làm đó. Các thủ lĩnh người Lạc đứng đầu các huyện, được trao ấn và dải thao làm dấu hiệu địa vị. Phần họ nộp lên, họ coi là cống vật dâng cho bề trên. Theo thời gian, quan lại nhà Hán lại coi đó là thuế phải thu.',
          'Under Nanyue the two legates supervised from a distance and set up trading posts open to the sea. The Han kept the arrangement. Lạc chiefs headed the counties and were given seals and ribbons as marks of rank. What they handed over they regarded as tribute to an overlord. Over time Han officials came to see it as tax to be collected.',
        ),
        l(
          'Sự khác biệt về gia đình và ruộng đất cũng gây căng thẳng. Người Hán truyền đất theo dòng cha. Trong xã hội Lạc, địa vị và quyền thừa kế đi theo dòng mẹ, và ruộng thường được dùng chung. Khi quan lại, binh lính, thợ và nông dân từ phương bắc đến lấy vợ người địa phương và tìm cách có đất, hai nếp ấy va chạm nhau. Mê Linh, nơi có đồn binh Hán, cũng là đất gốc của Hai Bà Trưng, những người được kể ở thời kỳ kế tiếp.',
          'Differences over family and land also caused strain. The Han passed land down the male line. In Lạc society status and inheritance ran through the mother\'s line and land was often used in common. When northern officials, soldiers, craftsmen and farmers married local women and sought land, the two customs collided. Mê Linh, where a Han garrison stood, was also the home ground of the Trưng Sisters, whose story is told in the next period.',
        ),
      ],
      scholarly: [
        l(
          'Mô tả cổ nhất về các Lạc tướng nằm trong Giao Châu ngoại vực ký, một sách đã mất, chỉ còn được dẫn lại trong Thủy kinh chú (thế kỷ 6). Đoạn này nói các thủ lĩnh người Lạc giữ ấn đồng và dải thao. Holmgren lưu ý rằng các chữ vương, hầu, quận, huyện ở đây đều là thuật ngữ đời sau gán vào. Sử liệu không cho biết có bao nhiêu thủ lĩnh và thứ bậc ra sao, nên bà cho rằng không nên gọi đây là chế độ phong kiến.',
          'The oldest description of the Lạc lords is in the Jiaozhou waiyu ji, a lost book quoted in the 6th-century Shuijing zhu. It says the Lạc chiefs held bronze seals and ribbons. Holmgren notes that words such as king, marquis, commandery and county in the passage are later terms applied in hindsight. The record does not say how many chiefs there were or how they ranked, so she argues the system should not be called feudal.',
        ),
        l(
          'Taylor gọi cách cai trị qua các Lạc tướng là một giải pháp tạm, không thể kéo dài. Theo ông, làn sóng người Hán chạy loạn thời Vương Mãng (9 - 23) đã làm quan lại mạnh lên và đẩy nhanh việc bộ máy cai trị lấn át tầng lớp quý tộc Lạc. Vị trí của Mê Linh cổ còn được bàn cãi: Maspero đặt ở Việt Trì, Madrolle đặt ở Hạ Lôi. Holmgren chỉ khẳng định nó nằm bên sông Hồng, phía bắc Hà Nội. Điểm trên bản đồ là đền Hai Bà Trưng ở Hạ Lôi.',
          'Taylor calls rule through the Lạc lords an expedient that could not last. In his view the wave of Han refugees in Wang Mang\'s time (9 - 23 CE) strengthened the officials and sped up the rise of the administration over the Lạc aristocracy. The site of ancient Mê Linh is disputed: Maspero placed it at Việt Trì, Madrolle at Hạ Lôi. Holmgren states only that it lay on the Red River north of Hanoi. The map marker is the Trưng Sisters temple at Hạ Lôi.',
        ),
      ],
      sources: ['nv-taylor2013', 'nv-holmgren1980', 'nv-hauhanshu', 'nv-wiki-first'],
    },
    {
      slug: 'luy-lau',
      period: 'nam-viet',
      kind: 'site',
      name: l('Luy Lâu, trị sở buổi đầu của Giao Chỉ', 'Luy Lâu, early seat of Jiaozhi'),
      date: l('từ khoảng 111 TCN', 'from about 111 BCE'),
      sort: 2090,
      place: l('Vùng Dâu, Thuận Thành, Bắc Ninh', 'The Dâu area, Thuận Thành, Bắc Ninh'),
      coord: [106.045, 21.038],
      evidence: ['chron', 'arch'],
      summary: l(
        'Luy Lâu nằm bên sông Dâu ở Bắc Ninh và thường được coi là nơi nhà Hán đặt trị sở quận Giao Chỉ sau năm 111 TCN. Từ đây quan lại phương bắc trông coi cả vùng qua đường sông thông ra biển. Tuy vậy, sử cũ không thống nhất về nơi đặt trị sở, và khảo cổ học chưa tìm được dấu tích chắc chắn của tòa thành buổi đầu.',
        'Luy Lâu lies on the Dâu river in Bắc Ninh and is usually taken as the place where the Han put the seat of Jiaozhi commandery after 111 BCE. From here northern officials oversaw the region along a river route to the sea. Yet the old histories disagree about where the seat was, and archaeology has not found secure traces of the earliest citadel.',
      ),
      detail: [
        l(
          'Taylor mô tả Luy Lâu thời Hán là một bến cảng giữa đồng ruộng, có đường sông thông ra bờ biển. Vị trí ấy đặt quan lại nhà Hán vào giữa vùng đông dân nhất của Giao Chỉ mà vẫn giữ được đường thuyền về phương bắc. Luy Lâu cũng là tên một trong mười huyện của quận Giao Chỉ, bên cạnh Mê Linh và Long Biên. Theo nhóm nghiên cứu của Bảo tàng Lịch sử Quốc gia, tên Luy Lâu là dạng phiên âm cổ của tên Dâu, tên vùng đất và con sông còn dùng đến nay.',
          'Taylor describes Han-period Luy Lâu as a seaport amidst fields, linked by river to the coast. The position placed Han officials in the most populous part of Jiaozhi while keeping their boat route to the north. Luy Lâu was also the name of one of the ten counties of Jiaozhi, alongside Mê Linh and Long Biên. According to researchers at the Vietnam National Museum of History, the name Luy Lâu is an old transcription of Dâu, the name the area and its river still bear.',
        ),
        l(
          'Trong thời kỳ này nhà Hán cai trị chủ yếu qua các Lạc tướng, nên sử cũ hầu như không tả gì về trị sở. Hiện vật thu được ở khu di tích có lớp sớm nhất thuộc thời Đông Sơn và thời Hán. Các lũy đất còn thấy hôm nay, những đợt khai quật và các khuôn đúc trống đồng tìm thấy trong thành đều thuộc những thế kỷ sau. Phần đó được kể ở mục Thành Luy Lâu của thời Bắc thuộc lần thứ hai.',
          'In this period the Han governed mainly through the Lạc lords, so the old histories say almost nothing about the seat itself. The earliest finds from the site belong to the Đông Sơn and Han periods. The ramparts visible today, the excavations and the drum moulds found inside the citadel all belong to later centuries. That part of the story is told in the entry on Luy Lâu citadel under the second northern domination.',
        ),
      ],
      scholarly: [
        l(
          'Sử liệu không thống nhất về trị sở. Toàn thư chép trị sở thời Tây Hán là Long Uyên, tức Long Biên. Taylor đặt đầu não của Giao Chỉ và cả vùng ở Luy Lâu. Holmgren viết rằng trong phần lớn thời Hậu Hán trị sở quận ở Luy Lâu, có giai đoạn ở Long Biên. Các tác giả của Bảo tàng Lịch sử Quốc gia cho rằng Luy Lâu là trị sở từ Tây Hán sang Đông Hán, nhưng cũng thừa nhận hệ thống hành chính thời này chưa được nghiên cứu sâu.',
          'The sources disagree about the seat. The Toàn thư gives the Western Han seat as Longyuan, that is Long Biên. Taylor places the headquarters of Jiaozhi and of the whole region at Luy Lâu. Holmgren writes that for most of the Later Han the commandery seat was Luy Lâu, with a stage at Long Biên. The National Museum of History authors hold that Luy Lâu was the seat from Western into Eastern Han, while admitting that the administration of the period is still poorly studied.',
        ),
        l(
          'Khảo cổ học chưa lấp được khoảng trống này. Các lớp tường thành đã định được tuổi cho thấy thành được đắp và sửa nhiều lần từ thế kỷ 2 đến thế kỷ 6, tức sau thời kỳ đang xét. Các khuôn đúc trống đồng trong thành từng được đoán thuộc thế kỷ 4 - 2 TCN, nhưng năm 2022 Trương Đắc Chiến kết luận chúng thuộc thế kỷ 3 - 6. Vì vậy dấu tích của trị sở thời Tây Hán vẫn cần được tìm thêm, và điểm trên bản đồ chỉ đánh dấu khu di tích Luy Lâu nói chung.',
          'Archaeology has not yet closed the gap. The dated wall layers show building and repair from the 2nd to the 6th century CE, after the period covered here. The drum moulds from the citadel were once guessed to be of the 4th - 2nd century BCE, but in 2022 Trương Đắc Chiến concluded that they date to the 3rd - 6th centuries CE. Traces of the Western Han seat therefore still need to be found, and the map marker shows only the Luy Lâu site in general.',
        ),
      ],
      sources: ['nv-doan2015', 'nv-nmh-luylau2015', 'nv-chien2022', 'nv-taylor2013', 'nv-holmgren1980', 'nv-toanthu-nk3', 'nv-wiki-luylau'],
    },
    {
      slug: 'dong-son-thoi-han',
      period: 'nam-viet',
      kind: 'culture',
      name: l('Văn hóa Đông Sơn dưới thời Hán', 'Đông Sơn culture under Han rule'),
      date: l('thế kỷ 2 TCN - thế kỷ 1', '2nd century BCE - 1st century CE'),
      sort: 2050,
      place: l('Đông Sơn, Thanh Hóa', 'Đông Sơn, Thanh Hóa'),
      coord: [105.785, 19.853],
      evidence: ['arch'],
      summary: l(
        'Việc đổi chủ năm 111 TCN không làm văn hóa Đông Sơn dừng lại. Người dân vẫn đúc trống đồng, chôn người chết trong quan tài hình thuyền và làm gốm theo lối cũ, chỉ có thêm gương, tiền và vũ khí kiểu Hán trong mộ. Mộ gạch kiểu Hán chỉ trở nên phổ biến về sau.',
        'The change of rulers in 111 BCE did not bring Đông Sơn culture to a halt. People still cast bronze drums, buried their dead in boat-shaped coffins and made pottery in the old way, with Han-style mirrors, coins and weapons now added to graves. Han-style brick tombs became common only later.',
      ),
      detail: [
        l(
          'Bộ sách tra cứu The Oxford Companion to Archaeology xếp sự phát triển tại chỗ của văn hóa Đông Sơn vào khoảng 700 TCN đến năm 100. Ở các di tích muộn, người ta gặp gương đồng, tiền, ấn, kích và vò gốm in hoa văn kiểu Hán. Dù vậy, theo sách này, truyền thống kim khí, tục chôn trong quan tài hình thuyền và đồ gốm vẫn mang rõ tính Đông Nam Á.',
          'The Oxford Companion to Archaeology places the local development of Đông Sơn culture between about 700 BCE and 100 CE. Later sites contain Han-type bronze mirrors, coins, seals, halberds and stamped earthenware jars. Even so, the same work says, the metal tradition, boat-shaped coffin burials and ceramics remained clearly Southeast Asian.',
        ),
        l(
          'Trình Năng Chung chia văn hóa Đông Sơn làm hai giai đoạn và cho rằng nó kéo dài đến thế kỷ 1 - 2. Ở giai đoạn muộn, đồ sắt xuất hiện và đồ gốm, đồ đồng ít nhiều chịu ảnh hưởng Hán. Đồ đồng Đông Sơn cũng đi về phía bắc: trong lăng Triệu Mạt ở Quảng Châu, vua thứ hai của Nam Việt, có hiện vật thuộc văn hóa Đông Sơn.',
          'Trình Năng Chung divides Đông Sơn culture into two phases and holds that it lasted into the 1st - 2nd century CE. In the late phase iron appears, and pottery and bronzes show some Han influence. Đông Sơn bronzes also travelled north: the tomb in Guangzhou of Zhao Mo, second king of Nanyue, contained objects of Đông Sơn culture.',
        ),
      ],
      scholarly: [
        l(
          'Câu hỏi còn mở là mộ gạch kiểu Hán xuất hiện từ lúc nào. Sách tra cứu của Oxford viết rằng mộ gạch kiểu Hán thường gặp ở các di tích Đông Sơn muộn. Taylor đặt bước ngoặt sau cuộc hành quân của Mã Viện (42 - 43): từ đó mộ gạch thay cho mộ Đông Sơn, gần như giống hệt mộ ở khắp đế chế Hán, có mô hình nhà cửa trang trại bằng đất nung, và phân bố xuống đến Quảng Trạch gần đèo Ngang. Theo cách hiểu này, trong thời kỳ đang xét, mộ gạch nếu có thì còn hiếm. Loại mộ này được kể kỹ ở thời Bắc thuộc lần thứ hai.',
          'An open question is when Han-style brick tombs first appear. The Oxford Companion says brick Han-style tombs occur regularly in later Đông Sơn sites. Taylor puts the turning point after Ma Yuan\'s expedition (42 - 43 CE): from then brick tombs replace Đông Sơn graves, nearly identical with tombs across the Han empire, with clay models of farm compounds, and reach south to Quảng Trạch near the Ngang pass. On this reading brick tombs, if present at all, were still rare in the period covered here. The tombs themselves are described under the second northern domination.',
        ),
        l(
          'Việc đúc trống kéo dài đến bao giờ cũng chưa ngã ngũ. Cách phân loại ở Việt Nam thường xếp nhóm trống muộn vào thế kỷ 3 TCN đến thế kỷ 1. Dựa trên khuôn đúc ở Luy Lâu, Trương Đắc Chiến đề nghị xét lại, vì nghề đúc có thể còn tiếp tục đến thế kỷ 3, thậm chí thế kỷ 6. Điểm đánh dấu trên bản đồ là làng Đông Sơn bên sông Mã, di tích mộ táng đã đặt tên cho cả nền văn hóa.',
          'How long drum casting went on is also unsettled. Vietnamese classifications usually place the late group of drums between the 3rd century BCE and the 1st century CE. On the evidence of the Luy Lâu moulds, Trương Đắc Chiến proposes a rethink, since casting may have continued into the 3rd or even the 6th century. The map marker is Đông Sơn village on the Mã river, the cemetery site that gave the culture its name.',
        ),
      ],
      sources: ['nv-olsen-stark2012', 'nv-chung2014', 'nv-chien2022', 'nv-taylor2013', 'nv-museum-nanyue'],
    },
    {
      slug: 'tich-quang-nham-dien-to-dinh',
      period: 'nam-viet',
      kind: 'figure',
      name: l('Tích Quang, Nhâm Diên và Tô Định', 'Xi Guang, Ren Yan and Su Ding'),
      date: l('khoảng năm 1 - 40', 'c. 1 - 40 CE'),
      sort: 1975,
      place: l('Đồng bằng sông Mã, Thanh Hóa (quận Cửu Chân)', 'Mã River plain, Thanh Hóa (Jiuzhen commandery)'),
      coord: [105.68, 19.89],
      evidence: ['chron'],
      summary: l(
        'Ba viên thái thú này đánh dấu lúc nhà Hán chuyển từ cai trị lỏng sang can thiệp sâu. Tích Quang ở Giao Chỉ và Nhâm Diên ở Cửu Chân được sử Hán khen vì dạy cày cấy, lễ cưới và mở trường. Tô Định, người kế nhiệm ở Giao Chỉ, bị chép là tham lam, tàn bạo, và là người trực tiếp đối đầu với Trưng Trắc.',
        'These three governors mark the moment when Han rule moved from a light hand to deep intervention. Xi Guang (Tích Quang) in Jiaozhi and Ren Yan (Nhâm Diên) in Jiuzhen are praised in Han histories for teaching ploughing and marriage rites and opening schools. Su Ding (Tô Định), who followed in Jiaozhi, is recorded as greedy and violent, and was the man who confronted Trưng Trắc.',
      ),
      detail: [
        l(
          'Tích Quang, người Hán Trung, được cử sang Giao Chỉ vào đầu đời Hán Bình Đế (1 TCN - 6). Ông ở lại suốt thời Vương Mãng rồi quy phục nhà Đông Hán, và có lẽ giữ chức ít nhất đến năm 30. Hậu Hán thư chép ông cùng Nhâm Diên dạy dân làm ruộng, đội mũ đi giày, lập trường học và đặt phép mối lái, cưới hỏi. Toàn thư viết rằng văn phong Lĩnh Nam bắt đầu từ hai thái thú này.',
          'Xi Guang, a man from Hanzhong, was sent to Jiaozhi at the start of Emperor Ping\'s reign (1 BCE - 6 CE). He stayed through Wang Mang\'s time, then submitted to the Eastern Han, and probably held office until at least 30 CE. The Hou Hanshu says that he and Ren Yan taught the people farming, introduced hats and sandals, set up schools and established betrothal and marriage procedures. The Toàn thư says that the literary culture of Lingnan began with these two governors.',
        ),
        l(
          'Truyện Nhâm Diên trong Hậu Hán thư kể rằng dân Cửu Chân không biết cày bằng trâu bò, thường phải xin mua thóc của Giao Chỉ nên hay túng thiếu. Ông cho đúc nông cụ, dạy dân khai khẩn, ruộng mở rộng từng năm. Ông cũng ra lệnh tổ chức cưới hỏi, và hơn 2.000 người đã thành hôn. Toàn thư chép dân Cửu Chân lập đền thờ ông.',
          'Ren Yan\'s biography in the Hou Hanshu says that the people of Jiuzhen did not know how to plough with draft animals and often had to ask to buy grain from Jiaozhi, so they were frequently in want. He had farm tools cast and taught people to open new land, and the fields grew year by year. He also ordered marriages to be arranged, and more than 2,000 people were wed. The Toàn thư says the people of Jiuzhen raised a shrine to him.',
        ),
        l(
          'Theo Holmgren, Tô Định thay Tích Quang ở Giao Chỉ năm 37. Toàn thư chép dưới năm 39 rằng ông cai trị tham lam và tàn bạo. Hậu Hán thư nói ông dùng pháp luật để trói buộc Trưng Trắc. Năm 40, khi Hai Bà Trưng dấy binh, ông bỏ chạy về Nam Hải. Diễn biến cuộc khởi nghĩa thuộc về thời kỳ kế tiếp.',
          'According to Holmgren, Su Ding replaced Xi Guang in Jiaozhi in 37 CE. Under the year 39 the Toàn thư says his rule was greedy and violent. The Hou Hanshu says he used the law to restrain Trưng Trắc. In 40 CE, when the Trưng Sisters raised troops, he fled to Nanhai. The course of the uprising belongs to the next period.',
        ),
      ],
      scholarly: [
        l(
          'Mọi điều biết về ba người này đều từ Hậu Hán thư (quyển 76 và quyển 86), soạn ở thế kỷ 5, và giọng văn là giọng khen quan tốt. Taylor nhận xét rằng các thái thú có lý do để kể công khuyến nông và dạy hôn lễ nhằm được thăng chức, nên các lời ấy "ấn tượng nhưng không kiểm chứng được". Niên đại cũng lệch: Taylor (1983) đặt việc bổ nhiệm Nhâm Diên vào năm 25, còn Toàn thư chép việc của ông dưới năm 29.',
          'Everything known about the three comes from the Hou Hanshu (chapters 76 and 86), compiled in the 5th century, and its tone is that of praise for good officials. Taylor remarks that governors had reason to claim credit for promoting farming and marriage in order to win better posts, so the claims are "impressive but unverifiable". Dates differ as well: Taylor (1983) puts Ren Yan\'s appointment in 25 CE, while the Toàn thư enters his deeds under 29 CE.',
        ),
        l(
          'Các nhà nghiên cứu đọc đoạn về thóc gạo theo những hướng trái nhau. Taylor và Li Tana coi việc Cửu Chân mua thóc là bằng chứng Giao Chỉ dư lúa. Liam Kelley cho rằng đoạn văn nói về sự thiếu thốn, và việc của Nhâm Diên chỉ liên quan đến Cửu Chân chứ không chứng minh ông đưa cày sắt hay trâu bò vào cả vùng. Holmgren cho rằng các cải cách nhằm nuôi và ổn định người di cư phương bắc nhiều hơn là giúp dân bản địa.',
          'Scholars read the passage on grain in opposite ways. Taylor and Li Tana take Jiuzhen\'s purchases as proof of a rice surplus in Jiaozhi. Liam Kelley argues that the passage is about scarcity, and that Ren Yan\'s work concerned Jiuzhen only and does not show that he brought iron ploughs or draft animals to the whole region. Holmgren holds that the reforms were meant to feed and settle northern immigrants more than to help the native population.',
        ),
        l(
          'Về Tô Định, Holmgren lưu ý rằng phần bản kỷ của Hậu Hán thư không nhắc tới ông, và một sách khác bà dẫn lại tả ông là viên quan yếu kém. Theo bà, nguyên nhân của biến cố năm 40 có từ trước: làn sóng di cư và chính những cải cách của Tích Quang, Nhâm Diên. Sử Việt về sau thêm nhiều chi tiết về sự tàn ác của Tô Định, nên hình ảnh quen thuộc về ông đậm hơn những gì sử liệu sớm nhất ghi.',
          'On Su Ding, Holmgren notes that the basic annals of the Hou Hanshu do not mention him, and that another text she cites describes him as a weak administrator. In her view the causes of the events of 40 CE lay earlier, in immigration and in the very reforms of Xi Guang and Ren Yan. Later Vietnamese works added much detail about Su Ding\'s cruelty, so the familiar picture of him is darker than the earliest record.',
        ),
      ],
      sources: ['nv-hauhanshu', 'nv-toanthu-nk3', 'nv-holmgren1980', 'nv-kelley-renyan', 'nv-taylor2013'],
    },
  ],

  sources: [
    // Sử liệu gốc
    { id: 'suky', kind: 'primary', cite: 'Tư Mã Thiên, Sử ký, Nam Việt Úy Đà liệt truyện (khoảng thế kỷ 1 TCN).' },
    { id: 'nv-hanshu', kind: 'primary', cite: 'Ban Cố, Hán thư, quyển 28 hạ, Địa lý chí (số huyện và hộ khẩu năm 2 của Giao Chỉ, Cửu Chân, Nhật Nam), dẫn theo Taylor (2013) và Taylor (1983).' },
    { id: 'nv-hauhanshu', kind: 'primary', cite: 'Phạm Diệp, Hậu Hán thư, quyển 76 (Tuần lại liệt truyện, truyện Nhâm Diên) và quyển 86 (Nam Man Tây Nam Di liệt truyện), thế kỷ 5; dẫn theo Holmgren (1980) và bản dịch của Liam Kelley.' },
    { id: 'nv-toanthu-nk2', kind: 'primary', cite: 'Ngô Sĩ Liên và các sử thần triều Lê, Đại Việt sử ký toàn thư, Ngoại kỷ, quyển 2, Kỷ nhà Triệu; bản dịch tiếng Anh trên trang Việt Texts, University of Hawaiʻi at Mānoa.', url: 'https://sites.google.com/hawaii.edu/viettexts/%C4%91vsktt-nk/%C4%91vsktt-nk-2' },
    { id: 'nv-toanthu-nk3', kind: 'primary', cite: 'Ngô Sĩ Liên và các sử thần triều Lê, Đại Việt sử ký toàn thư, Ngoại kỷ, quyển 3, Kỷ thuộc Tây Hán và Kỷ Trưng Nữ Vương; bản dịch tiếng Anh trên trang Việt Texts, University of Hawaiʻi at Mānoa.', url: 'https://sites.google.com/hawaii.edu/viettexts/%C4%91vsktt-nk/%C4%91vsktt-nk-3' },

    // Sách và bài nghiên cứu
    { id: 'nv-taylor2013', kind: 'paper', cite: 'K.W. Taylor (2013), A History of the Vietnamese, chương 1 "The provincial era", tr. 14-50, Cambridge University Press.', url: 'https://www.cambridge.org/core/services/aop-cambridge-core/content/view/D0C79C8ED6868DDE48C2D867CBC98FFD/9781139021210c1_p14-50_CBO.pdf/provincial_era.pdf' },
    { id: 'nv-holmgren1980', kind: 'paper', cite: 'Jennifer Holmgren (1980), Chinese Colonisation of Northern Vietnam: Administrative Geography and Political Development in the Tongking Delta, First to Sixth Centuries A.D., Oriental Monograph Series 27, Australian National University.', url: 'https://openresearch-repository.anu.edu.au/bitstreams/53bfb83c-bb0b-4863-bd5b-162ca2accbaf/download' },
    { id: 'nv-chien2022', kind: 'paper', cite: 'Trương Đắc Chiến (2022), "Discovery of Collection of Moulds in Luy Lâu (Bắc Ninh): New Achievements in Research of Đông Sơn Bronze Drums in Vietnam", Vietnam Social Sciences, số 3 (209).', url: 'https://www.vjol.info.vn/index.php/VSS/article/download/74747/63525' },
    { id: 'nv-chung2014', kind: 'paper', cite: 'Trình Năng Chung (2014), "Văn hóa Đông Sơn: 90 năm phát hiện và nghiên cứu", Tạp chí Khoa học xã hội Việt Nam, số 5 (78), tr. 80-93.', url: 'https://hcmussh.edu.vn/static/document/vanhoadongson.90namphathienvanghiencuu.pdf' },
    { id: 'nv-olsen-stark2012', kind: 'reference', cite: 'John W. Olsen, Miriam T. Stark hiệu đính (2012), "Dong Son Culture", trong The Oxford Companion to Archaeology, ấn bản 2, Oxford University Press, tr. 424-425.', url: 'https://researchgate.net/profile/Miriam-Stark/publication/276919420_Dong_Son_Culture/links/555b7d6308aec5ac22323ee8/Dong-Son-Culture.pdf' },
    { id: 'nv-vuong2021', kind: 'paper', cite: 'Trần Ngọc Vương (2021), "Vấn đề chủ nghĩa dân tộc, chủ nghĩa quốc gia ở Việt Nam hiện nay", Thời Đại Mới, số 40, tr. 1-30.', url: 'https://tapchithoidai.diendan.org/ThoiDai40/202140_TNVuong.pdf' },
    { id: 'nv-kelley-renyan', kind: 'reference', cite: 'Liam C. Kelley, "The Red River Delta\'s Limited Rice Supply in the First Century AD", Le Minh Khai\'s SEAsian History Blog (dịch và bàn về truyện Nhâm Diên trong Hậu Hán thư).', url: 'https://leminhkhai.blog/the-red-river-deltas-limited-rice-supply-in-the-first-century-ad/' },

    // Bảo tàng
    { id: 'nv-doan2015', kind: 'museum', cite: 'Nguyễn Văn Đoàn, Lê Văn Chiến, Đinh Thị Lệ Huyền (2015), "Di tích Luy Lâu (Thuận Thành, Bắc Ninh): Kết quả nghiên cứu và định hướng", Thông báo Khoa học 2015, Bảo tàng Lịch sử Quốc gia, tr. 39-46.', url: 'https://baotanglichsu.vn/DataFiles/asset/upload/data_hung_/thong_bao_khoa_hoc/so_2_nam_2015/Nguyen_Van_Doan_-_Di_tich_Luy_Lau....pdf' },
    { id: 'nv-nmh-luylau2015', kind: 'museum', cite: 'Trương Đắc Chiến (27/7/2015), "More opinions about the results of the excavation in Luy Lau relic site in 2014", Bảo tàng Lịch sử Quốc gia.', url: 'https://baotanglichsu.vn/en/Articles/3188/18382/more-opinions-about-the-results-of-the-excavation-in-luy-lau-relic-site-in-2014.html' },
    { id: 'nv-museum-nanyue', kind: 'reference', cite: 'Wikipedia (tiếng Anh), "Museum of the Mausoleum of the Nanyue King" (CC BY-SA).', url: 'https://en.wikipedia.org/wiki/Museum_of_the_Mausoleum_of_the_Nanyue_King' },

    { id: 'nv-gac-seal', kind: 'museum', cite: 'Museum of the Western Han Dynasty Mausoleum of the Nanyue King (Quảng Châu), "Gold Seal of Emperor Wen", trên Google Arts & Culture.', url: 'https://artsandculture.google.com/asset/gold-seal-of-emperor-wen/1wGSjVwaNpfuIA' },

    // Tra cứu tổng hợp
    { id: 'nv-chinadaily-nanyue', kind: 'reference', cite: 'China Daily, trang thông tin chính quyền Quảng Châu (2018), "Museum of the Western Han Dynasty Mausoleum of the Nanyue King".', url: 'https://govt.chinadaily.com.cn/s/201811/30/WS5c00db85498eefb3fe46d6a4/museum-of-the-western-han-dynasty-mausoleum-of-the-nanyue-king.html' },
    { id: 'nv-brit-namviet', kind: 'reference', cite: 'Encyclopaedia Britannica, "Nam Viet" (ancient kingdom, Asia).', url: 'https://www.britannica.com/place/Nam-Viet' },
    { id: 'nv-wiki-ngothisi', kind: 'reference', cite: 'Wikipedia (tiếng Anh), "Ngô Thì Sĩ" (CC BY-SA).', url: 'https://en.wikipedia.org/wiki/Ng%C3%B4_Th%C3%AC_S%C4%A9' },
    { id: 'nv-wiki-nanyue', kind: 'reference', cite: 'Wikipedia (tiếng Anh), "Nanyue" (CC BY-SA).', url: 'https://en.wikipedia.org/wiki/Nanyue' },
    { id: 'nv-wiki-first', kind: 'reference', cite: 'Wikipedia (tiếng Anh), "First Era of Northern Domination" (CC BY-SA).', url: 'https://en.wikipedia.org/wiki/First_Era_of_Northern_Domination' },
    { id: 'nv-wiki-luylau', kind: 'reference', cite: 'Wikipedia (tiếng Anh), "Luy Lâu" (CC BY-SA).', url: 'https://en.wikipedia.org/wiki/Luy_L%C3%A2u' },
    { id: 'nv-brit-punic3', kind: 'reference', cite: 'Encyclopaedia Britannica, "Third Punic War" (149 - 146 BCE).', url: 'https://www.britannica.com/event/Third-Punic-War' },
    { id: 'nv-brit-zhangqian', kind: 'reference', cite: 'Encyclopaedia Britannica, "Zhang Qian" (Chinese explorer).', url: 'https://www.britannica.com/biography/Zhang-Qian' },
    { id: 'nv-brit-augustus', kind: 'reference', cite: 'Encyclopaedia Britannica, "Augustus" (Roman emperor).', url: 'https://www.britannica.com/biography/Augustus-Roman-emperor' },

    // Báo chí
    { id: 'nv-nhandan2005', kind: 'news', cite: 'Báo Nhân Dân điện tử (14/4/2005), "Cuộc xâm lược của nhà Triệu".', url: 'https://nhandan.vn/cuoc-xam-luoc-cua-nha-trieu-post522087.html' },
  ],

  hooks: {
    'trieu-da': l(
      'Ông là vị vua mở nước hay người lấy mất nước? Sử Việt đã đổi câu trả lời qua từng thời.',
      'Founding king or the man who took the country? Vietnamese history has changed its answer over time.',
    ),
    'han-diet-nam-viet': l(
      'Đồng bằng sông Hồng đổi chủ bằng một đàn trâu bò và mấy vò rượu, không qua trận đánh lớn nào.',
      'The Red River plain changed hands with a herd of cattle and some jars of wine, without a major battle.',
    ),
    'ba-quan-giao-chi-cuu-chan-nhat-nam': l(
      'Năm 2, sổ sách nhà Hán ghi gần một triệu người ở ba quận phía nam, nhiều hơn hẳn Quảng Đông và Quảng Tây cộng lại.',
      'In 2 CE Han registers listed nearly a million people in the three southern commanderies, far more than Guangdong and Guangxi together.',
    ),
    'lac-tuong-thoi-han': l(
      'Cùng một gánh lúa, người nộp gọi là cống vật, người thu gọi là thuế.',
      'The same load of rice was tribute to those who gave it and tax to those who took it.',
    ),
    'luy-lau': l(
      'Sử cũ nêu hai cái tên khác nhau cho trị sở đầu tiên của Giao Chỉ, và tòa thành buổi đầu vẫn chưa được tìm thấy.',
      'The old histories give two different names for the first seat of Jiaozhi, and the earliest citadel has still not been found.',
    ),
    'dong-son-thoi-han': l(
      'Trong mộ có thêm gương Hán, nhưng người chết vẫn nằm trong quan tài hình thuyền.',
      'Han mirrors entered the graves, but the dead still lay in boat-shaped coffins.',
    ),
    'tich-quang-nham-dien-to-dinh': l(
      'Hơn 2.000 người được cho cưới theo lệnh một viên thái thú: việc tốt hay sự áp đặt?',
      'More than 2,000 people were married on a governor\'s orders: a kindness or an imposition?',
    ),
  },

  world: [
    {
      text: l(
        'Năm 146 TCN, khi Triệu Đà còn trị vì Nam Việt, quân La Mã san phẳng thành Carthage ở Bắc Phi, kết thúc cuộc chiến tranh Punic lần thứ ba.',
        'In 146 BCE, while Zhao Tuo still ruled Nanyue, Rome razed Carthage in North Africa, ending the Third Punic War.',
      ),
      source: 'nv-brit-punic3',
    },
    {
      text: l(
        'Năm 138 TCN, Hán Vũ Đế, vị vua về sau diệt Nam Việt, cử Trương Khiên đi sứ sang Trung Á. Chuyến đi 13 năm ấy mở đường giao thiệp giữa nhà Hán và các nước Trung Á.',
        'In 138 BCE Emperor Wu of Han, who later destroyed Nanyue, sent Zhang Qian as envoy to Central Asia. His 13-year journey opened the way for exchanges between the Han and the Central Asian states.',
      ),
      source: 'nv-brit-zhangqian',
    },
    {
      text: l(
        'Năm 27 TCN, Octavian nhận danh hiệu Augustus và trở thành hoàng đế La Mã đầu tiên. Ông mất năm 14, khoảng thời gian Tích Quang đang làm thái thú Giao Chỉ.',
        'In 27 BCE Octavian took the name Augustus and became the first Roman emperor. He died in 14 CE, about the time Xi Guang was governor of Jiaozhi.',
      ),
      source: 'nv-brit-augustus',
    },
  ],

  quiz: [
    {
      q: l(
        'Năm 111 TCN, Giao Chỉ và Cửu Chân về tay nhà Hán bằng cách nào?',
        'How did Jiaozhi and Jiuzhen pass to the Han in 111 BCE?',
      ),
      options: [
        l('Sau một trận đánh lớn ở Cổ Loa', 'After a great battle at Cổ Loa'),
        l('Hai viên sứ giả của Nam Việt đem trâu bò, rượu ra hàng', 'Nanyue\'s two legates surrendered with cattle and wine'),
        l('Các Lạc tướng bỏ đất chạy vào núi', 'The Lạc lords abandoned their lands for the mountains'),
      ],
      answer: 1,
      why: l(
        'Sau khi kinh đô Phiên Ngung thất thủ, hai viên sứ giả trông coi Giao Chỉ và Cửu Chân ra đón quân Hán xin hàng, nên vùng này được chuyển giao nguyên vẹn.',
        'After the capital Panyu fell, the two legates overseeing Jiaozhi and Jiuzhen met the Han army and submitted, so the region was handed over intact.',
      ),
    },
    {
      q: l(
        'Cuộc điều tra dân số năm 2 của nhà Hán ghi ba quận Giao Chỉ, Cửu Chân, Nhật Nam có khoảng bao nhiêu người?',
        'About how many people did the Han census of 2 CE record in Jiaozhi, Jiuzhen and Rinan?',
      ),
      options: [
        l('Khoảng 98.000 người', 'About 98,000'),
        l('Khoảng 390.000 người', 'About 390,000'),
        l('Khoảng 980.000 người', 'About 980,000'),
      ],
      answer: 2,
      why: l(
        'Hán thư ghi 143.643 hộ với 981.735 người. Con số 390.555 là của vùng Quảng Đông và Quảng Tây cùng thời điểm.',
        'The Hanshu gives 143,643 households and 981,735 people. The figure 390,555 is for Guangdong and Guangxi at the same date.',
      ),
    },
    {
      q: l(
        'Trong hơn một thế kỷ đầu, nhà Hán cai trị Giao Chỉ và Cửu Chân bằng cách nào?',
        'How did the Han govern Jiaozhi and Jiuzhen for more than the first century?',
      ),
      options: [
        l('Trao ấn và dải thao cho các Lạc tướng rồi nhận cống nạp', 'By giving the Lạc lords seals and ribbons and receiving tribute'),
        l('Thay toàn bộ thủ lĩnh bản địa bằng quan lại phương bắc', 'By replacing every local chief with northern officials'),
        l('Đóng quân ở từng làng để thu thuế', 'By stationing troops in every village to collect tax'),
      ],
      answer: 0,
      why: l(
        'Các Lạc tướng vẫn cai quản dân và ruộng của mình, nhận ấn và dải thao làm dấu hiệu địa vị. Việc cai trị trực tiếp chỉ đến sau cuộc khởi nghĩa của Hai Bà Trưng.',
        'The Lạc lords went on governing their own people and fields and received seals and ribbons as marks of rank. Direct rule came only after the Trưng Sisters\' uprising.',
      ),
    },
  ],

  badge: l('Người giữ ấn Lạc tướng', 'Keeper of the Lạc seal'),
};

export default chapter;
