import { l, type Chapter } from '../types';

const chapter: Chapter = {
  order: 26,
  period: {
    slug: 'van-hoa',
    name: l('Văn hóa Việt', 'Vietnamese culture'),
    range: l('Thế kỷ 12 - nay', '12th century - present'),
    start: l('Thế kỷ 12', '12th century'),
    color: '#ec6fa8',
    view: 'all',
    theme: true,
    question: l(
      `Những lời ca, điệu nhạc, bức tranh, nghi lễ và trang phục nào đã đi cùng người Việt qua nhiều triều đại, và khi triều đình, hội làng hay chợ Tết từng sinh ra chúng không còn như xưa, cộng đồng đã giữ chúng lại bằng cách nào?`,
      `Which songs, music, prints, rituals and clothes have stayed with the Vietnamese through many dynasties, and when the court, the village festival or the Tết market that gave rise to them changed or disappeared, how did communities keep them alive?`,
    ),
    summary: l(
      `Chuyên đề này đi qua tám nét văn hóa người Việt còn giữ đến hôm nay: múa rối nước, ca trù, nhã nhạc cung đình, tranh Đông Hồ, tín ngưỡng thờ Mẫu, quan họ, áo dài và đờn ca tài tử. Mỗi mục gắn với một nơi cụ thể trên bản đồ. Sáu trong tám mục đã được UNESCO ghi danh là di sản văn hóa phi vật thể.`,
      `This topic follows eight strands of Vietnamese culture that are still alive today: water puppetry, ca trù, Nhã nhạc court music, Đông Hồ prints, the worship of the Mother Goddesses, quan họ singing, the áo dài and đờn ca tài tử. Each is tied to a real place on the map. Six of the eight are inscribed by UNESCO as intangible cultural heritage.`,
    ),
    detail: [
      l(
        `Công ước về bảo vệ di sản văn hóa phi vật thể được UNESCO thông qua ngày 17 tháng 10 năm 2003 tại Paris. Công ước chia loại di sản này thành năm lĩnh vực: truyền khẩu, nghệ thuật trình diễn, tập quán xã hội và lễ hội, tri thức về tự nhiên và vũ trụ, nghề thủ công truyền thống. Các mục trong chuyên đề trải đủ năm lĩnh vực ấy, từ lối hát thơ ca trù đến nghề in tranh khắc gỗ.`,
        `UNESCO adopted the Convention for the Safeguarding of the Intangible Cultural Heritage in Paris on 17 October 2003. It divides such heritage into five domains: oral traditions, performing arts, social practices and festive events, knowledge about nature and the universe, and traditional craftsmanship. The entries in this topic cover all five, from the sung poetry of ca trù to the craft of woodblock printing.`,
      ),
      l(
        `Một số chủ đề văn hóa đã có mục riêng ở các thời kỳ khác nên không lặp lại ở đây. Chữ Nôm được kể ở chương nhà Trần, chữ Quốc ngữ ở chương Mạc, Trịnh, Nguyễn và chương Pháp thuộc. Văn Miếu nằm ở chương nhà Lý và nhà Lê sơ, tấm bia núi Đọi năm 1121 có nhắc rối nước nằm ở chương nhà Lý, còn danh sách đầy đủ các di sản UNESCO của Việt Nam nằm ở chương Sau năm 1975.`,
        `Some cultural subjects already have entries in other periods and are not repeated here. Chữ Nôm is covered in the Trần chapter, and the Quốc ngữ script in the Mạc, Trịnh and Nguyễn chapter and the French colonial chapter. The Temple of Literature appears in the Lý and Early Lê chapters, the 1121 Đọi mountain stele that mentions water puppets in the Lý chapter, and the full list of Vietnam's UNESCO elements in the After 1975 chapter.`,
      ),
      l(
        `Điểm chung của nhiều mục là chúng mất đi bối cảnh gốc rồi sống lại bằng con đường khác. Nhã nhạc mất triều đình năm 1945, ca trù mất các nhà hát cô đầu, tranh Đông Hồ mất thói quen treo tranh ngày Tết. Chúng được giữ lại nhờ nhà hát, câu lạc bộ làng, các gia đình nghệ nhân và những đợt ghi danh trong nước và quốc tế. UNESCO vẫn xếp ca trù và tranh Đông Hồ vào diện cần bảo vệ khẩn cấp.`,
        `Many of these traditions lost their original setting and survived by other routes. Nhã nhạc lost its court in 1945, ca trù lost its singing houses, and Đông Hồ prints lost the custom of hanging new pictures at Tết. They have been kept alive by theatres, village clubs, artisan families and national and international recognition. UNESCO still lists ca trù and Đông Hồ printing as in need of urgent safeguarding.`,
      ),
    ],
    scholarly: [
      l(
        `Phần lớn các truyền thống ở đây được truyền miệng, nên niên đại khởi đầu thường không chắc. Chứng cứ viết sớm nhất thường chỉ cho biết một nghệ thuật đã có vào lúc nào đó: bia năm 1121 cho rối nước, một bài thơ cuối thế kỷ 15 cho ca trù, gia phả họ Nguyễn Đăng cho tranh Đông Hồ. Các chuyện về người khai sinh, như thiền sư Từ Đạo Hạnh, ông bà tổ ca trù Đinh Dự hay Vua Bà quan họ, là ký ức cộng đồng và được ghi là truyền thuyết.`,
        `Most of these traditions were passed on orally, so their starting dates are usually uncertain. The earliest written evidence normally shows only that an art existed by a certain time: the 1121 stele for water puppetry, a late 15th-century poem for ca trù, the genealogy of the Nguyễn Đăng family for Đông Hồ prints. Stories about founders, such as the monk Từ Đạo Hạnh, the ca trù ancestors Đinh Dự and his wife, or the Lady Queen of quan họ, are community memory and are marked here as legend.`,
      ),
      l(
        `Các danh hiệu UNESCO cũng cần đọc đúng. Nhã nhạc được tuyên bố là kiệt tác năm 2003 và chuyển vào Danh sách đại diện năm 2008. Ca trù năm 2009 và tranh Đông Hồ năm 2025 thuộc Danh sách cần bảo vệ khẩn cấp, khác với quan họ, đờn ca tài tử và thờ Mẫu ở Danh sách đại diện. Theo Việt Nam News, tranh Đông Hồ là di sản phi vật thể thứ 17 của Việt Nam được UNESCO ghi danh. Nhiều con số, như năm sinh của Cao Văn Lầu hay Nguyễn Cát Tường, khác nhau tùy nguồn và được ghi kèm nguồn.`,
        `UNESCO titles also need careful reading. Nhã nhạc was proclaimed a Masterpiece in 2003 and moved onto the Representative List in 2008. Ca trù (2009) and Đông Hồ printing (2025) are on the Urgent Safeguarding List, unlike quan họ, đờn ca tài tử and the Mother Goddess practices on the Representative List. According to Việt Nam News, Đông Hồ printing is Vietnam's 17th element inscribed by UNESCO. Several figures, such as the birth years of Cao Văn Lầu and Nguyễn Cát Tường, differ between sources and are given with their source.`,
      ),
    ],
    sources: ['vh-unesco-convention', 'vh-vnn-unesco', 'vh-unesco-nhanhac', 'vh-vns-dongho'],
  },
  entries: [
    {
      slug: 'mua-roi-nuoc-thuy-dinh-chua-thay',
      period: 'van-hoa',
      kind: 'culture',
      name: l('Múa rối nước và thủy đình chùa Thầy', 'Water puppetry and the water pavilion of Thầy pagoda'),
      date: l('Bia năm 1121; nghề còn diễn đến nay', 'Stele of 1121; still performed today'),
      sort: 879,
      place: l('Thủy đình chùa Thầy, Sài Sơn, Hà Nội', 'Water pavilion of Thầy pagoda, Sài Sơn, Hanoi'),
      coord: [105.6456, 21.0223],
      evidence: ['chron', 'legend'],
      summary: l(
        `Múa rối nước là lối diễn rối trên mặt ao, người điều khiển đứng ngâm nửa người dưới nước sau một tấm mành tre. Ghi chép sớm nhất là tấm bia năm 1121 trên núi Đọi. Ở chùa Thầy có thủy đình được coi là cổ nhất Việt Nam, và dân gian tin rằng thiền sư Từ Đạo Hạnh đã dạy nghề rối cho dân.`,
        `Water puppetry is performed on the surface of a pond, with the puppeteers standing waist-deep in water behind a bamboo screen. The earliest record is a stele of 1121 on Đọi mountain. Thầy pagoda near Hanoi has a water pavilion said to be the oldest in Vietnam, and local belief holds that the monk Từ Đạo Hạnh taught the craft to the villagers.`,
      ),
      detail: [
        l(
          `Britannica tả rối nước là một lối rối riêng của Việt Nam, diễn trên ao hay bể nước; mặt nước làm con rối như sống và che kín bộ máy điều khiển. Theo bách khoa của UNIMA, người điều khiển đứng ngập đến thắt lưng trong khoảng sau mành tre gọi là buồng trò. Con rối phần lớn tạc từ một khối gỗ nhẹ, sơn màu tươi, cao khoảng 50 cm, có con tới 1 m. Chú Tễu là vai hề ra mở màn và giới thiệu các tích trò.`,
          `Britannica describes water puppetry as a distinct Vietnamese form performed on a pool or pond, where the water brings the puppets to life and hides the machinery. According to the UNIMA encyclopedia, the puppeteers stand waist-deep behind a bamboo screen in a space reserved for them. The puppets are mostly carved from a single piece of light wood, brightly painted, about 50 cm tall and sometimes up to 1 m. Tễu, the clown, comes out first and introduces the show.`,
        ),
        l(
          `Chùa Thầy nằm dưới chân núi Sài Sơn, thờ thiền sư Từ Đạo Hạnh (1072 - 1116), người được dân gian coi là ông tổ dạy múa rối nước. Báo Nhân Dân gọi thủy đình giữa ao Long Trì là thủy đình cổ nhất Việt Nam. Điều thú vị là dân Sài Sơn không tự diễn: theo bài báo năm 2015, trò rối ở ao chùa xưa do phường rối nước làng Ra ở Thạch Thất đảm nhận. Báo Quốc tế cho biết làng Ra nay là làng Phú Hòa.`,
          `Thầy pagoda stands at the foot of Sài Sơn mountain and honours the monk Từ Đạo Hạnh (1072 - 1116), whom local tradition credits with teaching water puppetry. Nhân Dân calls the pavilion in the middle of Long Trì pond the oldest water pavilion in Vietnam. Interestingly, the people of Sài Sơn did not perform themselves: according to a 2015 article, the shows at the pagoda pond were traditionally given by the water puppet guild of Ra village in Thạch Thất. Báo Quốc tế notes that Ra is today called Phú Hòa.`,
        ),
        l(
          `Theo UNIMA, các phường rối là những hội kín của dân làng ở đồng bằng sông Hồng, diễn trong lễ hội đình chùa; thập niên 1980 chỉ còn tám làng có phường hoạt động. Từ thập niên 1970, nghệ nhân làng và diễn viên chuyên nghiệp cùng tạo ra rối nước sân khấu, nay được Nhà hát Múa rối Việt Nam và Nhà hát Múa rối Thăng Long đem đi diễn khắp thế giới. Năm 2015 Nhà hát Thăng Long dạy lại cho đội rối chùa Thầy.`,
          `According to UNIMA, the guilds were secret societies of village puppeteers in the Red River delta who performed at temple and village festivals; the folklorist Nguyễn Huy Hồng counted only eight villages with active troupes in the 1980s. From the 1970s village performers and urban professionals worked together to create stage water puppetry, which the Vietnam National Puppetry Theatre and the Thăng Long Water Puppet Theatre now take on tour worldwide. In 2015 the Thăng Long theatre trained a new troupe of nearly 30 people at Thầy pagoda.`,
        ),
      ],
      scholarly: [
        l(
          `Chứng cứ viết sớm nhất ở Việt Nam là bia chùa Sùng Thiện Diên Linh trên núi Đọi năm 1121, đã kể ở chương nhà Lý. Theo UNIMA, bia tả buổi mừng thọ vua Lý Nhân Tông có rùa vàng bơi trên nước và tiên nữ múa. Bia cho biết trò này đã có trước năm 1121 chứ không cho biết nó ra đời khi nào. UNIMA cũng ghi văn liệu Trung Quốc đã nhắc đến rối nước từ sớm, nên câu hỏi về nguồn gốc vẫn còn mở.`,
          `The earliest written evidence in Vietnam is the 1121 stele of the Sùng Thiện Diên Linh pagoda on Đọi mountain, discussed in the Lý chapter. According to UNIMA, it describes a birthday celebration for King Lý Nhân Tông with a golden tortoise swimming on the water and fairies dancing. It shows that the art existed by 1121, not when it began. UNIMA also notes that Chinese literature mentions water puppets early on, so the question of origins remains open.`,
        ),
        l(
          `Vai trò của Từ Đạo Hạnh là truyền thống của vùng chùa Thầy, không có văn bản đương thời xác nhận. Wikipedia chép ông dựng thủy đình và tổ chức diễn rối nhưng không ghi năm dựng; các nguồn đã mở cũng không nêu tuổi của công trình hiện còn. Việc làng thờ tổ nghề và làng đi diễn là hai làng khác nhau cho thấy rối nước gắn với cả một mạng lưới làng quanh ngôi chùa.`,
          `Từ Đạo Hạnh's role is a tradition of the Thầy pagoda area, with no contemporary record to confirm it. Wikipedia says he built the pavilion and staged puppet shows there but gives no date, and the sources consulted do not give the age of the present structure. The fact that the village honouring the founder and the village performing the shows were different suggests the art belonged to a whole network of villages around the pagoda.`,
        ),
      ],
      sources: ['vh-brit-roinuoc', 'vh-unima-roinuoc', 'vh-nd-chuathay', 'vh-bqt-langra', 'vh-wiki-chuathay'],
    },
    {
      slug: 'ca-tru-lang-lo-khe',
      period: 'van-hoa',
      kind: 'culture',
      name: l('Ca trù và làng Lỗ Khê', 'Ca trù and Lỗ Khê village'),
      date: l('Văn bản sớm nhất cuối thế kỷ 15; UNESCO 2009', 'Earliest text late 15th century; UNESCO 2009'),
      sort: 510,
      place: l('Làng Lỗ Khê, xã Liên Hà, Đông Anh, Hà Nội', 'Lỗ Khê village, Liên Hà, Đông Anh, Hanoi'),
      coord: [105.8875, 21.1503],
      evidence: ['chron', 'legend'],
      summary: l(
        `Ca trù là lối hát thơ của miền Bắc do ba người diễn: một đào nương vừa hát vừa gõ phách, một kép đàn đáy và một người cầm trống chầu. Từng được gọi là hát ả đào hay hát cô đầu, ca trù nằm trong danh sách cần bảo vệ khẩn cấp của UNESCO từ năm 2009. Làng Lỗ Khê ở Đông Anh nhận là đất tổ.`,
        `Ca trù is a form of sung poetry from northern Vietnam performed by three people: a woman singer who keeps time with wooden clappers, a player of the three-stringed lute and a man on the praise drum. Once known as hát ả đào or hát cô đầu, it has been on UNESCO's Urgent Safeguarding List since 2009. Lỗ Khê village in Đông Anh claims to be its cradle.`,
      ),
      detail: [
        l(
          `UNESCO tả ca trù là một lối hát thơ phức tạp, lời theo các thể thơ Việt. Người hát dùng kỹ thuật hơi và luyến láy, tay gõ phách hoặc gõ hộp gỗ; hai người đệm chơi đàn ba dây và trống chầu, có khi kèm múa. Ca trù có 56 thể cách, phục vụ thờ cúng, giải trí, hát trong cung và thi hát. Xưa nghề được truyền trong gia đình, nay ai muốn học cũng được nhận.`,
          `UNESCO describes ca trù as a complex form of sung poetry with lyrics in Vietnamese verse forms. The singer uses breathing techniques and vibrato and strikes clappers or a wooden box; two accompanists play a three-stringed lute and a praise drum, sometimes with dance. Ca trù has 56 musical forms, called thể cách, used for worship, entertainment, palace performance and competitions. Once handed down within families, it is now open to anyone who wants to learn.`,
        ),
        l(
          `Theo báo Nhân Dân, văn bản cổ nhất còn lại có hai chữ "ca trù" là bài Đại nghĩ bát giáp thưởng đào giải văn, gắn với hội xuân làng Đông Ngạc cuối thế kỷ 15. Thơ của trạng nguyên Hoàng Nghĩa Phú (đỗ năm 1511) cho thấy phố Thăng Long đã có nhà hát. Thời Pháp thuộc, nhà cô đầu mọc khắp Hà Nội và các tỉnh; năm 1938 ngoại ô Hà Nội có 216 nhà hát và gần 2.000 cô đầu.`,
          `According to Nhân Dân, the oldest surviving text containing the words "ca trù" is a poem tied to the spring festival of Đông Ngạc village in the late 15th century. A poem by Hoàng Nghĩa Phú, top laureate in 1511, shows that Thăng Long's streets already had singing houses. Under French rule singing houses spread through Hanoi and provincial towns; in 1938 the outskirts of Hanoi had 216 of them and nearly 2,000 singers.`,
        ),
        l(
          `Làng Lỗ Khê thuộc xã Liên Hà, Đông Anh. Theo báo Đại Đoàn Kết, dân làng tôn ông Đinh Dự và vợ làm tổ ca trù; đầu thế kỷ 20 có người Lỗ Khê mở nhà hát trên phố Khâm Thiên. Ca trù làng hồi sinh khoảng năm 1990. Năm 1995 thôn lập câu lạc bộ 54 người, khoảng 20 người hát, đàn hoặc đánh trống được, sau thành Giáo phường Ca trù Lỗ Khê.`,
          `Lỗ Khê is in Liên Hà commune, Đông Anh. According to Đại Đoàn Kết, the villagers honour Đinh Dự and his wife as the ancestors of ca trù, and in the early 20th century some Lỗ Khê people ran singing houses on Khâm Thiên street in Hanoi. Village ca trù revived around 1990. In 1995 the village set up a club of 54 members, about 20 of whom could sing, play or drum; it later became the Lỗ Khê Ca trù Guild.`,
        ),
      ],
      scholarly: [
        l(
          `Ca trù mang tiếng oan suốt nhiều thập kỷ. Báo Nhân Dân viết rằng cô đầu hát dễ bị đánh đồng với cô đầu rượu, vì không ít khách đến nhà hát để tìm thú buông thả chứ không phải để nghe thơ nhạc. UNESCO ghi chiến tranh và sự thiếu hiểu biết làm ca trù suy giảm trong thế kỷ 20, và nay nghệ nhân già đi, việc học vất vả, thu nhập thấp, không gian diễn bị mất.`,
          `For decades ca trù carried an undeserved stigma. Nhân Dân writes that singing courtesans were easily lumped together with wine-serving hostesses, since many patrons came to the houses for debauchery rather than poetry and music. UNESCO notes that war and low awareness caused its decline in the 20th century, and that it is now threatened by ageing practitioners, demanding training, poor pay and the loss of performance spaces.`,
        ),
        l(
          `Theo Đại Đoàn Kết, ông tổ Đinh Dự là con của tướng Đinh Lễ, và bài báo cho rằng ca trù có ở Lỗ Khê từ đầu thế kỷ 10. Đây là lời kể của địa phương, không có văn bản đương thời đi kèm, nên được ghi là truyền thuyết. Văn bản sớm nhất có chữ ca trù mà các nguồn đã mở nêu ra là bài thơ cuối thế kỷ 15 ở Đông Ngạc.`,
          `According to Đại Đoàn Kết, the founder Đinh Dự was the son of the general Đinh Lễ, and the article dates ca trù in Lỗ Khê to the early 10th century. This is a local account with no contemporary document behind it, so it is marked here as legend. The earliest text containing the word ca trù cited by the sources consulted is the late 15th-century poem from Đông Ngạc.`,
        ),
      ],
      sources: ['vh-unesco-catru', 'vh-nd-catru', 'vh-ddk-lokhe', 'vh-plvn-lokhe', 'vh-vnn-unesco'],
    },
    {
      slug: 'nha-nhac-va-duyet-thi-duong',
      period: 'van-hoa',
      kind: 'culture',
      name: l('Nhã nhạc cung đình và nhà hát Duyệt Thị Đường', 'Nhã nhạc court music and the Duyệt Thị Đường theatre'),
      date: l('Thế kỷ 15 - 1945; nhà hát dựng năm 1826; UNESCO 2003', '15th century - 1945; theatre built 1826; UNESCO 2003'),
      sort: 560,
      place: l('Duyệt Thị Đường, Tử Cấm Thành, Huế', 'Duyệt Thị Đường, Forbidden Purple City, Huế'),
      coord: [107.5785, 16.4703],
      evidence: ['chron'],
      summary: l(
        `Nhã nhạc là âm nhạc và múa của triều đình, vang lên trong lễ tế, lễ đăng quang, tang lễ và khi tiếp khách nước ngoài. Hình thành từ thời Lê và được điển chế hóa dưới triều Nguyễn, nó gần như mất chỗ đứng khi chế độ quân chủ chấm dứt. UNESCO công nhận nhã nhạc năm 2003; nay nó được diễn ở nhà hát Duyệt Thị Đường.`,
        `Nhã nhạc is the music and dance of the royal court, played at sacrifices, coronations, funerals and receptions for foreign envoys. It took shape under the Lê and was codified under the Nguyễn, then almost lost its place when the monarchy ended. UNESCO recognised it in 2003; today it is performed at the Duyệt Thị Đường theatre.`,
      ),
      detail: [
        l(
          `UNESCO tả nhã nhạc là nhiều thể loại nhạc và múa của triều đình Việt Nam từ thế kỷ 15 đến giữa thế kỷ 20, mở đầu và kết thúc các lễ lớn. Nhã nhạc phát triển dưới thời Lê (1427 - 1788) và được thể chế hóa chặt chẽ dưới triều Nguyễn (1802 - 1945), trở thành biểu tượng cho quyền lực và sự trường tồn của vương triều. Dàn nhạc lớn có bộ gõ nổi bật cùng nhiều nhạc cụ hơi và dây.`,
          `UNESCO describes Nhã nhạc as a broad range of music and dance performed at the Vietnamese court from the 15th to the mid-20th century, opening and closing its great ceremonies. It developed under the Lê (1427 - 1788) and was tightly institutionalised under the Nguyễn (1802 - 1945), becoming a symbol of the dynasty's power and permanence. Large ensembles had a prominent drum section and many wind and string instruments.`,
        ),
        l(
          `Theo báo Pháp luật Việt Nam, nhã nhạc có hai phần chính. Đại nhạc là dàn nhạc cho các nghi lễ quan trọng nhất như tế Nam Giao, còn tiểu nhạc nhẹ nhàng hơn, chơi trong yến tiệc, ngày Tết và khi tiếp khách nước ngoài. Năm 1897, F. Baille tả một ban nhạc cung đình có hai mươi nhạc công. Sau khi vua Bảo Đại thoái vị, bà Từ Cung bỏ tiền riêng nuôi một nhóm khoảng mười người để giữ nhã nhạc.`,
          `According to Báo Pháp luật Việt Nam, Nhã nhạc had two main parts. The great ensemble (đại nhạc) played at the most important rites, such as the Nam Giao sacrifice to Heaven, while the smaller ensemble (tiểu nhạc) was lighter and played at banquets, at Tết and when receiving foreign guests. In 1897 F. Baille described a court band of twenty musicians. After Emperor Bảo Đại abdicated, the former queen mother Từ Cung paid from her own purse to keep a group of about ten musicians together.`,
        ),
        l(
          `Duyệt Thị Đường được dựng năm 1826, năm Minh Mạng thứ 7, và được coi là nhà hát cổ nhất Việt Nam. Nhà hát nằm trong Tử Cấm Thành, phía đông cung Quang Minh; vua ngồi xem ở chính giữa tầng trên, quan lại ngồi tầng dưới hai bên sân khấu. Năm 1962 nhà hát bị sửa làm trường âm nhạc. Việc trùng tu bắt đầu năm 1992 và nhà hát mở cửa đón khách ngày 1 tháng 1 năm 2003, nay diễn nhã nhạc, múa cung đình và tuồng.`,
          `Duyệt Thị Đường was built in 1826, the seventh year of Minh Mạng, and is considered the oldest theatre in Vietnam. It stands in the Forbidden Purple City, east of the Quang Minh palace; the emperor watched from the centre of the upper floor while officials sat downstairs beside the stage. In 1962 it was converted into a music school. Restoration began in 1992 and it opened to visitors on 1 January 2003; today it stages Nhã nhạc, court dance and tuồng theatre.`,
        ),
      ],
      scholarly: [
        l(
          `Các nguồn lệch nhau về khởi điểm. UNESCO đặt sự phát triển của nhã nhạc ở thời Lê, còn bài của TTXVN đăng trên trang VUFO nói nhạc cung đình được du nhập và phát triển từ thời Lý (1010 - 1225) rồi qua Trần, Hồ, Tây Sơn đến đỉnh cao thời Nguyễn. Có thể hai nguồn nói về hai thứ khác nhau: nhạc cung đình nói chung và hệ thống nhã nhạc đã được điển chế. Trang của Tổng cục Du lịch ghi năm 1826 đời Minh Mạng nhưng phần mở đầu lại nhắc vua Tự Đức; VUFO nói việc trùng tu nhà hát bắt đầu từ năm 2004.`,
          `The sources differ on the starting point. UNESCO places the development of Nhã nhạc under the Lê, while a Vietnam News Agency article on the VUFO site says court music was introduced and developed from the Lý (1010 - 1225), then carried through the Trần, Hồ and Tây Sơn to its height under the Nguyễn. The two may be describing different things: court music in general and the codified Nhã nhạc system. The national tourism site gives 1826 under Minh Mạng but mentions Tự Đức in its introduction; VUFO dates the theatre's restoration from 2004.`,
        ),
        l(
          `Con đường đến danh hiệu UNESCO bắt đầu từ trước năm 1975. Theo báo Pháp luật Việt Nam, luận án năm 1962 của Trần Văn Khê, bản thu âm của UNESCO năm 1969 và buổi diễn tại Hội chợ quốc tế Nhật Bản năm 1970 đã giới thiệu nhã nhạc ra thế giới. Việc bảo tồn bắt đầu từ năm 1992. UNESCO tuyên bố nhã nhạc ngày 7 tháng 11 năm 2003, ghi vào Danh sách đại diện năm 2008, và ghi nhận chỉ còn rất ít nhạc công cung đình cũ.`,
          `The road to UNESCO recognition began before 1975. According to Báo Pháp luật Việt Nam, Trần Văn Khê's 1962 thesis, a UNESCO recording in 1969 and a performance at the 1970 Expo in Japan introduced Nhã nhạc to the world. Conservation work began in 1992. UNESCO proclaimed it on 7 November 2003 and inscribed it on the Representative List in 2008, noting that only a few former court musicians survive.`,
        ),
      ],
      sources: ['vh-unesco-nhanhac', 'vh-vufo-nhanhac', 'vh-plvn-duyetthi', 'vh-vnat-duyetthi'],
    },
    {
      slug: 'tranh-dan-gian-dong-ho',
      period: 'van-hoa',
      kind: 'culture',
      name: l('Tranh dân gian Đông Hồ', 'Đông Hồ folk woodblock prints'),
      date: l('Khoảng 500 năm; UNESCO 2025', 'About 500 years; UNESCO 2025'),
      sort: 475,
      place: l('Làng Đông Hồ (thôn Đông Khê), xã Song Hồ, Thuận Thành, Bắc Ninh', 'Đông Hồ village (Đông Khê hamlet), Song Hồ, Thuận Thành, Bắc Ninh'),
      coord: [106.0754, 21.0688],
      evidence: ['chron'],
      summary: l(
        `Tranh Đông Hồ là tranh in khắc gỗ làm hoàn toàn bằng tay ở một làng ven sông Đuống, Bắc Ninh. Màu lấy từ lá chàm, sỏi son, than lá tre, hoa hòe và vỏ điệp, in trên giấy dó quét điệp. Tranh gắn với Tết và bàn thờ tổ tiên. Ngày 9 tháng 12 năm 2025, UNESCO đưa nghề này vào danh sách cần bảo vệ khẩn cấp.`,
        `Đông Hồ prints are woodblock pictures made entirely by hand in a village on the Đuống river in Bắc Ninh. The colours come from indigo leaves, red gravel, bamboo-leaf charcoal, sophora flowers and seashells, printed on dó paper coated with shell powder. The prints belong to Tết and the ancestral altar. On 9 December 2025 UNESCO placed the craft on its Urgent Safeguarding List.`,
      ),
      detail: [
        l(
          `Theo UNESCO, nghệ nhân vẽ mẫu bằng mực trên giấy, khắc mẫu lên ván gỗ, tự chế màu từ nguyên liệu tự nhiên rồi in lên giấy đã quét bột điệp. Mỗi màu một bản khắc, in theo thứ tự cố định: màu đỏ trước, nét đen sau cùng. Theo Tuổi Trẻ, tranh bắt buộc in trên giấy dó, màu xanh lấy từ lá chàm, đỏ từ sỏi son, đen từ than lá tre, vàng từ hoa hòe và trắng từ vỏ điệp.`,
          `According to UNESCO, artisans draw the design in ink on paper, carve it into woodblocks, prepare colours from natural materials and print onto paper coated with seashell powder. Each colour has its own block and is printed in a fixed order, red first and the black outline last. According to Tuổi Trẻ, the prints must be made on dó paper; green comes from indigo leaves, red from red gravel, black from bamboo-leaf charcoal, yellow from sophora flowers and white from scallop shells.`,
        ),
        l(
          `Làng tranh nay là thôn Đông Khê, xã Song Hồ, nằm bên bờ nam sông Đuống. Bài của Tuổi Trẻ năm 2008 cho biết làng có hơn 240 hộ, và theo gia phả trong làng thì nghề có từ đời Lê, khoảng 500 năm trước. Gia đình nghệ nhân Nguyễn Đăng Chế có 20 đời làm tranh. UNESCO ghi tranh vẽ đề tài thờ cúng, lịch sử, đời thường và phong cảnh, gắn với Tết Nguyên đán, Tết Trung thu và việc thờ tổ tiên.`,
          `The printmaking village is today Đông Khê hamlet in Song Hồ commune, on the south bank of the Đuống river. A 2008 Tuổi Trẻ report says it had more than 240 households and that, by the village genealogies, the craft dates from the Lê period, some 500 years ago. The family of the artisan Nguyễn Đăng Chế has made prints for 20 generations. UNESCO notes that the prints depict worship, history, daily life and landscapes, and belong to the Lunar New Year, the Mid-Autumn Festival and ancestor worship.`,
        ),
        l(
          `Nghề sa sút mạnh trong thế kỷ 20. Theo Wikipedia, năm 1945 làng còn 17 gia đình làm tranh; về sau thói quen treo tranh Tết phai dần, tranh giả in hàng loạt cạnh tranh, nhiều hộ chuyển sang làm vàng mã. Trung tâm tranh Đông Hồ được lập năm 2008. Ngày 9 tháng 12 năm 2025, tại kỳ họp ở New Delhi, UNESCO đưa nghề vào danh sách cần bảo vệ khẩn cấp, vì chỉ còn ít gia đình theo nghề.`,
          `The craft declined sharply in the 20th century. According to Wikipedia, 17 families were still making prints in 1945; later the custom of hanging new pictures at Tết faded, mass-printed fakes undercut the originals and many households switched to votive paper goods. A Đông Hồ painting centre was set up in 2008. On 9 December 2025, at its 20th session in New Delhi, UNESCO inscribed the craft on the Urgent Safeguarding List, since only a small number of families still practise it.`,
        ),
      ],
      scholarly: [
        l(
          `Niên đại của nghề chưa thống nhất. Dân làng kể nghề có từ thời Lý, thế kỷ 11; một số nhà nghiên cứu cho rằng việc in tranh bắt đầu dưới thời Lê Kính Tông (1600 - 1619); gia phả mà Tuổi Trẻ và Việt Nam News dẫn thì cho con số khoảng 500 năm. Chứng cứ chủ yếu là gia phả các dòng họ và những ván khắc được giữ như của gia bảo, chưa có văn bản triều đình nào chép về nghề.`,
          `The craft's date is not settled. Villagers say it goes back to the Lý in the 11th century; some researchers suggest printing began under Lê Kính Tông (1600 - 1619); the genealogies cited by Tuổi Trẻ and Việt Nam News give about 500 years. The evidence is mainly family genealogies and woodblocks kept as heirlooms; no court record of the craft has been cited.`,
        ),
        l(
          `UNESCO không nêu con số cụ thể về số gia đình còn làm tranh, chỉ nói là "một số ít". Hồ sơ nêu bảy nguy cơ: giới trẻ ít quan tâm, ít người hành nghề, khó truyền nghề, thu nhập thấp, mất không gian văn hóa, tranh mất dần ý nghĩa và thiếu nguyên liệu. Theo Việt Nam News, đây là di sản phi vật thể thứ 17 của Việt Nam được UNESCO ghi danh.`,
          `UNESCO gives no exact figure for the families still printing, saying only "a small number". The file lists seven threats: waning interest among the young, few practitioners, hampered transmission, poor pay, loss of cultural spaces, loss of meaning and shortage of materials. According to Việt Nam News, it is Vietnam's 17th intangible heritage element inscribed by UNESCO.`,
        ),
      ],
      sources: ['vh-unesco-dongho', 'vh-vns-dongho', 'vh-tt-dongho', 'vh-wiki-dongho'],
    },
    {
      slug: 'tho-mau-tam-phu-phu-day',
      period: 'van-hoa',
      kind: 'culture',
      name: l('Thờ Mẫu Tam phủ và quần thể Phủ Dầy', 'Mother Goddess worship and the Phủ Dầy complex'),
      date: l('Từ thời Hậu Lê; UNESCO 2016', 'From the Later Lê; UNESCO 2016'),
      sort: 350,
      place: l('Phủ Tiên Hương, quần thể Phủ Dầy, Vụ Bản, Ninh Bình (trước thuộc Nam Định)', 'Tiên Hương temple, Phủ Dầy complex, Vụ Bản, Ninh Bình (formerly Nam Định)'),
      coord: [106.0777, 20.3609],
      evidence: ['legend', 'chron'],
      summary: l(
        `Tín ngưỡng thờ Mẫu Tam phủ thờ các Mẫu cai quản ba cõi trời, sông nước và rừng núi, với nghi lễ lên đồng trong đó người hầu đồng hóa thân thành các vị thánh. Vị Mẫu được nhắc nhiều nhất là Liễu Hạnh, thờ ở quần thể Phủ Dầy, Vụ Bản. UNESCO ghi danh các thực hành thờ Mẫu vào Danh sách đại diện năm 2016.`,
        `The worship of the Mother Goddesses of Three Realms honours goddesses who rule heaven, water, and mountains and forests, with spirit possession rituals in which mediums embody the deities. The best-known Mother is Liễu Hạnh, worshipped at the Phủ Dầy complex in Vụ Bản. UNESCO inscribed these practices on its Representative List in 2016.`,
      ),
      detail: [
        l(
          `Theo UNESCO, cộng đồng thờ các Mẫu gắn với trời, nước và rừng núi, cầu xin sức khỏe, may mắn và những mong ước đời thường. Liễu Hạnh được tả là một tiên nữ giáng trần, sống như người thường rồi đi tu, và được tôn là Mẹ của thế gian; bên cạnh còn có các vị thánh là anh hùng trong truyền thuyết. Thực hành gồm thờ cúng hằng ngày, lễ hội và nghi lễ nhập hồn, có trang phục, âm nhạc và múa.`,
          `According to UNESCO, communities worship Mother Goddesses associated with heaven, water, and mountains and forests, asking for health, success and everyday wishes. Liễu Hạnh is described as a fairy who came down to earth, lived as a human and became a Buddhist nun, and is called the Mother of the World; other spirits honoured are legendary heroes. The practices include daily worship, festivals and a spirit possession ritual with costumes, music and dance.`,
        ),
        l(
          `Lễ hội Phủ Dầy ở xã Kim Thái, huyện Vụ Bản tôn vinh Thánh Mẫu Liễu Hạnh, một trong Tứ bất tử của tín ngưỡng Việt. Theo báo Nhân Dân, quần thể có 18 di tích và lễ hội được công nhận là di sản phi vật thể quốc gia ngày 9 tháng 9 năm 2013. Theo Vietnam Plus, phủ chính Tiên Hương có từ thời Hậu Lê, gồm 19 tòa với 81 gian; Phủ Dầy là di tích quốc gia từ năm 1975.`,
          `The Phủ Dầy festival in Kim Thái commune, Vụ Bản, honours the Holy Mother Liễu Hạnh, one of the Four Immortals of Vietnamese belief. According to Nhân Dân, the complex has 18 relics and the festival was recognised as national intangible heritage on 9 September 2013. According to Vietnam Plus, the main Tiên Hương temple dates from the Later Lê and has 19 buildings with 81 bays; Phủ Dầy has been a national relic since 1975.`,
        ),
        l(
          `Nhà dân tộc học Vũ Hồng Thuật (Bảo tàng Dân tộc học Việt Nam) viết rằng lên đồng là thành phần trung tâm của tín ngưỡng: trang phục, đạo cụ và lễ vật của người hầu đồng gắn với lai lịch và chức năng của từng vị thánh. Trước khi hầu, người hầu đồng thường ăn chay và mặc đồ trắng. Ông ghi nhận từ khi UNESCO công nhận ngày 1 tháng 12 năm 2016, nhiều đền phủ được tu bổ và các buổi lên đồng nở rộ.`,
          `The ethnologist Vũ Hồng Thuật of the Vietnam Museum of Ethnology writes that spirit mediumship is the core of the practice: the medium's costumes, props and offerings are tied to the history and role of each deity. Before a ritual, mediums usually keep a vegetarian fast and wear white. He notes that since UNESCO's recognition on 1 December 2016 many temples have been restored and mediumship rituals have flourished.`,
        ),
      ],
      scholarly: [
        l(
          `Vũ Hồng Thuật cũng chỉ ra mặt trái: thương mại hóa việc hầu đồng, giá đồng giả, trang phục bị biến tấu, pha trộn yếu tố Phật giáo và Đạo giáo, đốt quá nhiều vàng mã. Ở Thanh Hóa có hai mô hình quản lý: nhà nước quản lý như ở đền Sòng, và tư nhân cùng chính quyền xã quản lý như ở phủ Mo, đền Bà Bông; theo ông mô hình sau hạn chế thương mại hóa tốt hơn. Ông đề nghị có quy chuẩn cho 36 giá đồng.`,
          `Vũ Hồng Thuật also points to problems: commercialised mediumship, fake possessions, altered costumes, mixing with Buddhist and Taoist elements, and excessive burning of votive paper. In Thanh Hóa there are two management models: state management, as at Sòng temple, and private management with the commune, as at Mo palace and Bà Bông temple; in his view the second does better at limiting commercialisation. He calls for standards for the 36 spirit sequences.`,
        ),
        l(
          `Chuyện Liễu Hạnh là truyền thuyết; các nguồn đã mở không nêu năm sinh hay niên đại cụ thể của bà, và Vietnam Plus chỉ ghi phủ Tiên Hương "có từ thời Hậu Lê" mà không nêu năm dựng. Vietnam Plus nói phủ nhận chứng nhận của UNESCO năm 2017, trong khi việc ghi danh diễn ra tại kỳ họp tháng 12 năm 2016. Sau đợt sắp xếp tỉnh năm 2025, Vụ Bản thuộc tỉnh Ninh Bình.`,
          `Liễu Hạnh's story is legend; the sources consulted give no birth year or firm date for her, and Vietnam Plus says only that Tiên Hương temple dates "from the Later Lê" without a construction year. Vietnam Plus says the site received its UNESCO certificate in 2017, while the inscription itself took place at the December 2016 session. Since the 2025 provincial reorganisation, Vụ Bản has been part of Ninh Bình province.`,
        ),
      ],
      sources: ['vh-unesco-mau', 'vh-thuat-mau', 'vh-vnplus-tienhuong', 'vh-nd-phuday'],
    },
    {
      slug: 'quan-ho-bac-ninh-lang-diem',
      period: 'van-hoa',
      kind: 'culture',
      name: l('Quan họ Bắc Ninh và làng Diềm', 'Quan họ singing and Diềm village'),
      date: l('Truyền thống làng xã; UNESCO 2009', 'Village tradition; UNESCO 2009'),
      sort: 300,
      place: l('Làng Diềm (Viêm Xá), phường Hòa Long, Bắc Ninh', 'Diềm (Viêm Xá) village, Hòa Long ward, Bắc Ninh'),
      coord: [106.0502, 21.2148],
      evidence: ['chron', 'legend'],
      summary: l(
        `Quan họ là lối hát đối đáp giữa các làng kết nghĩa ở vùng Bắc Ninh, Bắc Giang: hai cô gái làng này hát, hai chàng trai làng kia đáp lại bằng giai điệu tương tự nhưng lời khác. Kho quan họ có hơn 400 lời ca với 213 biến thể giai điệu. Làng Diềm có đền thờ Vua Bà, người được coi là thủy tổ quan họ.`,
        `Quan họ is antiphonal singing between twinned villages in Bắc Ninh and Bắc Giang: two women from one village sing, and two men from another answer with similar melodies but different words. The repertoire has more than 400 lyrics sung to 213 melody variations. Diềm village has the temple of the Lady Queen, honoured as the founder of quan họ.`,
      ),
      detail: [
        l(
          `UNESCO ghi danh dân ca quan họ Bắc Ninh vào Danh sách đại diện năm 2009. Theo hồ sơ, nhiều làng ở Bắc Ninh và Bắc Giang kết nghĩa với nhau và thắt chặt quan hệ bằng tục hát quan họ. Hai người nữ của một làng hát hòa giọng, hai người nam của làng kia đáp lại. Người nữ đội nón to tròn, choàng khăn; người nam đội khăn xếp, mặc áo dài, cầm ô. Người hát trẻ luyện bốn kỹ thuật giọng riêng của quan họ.`,
          `UNESCO inscribed Quan họ Bắc Ninh folk songs on its Representative List in 2009. According to the file, many villages in Bắc Ninh and Bắc Giang are twinned and reinforce the bond through quan họ singing. Two women from one village sing in harmony and two men from the other reply. The women wear large round hats and scarves; the men wear turbans and tunics and carry umbrellas. Young singers practise four vocal techniques particular to quan họ.`,
        ),
        l(
          `Kho quan họ có hơn 400 lời ca hát trên 213 biến thể giai điệu, nói về nỗi nhớ mong, buồn khi chia tay và niềm vui khi gặp lại. Tục lệ cấm người hát lấy bạn hát của mình làm vợ chồng. Quan họ được hát trong nghi lễ, lễ hội, thi hát và những buổi gặp gỡ; khách hát cho chủ nhà nghe rồi hát bài giã bạn khi ra về. Theo Báo Chính phủ, UNESCO công nhận quan họ ngày 30 tháng 9 năm 2009.`,
          `The repertoire has more than 400 lyrics sung to 213 melody variations, about longing, the sadness of parting and the joy of meeting again. Custom forbids marrying one's singing partner. Quan họ is sung at rituals, festivals, competitions and informal gatherings; guests sing for their hosts and then sing farewell songs as they leave. According to the government news portal, UNESCO recognised quan họ on 30 September 2009.`,
        ),
        l(
          `Làng Diềm, tên chữ là Viêm Xá, thuộc phường Hòa Long, thành phố Bắc Ninh. Theo báo Nhân Dân, đây là một trong 49 làng quan họ gốc và là nơi duy nhất có đền thờ Vua Bà, người được tin là đã sáng tạo và truyền dạy các làn điệu quan họ. Hội làng ngày mồng 6 tháng 2 âm lịch có lễ rước ra đền Cùng, giếng Ngọc lấy nước về tắm tượng Vua Bà, rồi hát ở đền, trên thuyền và ở nhà chứa.`,
          `Diềm village, formally Viêm Xá, is in Hòa Long ward of Bắc Ninh city. According to Nhân Dân, it is one of the 49 original quan họ villages and the only place with a temple to the Lady Queen, believed to have created and taught the quan họ melodies. Its festival on the sixth day of the second lunar month includes a procession to the Cùng temple and Ngọc well to fetch water for bathing her statue, followed by singing at the temple, on boats and in host houses.`,
        ),
      ],
      scholarly: [
        l(
          `Vua Bà là nhân vật truyền thuyết, được thờ như thủy tổ nhưng không có văn bản đương thời nào chép về bà, nên mục này gắn thêm nhãn truyền thuyết. Con số 49 làng quan họ gốc lấy từ báo Nhân Dân; hồ sơ UNESCO không nêu số làng và cũng không bàn về nguy cơ mai một của quan họ.`,
          `The Lady Queen is a legendary figure, honoured as founder but not recorded in any contemporary document, so this entry also carries the legend tag. The figure of 49 original villages comes from Nhân Dân; the UNESCO file gives no village count and does not discuss threats to the practice.`,
        ),
        l(
          `Tục không lấy bạn hát cho thấy quan họ trước hết là một mối dây xã hội giữa các làng chứ không phải chuyện tìm hiểu lứa đôi. UNESCO nhấn mạnh rằng các bài hát thể hiện bản sắc vùng và gắn kết quan hệ trong làng và giữa các làng. Sự kết nghĩa ấy giải thích vì sao quan họ thường được hát theo từng cặp làng.`,
          `The rule against marrying a singing partner shows that quan họ is above all a social bond between villages rather than a form of courtship. UNESCO stresses that the songs express the region's identity and build ties within and between villages. That twinning explains why quan họ is usually sung between pairs of villages.`,
        ),
      ],
      sources: ['vh-unesco-quanho', 'vh-bcp-quanho', 'vh-nd-langdiem', 'vh-vnn-unesco'],
    },
    {
      slug: 'ao-dai-tu-1744-den-le-mur',
      period: 'van-hoa',
      kind: 'culture',
      name: l('Áo dài: từ cải cách năm 1744 đến áo Le Mur', 'The áo dài: from the 1744 reform to the Le Mur design'),
      date: l('1744; 1934', '1744; 1934'),
      sort: 256,
      place: l('Huế, nơi đặt phủ chúa Phú Xuân xưa', `Huế, once the Nguyễn lords' seat at Phú Xuân`),
      coord: [107.5909, 16.4637],
      evidence: ['chron'],
      summary: l(
        `Tiền thân của áo dài là áo ngũ thân, ra đời khi chúa Nguyễn Phúc Khoát cải cách y phục ở Đàng Trong từ năm 1744, buộc người trong triều mặc quần và áo dài cài khuy. Gần hai thế kỷ sau, họa sĩ Nguyễn Cát Tường vẽ lại chiếc áo cho ôm dáng hơn, gọi là áo Le Mur, đăng trên báo Phong Hóa năm 1934.`,
        `The áo dài descends from the five-panel gown (áo ngũ thân) born of Lord Nguyễn Phúc Khoát's dress reform in the southern realm from 1744, which required his court to wear trousers and a long gown buttoned at the front. Nearly two centuries later the Hanoi painter Nguyễn Cát Tường redesigned it to follow the body, as the "Le Mur" dress published in the newspaper Phong Hóa in 1934.`,
      ),
      detail: [
        l(
          `Theo báo Văn Hóa, năm 1744, sau khi xưng vương ở phủ chính Phú Xuân, chúa Nguyễn Phúc Khoát ban hành nhiều chính sách, sắp xếp lại bộ máy và đặt ra việc cải cách y phục. Theo Wikipedia, chúa buộc đàn ông và đàn bà trong triều mặc quần và áo cài khuy phía trước, khác với triều Trịnh ở Thăng Long vẫn mặc áo giao lĩnh và váy. PGS.TS Phan Thanh Hải coi Nguyễn Phúc Khoát là người khai sinh chiếc áo ngũ thân.`,
          `According to Báo Văn Hóa, in 1744, after declaring himself king at the Phú Xuân seat, Lord Nguyễn Phúc Khoát issued many policies, reorganised the administration and set about reforming court dress. According to Wikipedia, he ordered the men and women of his court to wear trousers and a gown buttoned at the front, unlike the Trịnh court in Thăng Long, which kept the cross-collared gown and skirt. The historian Phan Thanh Hải regards Nguyễn Phúc Khoát as the creator of the five-panel gown.`,
        ),
        l(
          `Báo Văn Hóa viết rằng từ đó áo dài thành trang phục chính ở Đàng Trong. Năm 1802 vua Gia Long muốn đổi y phục cả nước nhưng chưa làm được; đến các năm 1826 - 1837 vua Minh Mạng mới thi hành trên toàn quốc. Ngày 9 tháng 8 năm 2024, theo Quyết định 2320/QĐ-BVHTTDL, tri thức may và mặc áo dài Huế được đưa vào danh mục di sản văn hóa phi vật thể quốc gia.`,
          `Báo Văn Hóa writes that the gown then became the main dress of the southern realm. In 1802 Emperor Gia Long wanted to change the dress of the whole country but did not manage it; only in 1826 - 1837 did Emperor Minh Mạng enforce it nationwide. On 9 August 2024, by Decision 2320/QĐ-BVHTTDL, the knowledge of making and wearing the Huế áo dài was added to the national list of intangible cultural heritage.`,
        ),
        l(
          `Nguyễn Cát Tường học Trường Mỹ thuật Đông Dương và cộng tác với Tự Lực văn đoàn; "Le Mur" là tên ông dịch sang tiếng Pháp, vì "tường" nghĩa là bức tường. Theo Việt Nam News, ông giới thiệu mẫu áo dài tân thời đầu tiên trên số 90 báo Phong Hóa ngày 23 tháng 3 năm 1934. Saigoneer tả ông bỏ cổ áo, sửa tay, quần và vạt cho hợp thân hình phụ nữ. Năm 1935 ông đi giới thiệu khắp nước.`,
          `Nguyễn Cát Tường studied at the Indochina College of Fine Arts and worked with the Self-Reliant Literary Group; "Le Mur" was his name translated into French, since "tường" means wall. According to Việt Nam News, he introduced the first modern áo dài in issue 90 of Phong Hóa on 23 March 1934. Saigoneer says he removed the collar and reworked the sleeves, trousers and panels to fit a woman's figure. In 1935 he toured the country to promote it.`,
        ),
      ],
      scholarly: [
        l(
          `Cách hiểu cuộc cải cách năm 1744 có hai hướng. Wikipedia dẫn Phủ biên tạp lục của Lê Quý Đôn rằng kiểu áo mới dựa theo y phục nhà Minh, lấy sách Tam tài đồ hội làm chuẩn. Phan Thanh Hải lại nhấn mạnh mục đích chính trị: cải cách thể hiện tư tưởng thống nhất và tự chủ về văn hóa của chính quyền Đàng Trong. Hai cách nhìn không loại trừ nhau, vì mẫu áo có thể vay mượn trong khi mục đích là tách mình khỏi Đàng Ngoài.`,
          `The 1744 reform is read in two ways. Wikipedia cites Lê Quý Đôn's Phủ biên tạp lục as saying the new dress followed Ming costume, using the Sancai Tuhui as its standard. Phan Thanh Hải stresses its political aim: the reform expressed the southern regime's ideas of unity and cultural autonomy. The two views are compatible, since the cut could be borrowed while the purpose was to set the south apart from the Trịnh north.`,
        ),
        l(
          `Các nguồn lệch nhau về Nguyễn Cát Tường. Saigoneer ghi ông sinh năm 1911 ở Sơn Tây, Việt Nam News ghi 1912 - 1946. Saigoneer viết rằng ông bị bắt sau Cách mạng tháng Tám khi 35 tuổi và không trở về, theo lời kể của nhân chứng; các nguồn đã mở không có tài liệu chính thức về việc này. Wikipedia còn ghi họa sĩ Lê Phổ đưa ra một số kiểu áo dài từ năm 1934, điều mà bài của Việt Nam News không nhắc tới.`,
          `The sources disagree about Nguyễn Cát Tường. Saigoneer gives his birth as 1911 in Sơn Tây, while Việt Nam News gives 1912 - 1946. Saigoneer writes, citing eyewitness accounts, that he was arrested after the August Revolution at the age of 35 and never returned; the sources consulted contain no official record of this. Wikipedia also credits the painter Lê Phổ with several áo dài styles from 1934, which the Việt Nam News article does not mention.`,
        ),
      ],
      sources: ['vh-pth-aodai', 'vh-bvh-aodaihue', 'vh-saigoneer-lemur', 'vh-vns-lemur', 'vh-wiki-aodai'],
    },
    {
      slug: 'don-ca-tai-tu-da-co-hoai-lang',
      period: 'van-hoa',
      kind: 'culture',
      name: l('Đờn ca tài tử và bản Dạ cổ hoài lang', 'Đờn ca tài tử and the song Dạ cổ hoài lang'),
      date: l('Nổi danh năm 1919; UNESCO 2013', 'Famous from 1919; UNESCO 2013'),
      sort: 81,
      place: l('Khu lưu niệm Đờn ca tài tử Nam Bộ và nhạc sĩ Cao Văn Lầu, Bạc Liêu (nay thuộc Cà Mau)', 'Memorial site for đờn ca tài tử and the composer Cao Văn Lầu, Bạc Liêu (now in Cà Mau province)'),
      coord: [105.7258, 9.2764],
      evidence: ['chron'],
      summary: l(
        `Đờn ca tài tử là lối chơi nhạc của người Nam Bộ, vừa có gốc bác học vừa có gốc dân gian, diễn trong đám giỗ, lễ hội và những buổi họp mặt. Người chơi ứng tác quanh một bộ khung giai điệu. Từ bài Dạ cổ hoài lang của Cao Văn Lầu, nổi danh năm 1919, điệu vọng cổ ra đời. UNESCO ghi danh nghệ thuật này năm 2013.`,
        `Đờn ca tài tử is the chamber music of southern Vietnam, with both scholarly and folk roots, played at death anniversaries, festivals and gatherings. Musicians improvise around a skeletal melody. From Cao Văn Lầu's song Dạ cổ hoài lang, famous from 1919, later artists developed the vọng cổ tune. UNESCO inscribed đờn ca tài tử in 2013.`,
      ),
      detail: [
        l(
          `Theo UNESCO, người chơi đờn ca tài tử bày tỏ cảm xúc bằng cách ứng tác, luyến láy và biến hóa quanh bộ khung giai điệu và các tiết tấu chính. Dàn nhạc có bảy loại: đàn kìm, đàn cò, đàn tranh 16 dây, đàn tỳ bà, bộ gõ, đàn bầu và sáo. Vốn bài dựa trên 20 bài chính và 72 bài cổ điển, truyền miệng từ thầy sang trò; người học đàn cần ít nhất ba năm.`,
          `According to UNESCO, đờn ca tài tử performers express feeling by improvising, ornamenting and varying the skeletal melody and main rhythms. The ensemble uses seven instruments: moon-shaped lute, two-stringed fiddle, sixteen-stringed zither, pear-shaped lute, percussion, monochord and bamboo flute. The repertoire rests on 20 principal songs and 72 classical songs, passed orally from master to student; instrumentalists need at least three years of study.`,
        ),
        l(
          `Theo báo Pháp luật Việt Nam, Cao Văn Lầu sinh ngày 22 tháng 12 năm 1890 ở Long An, theo gia đình về Bạc Liêu từ nhỏ và học nhạc với thầy Lê Tài Khí. Ông viết Dạ cổ hoài lang trong một đêm, sau khi người vợ hiếm muộn bị đưa về nhà cha mẹ theo tục lệ; năm 1919 bài hát nổi danh khắp nơi, và về sau hai vợ chồng đoàn tụ. Thầy của ông, Nhạc Khị, đã lập ban nhạc lễ đầu tiên ở Bạc Liêu.`,
          `According to Báo Pháp luật Việt Nam, Cao Văn Lầu was born on 22 December 1890 in Long An, moved with his family to Bạc Liêu as a small child and studied music with Lê Tài Khí. He wrote Dạ cổ hoài lang in a single night after his childless wife was sent back to her parents by custom; in 1919 the song became famous everywhere, and the couple were later reunited. His teacher, known as Nhạc Khị, had founded Bạc Liêu's first ceremonial music band.`,
        ),
        l(
          `Từ bản Dạ cổ hoài lang mỗi câu hai nhịp, các nghệ sĩ đời sau nâng lên bốn nhịp rồi tám nhịp, thành bài vọng cổ, điệu nhạc trung tâm của cải lương. Theo Nhân Dân năm 2023, Bạc Liêu có hơn 150 câu lạc bộ đờn ca tài tử với hơn 2.000 thành viên. Khu lưu niệm Nghệ thuật Đờn ca tài tử Nam Bộ và nhạc sĩ Cao Văn Lầu là di tích quốc gia, có mộ ông, và là nơi tổ chức Festival Dạ cổ hoài lang.`,
          `From Dạ cổ hoài lang, with two beats to a line, later artists moved to four and then eight beats, creating vọng cổ, the central tune of cải lương theatre. According to Nhân Dân in 2023, Bạc Liêu had more than 150 đờn ca tài tử clubs with over 2,000 members. The memorial site for southern đờn ca tài tử and the composer Cao Văn Lầu is a national relic, holds his tomb, and hosts the Dạ Cổ Hoài Lang Festival.`,
        ),
      ],
      scholarly: [
        l(
          `Năm sinh của Cao Văn Lầu khác nhau giữa các nguồn: báo Pháp luật Việt Nam ghi năm 1890, Wikipedia ghi năm 1892. Năm sáng tác cũng không chắc: báo chí thường lấy năm 1919, năm bài hát nổi danh, còn Wikipedia dẫn một tài liệu nói vọng cổ được Cao Văn Lầu sáng tác lần đầu trong khoảng 1917 - 1920. Báo Pháp luật Việt Nam còn kể chuyện năm 1947 ban nhạc của ông diễn ở nhà lao Bạc Liêu để quân cách mạng giải thoát sáu chiến sĩ, và nói chính quyền tỉnh đã xác nhận chuyện này.`,
          `Sources differ on Cao Văn Lầu's birth year: Báo Pháp luật Việt Nam gives 1890, Wikipedia 1892. The year of composition is also uncertain: the press usually uses 1919, when the song became famous, while Wikipedia cites a reference saying vọng cổ was first composed by Cao Văn Lầu between 1917 and 1920. Báo Pháp luật Việt Nam also tells how in 1947 his band played at the Bạc Liêu prison while revolutionary forces freed six fighters, and says the provincial authorities confirmed the story.`,
        ),
        l(
          `Vọng cổ là sản phẩm của nhiều thế hệ chứ không của riêng một người. Báo Nhân Dân ghi bản hai nhịp là của Cao Văn Lầu còn các bản sau do nghệ sĩ khác phát triển. Hồ sơ UNESCO không nêu thế kỷ ra đời của đờn ca tài tử hay số tỉnh thực hành, chỉ đặt nó ở Nam Bộ và đồng bằng sông Cửu Long.`,
          `Vọng cổ is the work of several generations rather than one person. Nhân Dân records that the two-beat version was Cao Văn Lầu's while later versions were developed by other artists. The UNESCO file gives neither the century in which đờn ca tài tử arose nor the number of provinces where it is practised, placing it simply in southern Vietnam and the Mekong Delta.`,
        ),
      ],
      sources: ['vh-unesco-taitu', 'vh-plvn-dacohoailang', 'vh-nd-baclieu', 'vh-vns-baclieu', 'vh-wiki-caovanlau'],
    },
  ],
  sources: [
    { id: 'vh-unesco-convention', kind: 'museum', cite: 'UNESCO (17/10/2003), Convention for the Safeguarding of the Intangible Cultural Heritage, thông qua tại kỳ họp thứ 32 Đại hội đồng UNESCO, Paris.', url: 'https://ich.unesco.org/en/convention' },
    { id: 'vh-vnn-unesco', kind: 'news', cite: `VietNamNet, "Vietnam's UNESCO-recognised intangible cultural heritage" (năm ghi danh nhã nhạc, quan họ, ca trù, đờn ca tài tử, thờ Mẫu).`, url: 'https://vietnamnet.vn/en/vietnams-unesco-recognised-intangible-cultural-heritage-E217306.html' },
    { id: 'vh-unesco-nhanhac', kind: 'museum', cite: 'UNESCO Intangible Cultural Heritage, "Nha Nhac, Vietnamese court music", tuyên bố năm 2003, ghi vào Danh sách đại diện năm 2008 (3.COM).', url: 'https://ich.unesco.org/en/RL/nha-nhac-vietnamese-court-music-00074?RL=00074' },
    { id: 'vh-vufo-nhanhac', kind: 'news', cite: 'TTXVN, đăng trên VUFO (11/11/2023), "Ancient Vietnamese royal court music gains global recognition over time".', url: 'https://vufo.org.vn/Ancient-Vietnamese-royal-court-music-gains-global-recognition-over-time-09-53202.html?lang=en' },
    { id: 'vh-plvn-duyetthi', kind: 'news', cite: 'Khắc Dũng (28/1/2011), "Nhã nhạc Cung đình Huế nhìn từ nhà hát Duyệt Thị Đường (tiếp theo)", Báo Pháp luật Việt Nam.', url: 'https://baophapluat.vn/nha-nhac-cung-dinh-hue-nhin-tu-nha-hat-duyet-thi-duong-tiep-theo-post128368.html' },
    { id: 'vh-vnat-duyetthi', kind: 'museum', cite: 'Tổng cục Du lịch Việt Nam, "Duyet Thi Duong: The Royal Ancient Theatre in the remains of the Hue Citadel".', url: 'https://vietnamtourism.vn/en/index.php/news/items/5137' },
    { id: 'vh-unesco-catru', kind: 'museum', cite: 'UNESCO Intangible Cultural Heritage, "Ca trù singing", ghi vào Danh sách cần bảo vệ khẩn cấp năm 2009 (4.COM).', url: 'https://ich.unesco.org/en/RL/00309' },
    { id: 'vh-nd-catru', kind: 'news', cite: 'Báo Nhân Dân điện tử (3/2/2006), "Hát ả đào và nỗi oan của các cô đầu xưa".', url: 'https://nhandan.vn/hat-a-dao-va-noi-oan-cua-cac-co-dau-xua-post439109.html' },
    { id: 'vh-ddk-lokhe', kind: 'news', cite: 'Minh Phúc (14/10/2017), "Lỗ Khê: mạch nguồn ca trù vẫn chảy", Báo Đại Đoàn Kết.', url: 'https://daidoanket.vn/lo-khe-mach-nguon-ca-tru-van-chay-10085517.html' },
    { id: 'vh-plvn-lokhe', kind: 'news', cite: 'Nhật Thu (25/1/2017), "Về Lỗ Khê, nhớ câu ca trù bên bếp lửa luộc bánh", Báo Pháp luật Việt Nam.', url: 'https://baophapluat.vn/ve-lo-khe-nho-cau-ca-tru-ben-bep-lua-luoc-banh-post237771.html' },
    { id: 'vh-unesco-quanho', kind: 'museum', cite: 'UNESCO Intangible Cultural Heritage, "Quan Họ Bắc Ninh folk songs", ghi vào Danh sách đại diện năm 2009 (4.COM).', url: 'https://ich.unesco.org/en/RL/quan-h-bc-ninh-folk-songs-00183' },
    { id: 'vh-bcp-quanho', kind: 'news', cite: 'Cổng Thông tin điện tử Chính phủ, bản tiếng Anh (1/2/2011), "Values of Quan ho Bac Ninh folk songs".', url: 'https://en.baochinhphu.vn/print/values-of-quan-ho-bac-ninh-folk-songs-1119235.htm' },
    { id: 'vh-nd-langdiem', kind: 'news', cite: 'An Trân (15/3/2024), "Đến hội làng Diềm, nhớ về Thủy tổ quan họ", Báo Nhân Dân.', url: 'https://nhandan.vn/ocop/den-hoi-lang-diem-nho-ve-thuy-to-quan-ho-post800187.html' },
    { id: 'vh-unesco-taitu', kind: 'museum', cite: 'UNESCO Intangible Cultural Heritage, "Art of Đờn ca tài tử music and song in South Viet Nam", ghi vào Danh sách đại diện năm 2013 (8.COM).', url: 'https://ich.unesco.org/en/RL/art-of-don-ca-tai-tu-music-and-song-in-south-viet-nam-00733' },
    { id: 'vh-plvn-dacohoailang', kind: 'news', cite: 'Ngọc Mai (19/2/2023), "Hai câu chuyện ly kỳ quanh bản nhạc Dạ cổ hoài lang", Báo Pháp luật Việt Nam.', url: 'https://baophapluat.vn/hai-cau-chuyen-ly-ky-quanh-ban-nhac-da-co-hoai-lang-post467185.html' },
    { id: 'vh-nd-baclieu', kind: 'news', cite: 'Vĩnh Đăng (28/7/2023), "Về quê hương Dạ cổ hoài lang", Báo Nhân Dân.', url: 'https://nhandan.vn/ve-que-huong-da-co-hoai-lang-post764391.html' },
    { id: 'vh-vns-baclieu', kind: 'news', cite: 'Việt Nam News, "Bạc Liêu to host festival to promote tài tử music" (Festival Dạ cổ hoài lang tại Khu lưu niệm nhạc sĩ Cao Văn Lầu).', url: 'https://vietnamnews.vn/life-style/1276945/bac-lieu-to-host-festival-to-promote-tai-tu-music.html' },
    { id: 'vh-wiki-caovanlau', kind: 'reference', cite: 'Wikipedia tiếng Anh, "Cao Văn Lầu" (nguồn phụ).', url: 'https://en.wikipedia.org/wiki/Cao_V%C4%83n_L%E1%BA%A7u' },
    { id: 'vh-unesco-mau', kind: 'museum', cite: 'UNESCO Intangible Cultural Heritage, "Practices related to the Viet beliefs in the Mother Goddesses of Three Realms", ghi vào Danh sách đại diện năm 2016 (11.COM).', url: 'https://ich.unesco.org/en/RL/practices-related-to-the-viet-beliefs-in-the-mother-goddesses-of-three-realms-01064?RL=01064' },
    { id: 'vh-thuat-mau', kind: 'paper', cite: 'Vũ Hồng Thuật (2020), "Current Practices Related to the Belief in the Mother Goddesses of Three Realms in Thanh Hoa Province Today", Social Sciences Information Review 14(3), Viện Hàn lâm Khoa học xã hội Việt Nam.', url: 'https://vjol.info.vn/ssirev/article/download/62037/52149' },
    { id: 'vh-vnplus-tienhuong', kind: 'news', cite: 'Vietnam Plus (TTXVN), "Tien Huong temple: A place to worship the Trinity of Mother Goddesses".', url: 'https://en.vietnamplus.vn/tien-huong-templea-place-to-worship-the-trinity-of-mother-goddesses/166622.amp' },
    { id: 'vh-nd-phuday', kind: 'news', cite: 'Báo Nhân Dân (23/11/2013), "Công nhận Lễ hội Phủ Dầy là Di sản văn hóa quốc gia".', url: 'https://nhandan.vn/post-189314.html' },
    { id: 'vh-unesco-dongho', kind: 'museum', cite: 'UNESCO Intangible Cultural Heritage, "Craft of making Đông Hồ Folk woodblock printings", ghi vào Danh sách cần bảo vệ khẩn cấp năm 2025 (20.COM).', url: 'https://ich.unesco.org/en/USL/art-of-dong-ho-folk-woodblock-printing-01737' },
    { id: 'vh-vns-dongho', kind: 'news', cite: 'Việt Nam News (12/2025), "Đông Hồ folk painting craft added to UNESCO\'s urgent safeguarding list".', url: 'https://vietnamnews.vn/life-style/1731504/dong-ho-folk-painting-craft-added-to-unesco-s-urgent-safeguarding-list.html' },
    { id: 'vh-tt-dongho', kind: 'news', cite: 'Theo Kinh Ngân (VTV), đăng trên Tuổi Trẻ (20/10/2008), "Thăm làng tranh Đông Hồ".', url: 'https://tuoitre.vn/tham-lang-tranh-dong-ho-284193.htm' },
    { id: 'vh-wiki-dongho', kind: 'reference', cite: 'Wikipedia tiếng Anh, "Đông Hồ painting" (nguồn phụ).', url: 'https://en.wikipedia.org/wiki/%C4%90%C3%B4ng_H%E1%BB%93_painting' },
    { id: 'vh-pth-aodai', kind: 'paper', cite: 'Phan Thanh Hải (2020), "Từ cải cách trang phục dưới thời Võ vương Nguyễn Phúc Khoát và vua Minh Mạng nghĩ đến tư tưởng thống nhất, tự chủ về văn hóa", Tạp chí Nghiên cứu và Phát triển, số 7(161).', url: 'https://vjol.info.vn/ncpt-hue/vi/article/view/54472' },
    { id: 'vh-bvh-aodaihue', kind: 'news', cite: 'Báo Văn Hóa (12/8/2024), "Tri thức may, mặc áo dài Huế trở thành Di sản văn hóa phi vật thể quốc gia".', url: 'https://baovanhoa.vn/van-hoa/tri-thuc-may-mac-ao-dai-hue-tro-thanh-di-san-van-hoa-phi-vat-the-quoc-gia-101422.html' },
    { id: 'vh-saigoneer-lemur', kind: 'news', cite: 'Linh Pham (11/2/2022), "The Wall, a Costume, and a Nation\'s Identity: How the First Áo Dài Came to Be", Saigoneer.', url: 'https://saigoneer.com/saigon-culture/20901-the-wall,-a-costume,-and-a-nation-s-identity-how-the-first-áo-dài-came-to-be' },
    { id: 'vh-vns-lemur', kind: 'news', cite: 'Trần Hoàng Nam (6/1/2019), "Book exploring modern áo dài published", Việt Nam News.', url: 'https://vietnamnews.vn/sunday/features/482405/book-exploring-modern-ao-dai-published.html' },
    { id: 'vh-wiki-aodai', kind: 'reference', cite: 'Wikipedia tiếng Anh, "Áo dài", mục lịch sử (nguồn phụ).', url: 'https://en.wikipedia.org/wiki/%C3%81o_d%C3%A0i' },
    { id: 'vh-brit-roinuoc', kind: 'reference', cite: 'Encyclopaedia Britannica, "mua roi nuoc" (water puppetry).', url: 'https://www.britannica.com/art/mua-roi-nuoc' },
    { id: 'vh-unima-roinuoc', kind: 'reference', cite: 'UNIMA, World Encyclopedia of Puppetry Arts, mục "Vietnam" về múa rối nước.', url: 'https://wepa.unima.org/en/?p=5804' },
    { id: 'vh-nd-chuathay', kind: 'news', cite: 'Nguyễn Quang Hưng (17/2/2015), "Giấc mơ mùa xuân mặt nước", Báo Nhân Dân.', url: 'https://nhandan.vn/giac-mo-mua-xuan-mat-nuoc-post225723.html' },
    { id: 'vh-bqt-langra', kind: 'news', cite: 'Phương Thảo, Hương Giang (12/4/2025), "Về đất tổ của nghề rối nước", Báo Thế giới và Việt Nam (Báo Quốc tế).', url: 'https://baoquocte.vn/ve-dat-to-cua-nghe-roi-nuoc-310719.html&mobile=yes&amp=1' },
    { id: 'vh-wiki-chuathay', kind: 'reference', cite: 'Wikipedia tiếng Anh, "Thầy Temple" (tọa độ, niên đại Từ Đạo Hạnh; nguồn phụ).', url: 'https://en.wikipedia.org/wiki/Th%E1%BA%A7y_Temple' },
    { id: 'vh-brit-versailles', kind: 'reference', cite: 'Encyclopaedia Britannica, "Treaty of Versailles (1919)".', url: 'https://www.britannica.com/event/Treaty-of-Versailles-1919' },
  ],
  hooks: {
    'mua-roi-nuoc-thuy-dinh-chua-thay': l(
      `Chùa Thầy thờ ông tổ của nghề rối nước, nhưng người xuống ao diễn trò xưa kia lại là dân một làng khác.`,
      `Thầy pagoda honours the founder of water puppetry, yet the people who waded into its pond to perform came from another village.`,
    ),
    'ca-tru-lang-lo-khe': l(
      `Năm 1938, riêng ngoại ô Hà Nội đã có 216 nhà hát cô đầu; nửa thế kỷ sau, ca trù phải hồi sinh từ một câu lạc bộ làng.`,
      `In 1938 the outskirts of Hanoi alone had 216 singing houses; half a century later ca trù had to be revived from a village club.`,
    ),
    'nha-nhac-va-duyet-thi-duong': l(
      `Sau năm 1945, nhã nhạc cung đình được giữ lại nhờ tiền túi của một bà hoàng thái hậu.`,
      `After 1945, the music of the Huế court survived partly on the private purse of a former queen mother.`,
    ),
    'tranh-dan-gian-dong-ho': l(
      `Màu trắng lấp lánh trên tranh Đông Hồ không phải sơn mà là bột vỏ sò điệp nghiền mịn.`,
      `The sparkling white of Đông Hồ prints is not paint but finely ground scallop shell.`,
    ),
    'tho-mau-tam-phu-phu-day': l(
      `Vị Mẫu được tôn kính nhất của người Việt, theo truyền thuyết, là một nàng tiên giáng trần, sống như người thường rồi đi tu.`,
      `The most revered of Vietnam's Mother Goddesses was, by legend, a fairy who came down to earth, lived as a human and became a nun.`,
    ),
    'quan-ho-bac-ninh-lang-diem': l(
      `Quan họ hát về tình yêu, nhưng tục lệ lại cấm người hát lấy chính bạn hát của mình.`,
      `Quan họ songs are about love, yet custom forbids singers to marry their own singing partners.`,
    ),
    'ao-dai-tu-1744-den-le-mur': l(
      `Chiếc áo dài tân thời đầu tiên ra mắt công chúng trên trang báo, ở số 90 của tờ Phong Hóa năm 1934.`,
      `The first modern áo dài made its debut on paper, in issue 90 of the newspaper Phong Hóa in 1934.`,
    ),
    'don-ca-tai-tu-da-co-hoai-lang': l(
      `Điệu vọng cổ của cải lương bắt đầu từ một bài hát viết trong một đêm, khi người nhạc sĩ phải xa vợ.`,
      `The vọng cổ tune at the heart of cải lương began as a song written in a single night by a musician parted from his wife.`,
    ),
  },
  world: [
    {
      text: l(
        `Ngày 28 tháng 6 năm 1919, cùng năm bài Dạ cổ hoài lang nổi danh ở Nam Bộ, Hòa ước Versailles được ký tại Điện Versailles, khép lại Thế chiến thứ nhất.`,
        `On 28 June 1919, the year Dạ cổ hoài lang became famous in southern Vietnam, the Treaty of Versailles was signed at the Palace of Versailles, formally ending the First World War.`,
      ),
      source: 'vh-brit-versailles',
    },
    {
      text: l(
        `Ngày 17 tháng 10 năm 2003, chỉ ba tuần trước khi nhã nhạc Huế được công nhận, Đại hội đồng UNESCO ở Paris thông qua Công ước về bảo vệ di sản văn hóa phi vật thể.`,
        `On 17 October 2003, three weeks before Huế court music was proclaimed, UNESCO's General Conference in Paris adopted the Convention for the Safeguarding of the Intangible Cultural Heritage.`,
      ),
      source: 'vh-unesco-convention',
    },
  ],
  quiz: [
    {
      q: l(
        `Nghệ thuật nào dưới đây nằm trong Danh sách di sản cần bảo vệ khẩn cấp của UNESCO?`,
        `Which of these arts is on UNESCO's List of Intangible Cultural Heritage in Need of Urgent Safeguarding?`,
      ),
      options: [l('Ca trù', 'Ca trù'), l('Quan họ Bắc Ninh', 'Quan họ Bắc Ninh'), l('Đờn ca tài tử', 'Đờn ca tài tử')],
      answer: 0,
      why: l(
        `Ca trù được ghi vào danh sách cần bảo vệ khẩn cấp năm 2009, vì nghệ nhân ngày càng ít và già đi. Quan họ (2009) và đờn ca tài tử (2013) nằm ở Danh sách đại diện. Trong chuyên đề này, tranh Đông Hồ cũng thuộc diện khẩn cấp từ năm 2025.`,
        `Ca trù was placed on the urgent list in 2009 because its practitioners are few and ageing. Quan họ (2009) and đờn ca tài tử (2013) are on the Representative List. Đông Hồ printing, since 2025, is the other element in this topic on the urgent list.`,
      ),
    },
    {
      q: l(
        `Ai là người giới thiệu mẫu áo dài tân thời trên báo Phong Hóa năm 1934?`,
        `Who introduced the modern áo dài in the newspaper Phong Hóa in 1934?`,
      ),
      options: [l('Chúa Nguyễn Phúc Khoát', 'Lord Nguyễn Phúc Khoát'), l('Họa sĩ Nguyễn Cát Tường', 'The painter Nguyễn Cát Tường'), l('Nhạc sĩ Cao Văn Lầu', 'The composer Cao Văn Lầu')],
      answer: 1,
      why: l(
        `Nguyễn Cát Tường, tên Pháp là Le Mur, đăng mẫu áo trên số 90 báo Phong Hóa ngày 23 tháng 3 năm 1934. Nguyễn Phúc Khoát là người cải cách y phục năm 1744, khai sinh áo ngũ thân, tiền thân của áo dài.`,
        `Nguyễn Cát Tường, known in French as Le Mur, published the design in issue 90 of Phong Hóa on 23 March 1934. Nguyễn Phúc Khoát was the lord whose 1744 dress reform created the five-panel gown, the áo dài's forerunner.`,
      ),
    },
    {
      q: l(
        `Theo tục lệ quan họ, người hát không được làm gì với bạn hát của mình?`,
        `By quan họ custom, what may singers not do with their singing partners?`,
      ),
      options: [l('Hát đối đáp ở sân đình', 'Sing in exchange at the communal hall'), l('Lấy nhau làm vợ chồng', 'Marry each other'), l('Hát bài giã bạn khi chia tay', 'Sing farewell songs when parting')],
      answer: 1,
      why: l(
        `UNESCO ghi rằng tục lệ cấm người hát quan họ lấy bạn hát của mình. Quan họ trước hết là mối dây kết nghĩa giữa các làng, nên hát đối đáp và hát giã bạn đều là việc bình thường của một canh hát.`,
        `UNESCO records that custom forbids quan họ singers to marry their singing partners. Quan họ is above all a bond between twinned villages, so singing in exchange and singing farewell songs are normal parts of a session.`,
      ),
    },
  ],
  badge: l('Người giữ hồn di sản', 'Keeper of living heritage'),
};

export default chapter;
