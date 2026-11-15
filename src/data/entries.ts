import { l, type Entry } from './types';

export const entries: Entry[] = [
  // ---------- THỜI ĐỒ ĐÁ ----------
  {
    slug: 'an-khe',
    period: 'do-da',
    kind: 'site',
    name: l('Quần thể di chỉ An Khê (Rộc Tưng - Gò Đá)', 'The An Khê sites (Rộc Tưng - Gò Đá)'),
    date: l('khoảng 800.000 năm trước', 'c. 800,000 years ago'),
    sort: 800000,
    place: l('An Khê, Gia Lai', 'An Khê, Gia Lai'),
    coord: [108.65, 13.95],
    evidence: ['arch'],
    summary: l(
      'Cụm di chỉ sơ kỳ đá cũ trên thềm cổ sông Ba, nơi tìm thấy rìu tay ghè hai mặt trong lớp đất khoảng 800.000 năm tuổi. Đây là dấu vết con người sớm nhất được biết đến trên đất Việt Nam.',
      'A cluster of Lower Palaeolithic sites on the old terraces of the Ba River, where bifacial handaxes were found in layers about 800,000 years old. These are the earliest known human traces in Vietnam.',
    ),
    detail: [
      l(
        'Di chỉ được phát hiện năm 2014. Từ năm 2015, Viện Khảo cổ học Việt Nam cùng Viện Khảo cổ học và Dân tộc học Novosibirsk (Nga) khai quật các điểm Gò Đá, Rộc Tưng 1, Rộc Tưng 4 và Rộc Tưng 7. Đến nay đã ghi nhận hơn hai chục điểm di tích trên diện tích hàng trăm hecta.',
        'The sites were discovered in 2014. From 2015 the Vietnam Institute of Archaeology and the Institute of Archaeology and Ethnography in Novosibirsk (Russia) excavated Gò Đá, Rộc Tưng 1, Rộc Tưng 4 and Rộc Tưng 7. More than twenty localities have now been recorded across hundreds of hectares.',
      ),
      l(
        'Bộ công cụ gồm rìu tay, mũi nhọn tam diện, công cụ chặt và nạo, làm từ cuội. Chúng nằm trong cùng lớp đất với các mảnh thiên thạch (tektite). Mẫu thiên thạch được định tuổi bằng phương pháp kali-argon: Gò Đá khoảng 806.000 năm (sai số 22.000 năm), Rộc Tưng 1 khoảng 782.000 năm (sai số 20.000 năm).',
        'The toolkit includes handaxes, trihedral picks, choppers and scrapers made on pebbles. They lie in the same layer as tektites. The tektites were dated by the potassium-argon method: about 806,000 years at Gò Đá (plus or minus 22,000) and about 782,000 years at Rộc Tưng 1 (plus or minus 20,000).',
      ),
      l(
        'Cuối năm 2022, di tích Rộc Tưng - Gò Đá được xếp hạng di tích quốc gia đặc biệt, và bộ rìu tay được công nhận là bảo vật quốc gia. Năm 2025, tỉnh Gia Lai bắt đầu lập hồ sơ đề nghị UNESCO công nhận.',
        'At the end of 2022 Rộc Tưng - Gò Đá was listed as a special national monument and the handaxe set was recognised as a national treasure. In 2025 Gia Lai province began preparing a UNESCO nomination file.',
      ),
    ],
    scholarly: [
      l(
        'Con số 800.000 năm là tuổi của thiên thạch nằm cùng lớp với công cụ, không phải tuổi đo trực tiếp trên công cụ. Lập luận dựa vào việc lớp đất còn nguyên vẹn, điểm mà nhóm khai quật nhấn mạnh khi so với Bách Sắc (Quảng Tây), nơi hiện vật phần lớn nằm trên bề mặt.',
        'The figure of 800,000 years is the age of tektites in the same layer as the tools, not a direct date on the tools. The argument rests on the layer being undisturbed, a point the excavators stress when comparing with Bose (Guangxi), where most finds lay on the surface.',
      ),
      l(
        'An Khê quan trọng với một tranh luận lớn: giả thuyết "đường Movius" cho rằng Đông Á thời đá cũ không có kỹ nghệ rìu tay như châu Phi và châu Âu. Rìu tay An Khê và Bách Sắc là bằng chứng chống lại giả thuyết đó. Nhóm Derevianko cho rằng kỹ nghệ này hình thành độc lập tại chỗ.',
        'An Khê matters for a major debate: the "Movius Line" hypothesis held that Palaeolithic East Asia lacked the handaxe industries of Africa and Europe. The An Khê and Bose handaxes are evidence against it. Derevianko and colleagues argue that this industry arose independently in the region.',
      ),
    ],
    sources: ['derev2018', 'derev2020', 'bvh-ankhe', 'tt-ankhe', 'nd-ankhe'],
  },
  {
    slug: 'tham-khuyen',
    period: 'do-da',
    kind: 'site',
    name: l('Hang Thẩm Khuyên và Thẩm Hai', 'Thẩm Khuyên and Thẩm Hai caves'),
    date: l('khoảng 475.000 năm trước', 'c. 475,000 years ago'),
    sort: 475000,
    place: l('Bình Gia, Lạng Sơn', 'Bình Gia, Lạng Sơn'),
    coord: [106.41, 21.92],
    evidence: ['arch'],
    summary: l(
      'Hai hang đá vôi ở Lạng Sơn, nơi tìm thấy răng hóa thạch của người đứng thẳng Homo erectus. Đây là hóa thạch người cổ nhất đã biết ở Việt Nam.',
      'Two limestone caves in Lạng Sơn where fossil teeth of Homo erectus were found. They are the oldest known human fossils in Vietnam.',
    ),
    detail: [
      l(
        'Răng người vượn được phát hiện năm 1965 trong lớp trầm tích cùng với xương răng của nhiều loài thú đã tuyệt chủng, trong đó có vượn khổng lồ Gigantopithecus. Các nghiên cứu sau này ghi nhận khoảng mười chiếc răng thuộc Homo erectus từ hai hang.',
        'The teeth were discovered in 1965 in deposits together with the remains of many extinct animals, including the giant ape Gigantopithecus. Later studies record about ten teeth of Homo erectus from the two caves.',
      ),
      l(
        'Năm 1996, nhóm của Russell Ciochon và Vũ Thế Long định tuổi lớp chứa hóa thạch ở Thẩm Khuyên bằng phương pháp cộng hưởng spin điện tử (ESR) trên men răng, cho kết quả khoảng 475.000 năm. Kết quả cho thấy người đứng thẳng và vượn khổng lồ đã cùng tồn tại trong vùng.',
        'In 1996 the team of Russell Ciochon and Vũ Thế Long dated the fossil-bearing deposits at Thẩm Khuyên by electron spin resonance (ESR) on tooth enamel, giving about 475,000 years. The result shows that Homo erectus and the giant ape lived in the region at the same time.',
      ),
    ],
    scholarly: [
      l(
        'Ở đây chỉ có răng, không có công cụ đá đi kèm, nên chưa thể nối trực tiếp nhóm người này với một kỹ nghệ đá cụ thể. Bảo tàng Lịch sử Quốc gia ghi khung niên đại rộng hơn, khoảng 500.000 - 400.000 năm, phù hợp với kết quả ESR.',
        'Only teeth were found here, with no associated stone tools, so this group cannot yet be tied directly to a specific stone industry. The National Museum of History gives a broader range of about 500,000 - 400,000 years, consistent with the ESR result.',
      ),
    ],
    sources: ['ciochon1996', 'nmh-handaxe', 'derev2018'],
  },
  {
    slug: 'nui-do',
    period: 'do-da',
    kind: 'site',
    name: l('Núi Đọ', 'Núi Đọ (Mount Đọ)'),
    date: l('niên đại còn tranh luận', 'age still debated'),
    sort: 300000,
    place: l('Thanh Hóa', 'Thanh Hóa'),
    coord: [105.74, 19.88],
    evidence: ['arch'],
    summary: l(
      'Ngọn núi bên ngã ba sông Chu và sông Mã, nơi năm 1960 tìm thấy hàng nghìn mảnh đá bazan có vết ghè đẽo. Trong nhiều thập kỷ, Núi Đọ được coi là di chỉ đá cũ cổ nhất Việt Nam.',
      'A hill at the confluence of the Chu and Mã rivers where thousands of flaked basalt pieces were found in 1960. For decades Núi Đọ was regarded as the oldest Palaeolithic site in Vietnam.',
    ),
    detail: [
      l(
        'Hiện vật được phát hiện trên sườn núi trong lúc các nhà khảo cổ khai quật một khu mộ thời đồ đồng gần đó. Nhà khảo cổ Liên Xô P. I. Boriskovsky tham gia nghiên cứu và xếp Núi Đọ vào sơ kỳ đá cũ. Trong sưu tập ông mô tả, mảnh tước chiếm khoảng 95 phần trăm, còn lại là hạch đá, công cụ chặt và một số ít rìu tay.',
        'The finds were made on the slopes while archaeologists were excavating a nearby Bronze Age cemetery. The Soviet archaeologist P. I. Boriskovsky took part and assigned Núi Đọ to the Lower Palaeolithic. In the collection he described, flakes make up about 95 percent; the rest are cores, chopping tools and a few handaxes.',
      ),
      l(
        'Núi Đọ được xếp hạng di tích quốc gia từ năm 1962. Chiếc rìu tay bazan Núi Đọ trưng bày ở Bảo tàng Lịch sử Quốc gia được ghi niên đại khoảng 400.000 - 300.000 năm.',
        'Núi Đọ has been a national monument since 1962. The basalt handaxe from Núi Đọ shown at the National Museum of History is labelled about 400,000 - 300,000 years old.',
      ),
    ],
    scholarly: [
      l(
        'Điểm yếu của Núi Đọ là hiện vật nằm trên bề mặt, không có địa tầng và không có mẫu định tuổi tuyệt đối. Niên đại chỉ dựa trên hình dáng công cụ. Nhóm Derevianko (2018, 2020) lưu ý rằng những mảnh đá ghè thô tương tự cũng gặp ở di chỉ đá mới và sơ kỳ kim khí, và gọi cách định tuổi của Boriskovsky là một nhầm lẫn.',
        'The weakness of Núi Đọ is that the finds lay on the surface, without stratigraphy and without absolute dates. The age rests only on tool shape. Derevianko and colleagues (2018, 2020) note that similar crude flaked pieces also occur at Neolithic and Early Bronze Age sites, and call Boriskovsky\'s dating a mistake.',
      ),
      l(
        'Vì vậy trang này không gán cho Núi Đọ một niên đại chắc chắn. Con số 400.000 - 300.000 năm là theo chú thích của bảo tàng.',
        'For that reason this site does not give Núi Đọ a firm age. The figure of 400,000 - 300,000 years follows the museum label.',
      ),
    ],
    model: 'biface',
    sources: ['boriskovsky', 'nmh-handaxe', 'derev2018', 'derev2020'],
  },
  {
    slug: 'son-vi',
    period: 'do-da',
    kind: 'culture',
    name: l('Văn hóa Sơn Vi', 'Sơn Vi culture'),
    date: l('khoảng 20.000 - 12.000 TCN', 'c. 20,000 - 12,000 BCE'),
    sort: 22000,
    place: l('Lâm Thao, Phú Thọ', 'Lâm Thao, Phú Thọ'),
    coord: [105.29, 21.32],
    evidence: ['arch'],
    summary: l(
      'Văn hóa hậu kỳ đá cũ của các nhóm săn bắt, hái lượm dùng công cụ cuội ghè, phân bố chủ yếu trên đồi gò trung du Bắc Bộ.',
      'A Late Palaeolithic culture of foragers using flaked pebble tools, found mainly on the midland hills of northern Vietnam.',
    ),
    detail: [
      l(
        'Di tích Sơn Vi được tìm thấy trên một vùng rộng, từ Lào Cai ở phía bắc đến Nghệ An, Hà Tĩnh, Quảng Trị và cả Lâm Đồng ở phía nam, từ Sơn La ở phía tây đến lưu vực sông Lục Nam ở phía đông. Công cụ điển hình làm từ cuội sông, chỉ ghè ở rìa cạnh, như công cụ một phần tư viên cuội và công cụ rìa lưỡi ngang.',
        'Sơn Vi sites are spread over a wide area, from Lào Cai in the north to Nghệ An, Hà Tĩnh, Quảng Trị and even Lâm Đồng in the south, and from Sơn La in the west to the Lục Nam basin in the east. Typical tools are river pebbles flaked only along the edge, such as quarter-pebble tools and transverse-edged tools.',
      ),
      l(
        'Ở một số hang như Mái đá Điều (Thanh Hóa), lớp Sơn Vi nằm dưới lớp Hòa Bình, cho thấy thứ tự trước sau của hai giai đoạn.',
        'In some caves such as Mái đá Điều (Thanh Hóa) the Sơn Vi layer lies beneath the Hòa Bình layer, showing the order of the two phases.',
      ),
    ],
    scholarly: [
      l(
        'Nhiều nhà nghiên cứu xem kỹ nghệ Hòa Bình là sự tiếp nối của kỹ nghệ Sơn Vi. Tuy nhiên ranh giới thời gian giữa hai giai đoạn không rõ, vì một số hang Hòa Bình đã cho niên đại trên 20.000 năm, chồng lên khung thời gian của Sơn Vi.',
        'Many researchers see the Hoabinhian industry as a continuation of the Sơn Vi industry. The time boundary between them is unclear, however, since some Hoabinhian caves have given dates above 20,000 years, overlapping the Sơn Vi range.',
      ),
    ],
    sources: ['bpl-sonvi', 'wiki-hoabinh', 'kandyba2023'],
  },
  {
    slug: 'hoa-binh',
    period: 'do-da',
    kind: 'culture',
    name: l('Văn hóa Hòa Bình', 'Hòa Bình culture (Hoabinhian)'),
    date: l('khoảng 18.000 - 7.000 năm trước', 'c. 18,000 - 7,000 years ago'),
    sort: 18000,
    place: l('Hòa Bình, Thanh Hóa', 'Hòa Bình, Thanh Hóa'),
    coord: [105.34, 20.8],
    evidence: ['arch'],
    summary: l(
      'Văn hóa của cư dân hang động vùng núi đá vôi, nổi tiếng với công cụ cuội ghè một mặt và những chiếc rìu mài lưỡi sớm nhất. Tên gọi Hòa Bình nay được dùng cho cả một kỹ nghệ đá khắp Đông Nam Á.',
      'A culture of cave dwellers in the limestone mountains, known for unifacial pebble tools and the earliest edge-ground axes. The name Hoabinhian is now used for a stone industry across Southeast Asia.',
    ),
    detail: [
      l(
        'Nhà khảo cổ Pháp Madeleine Colani phát hiện và đặt tên văn hóa này sau các cuộc khai quật hang động ở Hòa Bình trong thập niên 1920. Việt Nam hiện có khoảng 150 di tích Hòa Bình, tập trung ở Hòa Bình và Thanh Hóa.',
        'The French archaeologist Madeleine Colani identified and named this culture after her cave excavations in Hòa Bình in the 1920s. Vietnam now has about 150 Hoabinhian sites, concentrated in Hòa Bình and Thanh Hóa.',
      ),
      l(
        'Cư dân Hòa Bình sống bằng săn bắt và hái lượm. Trong hang còn lại vỏ ốc núi, ốc suối, xương thú và vỏ các loại hạt như trám, óc chó rừng, dẻ. Họ chôn người chết ngay trong hang. Một số rìu ngắn đã được mài ở lưỡi, bước đầu của kỹ thuật mài đá.',
        'Hoabinhian people lived by hunting and gathering. The caves hold shells of land and stream snails, animal bones and the shells of nuts such as canarium, wild walnut and chestnut. They buried their dead inside the caves. Some short axes were ground at the edge, the first step in stone grinding.',
      ),
    ],
    scholarly: [
      l(
        'Khung 18.000 - 7.000 năm trước là theo Bảo tàng Lịch sử Quốc gia. Các cuộc khai quật gần đây đẩy mốc mở đầu lùi sâu hơn: hang Chổ cho thấy Hòa Bình đã hình thành khoảng 20.000 năm trước, và hang Điềm cho niên đại trước 23.000 năm.',
        'The range 18,000 - 7,000 years ago follows the National Museum of History. Recent excavations push the beginning further back: Hang Chổ shows the Hoabinhian established by about 20,000 years ago, and Điềm cave gives dates before 23,000 years.',
      ),
      l(
        'Từng có giả thuyết rằng cư dân Hòa Bình đã trồng trọt sơ khai. Các mẫu hạt và quả thu được không khác dạng hoang dại, nên giả thuyết này hiện không có bằng chứng trực tiếp. Tại một hội nghị quốc tế, giới nghiên cứu thống nhất gọi Hòa Bình là một "kỹ nghệ" chứ không phải một văn hóa hay một tộc người.',
        'It was once proposed that Hoabinhian people practised early cultivation. The recovered seeds and fruits do not differ from wild forms, so there is no direct evidence for this. At an international conference researchers agreed to call the Hoabinhian an "industry", not a culture or a people.',
      ),
    ],
    sources: ['nmh-hoabinh', 'wiki-hoabinh', 'yi2008', 'kandyba2023'],
  },
  {
    slug: 'thung-binh',
    period: 'do-da',
    kind: 'site',
    name: l('Người Thung Bình 1 (Tràng An)', 'The Thung Bình 1 man (Tràng An)'),
    date: l('khoảng 12.500 - 12.000 năm trước', 'c. 12,500 - 12,000 years ago'),
    sort: 12500,
    place: l('Hang Thung Bình 1, Tràng An, Ninh Bình', 'Thung Bình 1 cave, Tràng An, Ninh Bình'),
    coord: [105.89, 20.25],
    evidence: ['arch'],
    summary: l(
      'Bộ xương gần như nguyên vẹn của một người đàn ông sống vào cuối Kỷ Băng hà, tìm thấy trong hang đá vôi ở Tràng An. Đây là một trong số rất ít di cốt người thời này còn lại ở Đông Nam Á, và là bộ xương cổ nhất ở Việt Nam đã lấy được ADN.',
      'The nearly complete skeleton of a man who lived at the end of the Ice Age, found in a limestone cave at Tràng An. It is one of very few human skeletons of this age surviving in Southeast Asia, and the oldest in Vietnam to have yielded DNA.',
    ),
    detail: [
      l(
        'Bộ xương, ký hiệu TBH1, được nhóm nghiên cứu quốc tế của dự án SUNDASIA phát hiện cuối năm 2017 và lấy lên dần đến năm 2018. Hộp sọ đã bị đá rơi đè bẹp nên các nhà nghiên cứu phải bốc cả khối đất về phòng thí nghiệm rồi ghép lại trong nhiều tháng.',
        'The skeleton, labelled TBH1, was found in late 2017 by the international SUNDASIA project team and recovered gradually into 2018. The skull had been crushed by a rockfall, so researchers lifted whole blocks of sediment to the lab and spent months piecing it together.',
      ),
      l(
        'Người này là nam, cao khoảng 1,7 m, mất lúc khoảng 35 tuổi, được chôn nằm co trong hang. Ông có một chiếc xương sườn thừa ở vùng cổ, điều chỉ gặp ở rất ít người. Chiếc xương ấy bị gãy và có dấu nhiễm trùng, còn ngay bên cạnh là một mũi nhọn bằng thạch anh dài khoảng 18 mm có vết gia công.',
        'He was male, about 1.7 m tall, and died at around 35; he was buried in a flexed position inside the cave. He had an extra rib in the neck region, something very few people have. That rib was broken and shows signs of infection, and right beside it lay a worked quartz point about 18 mm long.',
      ),
      l(
        'Theo nhóm nghiên cứu, mũi nhọn đã găm vào cổ và làm gãy xương sườn. Vết thương không gây chết ngay: ông còn sống thêm nhiều tuần đến vài tháng rồi mất vì nhiễm trùng. Việc ông sống được lâu như vậy và được chôn cất cẩn thận gợi ý rằng có người chăm sóc ông.',
        'According to the team, the point struck the neck and broke the rib. The wound did not kill at once: he lived on for weeks to months before dying of infection. That he survived so long and was carefully buried suggests others were looking after him.',
      ),
    ],
    scholarly: [
      l(
        'Xương không còn đủ collagen để định tuổi trực tiếp. Niên đại 12.500 - 12.000 năm là từ các mẫu than nằm cạnh mộ. Báo chí trong nước thường làm tròn thành "13.000 năm" và gọi là "chiến binh Tràng An"; đó là tên gọi của truyền thông, không phải kết luận của bài nghiên cứu.',
        'The bones kept too little collagen for direct dating. The age of 12,500 - 12,000 years comes from charcoal samples beside the burial. Vietnamese media often round it to "13,000 years" and call him the "Tràng An warrior"; that is a media label, not a conclusion of the study.',
      ),
      l(
        'Mũi thạch anh không giống công cụ đá nào khác ở hang này hay các di chỉ lân cận, nên nhóm tác giả cho rằng nó đến từ một nhóm người khác và đây có thể là bằng chứng sớm nhất về xung đột giữa người với người ở Đông Nam Á lục địa. Một số nhà nghiên cứu ngoài nhóm cho rằng chưa đủ chứng cứ để phân biệt bạo lực với tai nạn.',
        'The quartz point matches no other stone tool from this cave or nearby sites, so the authors argue it came from another group and that this may be the earliest evidence of conflict between people in mainland Southeast Asia. Some researchers outside the team say the evidence cannot yet tell violence from accident.',
      ),
      l(
        'ADN ty thể cho thấy dòng mẹ của ông thuộc nhóm săn bắt hái lượm bản địa, hậu duệ của những lớp người đến vùng này sớm nhất. Kết quả được công bố trên tạp chí Proceedings of the Royal Society B tháng 8/2025 và giới thiệu tại Ninh Bình tháng 9/2025.',
        'Mitochondrial DNA places his maternal line among local hunter-gatherers descended from the earliest people to reach the region. The results were published in Proceedings of the Royal Society B in August 2025 and presented in Ninh Bình in September 2025.',
      ),
    ],
    sources: ['stimpson2025', 'nhm-tbh1', 'ls-tbh1', 'vne-tbh1'],
  },
  {
    slug: 'bac-son',
    period: 'do-da',
    kind: 'culture',
    name: l('Văn hóa Bắc Sơn', 'Bắc Sơn culture'),
    date: l('khoảng 12.000 - 5.000 năm trước', 'c. 12,000 - 5,000 years ago'),
    sort: 12000,
    place: l('Bắc Sơn, Lạng Sơn', 'Bắc Sơn, Lạng Sơn'),
    coord: [106.32, 21.9],
    evidence: ['arch'],
    summary: l(
      'Văn hóa sơ kỳ đá mới ở vùng núi đá vôi Đông Bắc, đặc trưng bởi rìu mài lưỡi và những viên đá có rãnh song song gọi là "dấu Bắc Sơn".',
      'An Early Neolithic culture of the northeastern limestone mountains, marked by edge-ground axes and grooved stones known as "Bắc Sơn marks".',
    ),
    detail: [
      l(
        'Các hang ở sơn khối Bắc Sơn được nghiên cứu từ thập niên 1920. Công cụ tiêu biểu là rìu làm từ cuội, ghè đẽo thân và mài sắc ở lưỡi. "Dấu Bắc Sơn" là những thỏi đá có hai rãnh lõm song song, nhiều khả năng là dấu vết của việc mài công cụ.',
        'The caves of the Bắc Sơn massif have been studied since the 1920s. The typical tool is an axe made on a pebble, flaked on the body and ground sharp at the edge. "Bắc Sơn marks" are stone pieces with two parallel grooves, most likely traces of tool grinding.',
      ),
      l(
        'Cư dân Bắc Sơn vẫn sống trong hang, ăn ốc, săn thú và thu lượm hạt quả. Ở tầng muộn đã có đồ gốm thô. Năm 2023, cuộc khai quật hang Ngườm Sâu (Lạng Sơn) thu được khoảng 900 hiện vật đá thuộc văn hóa này.',
        'Bắc Sơn people still lived in caves, ate snails, hunted and gathered nuts and fruit. Coarse pottery appears in the later layers. In 2023 the excavation of Ngườm Sâu cave (Lạng Sơn) recovered about 900 stone artefacts of this culture.',
      ),
    ],
    scholarly: [
      l(
        'Quan điểm quen thuộc coi Bắc Sơn là bước phát triển tiếp theo của Hòa Bình. Trình Năng Chung (2022) đưa ra giả thuyết khác: Bắc Sơn hình thành độc lập, có nguồn gốc riêng, và chủ nhân của nó đã ở vùng núi Đông Bắc trước khi cư dân Hòa Bình tới. Ông cũng nêu rõ giả thuyết này cần thêm niên đại tuyệt đối để kiểm chứng.',
        'The familiar view treats Bắc Sơn as the next stage after Hòa Bình. Trình Năng Chung (2022) proposes otherwise: Bắc Sơn arose independently with its own origin, and its makers lived in the northeastern mountains before Hoabinhian groups arrived. He also states that this hypothesis needs more absolute dates to be tested.',
      ),
    ],
    sources: ['chung2022', 'boriskovsky'],
  },
  {
    slug: 'cai-beo',
    period: 'do-da',
    kind: 'culture',
    name: l('Cái Bèo, Đa Bút và Quỳnh Văn', 'Cái Bèo, Đa Bút and Quỳnh Văn'),
    date: l('khoảng 7.000 - 4.000 năm trước', 'c. 7,000 - 4,000 years ago'),
    sort: 7000,
    place: l('Cát Bà (Hải Phòng), Thanh Hóa, Nghệ An', 'Cát Bà (Hải Phòng), Thanh Hóa, Nghệ An'),
    coord: [107.05, 20.73],
    evidence: ['arch'],
    summary: l(
      'Ba văn hóa trung kỳ đá mới của những cộng đồng đã rời hang động xuống sống ở ven biển và đồng bằng, khai thác biển và làm đồ gốm.',
      'Three Middle Neolithic cultures of communities that had left the caves for the coast and the plains, exploiting the sea and making pottery.',
    ),
    detail: [
      l(
        'Văn hóa Cái Bèo ở vùng biển Đông Bắc có niên đại khoảng 7.000 - 4.000 năm trước. Văn hóa Đa Bút ở Thanh Hóa tồn tại hơn 3.000 năm và trải qua ba giai đoạn, từ cư trú trong hang đến cư trú ngoài trời, từ rìu mài lưỡi đến rìu mài toàn thân. Văn hóa Quỳnh Văn ở Nghệ An để lại những cồn sò điệp lớn ven biển.',
        'The Cái Bèo culture of the northeastern coast dates to about 7,000 - 4,000 years ago. The Đa Bút culture in Thanh Hóa lasted more than 3,000 years through three phases, from cave to open-air settlement and from edge-ground to fully polished axes. The Quỳnh Văn culture in Nghệ An left large coastal shell mounds.',
      ),
    ],
    scholarly: [
      l(
        'Các tác giả Việt Nam cho rằng ba văn hóa này có nguồn gốc từ Hòa Bình và đặt nền cho truyền thống khai thác biển thời tiền sử. Niên đại của từng di chỉ dựa trên số ít mẫu carbon phóng xạ, nên khung thời gian nêu ở đây chỉ là ước lượng.',
        'Vietnamese authors hold that these three cultures descend from the Hoabinhian and laid the base for prehistoric maritime adaptation. Individual sites rest on few radiocarbon samples, so the ranges given here are estimates.',
      ),
    ],
    sources: ['vss2021'],
  },

  // ---------- THỜI KIM KHÍ ----------
  {
    slug: 'phung-nguyen',
    period: 'kim-khi',
    kind: 'culture',
    name: l('Văn hóa Phùng Nguyên', 'Phùng Nguyên culture'),
    date: l('khoảng 2000 - 1500 TCN', 'c. 2000 - 1500 BCE'),
    sort: 4000,
    place: l('Lâm Thao, Phú Thọ', 'Lâm Thao, Phú Thọ'),
    coord: [105.3, 21.3],
    evidence: ['arch'],
    summary: l(
      'Văn hóa mở đầu thời đại đồng thau ở lưu vực sông Hồng. Cư dân Phùng Nguyên là những nông dân làm đồ đá mài tinh xảo, đồ gốm hoa văn đẹp và bắt đầu biết đến hợp kim đồng.',
      'The culture that opens the Bronze Age in the Red River basin. Phùng Nguyên people were farmers who made finely polished stone tools and decorated pottery and began to know copper alloys.',
    ),
    detail: [
      l(
        'Di chỉ tiêu biểu nằm ở xã Kinh Kệ, huyện Lâm Thao, tỉnh Phú Thọ, được phát hiện và khai quật vào các năm 1958 - 1959. Các làng Phùng Nguyên thường nằm trên những gò đất cao hơn xung quanh vài mét, gần sông suối.',
        'The type site is in Kinh Kệ commune, Lâm Thao district, Phú Thọ province, discovered and excavated in 1958 - 1959. Phùng Nguyên villages usually sit on mounds a few metres above the surrounding land, near rivers and streams.',
      ),
      l(
        'Đồ đá rất phong phú: rìu, bôn mài nhẵn, vũ khí và đồ trang sức. Đồ gốm làm bằng bàn xoay, trang trí hoa văn khắc vạch hình chữ S và các tam giác đối xứng. Ở một số di chỉ đã tìm thấy cục đồng và gỉ đồng, dấu hiệu sớm nhất của nghề luyện kim.',
        'Stone artefacts are abundant: polished axes and adzes, weapons and ornaments. Pottery was wheel-made and decorated with incised S-patterns and symmetrical triangles. At some sites lumps of bronze and verdigris were found, the earliest signs of metallurgy.',
      ),
    ],
    scholarly: [
      l(
        'Xếp Phùng Nguyên vào hậu kỳ đá mới hay sơ kỳ đồng thau vẫn còn bàn cãi, vì đồ đồng thành phẩm rất hiếm. Bách khoa Universalis ghi rằng niên đại của văn hóa này còn tranh luận và chia nó thành hai pha, pha sau (khoảng 1500 - 1000 TCN) mới thật sự thuộc thời đại đồng.',
        'Whether Phùng Nguyên belongs to the Late Neolithic or the Early Bronze Age is still debated, because finished bronze objects are very rare. Universalis notes that its dating is controversial and splits it into two phases, with only the later one (c. 1500 - 1000 BCE) truly in the Bronze Age.',
      ),
      l(
        'Hoa văn gốm Phùng Nguyên được xem là nguồn gốc của các mô típ trang trí trên đồ đồng Đông Sơn sau này, một trong những lý lẽ chính cho thuyết Đông Sơn phát triển tại chỗ.',
        'Phùng Nguyên pottery designs are regarded as the source of the motifs on later Đông Sơn bronzes, one of the main arguments for a local development of Đông Sơn.',
      ),
    ],
    sources: ['nmh-predongson', 'wiki-phungnguyen', 'universalis'],
  },
  {
    slug: 'dong-dau-go-mun',
    period: 'kim-khi',
    kind: 'culture',
    name: l('Văn hóa Đồng Đậu và Gò Mun', 'Đồng Đậu and Gò Mun cultures'),
    date: l('khoảng 1500 - 800 TCN', 'c. 1500 - 800 BCE'),
    sort: 3500,
    place: l('Yên Lạc (Vĩnh Phúc), Phú Thọ', 'Yên Lạc (Vĩnh Phúc), Phú Thọ'),
    coord: [105.57, 21.23],
    evidence: ['arch'],
    summary: l(
      'Hai giai đoạn nối giữa Phùng Nguyên và Đông Sơn. Đây là lúc đồ đồng thay dần đồ đá trong đời sống của cư dân sông Hồng.',
      'Two phases linking Phùng Nguyên and Đông Sơn. This is when bronze gradually replaced stone in the life of Red River communities.',
    ),
    detail: [
      l(
        'Văn hóa Đồng Đậu (khoảng 1500 - 1000 TCN) mang tên di chỉ ở Yên Lạc, Vĩnh Phúc, phát hiện năm 1962. Đồ đá ít đi và làm kém kỹ hơn, trong khi mũi tên và mũi giáo bằng đồng xuất hiện ở nhiều di chỉ. Gốm trang trí hoa văn sóng nước và vòng tròn đồng tâm.',
        'The Đồng Đậu culture (c. 1500 - 1000 BCE) is named after a site in Yên Lạc, Vĩnh Phúc, discovered in 1962. Stone tools become fewer and less carefully made, while bronze arrowheads and spearheads appear at many sites. Pottery is decorated with wave patterns and concentric circles.',
      ),
      l(
        'Văn hóa Gò Mun (khoảng 1000 - 800 TCN) mang tên di chỉ ở Tứ Xã, Phú Thọ, phát hiện năm 1961. Đồ đồng tăng mạnh, có thêm lưỡi câu, mũi tên, giáo. Cư dân Gò Mun đã mở rộng địa bàn xuống đồng bằng sông Hồng.',
        'The Gò Mun culture (c. 1000 - 800 BCE) is named after a site in Tứ Xã, Phú Thọ, discovered in 1961. Bronze production rose sharply, adding fish-hooks, arrowheads and spears. Gò Mun people expanded into the Red River delta.',
      ),
    ],
    scholarly: [
      l(
        'Chuỗi Phùng Nguyên - Đồng Đậu - Gò Mun - Đông Sơn được dựng chủ yếu từ địa tầng của các di chỉ nhiều lớp và từ sự biến đổi của đồ gốm. Mốc năm của từng giai đoạn là quy ước làm tròn, các nguồn có thể lệch nhau một vài thế kỷ.',
        'The Phùng Nguyên - Đồng Đậu - Gò Mun - Đông Sơn sequence is built mainly from the stratigraphy of multi-layer sites and from changes in pottery. The year boundaries are rounded conventions; sources may differ by a few centuries.',
      ),
    ],
    sources: ['nmh-predongson', 'wiki-phungnguyen', 'universalis'],
  },
  {
    slug: 'dong-son',
    period: 'kim-khi',
    kind: 'culture',
    name: l('Văn hóa Đông Sơn', 'Đông Sơn culture'),
    date: l('khoảng 700 TCN - thế kỷ 1 SCN', 'c. 700 BCE - 1st century CE'),
    sort: 2700,
    place: l('Đông Sơn, Thanh Hóa', 'Đông Sơn, Thanh Hóa'),
    coord: [105.78, 19.85],
    evidence: ['arch'],
    summary: l(
      'Văn hóa đồ đồng rực rỡ nhất Đông Nam Á cổ đại, phân bố ở lưu vực sông Hồng, sông Mã và sông Cả. Trống đồng Đông Sơn là biểu tượng của nó.',
      'The most brilliant bronze culture of ancient Southeast Asia, spread across the Red, Mã and Cả river basins. The Đông Sơn bronze drum is its emblem.',
    ),
    detail: [
      l(
        'Tên gọi lấy từ làng Đông Sơn bên bờ sông Mã (Thanh Hóa), nơi năm 1924 người ta tình cờ tìm thấy một số đồ đồng cổ. Cư dân Đông Sơn trồng lúa nước, dùng lưỡi cày đồng, đúc trống, thạp, rìu, giáo, dao găm. So với các giai đoạn trước, kỹ thuật pha hợp kim và đúc khuôn tiến rất xa. Họ cũng đã có đồ sắt.',
        'The name comes from Đông Sơn village on the Mã River (Thanh Hóa), where ancient bronzes were found by chance in 1924. Đông Sơn people grew wet rice, used bronze ploughshares and cast drums, situlae, axes, spears and daggers. Compared with earlier phases, alloying and casting advanced greatly. They also had iron.',
      ),
      l(
        'Trống Đông Sơn đã được tìm thấy ở Lào, Thái Lan, Malaysia, Indonesia và cả Timor-Leste, cho thấy mạng lưới trao đổi đường biển và đường sông rất rộng. Hậu Hán thư chép rằng tướng Mã Viện đã thu trống đồng của người Lạc Việt để nấu chảy đúc ngựa.',
        'Đông Sơn drums have been found in Laos, Thailand, Malaysia, Indonesia and even Timor-Leste, showing wide exchange networks by sea and river. The Book of the Later Han records that the general Ma Yuan seized bronze drums from the Lạc Việt and melted them to cast a horse.',
      ),
    ],
    scholarly: [
      l(
        'Mốc mở đầu của Đông Sơn không thống nhất: Wikipedia ghi khoảng 1000 TCN, nhiều tài liệu Việt Nam ghi khoảng 700 TCN, các mẫu carbon phóng xạ từ khu cư trú và mộ táng tập trung ở thế kỷ 6 - 2 TCN. Trang này dùng mốc 700 TCN và ghi chú sự khác biệt.',
        'The start of Đông Sơn is not agreed: Wikipedia gives about 1000 BCE, many Vietnamese works about 700 BCE, and radiocarbon samples from settlements and cemeteries cluster in the 6th - 2nd centuries BCE. This site uses 700 BCE and notes the difference.',
      ),
      l(
        'Về nguồn gốc, tranh luận kinh điển là giữa thuyết du nhập từ bên ngoài của các học giả châu Âu đầu thế kỷ 20 và thuyết phát triển tại chỗ của giới khảo cổ Việt Nam. Chuỗi tiền Đông Sơn phát hiện từ thập niên 1960 khiến thuyết tại chỗ có cơ sở vững hơn. Một hướng nghiên cứu khác xem trống đồng là truyền thống chung của cư dân bản địa ở Bắc Việt Nam và Vân Nam.',
        'On origins, the classic debate is between the external-origin theories of early 20th-century European scholars and the local-development view of Vietnamese archaeologists. The pre-Đông Sơn sequence found from the 1960s gives the local view a firmer base. Another line of research sees bronze drums as a shared tradition of indigenous peoples in northern Vietnam and Yunnan.',
      ),
    ],
    sources: ['wiki-dongson', 'ht-dongson', 'wiki-drum', 'britannica', 'nmh-predongson'],
  },
  {
    slug: 'trong-dong-ngoc-lu',
    period: 'kim-khi',
    kind: 'artifact',
    name: l('Trống đồng Ngọc Lũ', 'The Ngọc Lũ bronze drum'),
    date: l('khoảng thế kỷ 3 - 2 TCN', 'c. 3rd - 2nd century BCE'),
    sort: 2250,
    place: l('Hà Nam (nay lưu tại Bảo tàng Lịch sử Quốc gia, Hà Nội)', 'Hà Nam (now in the National Museum of History, Hanoi)'),
    coord: [106.03, 20.5],
    evidence: ['arch'],
    summary: l(
      'Chiếc trống đồng Đông Sơn nổi tiếng nhất, được coi là đẹp và hoàn chỉnh nhất. Mặt trống có ngôi sao 14 cánh ở giữa và các vành hoa văn kể lại đời sống, lễ hội của người xưa.',
      'The most famous Đông Sơn bronze drum, considered the finest and most complete. Its face has a 14-rayed star at the centre and bands of decoration showing the life and festivals of its makers.',
    ),
    detail: [
      l(
        'Trống được phát hiện tình cờ năm 1893 khi người dân đắp đê Trần Thủy ở Hà Nam, rồi được đưa về thờ trong đình làng Ngọc Lũ. Tháng 4 năm 1903, Trường Viễn Đông Bác cổ đưa trống về bảo tàng ở Hà Nội, nay là Bảo tàng Lịch sử Quốc gia. Trống là bảo vật quốc gia.',
        'The drum was found by chance in 1893 when villagers were building the Trần Thủy dyke in Hà Nam, and was then kept for worship in the Ngọc Lũ communal house. In April 1903 the École française d\'Extrême-Orient moved it to the museum in Hanoi, now the National Museum of History. It is a national treasure.',
      ),
      l(
        'Trống có bốn phần: mặt, tang (phần phình phía trên), thân hình trụ và chân loe. Các vành trong trên mặt trống là hoa văn hình học. Vành thứ sáu khắc cảnh người đội mũ lông chim nhảy múa, nhà sàn, người giã gạo và người đánh trống. Vành ngoài có hươu và chim bay. Trên tang trống là hình thuyền chở chiến binh.',
        'The drum has four parts: the face (tympanum), the bulging upper barrel, the cylindrical body and the flared foot. The inner bands on the face are geometric. The sixth band shows feather-crowned dancers, stilt houses, people pounding rice and people beating drums. The outer bands have deer and flying birds. The barrel carries boats with warriors.',
      ),
    ],
    scholarly: [
      l(
        'Phần lớn trống Đông Sơn có ngôi sao 12 cánh. Chỉ một nhóm nhỏ gồm Ngọc Lũ, Hoàng Hạ, Sông Đà, Cổ Loa có 14 cánh, và đây cũng là nhóm trống được xếp vào loại sớm và đẹp nhất. Ngôi sao thường được diễn giải là mặt trời, nhưng không có văn bản cùng thời nào xác nhận ý nghĩa đó.',
        'Most Đông Sơn drums have a 12-rayed star. Only a small group including Ngọc Lũ, Hoàng Hạ, Sông Đà and Cổ Loa has 14 rays, and this group is also ranked among the earliest and finest. The star is usually read as the sun, but no contemporary text confirms that meaning.',
      ),
      l(
        'Niên đại thế kỷ 3 - 2 TCN là theo Smarthistory. Trống không được tìm thấy trong một lớp khảo cổ có thể định tuổi, nên niên đại dựa trên so sánh kiểu dáng. Mô hình 3D trên trang này là bản dựng giản lược theo mô tả, không sao chép chính xác từng hoa văn.',
        'The date of the 3rd - 2nd century BCE follows Smarthistory. The drum was not found in a datable archaeological layer, so the date rests on stylistic comparison. The 3D model on this site is a simplified reconstruction from descriptions and does not reproduce each motif exactly.',
      ),
    ],
    model: 'drum',
    sources: ['nmh-ngoclu', 'smarthistory', 'wiki-drum'],
  },
  {
    slug: 'sa-huynh',
    period: 'kim-khi',
    kind: 'culture',
    name: l('Văn hóa Sa Huỳnh', 'Sa Huỳnh culture'),
    date: l('khoảng 1000 TCN - 200 SCN', 'c. 1000 BCE - 200 CE'),
    sort: 3000,
    place: l('Sa Huỳnh, Quảng Ngãi', 'Sa Huỳnh, Quảng Ngãi'),
    coord: [109.07, 14.66],
    evidence: ['arch'],
    summary: l(
      'Văn hóa của cư dân ven biển miền Trung, nổi bật với tục chôn người chết trong chum gốm, đồ sắt và đồ trang sức bằng thủy tinh, mã não, đá ngọc. Sa Huỳnh thường được coi là tiền thân của Champa.',
      'A culture of the central coast, notable for burying the dead in pottery jars, for iron tools and for ornaments of glass, carnelian and nephrite. Sa Huỳnh is usually seen as the forerunner of Champa.',
    ),
    detail: [
      l(
        'Năm 1909, một viên chức thuế quan người Pháp báo tin về những chiếc chum chôn ở cồn cát Sa Huỳnh (Quảng Ngãi). Sau đó Henri Parmentier mô tả chúng, và các bãi mộ chum tương tự lần lượt được tìm thấy dọc miền Trung, từ Quảng Bình trở vào.',
        'In 1909 a French customs official reported jars buried in the dunes at Sa Huỳnh (Quảng Ngãi). Henri Parmentier later described them, and similar jar-burial fields were then found along the central coast from Quảng Bình southwards.',
      ),
      l(
        'Người Sa Huỳnh hỏa táng người lớn rồi đặt tro cốt vào chum có nắp, kèm đồ tùy táng thường bị đập vỡ theo nghi lễ. Trong chum có nồi gốm, rìu, kiếm, giáo, dao bằng sắt và rất nhiều hạt chuỗi. Hai loại trang sức đặc trưng là khuyên tai ba mấu và khuyên tai hai đầu thú.',
        'Sa Huỳnh people cremated adults and placed the remains in lidded jars, with grave goods that were often ritually broken. The jars contain pottery, iron axes, swords, spears and knives, and many beads. Two characteristic ornaments are the three-pointed earring and the double-headed animal earring.',
      ),
      l(
        'Khuyên tai và hạt chuỗi cùng kiểu đã được tìm thấy ở Philippines, Đài Loan, Thái Lan và Borneo. Giới nghiên cứu gọi mạng lưới này là vùng tương tác Sa Huỳnh - Kalanay.',
        'Earrings and beads of the same types have been found in the Philippines, Taiwan, Thailand and Borneo. Researchers call this network the Sa Huỳnh - Kalanay Interaction Sphere.',
      ),
    ],
    scholarly: [
      l(
        'Khung niên đại có hai cách ghi: khoảng 1000 TCN - 200 SCN (rộng, gồm cả các giai đoạn tiền Sa Huỳnh) và khoảng 500 TCN - 100 SCN (hẹp, chỉ giai đoạn mộ chum điển hình, theo Glover và Nguyễn Kim Dung). Giai đoạn mở đầu của văn hóa này còn ít được biết.',
        'Two ranges are in use: about 1000 BCE - 200 CE (broad, including pre-Sa Huỳnh phases) and about 500 BCE - 100 CE (narrow, the classic jar-burial phase, following Glover and Nguyễn Kim Dung). The beginning of the culture is poorly known.',
      ),
      l(
        'Mối liên hệ Sa Huỳnh - Champa dựa trên sự trùng khớp về địa bàn và các di chỉ chuyển tiếp như Gò Cấm gần Trà Kiệu. Chủ nhân Sa Huỳnh nhiều khả năng nói ngôn ngữ Nam Đảo, nhưng đây là suy luận chứ chưa có bằng chứng trực tiếp.',
        'The Sa Huỳnh - Champa link rests on shared territory and on transitional sites such as Gò Cấm near Trà Kiệu. Sa Huỳnh people most likely spoke an Austronesian language, but this is an inference without direct evidence.',
      ),
    ],
    model: 'jar',
    sources: ['wiki-sahuynh', 'glover', 'lmd2023'],
  },
  {
    slug: 'dong-nai',
    period: 'kim-khi',
    kind: 'culture',
    name: l('Văn hóa Đồng Nai', 'Đồng Nai culture'),
    date: l('khoảng 3000 TCN - đầu Công nguyên', 'c. 3000 BCE - start of the Common Era'),
    sort: 3200,
    place: l('Đông Nam Bộ', 'Southeastern Vietnam'),
    coord: [106.8, 11.07],
    evidence: ['arch'],
    summary: l(
      'Văn hóa thời kim khí ở lưu vực sông Đồng Nai, một trung tâm đúc đồng sớm với khuôn đúc bằng sa thạch. Đây là nền của văn hóa Óc Eo ở Nam Bộ về sau.',
      'A Metal Age culture of the Đồng Nai river basin, an early bronze-casting centre using sandstone moulds. It is the base of the later Óc Eo culture in the south.',
    ),
    detail: [
      l(
        'Cư dân Đồng Nai sống trên thềm phù sa cổ và dần tiến xuống vùng ngập mặn ven biển, dựng nhà trên giồng đất và nhà sàn. Các cuộc khai quật thu được rất nhiều khuôn đúc hai mang bằng sa thạch để đúc rìu và giáo, cho thấy nghề đúc đồng làm tại chỗ.',
        'Đồng Nai people lived on the old alluvial terraces and gradually moved into the coastal mangrove zone, building on sand ridges and on stilts. Excavations have recovered many two-piece sandstone moulds for casting axes and spears, showing that bronze was cast locally.',
      ),
      l(
        'Di chỉ Dốc Chùa (Bình Dương), khai quật năm 1977, nổi tiếng với bộ khuôn đúc và một tượng thú nhỏ bằng đồng khoảng 2.500 năm tuổi. Ở giai đoạn muộn, các nghĩa địa mộ chum như Giồng Cá Vồ (Cần Giờ) có đồ trang sức bằng vàng, thủy tinh và đá quý, cùng kiểu với Sa Huỳnh.',
        'The Dốc Chùa site (Bình Dương), excavated in 1977, is known for its moulds and a small bronze animal figure about 2,500 years old. In the late phase, jar-burial cemeteries such as Giồng Cá Vồ (Cần Giờ) contain ornaments of gold, glass and gemstones of the same types as Sa Huỳnh.',
      ),
    ],
    scholarly: [
      l(
        'Khung niên đại rộng 5.000 - 2.000 năm trước là theo các tác giả ở Đại học Quốc gia TP. Hồ Chí Minh. Nhiều bài phổ thông chỉ ghi 2.500 - 2.000 năm trước, tức giai đoạn phát triển cao nhất. Phạm Đức Mạnh cho rằng Nam Bộ là một trung tâm luyện kim sớm của Đông Nam Á lục địa, đồng thời có những nét riêng không thuộc Đông Sơn.',
        'The broad range of 5,000 - 2,000 years ago follows authors at Vietnam National University, Ho Chi Minh City. Many popular articles give only 2,500 - 2,000 years ago, the peak phase. Phạm Đức Mạnh argues that the south was an early metallurgical centre of mainland Southeast Asia with features of its own, distinct from Đông Sơn.',
      ),
    ],
    sources: ['manh2014', 'kt-docchua', 'wiki-sahuynh'],
  },

  // ---------- VĂN LANG ----------
  {
    slug: 'lac-long-quan-au-co',
    period: 'van-lang',
    kind: 'legend',
    name: l('Lạc Long Quân và Âu Cơ', 'Lạc Long Quân and Âu Cơ'),
    date: l('truyền thuyết khởi nguyên', 'origin legend'),
    sort: 4800,
    evidence: ['legend', 'chron'],
    summary: l(
      'Truyền thuyết về nguồn gốc người Việt: Lạc Long Quân thuộc giống Rồng lấy Âu Cơ thuộc giống Tiên, sinh ra bọc trăm trứng nở thành trăm người con. Từ đó người Việt tự gọi mình là con Rồng cháu Tiên.',
      'The origin legend of the Vietnamese: Lạc Long Quân of the Dragon line married Âu Cơ of the Immortal line, who bore a sac of one hundred eggs that hatched into one hundred sons. The Vietnamese call themselves children of the Dragon and the Immortal.',
    ),
    detail: [
      l(
        'Theo truyện Hồng Bàng thị trong Lĩnh Nam chích quái, Kinh Dương Vương cai quản phương Nam, gọi là nước Xích Quỷ, sinh ra Lạc Long Quân. Lạc Long Quân và Âu Cơ có trăm người con. Năm mươi người theo cha xuống biển, năm mươi người theo mẹ lên núi. Người con cả được tôn làm vua, hiệu là Hùng Vương, đặt tên nước là Văn Lang.',
        'According to the tale of the Hồng Bàng clan in the Lĩnh Nam chích quái, Kinh Dương Vương ruled the South, called Xích Quỷ, and fathered Lạc Long Quân. Lạc Long Quân and Âu Cơ had one hundred sons. Fifty followed their father to the sea and fifty followed their mother to the mountains. The eldest was made king with the title Hùng Vương and named the realm Văn Lang.',
      ),
    ],
    scholarly: [
      l(
        'Đây là thần thoại, không phải ghi chép sự kiện. Bản văn sớm nhất còn lại thuộc thế kỷ 14 - 15, tức muộn hơn thời đại được kể tới hai nghìn năm. Sử thần Ngô Sĩ Liên đưa truyện vào phần Ngoại kỷ của Đại Việt sử ký toàn thư năm 1479, kèm lời bàn rằng chuyện có phần hoang đường.',
        'This is myth, not a record of events. The earliest surviving text is from the 14th - 15th centuries, some two thousand years after the age it describes. The court historian Ngô Sĩ Liên placed the tale in the Outer Annals of the Đại Việt sử ký toàn thư in 1479, with a comment that parts of it are fanciful.',
      ),
      l(
        'Mô típ sinh ra từ trứng hay từ một bọc chung cũng có ở nhiều dân tộc Đông Nam Á. Các nhà nghiên cứu xem việc ghi lại truyền thuyết này từ thế kỷ 13 - 15 là một phần của quá trình Đại Việt xây dựng lịch sử riêng, ngang hàng với sử Trung Hoa.',
        'The motif of birth from eggs or a shared sac occurs among many Southeast Asian peoples. Researchers see the writing down of this legend in the 13th - 15th centuries as part of Đại Việt building a history of its own, on a par with Chinese history.',
      ),
    ],
    sources: ['linhnam', 'toanthu', 'hungmyth', 'wiki-hung'],
  },
  {
    slug: 'hung-vuong',
    period: 'van-lang',
    kind: 'figure',
    name: l('Các vua Hùng', 'The Hùng kings'),
    date: l('truyền thống: 2879 - 258 TCN', 'traditional dates: 2879 - 258 BCE'),
    sort: 2650,
    place: l('Phong Châu (Việt Trì, Phú Thọ)', 'Phong Châu (Việt Trì, Phú Thọ)'),
    coord: [105.32, 21.37],
    evidence: ['legend', 'chron'],
    summary: l(
      'Mười tám đời vua nối nhau trị vì nước Văn Lang, đều mang hiệu Hùng Vương. Người Việt tôn các vua Hùng là Quốc Tổ.',
      'Eighteen successive rulers of Văn Lang, all titled Hùng Vương. The Vietnamese honour the Hùng kings as the founding ancestors of the nation.',
    ),
    detail: [
      l(
        'Sử cũ chép vua Hùng đóng đô ở Phong Châu, nơi sông Hồng, sông Lô và sông Đà gặp nhau. Giúp vua có lạc hầu, cai quản các bộ là lạc tướng. Con trai vua gọi là quan lang, con gái gọi là mỵ nương. Ngôi vua cha truyền con nối.',
        'The old chronicles place the Hùng capital at Phong Châu, where the Red, Lô and Đà rivers meet. The king was assisted by lạc hầu, and the regions were governed by lạc tướng. Princes were called quan lang and princesses mỵ nương. The throne passed from father to son.',
      ),
      l(
        'Đời Hùng Vương thứ 18, Thục Phán đánh chiếm Văn Lang và lập nước Âu Lạc. Khu di tích Đền Hùng trên núi Nghĩa Lĩnh (Phú Thọ) là nơi thờ các vua Hùng. Tín ngưỡng thờ cúng Hùng Vương là di sản văn hóa phi vật thể được UNESCO ghi danh.',
        'In the time of the 18th Hùng king, Thục Phán conquered Văn Lang and founded Âu Lạc. The Hùng Temple complex on Nghĩa Lĩnh mountain (Phú Thọ) is where the Hùng kings are worshipped. The worship of the Hùng kings is inscribed by UNESCO as intangible cultural heritage.',
      ),
    ],
    scholarly: [
      l(
        'Học giả Pháp Henri Maspero và học giả Nguyễn Văn Tố cho rằng chữ Hùng (雄) là do chép nhầm từ chữ Lạc (雒), vì các sách Trung Hoa sớm hơn chép là "Lạc vương", "Lạc hầu", "Lạc tướng". Nếu vậy, danh hiệu gốc là "vua Lạc". Giả thuyết này có sức thuyết phục về mặt văn tự nhưng chưa được mọi người chấp nhận.',
        'The French scholar Henri Maspero and the Vietnamese scholar Nguyễn Văn Tố proposed that the character Hùng (雄) is a scribal error for Lạc (雒), since earlier Chinese texts write "Lạc king", "Lạc lords" and "Lạc generals". If so, the original title was "Lạc king". The hypothesis is persuasive on textual grounds but not universally accepted.',
      ),
      l(
        'Con số 18 đời cho hơn 2.600 năm không khớp với thực tế. Một số tác giả hiểu đó là 18 chi (ngành) vua chứ không phải 18 cá nhân. Khảo cổ học chưa tìm thấy kinh đô hay lăng mộ nào có thể gắn chắc chắn với các vua Hùng, nhưng mật độ di tích Đông Sơn quanh Việt Trì cho thấy đây đúng là một trung tâm đông dân thời đó.',
        'Eighteen reigns for more than 2,600 years does not match reality. Some authors read them as 18 lines of kings, not 18 individuals. Archaeology has found no capital or tomb that can be firmly tied to the Hùng kings, but the density of Đông Sơn sites around Việt Trì shows that it was indeed a populous centre at the time.',
      ),
    ],
    sources: ['toanthu', 'wiki-hung', 'hungmyth', 'wiki-dongson'],
  },

  // ---------- ÂU LẠC ----------
  {
    slug: 'an-duong-vuong',
    period: 'au-lac',
    kind: 'figure',
    name: l('An Dương Vương (Thục Phán)', 'An Dương Vương (Thục Phán)'),
    date: l('trị vì 257 - 208 TCN hoặc 208 - 179 TCN', 'reigned 257 - 208 BCE or 208 - 179 BCE'),
    sort: 2210,
    place: l('Cổ Loa, Hà Nội', 'Cổ Loa, Hanoi'),
    coord: [105.9, 21.14],
    evidence: ['chron', 'legend'],
    summary: l(
      'Vị vua lập nước Âu Lạc và xây thành Cổ Loa. Ông là vị vua đầu tiên của sử Việt có tên trong cả sử Việt lẫn sử Trung Hoa.',
      'The king who founded Âu Lạc and built Cổ Loa. He is the first Vietnamese ruler named in both Vietnamese and Chinese histories.',
    ),
    detail: [
      l(
        'Thục Phán là thủ lĩnh người Âu Việt ở vùng núi phía bắc. Ông thắng vua Hùng cuối cùng, hợp nhất Âu Việt với Lạc Việt thành nước Âu Lạc và xưng An Dương Vương. Sử cũ kể ông nhiều lần đẩy lui quân Triệu Đà nhờ thành vững và nỏ bắn nhiều mũi tên một lúc do tướng Cao Lỗ chế tạo.',
        'Thục Phán was a leader of the Âu Việt in the northern mountains. He defeated the last Hùng king, joined the Âu Việt and the Lạc Việt into Âu Lạc and took the title An Dương Vương. The chronicles say he repelled Zhao Tuo several times thanks to a strong citadel and a crossbow that shot many bolts at once, built by his general Cao Lỗ.',
      ),
      l(
        'Triệu Đà xin hòa và cho con trai là Trọng Thủy sang ở rể, lấy công chúa Mỵ Châu. Trọng Thủy đánh tráo lẫy nỏ thần rồi về nước. Triệu Đà đem quân sang, nỏ mất hiệu nghiệm, An Dương Vương thua chạy về phía nam cùng Mỵ Châu. Biết con gái vô tình rắc lông ngỗng chỉ đường cho giặc, ông chém nàng rồi đi xuống biển.',
        'Zhao Tuo sued for peace and sent his son Trọng Thủy to marry Princess Mỵ Châu and live at court. Trọng Thủy swapped the trigger of the magic crossbow and went home. Zhao Tuo attacked, the crossbow failed, and An Dương Vương fled south with Mỵ Châu. Learning that his daughter had unknowingly marked the way with goose feathers, he killed her and walked into the sea.',
      ),
    ],
    scholarly: [
      l(
        'Gốc gác Thục Phán là vấn đề chưa ngã ngũ. Các sách xưa chép ông là con vua nước Thục (Tứ Xuyên ngày nay). Sử quan triều Nguyễn trong Cương mục đã nghi ngờ điều này, vì nước Thục cách Văn Lang hàng nghìn dặm núi rừng. Truyền thuyết của người Tày ở Cao Bằng kể ông là con Thục Chế, vua nước Nam Cương ngay phía bắc Văn Lang. Thập niên 1950, Trần Văn Giáp và Đào Duy Anh lại bảo vệ thuyết gốc Thục.',
        'Thục Phán\'s origin is unsettled. Old texts call him a son of the king of Shu (modern Sichuan). The Nguyễn court historians in the Cương mục doubted this, since Shu lay thousands of miles of mountain and forest from Văn Lang. A Tày legend from Cao Bằng makes him the son of Thục Chế, king of Nam Cương just north of Văn Lang. In the 1950s Trần Văn Giáp and Đào Duy Anh again defended the Shu origin.',
      ),
      l(
        'Về niên đại: Toàn thư ghi 257 - 208 TCN, còn Sử ký cho thấy Triệu Đà chỉ thu phục Âu Lạc sau năm 180 TCN. Sử ký cũng không nhắc gì đến nỏ thần hay Mỵ Châu, mà nói Triệu Đà dùng của cải và uy lực để khiến Âu Lạc thần phục. Chuyện tình Mỵ Châu - Trọng Thủy vì vậy được xếp vào truyền thuyết.',
        'On dates: the Toàn thư gives 257 - 208 BCE, while the Shiji shows that Zhao Tuo subdued Âu Lạc only after 180 BCE. The Shiji also says nothing of a magic crossbow or Mỵ Châu; it states that Zhao Tuo used wealth and power to bring Âu Lạc to submission. The story of Mỵ Châu and Trọng Thủy is therefore classed as legend.',
      ),
    ],
    sources: ['toanthu', 'suky', 'cuongmuc', 'wiki-adv', 'wiki-aulac'],
  },
  {
    slug: 'thanh-co-loa',
    period: 'au-lac',
    kind: 'site',
    name: l('Thành Cổ Loa', 'Cổ Loa Citadel'),
    date: l('xây từ khoảng thế kỷ 4 - 3 TCN', 'built from c. 4th - 3rd century BCE'),
    sort: 2300,
    place: l('Đông Anh, Hà Nội', 'Đông Anh, Hanoi'),
    coord: [105.873, 21.113],
    evidence: ['arch', 'chron', 'legend'],
    summary: l(
      'Tòa thành đất ba vòng lũy, kinh đô của Âu Lạc và là đô thị cổ nhất Việt Nam còn dấu tích trên mặt đất. Tên Cổ Loa nghĩa là thành ốc, vì các vòng lũy xoáy như vỏ ốc.',
      'A three-rampart earthen citadel, capital of Âu Lạc and the oldest city in Vietnam with remains above ground. The name Cổ Loa means "ancient spiral", because the ramparts coil like a snail shell.',
    ),
    detail: [
      l(
        'Thành có ba vòng: Thành Ngoại chu vi khoảng 8 km, Thành Trung khoảng 6,5 km, và Thành Nội hình chữ nhật khoảng 1,6 km. Lũy Ngoại hiện còn chỗ cao tới 12 m, chân rộng 25 m. Toàn khu rộng khoảng 600 hecta. Bên ngoài mỗi vòng lũy có hào nước nối với sông Hoàng Giang, vừa để phòng thủ vừa để đi thuyền.',
        'The citadel has three enclosures: the outer about 8 km around, the middle about 6.5 km, and the rectangular inner one about 1.6 km. The outer rampart still stands up to 12 m high and 25 m wide at the base. The whole site covers about 600 hectares. Outside each rampart ran a moat linked to the Hoàng Giang river, for both defence and boat traffic.',
      ),
      l(
        'Các nhà khảo cổ ước tính phải đào đắp hơn hai triệu mét khối đất để dựng thành, và dân số có thể đạt 5.000 đến 10.000 người. Đầu thập niên 1980, một trống đồng nặng 72 kg được tìm thấy cạnh Thành Nội, bên trong chứa khoảng 200 đồ đồng, gồm 96 lưỡi cày. Trước đó, năm 1959, kho mũi tên đồng Cầu Vực với hàng vạn chiếc đã được phát hiện ngay sát thành.',
        'Archaeologists estimate that more than two million cubic metres of earth were moved to build it, and the population may have reached 5,000 to 10,000. In the early 1980s a 72 kg bronze drum was found beside the inner citadel, holding about 200 bronzes including 96 ploughshares. Earlier, in 1959, the Cầu Vực hoard of tens of thousands of bronze arrowheads was found right next to the walls.',
      ),
      l(
        'Tháng 10 năm 2026, Quần thể thành cổ Cổ Loa được đưa vào Danh sách dự kiến Di sản thế giới của UNESCO.',
        'In October 2026 the Complex of Cổ Loa Ancient Citadel was added to the UNESCO World Heritage Tentative List.',
      ),
    ],
    scholarly: [
      l(
        'Câu hỏi chính là ai xây thành và khi nào. Cuộc khai quật cắt ngang lũy Thành Trung năm 2007 - 2008 của Nam C. Kim, Lại Văn Tới và Trịnh Hoàng Hiệp cho thấy lũy được đắp qua ba thời kỳ với năm đợt lớn. Lớp sớm nhất có niên đại khoảng 300 TCN, một đoạn lũy Thành Nội khoảng 400 - 350 TCN. Như vậy phần cốt lõi của thành có trước khi nhà Hán cai trị, và do xã hội bản địa xây.',
        'The central question is who built it and when. The 2007 - 2008 excavation through the middle rampart by Nam C. Kim, Lại Văn Tới and Trịnh Hoàng Hiệp showed three periods with five major building phases. The earliest layers date to about 300 BCE, and a section of the inner rampart to about 400 - 350 BCE. The core of the citadel thus predates Han rule and was built by a local society.',
      ),
      l(
        'Kỹ thuật đắp đất nện có thể chịu ảnh hưởng từ phương bắc, nhưng nghiên cứu về điểm này còn sơ bộ. Kim cho rằng quy mô công trình là bằng chứng của một chính quyền tập trung đủ mạnh để huy động nhân lực rất lớn, tức một nhà nước sơ khai. Mô hình 3D trên trang này là sơ đồ giản lược theo bình đồ, không đúng tỉ lệ chiều cao.',
        'The stamped-earth technique may show northern influence, but studies on this point are preliminary. Kim argues that the scale of the works is evidence of a centralised authority able to mobilise very large labour, that is, an early state. The 3D model on this site is a simplified plan-based sketch with exaggerated height.',
      ),
    ],
    model: 'coloa',
    sources: ['kim2010', 'kim2016', 'wiki-coloa', 'unesco-coloa', 'toanthu'],
  },
];

export const entryBySlug = Object.fromEntries(entries.map((e) => [e.slug, e]));
