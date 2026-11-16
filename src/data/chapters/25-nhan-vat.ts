import { l, type Chapter } from '../types';

const chapter: Chapter = {
  order: 25,
  period: {
    slug: 'nhan-vat',
    name: l('Những nhân vật lớn', 'Great figures'),
    range: l('Thế kỷ 14 - thế kỷ 21', '14th - 21st century'),
    start: l('Thế kỷ 14', '14th century'),
    color: '#ff9a5c',
    view: 'all',
    theme: true,
    question: l(
      `Ngoài các vua và các trận đánh lớn, những thầy thuốc, nhà nho, nhà thơ và người cầm quân nào đã để lại dấu ấn lâu dài trong cách người Việt chữa bệnh, học hành, viết văn và giữ nước, và vì sao đến nay người ta vẫn về quê họ thắp hương?`,
      `Beyond the kings and the great battles, which physicians, scholars, poets and commanders left a lasting mark on how Vietnamese people heal, study, write and defend their country, and why do people still travel to their home villages to burn incense for them today?`,
    ),
    summary: l(
      `Chuyên đề này chọn bảy người chưa có mục riêng ở các thời kỳ khác: hai thầy thuốc Tuệ Tĩnh và Hải Thượng Lãn Ông, hai nhà nho Nguyễn Bỉnh Khiêm và Lê Quý Đôn, nhà thơ mù Nguyễn Đình Chiểu, người đốt tàu Pháp Nguyễn Trung Trực và Đại tướng Võ Nguyên Giáp. Mỗi người gắn với một ngôi đền, khu mộ hay khu lưu niệm cụ thể trên bản đồ.`,
      `This topic picks seven people who do not yet have their own entry in the period chapters: two physicians, Tuệ Tĩnh and Hải Thượng Lãn Ông; two Confucian scholars, Nguyễn Bỉnh Khiêm and Lê Quý Đôn; the blind poet Nguyễn Đình Chiểu; Nguyễn Trung Trực, who burned a French warship; and General Võ Nguyên Giáp. Each is tied to a particular temple, tomb or memorial on the map.`,
    ),
    detail: [
      l(
        `Nhiều nhân vật lớn khác đã có mục riêng trong các chương theo thời kỳ: Ngô Quyền ở chương Tự chủ, Lý Thường Kiệt ở chương Nhà Lý, Trần Hưng Đạo và Chu Văn An ở chương Nhà Trần, Lê Lợi, Nguyễn Trãi và Lê Thánh Tông ở các chương Hồ - Minh và Lê sơ, Quang Trung ở chương Tây Sơn, Nguyễn Du ở chương Nhà Nguyễn, Phan Bội Châu và Phan Châu Trinh ở chương Pháp thuộc, Hồ Chí Minh ở chương 1945 - 1975. Chuyên đề này không kể lại họ.`,
        `Many other great figures already have entries in the period chapters: Ngô Quyền in the chapter on self-rule, Lý Thường Kiệt in the Lý chapter, Trần Hưng Đạo and Chu Văn An in the Trần chapter, Lê Lợi, Nguyễn Trãi and Lê Thánh Tông in the Hồ - Ming and Early Lê chapters, Quang Trung in the Tây Sơn chapter, Nguyễn Du in the Nguyễn chapter, Phan Bội Châu and Phan Châu Trinh in the French colonial chapter, and Hồ Chí Minh in the 1945 - 1975 chapter. This topic does not retell their stories.`,
      ),
      l(
        `Bảy người được chọn trải dài gần sáu thế kỷ, từ Tuệ Tĩnh sinh năm 1330 đến Võ Nguyên Giáp mất năm 2013. Ba người trong số đó đã được UNESCO vinh danh qua các nghị quyết kỷ niệm ngày sinh: Nguyễn Đình Chiểu năm 2021, Hải Thượng Lãn Ông năm 2023 và Lê Quý Đôn tại kỳ họp thứ 43. Hải Phòng đang vận động để Nguyễn Bỉnh Khiêm cũng được vinh danh như vậy.`,
        `The seven span nearly six centuries, from Tuệ Tĩnh, born in 1330, to Võ Nguyên Giáp, who died in 2013. Three of them have been honoured by UNESCO through resolutions marking their birth anniversaries: Nguyễn Đình Chiểu in 2021, Hải Thượng Lãn Ông in 2023 and Lê Quý Đôn at the 43rd General Conference. Hải Phòng is campaigning for the same recognition for Nguyễn Bỉnh Khiêm.`,
      ),
      l(
        `Điểm chung của họ là nơi thờ vẫn sống. Đền Trạng Trình mở hội mỗi năm, lễ hội đình Nguyễn Trung Trực ở Rạch Giá là di sản văn hóa phi vật thể quốc gia, khu mộ Hải Thượng Lãn Ông được xếp hạng di tích quốc gia đặc biệt năm 2024, và lễ kỷ niệm 300 năm ngày sinh Lê Quý Đôn năm 2026 thu hút khoảng 30.000 người.`,
        `What they share is that their places of worship are still alive. The Trạng Trình temple holds a festival every year, the festival of the Nguyễn Trung Trực communal temple in Rạch Giá is national intangible heritage, Hải Thượng Lãn Ông's tomb was ranked a special national monument in 2024, and the 300th anniversary of Lê Quý Đôn's birth in 2026 drew about 30,000 people.`,
      ),
    ],
    scholarly: [
      l(
        `Mức chứng cứ về bảy người rất khác nhau. Với Tuệ Tĩnh, gần như mọi chi tiết đều đến từ truyền thống làng và các bản in đời sau; với Lê Quý Đôn và Lê Hữu Trác, chính tác phẩm của họ còn lại và tự kể về đời mình; với Võ Nguyên Giáp, có hồ sơ nhà nước và hồi ký. Mỗi mục ghi rõ chi tiết nào do sử chép, chi tiết nào là truyền thuyết hay lời truyền lại.`,
        `The quality of evidence for the seven varies widely. For Tuệ Tĩnh almost every detail comes from village tradition and later printed editions; for Lê Quý Đôn and Lê Hữu Trác their own works survive and tell of their lives; for Võ Nguyên Giáp there are state records and memoirs. Each entry says which details come from the record and which are legend or later tradition.`,
      ),
      l(
        `Nhiều niên đại vẫn còn lệch giữa các nguồn: năm sinh của Lê Hữu Trác được ghi là 1720 hoặc 1724, năm sinh Nguyễn Trung Trực là 1837 hoặc 1838, còn năm UNESCO vinh danh Nguyễn Đình Chiểu được ghi là 2021 theo kỳ họp hoặc 2022 theo năm kỷ niệm. Các con số như số tác phẩm của Lê Quý Đôn cũng khác nhau tùy cách đếm.`,
        `Several dates still differ between sources: Lê Hữu Trác's birth is given as 1720 or 1724, Nguyễn Trung Trực's as 1837 or 1838, and UNESCO's honouring of Nguyễn Đình Chiểu is dated 2021 by the session or 2022 by the anniversary year. Figures such as the number of Lê Quý Đôn's works also vary with how they are counted.`,
      ),
    ],
    sources: ['nvt-vnn-unesco7', 'nvt-vns-lqd-unesco', 'nvt-vov-lqd', 'nvt-dbnd-lho', 'nvt-tt-ntt'],
  },
  entries: [
    {
      slug: 'tue-tinh',
      period: 'nhan-vat',
      kind: 'figure',
      name: l('Tuệ Tĩnh, ông tổ thuốc Nam', 'Tuệ Tĩnh, father of Southern medicine'),
      date: l('Sinh năm 1330; sang nhà Minh năm 1385', 'Born 1330; sent to Ming China in 1385'),
      sort: 670,
      place: l('Đền Bia, thôn Văn Thai, xã Cẩm Văn cũ, Cẩm Giàng, Hải Phòng (trước thuộc Hải Dương)', 'Đền Bia temple, Văn Thai village, former Cẩm Văn commune, Cẩm Giàng, Hải Phòng (formerly Hải Dương)'),
      coord: [106.2536, 20.9778],
      evidence: ['chron', 'legend'],
      summary: l(
        `Tuệ Tĩnh, tên thật Nguyễn Bá Tĩnh, là thiền sư và thầy thuốc thế kỷ 14, người được coi là ông tổ của nghề thuốc Nam. Ông chủ trương dùng thuốc nước mình chữa bệnh cho người nước mình. Năm 1385 ông bị đưa sang nhà Minh và mất ở đó; tấm bia mộ chép từ đất khách là nguồn gốc của đền Bia ở quê ông.`,
        `Tuệ Tĩnh, born Nguyễn Bá Tĩnh, was a 14th-century Buddhist monk and physician regarded as the founder of Vietnamese herbal medicine. He held that the country's own plants should treat its own people. In 1385 he was sent to Ming China and died there; a copy of his gravestone brought home from abroad gave rise to the Đền Bia temple in his home district.`,
      ),
      detail: [
        l(
          `Theo Báo Nhân Dân, ông sinh năm 1330 ở làng Nghĩa Phú, Cẩm Giàng, mồ côi mẹ năm 6 tuổi và được các nhà sư nuôi dạy. Năm 22 tuổi ông đỗ Thái học sinh dưới triều Trần Dụ Tông nhưng không ra làm quan mà đi tu, lấy pháp hiệu Tuệ Tĩnh. Theo một tài liệu được báo này dẫn, trong khoảng 30 năm ở nông thôn ông dựng 24 ngôi chùa vừa để tu hành vừa để chữa bệnh.`,
          `According to Nhân Dân, he was born in 1330 in Nghĩa Phú village, Cẩm Giàng, lost his mother at six and was raised by monks. At 22 he passed the Thái học sinh examination under King Trần Dụ Tông but chose the monastery over office, taking the religious name Tuệ Tĩnh. One account cited by the paper says that in some 30 years in the countryside he built 24 pagodas that served both as places of worship and as clinics.`,
        ),
        l(
          `Tác phẩm gắn với tên ông là Nam dược thần hiệu, chia làm 10 khoa, và Hồng nghĩa giác tư y thư hai quyển, có phần viết bằng chữ Nôm. Bài "Phú thuốc Nam" kể 630 vị thuốc. Câu "Nam dược trị Nam nhân", nghĩa là thuốc Nam chữa bệnh cho người Nam, được coi là tư tưởng của ông. Nguyên tác các sách này không còn trọn vẹn.`,
          `The works attached to his name are the Nam dược thần hiệu (Miraculous Drugs of the South), in 10 sections, and the two-volume Hồng nghĩa giác tư y thư, partly in Nôm verse. A rhymed text on Southern drugs lists 630 remedies. The phrase "Nam dược trị Nam nhân", Southern medicine for Southern people, is taken as his guiding idea. None of these works survives complete in its original form.`,
        ),
        l(
          `Năm 1385, khi đã 55 tuổi, ông bị triều Trần đưa sang nhà Minh và giữ lại ở đó đến cuối đời. Tương truyền trên mộ ông có dòng chữ xin người nước Nam đưa hài cốt về. Cuối thế kỷ 17, tiến sĩ Nguyễn Danh Nho đi sứ, thấy mộ và mang bản chép bia về; dân làng lập đền Bia ở nơi tấm bia được tìm thấy. Đền Bia, đền Xưa và chùa Giám được xếp hạng di tích quốc gia đặc biệt ngày 25 tháng 12 năm 2017.`,
          `In 1385, at 55, he was sent by the Trần court to Ming China and kept there for the rest of his life. Tradition says his grave bore a plea for someone from the South to carry his bones home. In the late 17th century the doctoral graduate Nguyễn Danh Nho, on an embassy, found the grave and brought back a copy of the inscription; villagers built Đền Bia where the stone came to rest. Đền Bia, Đền Xưa and Giám pagoda were ranked a special national monument on 25 December 2017.`,
        ),
      ],
      scholarly: [
        l(
          `Thông tin về đời Tuệ Tĩnh rất ít, như chính Báo Nhân Dân thừa nhận, và hầu hết đến từ thần tích, truyền thống làng và các bản in đời sau. Các nguồn lệch nhau về nơi ông mất: Nhân Dân ghi chung là Trung Hoa, Báo Pháp luật Việt Nam ghi Giang Nam, còn Wikipedia tiếng Anh ghi Nam Kinh và năm mất khoảng 1389. Năm mất thực ra không được xác định.`,
          `Very little is known about Tuệ Tĩnh's life, as Nhân Dân itself admits, and most of it comes from temple legends, village tradition and later printed editions. Sources differ on where he died: Nhân Dân says simply China, Báo Pháp luật Việt Nam says Jiangnan, and English Wikipedia says Nanjing, with a death date of about 1389. In fact the year of his death is not established.`,
        ),
        l(
          `Câu chuyện tấm bia cũng có hai lớp. Báo Pháp luật Việt Nam kể thuyền chở bia bị lật ở chỗ giáp ranh hai làng Văn Thai và Nghĩa Phú, dân thấy linh thiêng nên lập đền; Wikipedia lại ghi đền được dựng giữa thế kỷ 19. Tấm bia hiện cao khoảng 80 cm, không còn đọc được chữ nào. Việc gán trọn hai bộ sách cho Tuệ Tĩnh cũng dựa trên truyền bản đời sau.`,
          `The story of the stele also has two layers. Báo Pháp luật Việt Nam says the boat carrying it capsized at the boundary of Văn Thai and Nghĩa Phú villages, and villagers built the temple on the spot they saw as sacred; Wikipedia says the temple was built in the mid-19th century. The stele, about 80 cm tall, is now illegible. Attributing both books wholly to Tuệ Tĩnh also rests on later textual transmission.`,
        ),
      ],
      sources: ['nvt-nd-tt', 'nvt-bpl-tt-cum', 'nvt-bpl-denbia', 'nvt-wiki-tt'],
    },
    {
      slug: 'nguyen-binh-khiem',
      period: 'nhan-vat',
      kind: 'figure',
      name: l('Nguyễn Bỉnh Khiêm (Trạng Trình)', 'Nguyễn Bỉnh Khiêm (Trạng Trình)'),
      date: l('1491 - 1585', '1491 - 1585'),
      sort: 509,
      place: l('Khu di tích đền thờ Trạng Trình, làng Trung Am, xã Nguyễn Bỉnh Khiêm, Hải Phòng', 'Trạng Trình temple complex, Trung Am village, Nguyễn Bỉnh Khiêm commune, Hải Phòng'),
      coord: [106.5313, 20.6609],
      evidence: ['chron', 'legend'],
      summary: l(
        `Nguyễn Bỉnh Khiêm đỗ trạng nguyên năm 1535 dưới triều Mạc khi đã 45 tuổi, làm quan khoảng tám năm rồi dâng sớ xin chém 18 kẻ lộng thần. Vua không nghe, ông về quê dựng am Bạch Vân dạy học. Dân gian gọi ông là Trạng Trình và gán cho ông nhiều lời sấm, nên ông vừa là nhà thơ, nhà giáo vừa là một nhân vật huyền thoại.`,
        `Nguyễn Bỉnh Khiêm came first in the 1535 palace examination under the Mạc at the age of 45, served about eight years, then asked the king to execute 18 corrupt courtiers. When the king refused, he went home and founded the Bạch Vân hermitage school. Popular tradition calls him Trạng Trình and credits him with many prophecies, so he is at once poet, teacher and legend.`,
      ),
      detail: [
        l(
          `Ông sinh năm 1491 ở làng Trung Am, huyện Vĩnh Lại, phủ Hạ Hồng, nay thuộc Hải Phòng. Theo Báo Pháp luật Việt Nam, khoa Ất Mùi năm 1535 ông đỗ Hội nguyên rồi Trạng nguyên, sau đó giữ các chức Đông các hiệu thư, Tả thị lang bộ Lại kiêm Đông các Đại học sĩ, tước Trình Tuyên hầu. Triều Mạc khi ấy đang lục đục, như đã kể ở chương Mạc, Trịnh, Nguyễn.`,
          `He was born in 1491 in Trung Am village, Vĩnh Lại district, Hạ Hồng prefecture, now part of Hải Phòng. According to Báo Pháp luật Việt Nam, in the examination of 1535 he came first in both the metropolitan and the palace rounds, then served as an academician of the Eastern Hall and deputy minister of personnel, with the title Marquis of Trình Tuyên. The Mạc court was already troubled, as told in the Mạc, Trịnh and Nguyễn chapter.`,
        ),
        l(
          `Sau khoảng tám năm làm quan, ông dâng sớ vạch tội 18 lộng thần nhưng không được chấp thuận. Mùa thu năm 1542 ông từ quan về quê, dựng am Bạch Vân mở trường dạy học và dựng quán Trung Tân bên sông Tuyết Giang. Tập thơ tiêu biểu của ông là Bạch Vân thi tập. Ông mất năm 1585, thọ 95 tuổi, được nhà Mạc truy tặng tước Trình quốc công, vì vậy dân gọi là Trạng Trình.`,
          `After about eight years in office he submitted a memorial denouncing 18 courtiers, which was rejected. In autumn 1542 he resigned, built the Bạch Vân hermitage to teach, and put up the Trung Tân inn on the Tuyết Giang river. His best-known collection is the Bạch Vân thi tập (Poems of the White Cloud). He died in 1585 at 95 and was posthumously made Duke of Trình by the Mạc, hence the name Trạng Trình.`,
        ),
        l(
          `Năm 1586 vua Mạc cấp tiền và ruộng để lập đền thờ ông; đền được tu sửa các năm 1735, 1833 và 1928. Am Bạch Vân được phục dựng năm 2004. Khu di tích được xếp hạng quốc gia đặc biệt năm 2015, lễ hội đền là di sản văn hóa phi vật thể quốc gia từ năm 2019. Ngày 16 tháng 1 năm 2026, lễ hội kỷ niệm 440 năm ngày mất của ông được tổ chức tại đây.`,
          `In 1586 the Mạc king granted money and land to build a temple to him; it was restored in 1735, 1833 and 1928. The Bạch Vân hermitage was rebuilt in 2004. The complex was ranked a special national monument in 2015, and its festival has been national intangible heritage since 2019. On 16 January 2026 a festival marking the 440th anniversary of his death was held there.`,
        ),
      ],
      scholarly: [
        l(
          `Phần chắc chắn nhất về ông là khoa thi năm 1535, các chức quan và việc từ quan năm 1542, được nhiều nguồn chép thống nhất. Danh sách 18 người trong tờ sớ không còn, giống trường hợp Thất trảm sớ của Chu Văn An. Các bài báo được dẫn ở đây không nêu số bài thơ trong Bạch Vân thi tập nên trang này không đưa con số.`,
          `The firmest facts are the 1535 examination, his offices and his resignation in 1542, which the sources report consistently. The list of 18 names in his memorial does not survive, much like Chu Văn An's Seven Beheadings memorial. The articles cited here give no count of the poems in the Bạch Vân collection, so this page gives none.`,
        ),
        l(
          `Các lời "sấm Trạng" là lớp truyền thuyết dày nhất quanh ông. Câu "Hoành Sơn nhất đái khả dĩ dung thân", tương truyền là lời ông khuyên Nguyễn Hoàng tìm đất phía nam dãy Hoành Sơn, được báo chí nhắc như một ví dụ điển hình. Không có văn bản đương thời nào xác nhận những lời ấy; chúng cho thấy hậu thế coi ông là người nhìn xa, hơn là ghi chép về lời ông nói.`,
          `The "Trạng prophecies" are the thickest layer of legend around him. The line "Hoành Sơn nhất đái khả dĩ dung thân", said to be his advice to Nguyễn Hoàng to seek refuge south of the Hoành Sơn range, is cited in the press as a typical example. No contemporary text confirms these sayings; they show that later generations saw him as far-sighted, rather than recording what he actually said.`,
        ),
      ],
      sources: ['nvt-bpl-nbk', 'nvt-plo-nbk', 'nvt-nd-nbk', 'nvt-mia-nbk'],
    },
    {
      slug: 'hai-thuong-lan-ong-le-huu-trac',
      period: 'nhan-vat',
      kind: 'figure',
      name: l('Hải Thượng Lãn Ông Lê Hữu Trác', 'Hải Thượng Lãn Ông (Lê Hữu Trác)'),
      date: l('1724 - 1791', '1724 - 1791'),
      sort: 276,
      place: l('Mộ và khu lưu niệm Lê Hữu Trác, núi Minh Tự bên sông Ngàn Phố, Hương Sơn, Hà Tĩnh', 'Tomb and memorial of Lê Hữu Trác, Minh Tự mountain by the Ngàn Phố river, Hương Sơn, Hà Tĩnh'),
      coord: [105.4339, 18.5295],
      evidence: ['chron', 'arch'],
      summary: l(
        `Lê Hữu Trác, hiệu Hải Thượng Lãn Ông, là danh y lớn nhất của Việt Nam thế kỷ 18. Ông bỏ đường quan chức, về quê mẹ ở Hương Sơn chữa bệnh, trồng thuốc, dạy học và viết bộ Hải Thượng y tông tâm lĩnh gồm 28 tập, 66 quyển. UNESCO vinh danh ông năm 2023, và năm 2024 mộ cùng khu lưu niệm của ông thành di tích quốc gia đặc biệt.`,
        `Lê Hữu Trác, known as Hải Thượng Lãn Ông, the Lazy Old Man of Hải Thượng, was Vietnam's greatest physician of the 18th century. He left official life for his mother's village in Hương Sơn, where he treated patients, grew herbs, taught and wrote the Hải Thượng y tông tâm lĩnh in 28 parts and 66 books. UNESCO honoured him in 2023, and in 2024 his tomb and memorial became a special national monument.`,
      ),
      detail: [
        l(
          `Ông sinh năm 1724 ở làng Liêu Xá, huyện Đường Hào, Hải Dương, nay thuộc Hưng Yên, là con thứ bảy của tiến sĩ Lê Hữu Mưu và bà Bùi Thị Thưởng, người làng Bàu Thượng, Hương Sơn. Theo Wikipedia, ông đi lính khoảng năm 1740 và bỏ binh nghiệp năm 1746 sau khi người anh cả mất, về Hương Sơn nuôi mẹ già. Báo Đại biểu Nhân dân ghi ông rời con đường làm quan năm 26 tuổi.`,
          `He was born in 1724 in Liêu Xá village, Đường Hào district, Hải Dương, now in Hưng Yên, the seventh son of the doctoral graduate Lê Hữu Mưu and of Bùi Thị Thưởng from Bàu Thượng village in Hương Sơn. According to Wikipedia, he joined the army around 1740 and left it in 1746 after his eldest brother died, moving to Hương Sơn to care for his elderly mother. Đại biểu Nhân dân says he gave up an official career at 26.`,
        ),
        l(
          `Ở Bàu Thượng hơn 40 năm, ông vừa chữa bệnh vừa soạn sách. Bộ Hải Thượng y tông tâm lĩnh được khắc in năm 1885, gồm 28 tập, 66 quyển; ít nhất 8 tập đã được dịch ra tiếng Pháp từ những năm 1950. Ông nêu tám đức của người thầy thuốc là nhân ái, sáng suốt, đức độ, hiểu biết, rộng lượng, thành thực, khiêm tốn và cần cù, và dạy rằng thầy thuốc chỉ lấy việc cứu người làm nhiệm vụ, không cầu lợi kể công.`,
          `Over more than 40 years in Bàu Thượng he both practised and wrote. The Hải Thượng y tông tâm lĩnh was printed from woodblocks in 1885 in 28 parts and 66 books; at least eight parts were translated into French from the 1950s. He listed eight virtues of a physician: compassion, clear judgement, integrity, knowledge, generosity, honesty, modesty and diligence, and taught that a doctor's only task is to save lives, not to seek profit or credit.`,
        ),
        l(
          `Ngày 12 tháng Giêng năm Cảnh Hưng thứ 43 (1782), chúa Trịnh triệu ông về kinh chữa bệnh cho nhà chúa; ông ghi lại chuyến đi trong Thượng kinh ký sự, một tập ký sắc sảo về phủ chúa. Ông mất ngày 15 tháng Giêng năm Tân Hợi (1791), được chôn ở núi Minh Tự bên sông Ngàn Phố, dân quen gọi là núi Cánh Diều. Mộ và khu lưu niệm được xếp hạng di tích quốc gia đặc biệt cuối năm 2024.`,
          `On the 12th day of the first lunar month of Cảnh Hưng 43 (1782) the Trịnh lord summoned him to the capital to treat his household; he recorded the journey in the Thượng kinh ký sự, a sharp-eyed account of life in the lord's palace. He died on the 15th day of the first lunar month of the Tân Hợi year (1791) and was buried on Minh Tự mountain by the Ngàn Phố river, locally called Kite Mountain. His tomb and memorial were ranked a special national monument in late 2024.`,
        ),
      ],
      scholarly: [
        l(
          `Năm sinh của ông từng được ghi là 1720. Trong quá trình làm hồ sơ UNESCO, giới nghiên cứu khẳng định năm 1724, và giáo sư Makoto Mayanagi cũng ghi 1724 - 1791. Wikipedia tiếng Anh vẫn để cả hai năm mà không giải thích. Đại hội đồng UNESCO lần thứ 42 thông qua nghị quyết vinh danh ông ngày 21 tháng 11 năm 2023, sau quyết định 216 EX của Hội đồng chấp hành.`,
          `His birth year was long given as 1720. While preparing the UNESCO dossier, researchers established 1724, and Professor Makoto Mayanagi also gives 1724 - 1791. English Wikipedia still carries both years without reconciling them. UNESCO's 42nd General Conference adopted the resolution honouring him on 21 November 2023, following Executive Board decision 216 EX.`,
        ),
        l(
          `Các nguồn chép tên mẹ ông là Bùi Thị Thường hoặc Bùi Thị Thưởng, và tên xã nơi có mộ là Quang Diệm, Sơn Trung hay Tĩnh Diệm tùy bài. Chuyện người được ông chữa năm 1782 cũng được kể khác nhau: Wikipedia nói là thế tử theo lệnh chúa Trịnh Sâm, Báo Nhân Dân nói chung là nhà chúa. Tên hiệu Hải Thượng có thể ghép từ Hải Dương và Thượng Hồng, hoặc lấy từ làng Bàu Thượng.`,
          `Sources give his mother's name as Bùi Thị Thường or Bùi Thị Thưởng, and the commune of the tomb as Quang Diệm, Sơn Trung or Tĩnh Diệm depending on the article. The patient of 1782 is also described differently: Wikipedia says the crown prince, on lord Trịnh Sâm's order, while Nhân Dân says simply the lord's household. The name Hải Thượng may combine Hải Dương and Thượng Hồng, or come from Bàu Thượng village.`,
        ),
      ],
      sources: ['nvt-dbnd-lho', 'nvt-nd-lho', 'nvt-hatinh-lho-unesco', 'nvt-nd-lho300', 'nvt-vnn-unesco7'],
    },
    {
      slug: 'le-quy-don',
      period: 'nhan-vat',
      kind: 'figure',
      name: l('Lê Quý Đôn, nhà bác học thế kỷ 18', 'Lê Quý Đôn, 18th-century polymath'),
      date: l('1726 - 1784', '1726 - 1784'),
      sort: 274,
      place: l('Khu lưu niệm Lê Quý Đôn, thôn Đồng Phú, xã Lê Quý Đôn, Hưng Yên (trước thuộc Hưng Hà, Thái Bình)', 'Lê Quý Đôn Memorial, Đồng Phú village, Lê Quý Đôn commune, Hưng Yên (formerly Hưng Hà, Thái Bình)'),
      coord: [106.1875, 20.5468],
      evidence: ['chron'],
      summary: l(
        `Lê Quý Đôn đỗ đầu kỳ thi Đình năm 1752 với danh hiệu Bảng nhãn, làm quan hơn ba mươi năm dưới thời Lê trung hưng và để lại khoảng 40 bộ sách về sử, địa lý, triết học, nông học và thơ văn. Phủ biên tạp lục của ông là một trong những nguồn chính về Đàng Trong và đội Hoàng Sa. UNESCO vinh danh ông nhân 300 năm ngày sinh.`,
        `Lê Quý Đôn topped the palace examination of 1752 with the title Bảng nhãn, served more than thirty years under the Revival Lê and left some 40 works on history, geography, philosophy, agriculture and poetry. His Phủ biên tạp lục is one of the main sources on the southern Nguyễn realm and the Hoàng Sa company. UNESCO honoured him on the 300th anniversary of his birth.`,
      ),
      detail: [
        l(
          `Ông sinh ngày 2 tháng 8 năm 1726 ở làng Diên Hà, trấn Sơn Nam, tên lúc nhỏ là Lê Danh Phương, tự Doãn Hậu, hiệu Quế Đường. Năm 17 tuổi ông đỗ đầu thi Hương, 24 tuổi đỗ đầu thi Hội, 26 tuổi đỗ đầu thi Đình. Từ năm 1752 ông làm quan, từng giữ các chức Hiệp trấn Thuận Hóa và Công bộ Thượng thư; năm 1760 ông đi sứ sang nhà Thanh.`,
          `He was born on 2 August 1726 in Diên Hà village, Sơn Nam region, as Lê Danh Phương, with the courtesy name Doãn Hậu and the pen name Quế Đường. At 17 he came first in the provincial examination, at 24 first in the metropolitan examination and at 26 first in the palace examination. From 1752 he held office, serving among other posts as deputy governor of Thuận Hóa and minister of works; in 1760 he went on an embassy to the Qing court.`,
        ),
        l(
          `Các tác phẩm lớn của ông gồm Đại Việt thông sử 30 quyển, Quần thư khảo biện, Bắc sứ thông lục 4 quyển viết sau chuyến đi sứ, Toàn Việt thi lục 20 quyển, Vân đài loại ngữ, Phủ biên tạp lục 6 quyển năm 1776 và Kiến văn tiểu lục 12 quyển năm 1777. Phủ biên tạp lục chép đội Hoàng Sa, như đã kể ở chương Mạc, Trịnh, Nguyễn và chuyên đề Biển đảo. Ông mất ngày 11 tháng 6 năm 1784.`,
          `His major works include the 30-volume Đại Việt thông sử, the Quần thư khảo biện, the four-volume Bắc sứ thông lục written after his embassy, the 20-volume Toàn Việt thi lục, the Vân đài loại ngữ, the six-volume Phủ biên tạp lục of 1776 and the 12-volume Kiến văn tiểu lục of 1777. The Phủ biên tạp lục records the Hoàng Sa company, as told in the Mạc, Trịnh and Nguyễn chapter and the sea and islands topic. He died on 11 June 1784.`,
        ),
        l(
          `Khu lưu niệm ở quê ông rộng gần 9,7 ha, là di tích lịch sử văn hóa quốc gia từ năm 1986. Ở đây có nhà thờ họ do chính thân phụ ông dựng, đến nay gần 300 năm tuổi, mộ thân phụ Lê Trọng Thứ, hồ Lê Quý và một thư viện tư liệu về ông. Tối 31 tháng 7 năm 2026, lễ kỷ niệm 300 năm ngày sinh tại đây có khoảng 30.000 người dự.`,
          `The memorial in his home village covers nearly 9.7 hectares and has been a national historical and cultural monument since 1986. It contains the family ancestral house built by his father, now nearly 300 years old, the tomb of his father Lê Trọng Thứ, Lê Quý Lake and a library of material about him. On the evening of 31 July 2026 about 30,000 people attended the 300th anniversary ceremony there.`,
        ),
      ],
      scholarly: [
        l(
          `Số tác phẩm của ông được ghi khác nhau: Việt Nam News lúc viết "hơn 40", lúc viết "khoảng 40", tùy cách tính các tập thơ văn lẻ và sách chú giải. Cổng thông tin Hà Tĩnh ghi niên đại từng bộ, chẳng hạn Đại Việt thông sử soạn năm 1749 - 1753 và Bắc sứ thông lục năm 1763, lời tựa năm 1780. Việc ông được gọi là "nhà bác học" phản ánh độ rộng của các đề tài này.`,
          `The count of his works varies: Việt Nam News says "more than 40" in one article and "about 40" in another, depending on how loose poems and commentaries are counted. The Hà Tĩnh provincial portal dates individual works, for example the Đại Việt thông sử to 1749 - 1753 and the Bắc sứ thông lục to 1763, with a preface of 1780. Calling him a polymath reflects the sheer range of these subjects.`,
        ),
        l(
          `Với sử học, giá trị của Phủ biên tạp lục là ở chỗ người viết là một quan chức Đàng Ngoài từng giữ chức Hiệp trấn Thuận Hóa, tức là ghi chép ngay trên vùng đất trước đó do chúa Nguyễn cai quản. UNESCO thông qua nghị quyết vinh danh ông tại kỳ họp thứ 43 Đại hội đồng ở Samarkand, Uzbekistan.`,
          `For historians, the value of the Phủ biên tạp lục lies in its author being a northern official who served as deputy governor of Thuận Hóa, writing on the spot about land the Nguyễn lords had previously ruled. UNESCO adopted the resolution honouring him at the 43rd session of its General Conference in Samarkand, Uzbekistan.`,
        ),
      ],
      sources: ['nvt-vns-lqd-unesco', 'nvt-vns-lqd-memorial', 'nvt-hatinh-lqd', 'nvt-vov-lqd', 'nvt-wiki-lqd'],
    },
    {
      slug: 'nguyen-dinh-chieu',
      period: 'nhan-vat',
      kind: 'figure',
      name: l('Nguyễn Đình Chiểu, nhà thơ mù đất Nam Bộ', 'Nguyễn Đình Chiểu, the blind poet of the South'),
      date: l('1822 - 1888', '1822 - 1888'),
      sort: 178,
      place: l('Mộ và khu lưu niệm Nguyễn Đình Chiểu, xã An Đức cũ, Ba Tri, Vĩnh Long (trước thuộc Bến Tre)', 'Tomb and memorial of Nguyễn Đình Chiểu, former An Đức commune, Ba Tri, Vĩnh Long (formerly Bến Tre)'),
      coord: [106.5824, 10.0372],
      evidence: ['chron', 'arch'],
      summary: l(
        `Nguyễn Đình Chiểu bị mù từ tuổi hai mươi mấy nhưng vẫn trở thành một thầy giáo, thầy thuốc và nhà thơ lớn của Nam Bộ thế kỷ 19. Lục Vân Tiên của ông được xếp cạnh Truyện Kiều, còn Văn tế nghĩa sĩ Cần Giuộc khóc những nông dân đứng lên chống Pháp xâm lược. UNESCO vinh danh ông nhân 200 năm ngày sinh.`,
        `Nguyễn Đình Chiểu went blind in his twenties yet became a major teacher, healer and poet of 19th-century southern Vietnam. His verse novel Lục Vân Tiên ranks with the Tale of Kiều as one of the two best-loved Vietnamese verse tales, and his Funeral Oration for the Righteous Partisans of Cần Giuộc mourns the farmers who rose against the French invasion. UNESCO honoured him on the 200th anniversary of his birth.`,
      ),
      detail: [
        l(
          `Ông sinh ngày 1 tháng 7 năm 1822 ở làng Tân Thới, tỉnh Gia Định, nay thuộc quận 1, TP Hồ Chí Minh. Năm 1843 ông đỗ thi Hương ở trường Gia Định, rồi ra Huế chờ thi tiếp thì nghe tin mẹ mất. Trên đường về chịu tang, ông lâm bệnh và mù cả hai mắt; tương truyền vì khóc mẹ quá nhiều. Từ đó ông mở trường dạy học, học nghề thuốc và được dân gọi là cụ đồ Chiểu.`,
          `He was born on 1 July 1822 in Tân Thới village, Gia Định province, now District 1 of Hồ Chí Minh City. In 1843 he passed the provincial examination at Gia Định and went to Huế for the next round, where he learned that his mother had died. On the way home to mourn he fell ill and lost his sight in both eyes; tradition says he wept himself blind. He then opened a school, learned medicine and became known as Teacher Chiểu.`,
        ),
        l(
          `Lục Vân Tiên là truyện thơ Nôm dài 2.076 câu, viết trong những năm 1850, kể chàng trai giữ trọn nhân nghĩa qua hoạn nạn. Năm 1859 ông dời về Thanh Ba, Long An; năm 1861 ông viết Văn tế nghĩa sĩ Cần Giuộc. Khi Pháp chiếm Cần Giuộc, ông lánh về Ba Tri và sống ở đó đến cuối đời. Ở Ba Tri ông soạn Ngư Tiều y thuật vấn đáp dài 3.642 câu, một sách thuốc viết bằng thơ.`,
          `Lục Vân Tiên is a Nôm verse tale of 2,076 lines written in the 1850s about a young man who keeps faith with righteousness through every misfortune. In 1859 he moved to Thanh Ba in Long An; in 1861 he wrote the Funeral Oration for the Partisans of Cần Giuộc. When the French occupied Cần Giuộc he withdrew to Ba Tri, where he lived for the rest of his life. There he composed the Ngư Tiều y thuật vấn đáp, a medical text in 3,642 lines of verse.`,
        ),
        l(
          `Ông mất ngày 3 tháng 7 năm 1888 ở làng An Đức, Ba Tri, và được chôn ở ấp 3 An Đức. Khu mộ và khu lưu niệm nay là di tích quốc gia đặc biệt. Tối 30 tháng 6 năm 2022, lễ kỷ niệm 200 năm ngày sinh của ông được tổ chức tại đây, và trưởng đại diện UNESCO tại Việt Nam Christian Manhart trao nghị quyết vinh danh.`,
          `He died on 3 July 1888 in An Đức village, Ba Tri, and was buried in hamlet 3 of An Đức. The tomb and memorial are now a special national monument. On the evening of 30 June 2022 the 200th anniversary of his birth was celebrated there, and Christian Manhart, head of the UNESCO office in Viet Nam, presented the resolution honouring him.`,
        ),
      ],
      scholarly: [
        l(
          `Chuyện ông mù vì khóc mẹ là lời truyền; các nguồn ghi ông bị bệnh mắt trên đường từ Huế về. Bản Lục Vân Tiên chữ Nôm được Thư viện Quốc gia Việt Nam và Quỹ Bảo tồn chữ Nôm số hóa (ký hiệu R.403). Nhiều bản in khác nhau lưu hành ở Nam Kỳ, nên số câu của truyện có thể lệch chút ít giữa các bản.`,
          `The idea that he went blind from grief is tradition; the sources record an eye illness on the journey back from Huế. A Nôm copy of Lục Vân Tiên has been digitised by the National Library of Vietnam and the Vietnamese Nôm Preservation Foundation (shelf mark R.403). Many printed editions circulated in Cochinchina, so the line count can differ slightly between versions.`,
        ),
        l(
          `Các nguồn có chỗ sai lệch cần lưu ý. Một bài của Việt Nam News năm 2022 viết ông mất ở Cần Giuộc, trong khi chính các nguồn khác, gồm Báo Nhân Dân và Quỹ Bảo tồn chữ Nôm, đều ghi ông mất ở An Đức, Ba Tri, nơi có mộ. Nghị quyết UNESCO được thông qua tại kỳ họp thứ 41 tháng 11 năm 2021, cho năm kỷ niệm 2022.`,
          `Some errors in the sources need flagging. A 2022 Việt Nam News article says he died in Cần Giuộc, while other sources, including Nhân Dân and the Nôm Preservation Foundation, agree that he died in An Đức, Ba Tri, where his tomb is. The UNESCO resolution was adopted at the 41st General Conference in November 2021, for the anniversary year 2022.`,
        ),
      ],
      sources: ['nvt-nd-ndc-fr', 'nvt-vns-ndc', 'nvt-sggp-ndc', 'nvt-nom-lvt', 'nvt-vnn-unesco7'],
    },
    {
      slug: 'nguyen-trung-truc',
      period: 'nhan-vat',
      kind: 'figure',
      name: l('Nguyễn Trung Trực', 'Nguyễn Trung Trực'),
      date: l('1838 - 1868', '1838 - 1868'),
      sort: 162,
      place: l('Đình Nguyễn Trung Trực, 14 Nguyễn Công Trứ, Rạch Giá, An Giang (trước thuộc Kiên Giang)', 'Nguyễn Trung Trực temple, 14 Nguyễn Công Trứ street, Rạch Giá, An Giang (formerly Kiên Giang)'),
      coord: [105.0794, 10.0117],
      evidence: ['chron', 'legend'],
      summary: l(
        `Nguyễn Trung Trực là thủ lĩnh nghĩa quân Nam Kỳ chống Pháp xâm lược. Ngày 10 tháng 12 năm 1861 ông đốt cháy tàu Espérance trên vàm Nhựt Tảo; năm 1868 ông đánh chiếm đồn Kiên Giang ở Rạch Giá. Bị bắt, ông bị Pháp xử chém ngày 27 tháng 10 năm 1868. Đình thờ ông ở Rạch Giá vẫn là nơi hành hương lớn của miền Tây.`,
        `Nguyễn Trung Trực led partisans in Cochinchina against the French invasion. On 10 December 1861 he burned the warship L'Espérance at the mouth of the Nhựt Tảo; in 1868 he seized the French post at Kiên Giang in Rạch Giá. Captured, he was beheaded by the French on 27 October 1868. His temple in Rạch Giá remains a major pilgrimage site of the Mekong delta.`,
      ),
      detail: [
        l(
          `Theo Tuổi Trẻ, ông tên thật là Nguyễn Văn Lịch, còn gọi Quản Chơn hay Quản Lịch, sinh năm 1838 ở Bình Nhựt, nay thuộc Bến Lức, Long An, trong một gia đình làm nghề chài lưới và làm ruộng. Ông giỏi võ, thông sách vở và tập hợp nghĩa sĩ khi quân Pháp đánh thành Gia Định. Báo Pháp luật Việt Nam kể ông vốn là dân chài, bỏ lưới cầm vũ khí khi đất nước bị xâm lược.`,
          `According to Tuổi Trẻ, his birth name was Nguyễn Văn Lịch, also known as Quản Chơn or Quản Lịch, and he was born in 1838 in Bình Nhựt, now Bến Lức in Long An, to a family of fishermen and farmers. Skilled in martial arts and well read, he gathered volunteers when the French attacked the Gia Định citadel. Báo Pháp luật Việt Nam describes him as a fisherman who put down his nets to take up arms when the country was invaded.`,
        ),
        l(
          `Tối ngày 10 tháng 12 năm 1861, tức mùng 9 tháng 11 năm Tân Dậu, nghĩa quân của ông áp sát và đốt cháy tàu L'Espérance của Pháp ở vàm Nhựt Tảo, một nhánh sông Vàm Cỏ Đông. Bốn giờ sáng ngày 16 tháng 6 năm 1868, ông đánh úp đồn Kiên Giang ở Rạch Giá, làm chủ tình hình trong năm ngày rồi rút ra đảo Phú Quốc.`,
          `On the evening of 10 December 1861, the 9th day of the 11th lunar month of the Tân Dậu year, his partisans closed in on the French ship L'Espérance at the mouth of the Nhựt Tảo, a branch of the Vàm Cỏ Đông river, and set it ablaze. At four in the morning of 16 June 1868 he took the French post at Kiên Giang in Rạch Giá by surprise, held the town for five days and then withdrew to Phú Quốc island.`,
        ),
        l(
          `Ông bị xử chém công khai ở Rạch Giá ngày 27 tháng 10 năm 1868, khi mới 30 tuổi. Câu nói gắn với tên ông là "Bao giờ người Tây nhổ hết cỏ nước Nam thì mới hết người Nam đánh Tây". Đình thờ ông ở Rạch Giá được công nhận di tích quốc gia ngày 23 tháng 3 năm 1988; lễ hội diễn ra các ngày 26 đến 28 tháng 8 âm lịch và được ghi vào danh mục di sản văn hóa phi vật thể quốc gia năm 2023.`,
          `He was publicly beheaded at Rạch Giá on 27 October 1868, aged just 30. The saying attached to his name is "Only when the French pull up every blade of grass in our land will the Southerners stop fighting them." His temple in Rạch Giá was recognised as a national monument on 23 March 1988; its festival, held on the 26th to 28th of the eighth lunar month, was added to the national intangible heritage list in 2023.`,
        ),
      ],
      scholarly: [
        l(
          `Các nguồn kể khác nhau về việc ông sa vào tay Pháp. Wikipedia tiếng Anh viết Pháp bắt mẹ ông làm con tin để ép ông ra; Báo Pháp luật Việt Nam, dựa trên lời khai trong hồ sơ, viết ông tự nộp mình cho Lãnh binh Tấn để cứu nghĩa quân đang bị vây ở Phú Quốc. Câu "nhổ hết cỏ nước Nam" theo báo này nằm trong một bài thơ tuyệt mệnh mà chỉ một số tài liệu chép.`,
          `The sources differ on how he fell into French hands. English Wikipedia says the French took his mother hostage to force him out; Báo Pháp luật Việt Nam, drawing on his recorded deposition, says he gave himself up to the officer Tấn to save his followers, who were surrounded on Phú Quốc. According to the same paper, the "blades of grass" line comes from a farewell poem that only some documents record.`,
        ),
        l(
          `Quê quán cũng có hai cách ghi: VietnamPlus viết ông sinh trưởng ở Phù Cát, Bình Định rồi theo gia đình vào Nam, còn Tuổi Trẻ và Wikipedia ghi ông sinh ở Long An. Năm sinh được ghi là 1838, có chú thích ghi 1837. Theo Wikipedia, ở vùng Kiên Giang cũ có 13 ngôi đình thờ ông.`,
          `His origin is recorded in two ways: VietnamPlus says he grew up in Phù Cát, Bình Định before his family moved south, while Tuổi Trẻ and Wikipedia say he was born in Long An. His birth year is given as 1838, with one note giving 1837. According to Wikipedia, 13 communal temples in the former Kiên Giang province worship him.`,
        ),
      ],
      sources: ['nvt-tt-ntt', 'nvt-bpl-ntt', 'nvt-vnp-ntt', 'nvt-wiki-ntt'],
    },
    {
      slug: 'vo-nguyen-giap',
      period: 'nhan-vat',
      kind: 'figure',
      name: l('Đại tướng Võ Nguyên Giáp', 'General Võ Nguyên Giáp'),
      date: l('1911 - 2013', '1911 - 2013'),
      sort: 89,
      place: l('Mộ Đại tướng ở Vũng Chùa - Đảo Yến, Quảng Đông, Quảng Trạch, Quảng Trị (trước thuộc Quảng Bình)', "The general's grave at Vũng Chùa - Yến Island, Quảng Đông, Quảng Trạch, Quảng Trị (formerly Quảng Bình)"),
      coord: [106.4950, 17.9249],
      evidence: ['chron'],
      summary: l(
        `Võ Nguyên Giáp từ một thầy giáo dạy sử trở thành vị tướng chỉ huy Quân đội nhân dân Việt Nam trong hai cuộc kháng chiến. Ông lập đội Việt Nam Tuyên truyền Giải phóng quân với 34 người năm 1944 và chỉ huy chiến dịch Điện Biên Phủ năm 1954. Ông mất năm 2013, thọ 102 tuổi, và an nghỉ ở Vũng Chùa nhìn ra Biển Đông.`,
        `Võ Nguyên Giáp went from history teacher to commander of the Vietnam People's Army through two wars of resistance. He founded the Armed Propaganda Brigade for the Liberation of Vietnam with 34 soldiers in 1944 and commanded the Điện Biên Phủ campaign in 1954. He died in 2013 at the age of 102 and rests at Vũng Chùa, facing the East Sea.`,
      ),
      detail: [
        l(
          `Ông sinh ngày 25 tháng 8 năm 1911 ở làng An Xá, Lệ Thủy, Quảng Bình. Năm 1930 ông bị bắt ở Huế vì tham gia phong trào học sinh, sau đó học luật ở Hà Nội và năm 1939 dạy sử ở trường tư thục Thăng Long. Ông từng nói nếu không làm người lính thì ông vẫn là thầy giáo, có lẽ dạy triết học hoặc lịch sử. Tháng 6 năm 1940 ông gặp Nguyễn Ái Quốc ở Côn Minh và vào Đảng Cộng sản Đông Dương.`,
          `He was born on 25 August 1911 in An Xá village, Lệ Thủy, Quảng Bình. In 1930 he was arrested in Huế for his part in the student movement; he later studied law in Hanoi and in 1939 taught history at the private Thăng Long school. He once said that had he not been a soldier he would still be a teacher, perhaps of philosophy or history. In June 1940 he met Nguyễn Ái Quốc in Kunming and joined the Indochinese Communist Party.`,
        ),
        l(
          `Ngày 22 tháng 12 năm 1944, ở Cao Bằng, ông lập đội Việt Nam Tuyên truyền Giải phóng quân gồm 34 chiến sĩ, tiền thân của Quân đội nhân dân Việt Nam. Tháng 9 năm 1945 ông là Bộ trưởng Bộ Nội vụ trong chính phủ đầu tiên. Ông được phong Đại tướng năm 1948, lễ thụ phong có Chủ tịch Hồ Chí Minh dự ở Định Hóa ngày 28 tháng 5. Chiến dịch Điện Biên Phủ do ông chỉ huy được kể ở chương 1945 - 1975.`,
          `On 22 December 1944 in Cao Bằng he founded the Armed Propaganda Brigade for the Liberation of Vietnam with 34 soldiers, the forerunner of the Vietnam People's Army. In September 1945 he became Minister of Home Affairs in the first government. He was made a full general in 1948, at a ceremony in Định Hóa on 28 May attended by President Hồ Chí Minh. The Điện Biên Phủ campaign he commanded is told in the 1945 - 1975 chapter.`,
        ),
        l(
          `Ông mất ngày 4 tháng 10 năm 2013 ở Bệnh viện Trung ương Quân đội 108, thọ 102 tuổi. Sau quốc tang, chiều ngày 13 tháng 10, ông được an táng ở Vũng Chùa - Đảo Yến, Quảng Đông, Quảng Trạch, Quảng Bình, trong khi hàng trăm nghìn người đứng dọc đường tiễn đưa. Mộ nằm dưới chân núi Thọ, nhìn ra Biển Đông, với đảo Yến cách bờ khoảng 500 m.`,
          `He died on 4 October 2013 at Central Military Hospital 108, aged 102. After a state funeral he was buried on the afternoon of 13 October at Vũng Chùa - Yến Island in Quảng Đông commune, Quảng Trạch, Quảng Bình, as hundreds of thousands of people lined the route. The grave lies at the foot of Thọ mountain, facing the East Sea, with Yến Island about 500 m offshore.`,
        ),
      ],
      scholarly: [
        l(
          `Theo con trai ông kể với Tuổi Trẻ, chính Đại tướng chọn khu Vũng Chùa - Đảo Yến năm 2006 sau khi xem bản đồ và đến tận nơi; năm 2007 gia đình trình lại bản đồ và ông ký xác nhận, bút tích vẫn được giữ. Ngày phong Đại tướng được ghi là sắc lệnh ngày 20 tháng 1 năm 1948 và lễ thụ phong ngày 28 tháng 5 năm 1948.`,
          `According to his son, speaking to Tuổi Trẻ, the general himself chose the Vũng Chùa - Yến Island site in 2006 after studying a map and visiting the site; in 2007 the family showed him the map again and he signed to confirm, and the handwritten record is kept. His promotion is dated to a decree of 20 January 1948, with the ceremony on 28 May 1948.`,
        ),
        l(
          `Một số chi tiết đời tư còn lệch giữa các nguồn. Người vợ đầu của ông, Nguyễn Thị Quang Thái, bị giam ở nhà tù Hỏa Lò và mất trong tù; Wikipedia tiếng Anh vừa ghi ông nghe tin năm 1943 vừa ghi bà mất năm 1944. Wikipedia cũng nêu ý kiến của một số tác giả phương Tây về vai trò của ông sau năm 1972; các nguồn Việt Nam được dẫn ở đây không bàn đến điều này.`,
          `Some details of his private life differ between sources. His first wife, Nguyễn Thị Quang Thái, was held in Hỏa Lò prison and died there; English Wikipedia says both that he learned of her death in 1943 and that she died in 1944. Wikipedia also reports some Western writers' views on his role after 1972; the Vietnamese sources cited here do not discuss this.`,
        ),
      ],
      sources: ['nvt-htl-giap', 'nvt-bcp-giap', 'nvt-tt-giap', 'nvt-wiki-giap'],
    },
  ],
  sources: [
    { id: 'nvt-vnn-unesco7', kind: 'news', cite: 'VietNamNet (bản tiếng Anh), "Seven Vietnamese figures celebrated by UNESCO".', url: 'https://vietnamnet.vn/en/seven-vietnamese-figures-celebrated-by-unesco-2222503.html' },
    { id: 'nvt-nd-tt', kind: 'news', cite: 'Báo Nhân Dân, "Tuệ Tĩnh - Ba giá trị của một nhân cách lớn".', url: 'https://nhandan.vn/tue-tinh-ba-gia-tri-cua-mot-nhan-cach-lon-post740612.html' },
    { id: 'nvt-bpl-tt-cum', kind: 'news', cite: 'Báo Pháp luật Việt Nam, "Thăm cụm di tích cấp Quốc gia thờ đại Danh y Tuệ Tĩnh".', url: 'https://baophapluat.vn/tham-cum-di-tich-cap-quoc-gia-tho-dai-danh-y-tue-tinh-post406916.html' },
    { id: 'nvt-bpl-denbia', kind: 'news', cite: 'Báo Pháp luật Việt Nam, "Sự tích xúc động ở đền Bia".', url: 'https://baophapluat.vn/su-tich-xuc-dong-o-den-bia-post144996.html' },
    { id: 'nvt-wiki-tt', kind: 'reference', cite: 'Wikipedia tiếng Anh, "Tuệ Tĩnh", xem tháng 11/2026.', url: 'https://en.wikipedia.org/wiki/Tu%E1%BB%87_T%C4%A9nh' },
    { id: 'nvt-bpl-nbk', kind: 'news', cite: 'Báo Pháp luật Việt Nam, "Danh nhân văn hóa, Trạng Trình Nguyễn Bỉnh Khiêm (Bài 1): Thuở nhỏ thông Kinh văn, lớn lên vịn ngai vàng".', url: 'https://baophapluat.vn/danh-nhan-van-hoa-trang-trinh-nguyen-binh-khiem-bai-1-thuo-nho-thong-kinh-van-lon-len-vin-ngai-vang-post379046.html' },
    { id: 'nvt-plo-nbk', kind: 'news', cite: 'Báo Pháp Luật TP Hồ Chí Minh (PLO), "Hải Phòng vận động UNESCO vinh danh Trạng Trình Nguyễn Bỉnh Khiêm vào năm 2035".', url: 'https://plo.vn/hai-phong-van-dong-unesco-vinh-danh-trang-trinh-nguyen-binh-khiem-vao-nam-2035-post747062.html' },
    { id: 'nvt-nd-nbk', kind: 'news', cite: 'Báo Nhân Dân (16/1/2026), "Trang trọng Lễ hội Đền Trạng Trình Nguyễn Bỉnh Khiêm".', url: 'https://nhandan.vn/trang-trong-le-hoi-den-trang-trinh-nguyen-binh-khiem-post937368.html' },
    { id: 'nvt-mia-nbk', kind: 'news', cite: 'Mia.vn, cẩm nang du lịch "Đền Trạng Trình Nguyễn Bỉnh Khiêm" (các hạng mục và năm tu bổ của khu di tích).', url: 'https://mia.vn/cam-nang-du-lich/den-trang-trinh-nguyen-binh-khiem-21309' },
    { id: 'nvt-dbnd-lho', kind: 'news', cite: 'Báo Đại biểu Nhân dân (11/2024), "Mộ và Khu lưu niệm Lê Hữu Trác được xếp hạng Di tích quốc gia đặc biệt".', url: 'https://daibieunhandan.vn/mo-va-khu-luu-niem-le-huu-trac-duoc-xep-hang-di-tich-quoc-gia-dac-biet-post397612.html' },
    { id: 'nvt-nd-lho', kind: 'news', cite: 'Báo Nhân Dân, "Đại danh y Lê Hữu Trác, tấm gương sáng về y đức, y thuật".', url: 'https://nhandan.vn/dai-danh-y-le-huu-trac-tam-guong-sang-ve-y-duc-y-thuat-post527321.html' },
    { id: 'nvt-hatinh-lho-unesco', kind: 'primary', cite: 'Cổng thông tin điện tử tỉnh Hà Tĩnh, "Hành trình vận động và xây dựng hồ sơ UNESCO kỷ niệm năm sinh Lê Hữu Trác".', url: 'https://hatinh.gov.vn/vi/bai-viet/hanh-trinh-van-dong-va-xay-dung-ho-so-unesco-ky-niem-nam-sinh-le-huu-trac' },
    { id: 'nvt-nd-lho300', kind: 'news', cite: 'Báo Nhân Dân (27/12/2024), "Long trọng kỷ niệm 300 năm Ngày sinh Đại danh y Lê Hữu Trác".', url: 'https://nhandan.vn/long-trong-ky-niem-300-nam-ngay-sinh-dai-danh-y-le-huu-trac-post852983.html' },
    { id: 'nvt-vns-lqd-unesco', kind: 'news', cite: 'Việt Nam News, "UNESCO adopts resolution honouring Vietnamese scholar Lê Quý Đôn".', url: 'https://vietnamnews.vn/life-style/1728710/unesco-adopts-resolution-honouring-vietnamese-scholar-le-quy-don.html' },
    { id: 'nvt-vns-lqd-memorial', kind: 'news', cite: 'Việt Nam News (2026), "Lê Quý Đôn Memorial nurtures patriotism and lifelong learning".', url: 'https://vietnamnews.vn/life-style/1798091/le-quy-don-memorial-nurtures-patriotism-and-lifelong-learning.html' },
    { id: 'nvt-hatinh-lqd', kind: 'primary', cite: 'Cổng thông tin điện tử tỉnh Hà Tĩnh (2026), "Kỷ niệm 300 năm Ngày sinh danh nhân văn hóa Lê Quý Đôn: Tôn vinh một trí tuệ Bách khoa Đại Việt".', url: 'https://hatinh.gov.vn/vi/bai-viet/ky-niem-300-nam-ngay-sinh-le-quy-don-ton-vinh-mot-tri-tue-bach-khoa-dai-viet' },
    { id: 'nvt-vov-lqd', kind: 'news', cite: 'VOV (31/7/2026), "Hưng Yên tổ chức lễ kỷ niệm 300 năm Ngày sinh Danh nhân văn hóa Lê Quý Đôn".', url: 'https://vov.vn/van-hoa/hung-yen-to-chuc-le-ky-niem-300-nam-ngay-sinh-danh-nhan-van-hoa-le-quy-don-post1320278.vov' },
    { id: 'nvt-wiki-lqd', kind: 'reference', cite: 'Wikipedia tiếng Anh, "Lê Quý Đôn", xem tháng 11/2026.', url: 'https://en.wikipedia.org/wiki/L%C3%AA_Qu%C3%BD_%C4%90%C3%B4n' },
    { id: 'nvt-nd-ndc-fr', kind: 'news', cite: 'Báo Nhân Dân (bản tiếng Pháp, chuyên trang 2022), "Le célèbre Nguyên Dinh Chiêu".', url: 'https://special.nhandan.vn/nguyendinhchieu_fr/index.html' },
    { id: 'nvt-vns-ndc', kind: 'news', cite: 'Việt Nam News (18/6/2022), "Việt Nam celebrates 200th birthday of poet Chiểu".', url: 'https://vietnamnews.vn/life-style/1251412/viet-nam-celebrates-200th-birthday-of-poet-chieu.html' },
    { id: 'nvt-sggp-ndc', kind: 'news', cite: 'Báo Sài Gòn Giải Phóng (1/7/2022), "Kỷ niệm 200 năm ngày sinh Danh nhân văn hóa thế giới Nguyễn Đình Chiểu".', url: 'https://www.sggp.org.vn/ky-niem-200-nam-ngay-sinh-danh-nhan-van-hoa-the-gioi-nguyen-dinh-chieu-post642267.html' },
    { id: 'nvt-nom-lvt', kind: 'museum', cite: 'Thư viện Quốc gia Việt Nam và Quỹ Bảo tồn chữ Nôm (VNPF), "Lục Vân Tiên Introduction" (bản số hóa nlvnpf-0059, ký hiệu R.403).', url: 'https://nomfoundation.org/nom-project/Luc-Van-Tien?uiLang=en' },
    { id: 'nvt-tt-ntt', kind: 'news', cite: 'Tuổi Trẻ (10/10/2023), "\'Lễ hội Đình thần Nguyễn Trung Trực\' nhận bằng Di sản văn hóa phi vật thể".', url: 'https://tuoitre.vn/le-hoi-dinh-than-nguyen-trung-truc-nhan-bang-di-san-van-hoa-phi-vat-the-20231010193054044.htm' },
    { id: 'nvt-bpl-ntt', kind: 'news', cite: 'Báo Pháp luật Việt Nam, "Anh hùng họ Nguyễn tự nạp mình cho giặc cứu đồng chí".', url: 'https://baophapluat.vn/anh-hung-ho-nguyen-tu-nap-minh-cho-giac-cuu-dong-chi-post241635.html' },
    { id: 'nvt-vnp-ntt', kind: 'news', cite: 'VietnamPlus (2013), "Kỷ niệm ngày hy sinh anh hùng Nguyễn Trung Trực".', url: 'https://www.vietnamplus.vn/ky-niem-ngay-hy-sinh-anh-hung-nguyen-trung-truc-post225569.vnp' },
    { id: 'nvt-wiki-ntt', kind: 'reference', cite: 'Wikipedia tiếng Anh, "Nguyễn Trung Trực", xem tháng 11/2026.', url: 'https://en.wikipedia.org/wiki/Nguy%E1%BB%85n_Trung_Tr%E1%BB%B1c' },
    { id: 'nvt-htl-giap', kind: 'museum', cite: 'Trung tâm Bảo tồn Di sản Thăng Long - Hà Nội, triển lãm trực tuyến "A Legendary General" nhân 110 năm ngày sinh Đại tướng Võ Nguyên Giáp.', url: 'https://trungbayonline.hoangthanhthanglong.vn/VoNguyenGiap/IndexEng' },
    { id: 'nvt-bcp-giap', kind: 'news', cite: 'Báo Điện tử Chính phủ (bản tiếng Anh, 13/10/2013), "General Giap rests in peace in hometown".', url: 'https://en.baochinhphu.vn/print/general-giap-rests-in-peace-in-hometown-11118019.htm' },
    { id: 'nvt-tt-giap', kind: 'news', cite: 'Tuổi Trẻ (10/2013), "Nơi an nghỉ của Đại tướng hướng ra biển Đông".', url: 'https://tuoitre.vn/noi-an-nghi-cua-dai-tuong-huong-ra-bien-dong-573543.htm' },
    { id: 'nvt-wiki-giap', kind: 'reference', cite: 'Wikipedia tiếng Anh, "Võ Nguyên Giáp", xem tháng 11/2026.', url: 'https://en.wikipedia.org/wiki/V%C3%B5_Nguy%C3%AAn_Gi%C3%A1p' },
    { id: 'nvt-nara-1776', kind: 'museum', cite: 'U.S. National Archives, "Declaration of Independence (1776)", Milestone Documents.', url: 'https://www.archives.gov/milestone-documents/declaration-of-independence' },
    { id: 'nvt-nps-1861', kind: 'museum', cite: 'U.S. National Park Service, Civil War 150th timeline, "April 12, 1861".', url: 'https://www.nps.gov/features/waso/cw150th/content/tl-04-12-1861.html' },
  ],
  hooks: {
    'tue-tinh': l(
      `Người được coi là ông tổ thuốc Nam lại mất ở đất khách, và đền thờ ông ở quê mọc lên quanh một tấm bia mộ chép từ bên kia biên giới.`,
      `The man honoured as the father of Vietnamese herbal medicine died abroad, and his temple at home grew up around a copy of a gravestone brought back across the border.`,
    ),
    'nguyen-binh-khiem': l(
      `Ông đỗ trạng nguyên năm 45 tuổi, làm quan chỉ khoảng tám năm, nhưng người ta vẫn gán cho ông những lời sấm suốt bốn thế kỷ sau.`,
      `He came top in the palace examination at 45 and served only about eight years, yet people kept attributing prophecies to him for four centuries.`,
    ),
    'hai-thuong-lan-ong-le-huu-trac': l(
      `Vị danh y lớn nhất thế kỷ 18 tự gọi mình là "ông già lười", rồi viết bộ sách thuốc dài 66 quyển.`,
      `The greatest physician of 18th-century Vietnam called himself "the lazy old man", then wrote a medical work in 66 books.`,
    ),
    'le-quy-don': l(
      `Một quan chức Đàng Ngoài từng làm Hiệp trấn Thuận Hóa đã để lại một trong những ghi chép sớm nhất về đội Hoàng Sa của chúa Nguyễn.`,
      `A northern official who served as deputy governor of Thuận Hóa left one of the earliest accounts of the Nguyễn lords' Hoàng Sa company.`,
    ),
    'nguyen-dinh-chieu': l(
      `Bị mù từ tuổi hai mươi mấy, ông vẫn dạy học, bốc thuốc và còn soạn một cuốn sách thuốc dài 3.642 câu thơ.`,
      `Blind from his twenties, he still taught, practised medicine and composed a medical book in 3,642 lines of verse.`,
    ),
    'nguyen-trung-truc': l(
      `Một người xuất thân dân chài đã đốt cháy một chiến hạm Pháp trên sông, và hôm nay hơn chục ngôi đình miền Tây thờ ông như thần làng.`,
      `A man from a fishing family set a French warship ablaze on a river, and today more than a dozen communal temples in the delta worship him as their village god.`,
    ),
    'vo-nguyen-giap': l(
      `Vị tướng của Điện Biên Phủ từng nói nếu không làm người lính, ông vẫn là thầy giáo dạy lịch sử.`,
      `The general of Điện Biên Phủ once said that had he not been a soldier, he would still be teaching history.`,
    ),
  },
  world: [
    {
      text: l(
        `Ngày 4 tháng 7 năm 1776, cùng năm Lê Quý Đôn viết Phủ biên tạp lục, Quốc hội Lục địa ở Bắc Mỹ thông qua Tuyên ngôn Độc lập của Hoa Kỳ.`,
        `On 4 July 1776, the year Lê Quý Đôn wrote the Phủ biên tạp lục, the Continental Congress in North America adopted the Declaration of Independence.`,
      ),
      source: 'nvt-nara-1776',
    },
    {
      text: l(
        `Ngày 12 tháng 4 năm 1861, tám tháng trước khi Nguyễn Trung Trực đốt tàu Espérance, Nội chiến Mỹ bùng nổ với trận pháo kích đồn Sumter ở Charleston.`,
        `On 12 April 1861, eight months before Nguyễn Trung Trực burned L'Espérance, the American Civil War began with the bombardment of Fort Sumter in Charleston.`,
      ),
      source: 'nvt-nps-1861',
    },
  ],
  quiz: [
    {
      q: l(
        `Ai đã chỉ huy nghĩa quân đốt cháy tàu Espérance của Pháp trên vàm Nhựt Tảo năm 1861?`,
        `Who led the partisans who burned the French ship L'Espérance at the mouth of the Nhựt Tảo in 1861?`,
      ),
      options: [l('Nguyễn Đình Chiểu', 'Nguyễn Đình Chiểu'), l('Nguyễn Trung Trực', 'Nguyễn Trung Trực'), l('Võ Nguyên Giáp', 'Võ Nguyên Giáp')],
      answer: 1,
      why: l(
        `Nguyễn Trung Trực đốt tàu Espérance tối ngày 10 tháng 12 năm 1861, rồi năm 1868 đánh chiếm đồn Kiên Giang. Nguyễn Đình Chiểu cùng thời nhưng là nhà thơ; ông viết Văn tế nghĩa sĩ Cần Giuộc năm 1861.`,
        `Nguyễn Trung Trực burned L'Espérance on the evening of 10 December 1861 and took the Kiên Giang post in 1868. Nguyễn Đình Chiểu lived at the same time but was a poet; he wrote the Funeral Oration for the Partisans of Cần Giuộc in 1861.`,
      ),
    },
    {
      q: l(
        `Bộ sách thuốc 28 tập, 66 quyển, khắc in năm 1885, là của ai?`,
        `Whose medical work in 28 parts and 66 books was printed in 1885?`,
      ),
      options: [l('Tuệ Tĩnh', 'Tuệ Tĩnh'), l('Lê Quý Đôn', 'Lê Quý Đôn'), l('Hải Thượng Lãn Ông Lê Hữu Trác', 'Hải Thượng Lãn Ông (Lê Hữu Trác)')],
      answer: 2,
      why: l(
        `Đó là Hải Thượng y tông tâm lĩnh của Lê Hữu Trác. Tuệ Tĩnh sống trước đó bốn thế kỷ, gắn với Nam dược thần hiệu; Lê Quý Đôn viết sử và địa chí như Phủ biên tạp lục.`,
        `It is Lê Hữu Trác's Hải Thượng y tông tâm lĩnh. Tuệ Tĩnh lived four centuries earlier and is linked to the Nam dược thần hiệu; Lê Quý Đôn wrote histories and gazetteers such as the Phủ biên tạp lục.`,
      ),
    },
    {
      q: l(
        `Đội Việt Nam Tuyên truyền Giải phóng quân do Võ Nguyên Giáp lập năm 1944 có bao nhiêu chiến sĩ?`,
        `How many soldiers did the Armed Propaganda Brigade founded by Võ Nguyên Giáp in 1944 have?`,
      ),
      options: [l('34', '34'), l('66', '66'), l('102', '102')],
      answer: 0,
      why: l(
        `Đội được lập ngày 22 tháng 12 năm 1944 ở Cao Bằng với 34 chiến sĩ. Con số 66 là số quyển của bộ sách thuốc Lê Hữu Trác, còn 102 là tuổi thọ của Đại tướng.`,
        `The brigade was founded on 22 December 1944 in Cao Bằng with 34 soldiers. Sixty-six is the number of books in Lê Hữu Trác's medical work, and 102 was the general's age at his death.`,
      ),
    },
  ],
  badge: l('Người giữ lửa', 'Keeper of the flame'),
};

export default chapter;
