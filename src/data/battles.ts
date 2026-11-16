import { l, type L } from './types';

// Diễn biến trận đánh, kể thành từng bước trên bản đồ. Mỗi bước có mốc thời gian, một câu thuật lại
// (chỉ dùng chi tiết đã có trong bài của mục tương ứng) và các đạo quân di chuyển trong bước đó.
// Đường đi là sơ đồ minh họa nối các địa danh, không phải lộ trình chính xác.
// side: 'vn' quân Việt (vàng), 'foe' quân xâm lược (xanh). kind: army bộ binh (lá cờ), fleet thủy quân (thuyền), air máy bay.
// fate: 'lose' đạo quân bị đánh tan ở cuối đường (chìm, mờ dần).
export type LonLat = [number, number];
// act: hành động của đạo quân khi tới nơi (hiện thành biểu tượng): attack tấn công, ambush mai phục, siege vây thành, hold giữ phòng tuyến, retreat rút lui hoặc tháo chạy
export interface Unit { name: L; side: 'vn' | 'foe'; kind: 'army' | 'fleet' | 'air'; path: LonLat[]; fate?: 'lose'; act?: 'attack' | 'ambush' | 'siege' | 'hold' | 'retreat' }
export interface Step { t: L; text: L; units: Unit[]; clash?: LonLat[]; tide?: 'high' | 'low'; stakes?: boolean }
export interface Battle { result: L; steps: Step[]; stakes?: LonLat[]; marks: { at: LonLat; name: L }[] }

const THANG_LONG: LonLat = [105.85, 21.03];
const HUU_NGHI: LonLat = [106.711, 21.97];
const LANG_SON: LonLat = [106.76, 21.85];
const CHI_LANG: LonLat = [106.542, 21.62];
const STAKES: LonLat = [106.785, 20.935];
const NORTH_ROAD: LonLat[] = [HUU_NGHI, LANG_SON, CHI_LANG, [106.25, 21.42]];

export const BATTLES: Record<string, Battle> = {
  'tran-bach-dang-938': {
    result: l('Thủy quân Nam Hán tan, Hoằng Tháo chết, Lưu Cung thu nhặt tàn quân rút về.', 'The Southern Han fleet was destroyed, Hoằng Tháo died, and Liu Gong gathered the survivors and withdrew.'),
    stakes: [STAKES, [106.8, 20.925], [106.77, 20.945]],
    marks: [{ at: STAKES, name: l('Bãi cọc', 'Stakes') }, { at: [107.15, 20.72], name: l('Cửa biển', 'Sea mouth') }],
    steps: [
      { t: l('Cuối năm 938', 'Late 938'), stakes: true, tide: 'high',
        text: l('Ngô Quyền cho đóng cọc lớn, đầu vạt nhọn bịt sắt, ngầm dưới lòng sông gần cửa biển, rồi đặt quân chờ ở thượng nguồn.', 'Ngô Quyền had great iron-tipped stakes driven into the riverbed near the sea mouth, hidden under the water, and waited upstream.'),
        units: [{ name: l('Quân Ngô Quyền', 'Ngô Quyền\'s army'), side: 'vn', kind: 'army', path: [[106.6, 21.07], [106.68, 21.02], [106.73, 20.99]], act: 'ambush' }] },
      { t: l('Triều lên', 'High tide'), tide: 'high',
        text: l('Lúc nước lớn, thuyền nhẹ của Ngô Quyền ra khiêu chiến rồi giả thua chạy. Hoằng Tháo đem thủy quân Nam Hán đuổi theo vào sâu trong sông, qua bãi cọc mà không hay.', 'At high tide Ngô Quyền\'s light boats came out to fight, then fled as if beaten. Hoằng Tháo led the Southern Han fleet after them deep into the river, passing over the stakes unaware.'),
        units: [
          { name: l('Thủy quân Nam Hán (Hoằng Tháo)', 'Southern Han fleet (Hoằng Tháo)'), side: 'foe', kind: 'fleet', path: [[107.15, 20.72], [106.95, 20.8], [106.85, 20.86], STAKES, [106.73, 20.985]] },
          { name: l('Thuyền nhẹ nhử địch', 'Decoy boats'), side: 'vn', kind: 'fleet', path: [[106.86, 20.87], [106.8, 20.93], [106.7, 21.0]], act: 'retreat' },
        ] },
      { t: l('Triều rút', 'Ebb tide'), tide: 'low', clash: [STAKES],
        text: l('Nước rút, quân Ngô Quyền quay lại đánh. Thuyền Nam Hán vướng cọc, không ra được biển; Hoằng Tháo chết, quá nửa quân Nam Hán bỏ mạng.', 'As the tide fell, Ngô Quyền turned and attacked. The Southern Han boats caught on the stakes and could not reach the sea; Hoằng Tháo died and more than half his men were lost.'),
        units: [
          { name: l('Thuyền Nam Hán mắc cọc', 'Han ships caught on stakes'), side: 'foe', kind: 'fleet', path: [[106.73, 20.985], [106.76, 20.96], STAKES], fate: 'lose' },
          { name: l('Thủy quân Ngô Quyền', 'Ngô Quyền\'s fleet'), side: 'vn', kind: 'fleet', path: [[106.66, 21.03], [106.72, 20.99], [106.775, 20.94]], act: 'attack' },
          { name: l('Bộ binh Ngô Quyền', 'Ngô Quyền\'s infantry'), side: 'vn', kind: 'army', path: [[106.9, 21.02], [106.84, 20.97], [106.795, 20.935]], act: 'attack' },
        ] },
    ],
  },

  'ly-thuong-kiet-nhu-nguyet': {
    result: l('Phòng tuyến đứng vững. Quân Tống mất quá nửa quân số, phải giảng hòa và rút về nước.', 'The line held. The Song lost more than half their men, made peace and went home.'),
    marks: [{ at: [105.946, 21.233], name: l('Phòng tuyến Như Nguyệt', 'Như Nguyệt line') }, { at: [108.37, 22.82], name: l('Ung Châu', 'Yongzhou') }],
    steps: [
      { t: l('Cuối 1075 - đầu 1076', 'Late 1075 - early 1076'), clash: [[108.37, 22.82]],
        text: l('Biết nhà Tống chuẩn bị đánh, Lý Thường Kiệt đem quân thủy bộ đánh trước, lấy Khâm Châu, Liêm Châu rồi vây Ung Châu. Đầu năm 1076 thành vỡ, quân Lý phá thành rồi rút về.', 'Knowing the Song were preparing to attack, Lý Thường Kiệt struck first by land and sea, took Qinzhou and Lianzhou and besieged Yongzhou. The city fell early in 1076; the Lý army razed it and withdrew.'),
        units: [
          { name: l('Bộ binh Lý Thường Kiệt', 'Lý Thường Kiệt\'s army'), side: 'vn', kind: 'army', path: [[106.55, 21.6], [107.3, 21.75], [107.9, 22.2], [108.37, 22.82]], act: 'attack' },
          { name: l('Thủy quân nhà Lý', 'Lý navy'), side: 'vn', kind: 'fleet', path: [[107.35, 21.0], [108.1, 21.45], [108.62, 21.85], [109.2, 21.62]], act: 'attack' },
        ] },
      { t: l('Mùa thu 1076', 'Autumn 1076'),
        text: l('Nhà Tống sai Quách Quỳ và Triệu Tiết đem khoảng 100.000 quân sang xâm lược. Lý Thường Kiệt đắp lũy đất rào tre dọc bờ nam sông Như Nguyệt, thủy quân chặn đường biển.', 'The Song sent Guo Kui and Zhao Xie to invade with about 100,000 troops. Lý Thường Kiệt raised an earth and bamboo rampart along the south bank of the Như Nguyệt, while his navy blocked the sea route.'),
        units: [
          { name: l('Quân Tống (Quách Quỳ)', 'Song army (Guo Kui)'), side: 'foe', kind: 'army', path: [...NORTH_ROAD, [105.97, 21.27]] },
          { name: l('Phòng tuyến Như Nguyệt', 'Như Nguyệt line'), side: 'vn', kind: 'army', path: [[105.84, 21.2], [105.9, 21.225], [105.946, 21.233], [106.02, 21.2], [106.1, 21.16]], act: 'hold' },
          { name: l('Thủy quân nhà Lý', 'Lý navy'), side: 'vn', kind: 'fleet', path: [[106.9, 20.9], [107.3, 21.05], [107.6, 21.2]], act: 'hold' },
        ] },
      { t: l('Đầu 1077', 'Early 1077'), clash: [[105.946, 21.233]],
        text: l('Quân Tống bắc cầu phao vượt sông nhưng bị đẩy lui. Hai bên giữ nhau khoảng một tháng; quân Tống mất năm, sáu phần mười quân số, phần lớn vì bệnh.', 'The Song threw a pontoon bridge across but were driven back. The two sides faced each other for about a month; the Song lost five or six tenths of their men, mostly to disease.'),
        units: [
          { name: l('Quân Tống vượt sông', 'Song crossing'), side: 'foe', kind: 'army', path: [[105.97, 21.275], [105.95, 21.245]], fate: 'lose' },
          { name: l('Quân Lý phản công', 'Lý counter-attack'), side: 'vn', kind: 'army', path: [[105.9, 21.2], [105.94, 21.228]], act: 'attack' },
        ] },
      { t: l('1077', '1077'),
        text: l('Quách Quỳ nhận lời giảng hòa và rút quân về nước.', 'Guo Kui accepted peace terms and took his army home.'),
        units: [{ name: l('Quân Tống rút về', 'Song withdrawal'), side: 'foe', kind: 'army', path: [[105.97, 21.27], [106.25, 21.42], CHI_LANG, LANG_SON, HUU_NGHI], act: 'retreat' }] },
    ],
  },

  'bach-dang-1288': {
    result: l('Thủy quân Nguyên bị diệt, Ô Mã Nhi bị bắt. Lần thứ ba quân Nguyên phải rút khỏi Đại Việt.', 'The Yuan fleet was destroyed and Omar captured. For the third time the Yuan had to leave Đại Việt.'),
    stakes: [STAKES, [106.76, 20.905], [106.81, 20.915], [106.79, 20.95]],
    marks: [{ at: [107.42, 21.07], name: l('Vân Đồn', 'Vân Đồn') }, { at: [106.33, 21.15], name: l('Vạn Kiếp', 'Vạn Kiếp') }, { at: STAKES, name: l('Bãi cọc', 'Stakes') }],
    steps: [
      { t: l('Cuối tháng 1 năm 1288', 'Late January 1288'), clash: [[107.44, 21.06]],
        text: l('Trần Khánh Dư phục kích đoàn thuyền lương của Trương Văn Hổ ở Vân Đồn, thu được rất nhiều lương thực. Quân Nguyên ở Thăng Long bắt đầu thiếu ăn.', 'Trần Khánh Dư ambushed Zhang Wenhu\'s grain fleet at Vân Đồn and seized great stores of food. The Yuan army in Thăng Long began to go hungry.'),
        units: [
          { name: l('Thuyền lương Nguyên', 'Yuan grain fleet'), side: 'foe', kind: 'fleet', path: [[108.0, 21.25], [107.7, 21.15], [107.45, 21.06]], fate: 'lose' },
          { name: l('Thủy quân Trần Khánh Dư', 'Trần Khánh Dư\'s fleet'), side: 'vn', kind: 'fleet', path: [[107.3, 21.12], [107.38, 21.08], [107.43, 21.06]], act: 'ambush' },
        ] },
      { t: l('Tháng 3 năm 1288', 'March 1288'), stakes: true, tide: 'high',
        text: l('Quân Nguyên bỏ Thăng Long về Vạn Kiếp. Trần Hưng Đạo cho đóng cọc ở các nhánh sông Chanh, sông Kênh và sông Rút, theo cách Ngô Quyền từng làm.', 'The Yuan left Thăng Long for Vạn Kiếp. Trần Hưng Đạo had stakes driven into the Chanh, Kênh and Rút branches of the river, as Ngô Quyền had done.'),
        units: [{ name: l('Quân Nguyên về Vạn Kiếp', 'Yuan army to Vạn Kiếp'), side: 'foe', kind: 'army', path: [THANG_LONG, [106.05, 21.1], [106.33, 21.15]], act: 'retreat' }] },
      { t: l('9 tháng 4 năm 1288, nước lớn', '9 April 1288, high tide'), tide: 'high',
        text: l('Thủy quân Nguyên do Ô Mã Nhi chỉ huy rút ra biển theo sông Bạch Đằng. Một đội thuyền nhỏ quân Trần ra khiêu chiến rồi giả thua.', 'The Yuan fleet under Omar withdrew towards the sea along the Bạch Đằng. A small Trần squadron came out to fight, then fled as if beaten.'),
        units: [
          { name: l('Thủy quân Nguyên (Ô Mã Nhi)', 'Yuan fleet (Omar)'), side: 'foe', kind: 'fleet', path: [[106.33, 21.15], [106.5, 21.05], [106.66, 20.99], [106.75, 20.955]], act: 'retreat' },
          { name: l('Thuyền nhỏ nhử địch', 'Decoy boats'), side: 'vn', kind: 'fleet', path: [[106.7, 20.97], [106.77, 20.94], [106.86, 20.89]], act: 'retreat' },
        ] },
      { t: l('Nước rút', 'Ebb tide'), tide: 'low', clash: [STAKES, [106.77, 20.92]],
        text: l('Nước rút, thuyền Nguyên mắc cọc và bị đánh từ sáng đến chiều. Ô Mã Nhi bị bắt sống, hơn 400 thuyền bị bắt hoặc bị đốt.', 'As the tide ebbed the Yuan ships caught on the stakes and were attacked from morning to evening. Omar was captured alive and more than 400 ships were taken or burned.'),
        units: [
          { name: l('Thuyền Nguyên mắc cọc', 'Yuan ships caught on stakes'), side: 'foe', kind: 'fleet', path: [[106.75, 20.955], STAKES], fate: 'lose' },
          { name: l('Thủy quân Trần', 'Trần fleet'), side: 'vn', kind: 'fleet', path: [[106.65, 20.99], [106.72, 20.96], [106.775, 20.94]], act: 'attack' },
          { name: l('Thủy quân Trần', 'Trần fleet'), side: 'vn', kind: 'fleet', path: [[106.95, 20.86], [106.86, 20.9], [106.795, 20.93]], act: 'attack' },
          { name: l('Bộ binh Trần', 'Trần infantry'), side: 'vn', kind: 'army', path: [[106.9, 21.03], [106.84, 20.98], [106.8, 20.945]], act: 'attack' },
        ] },
      { t: l('Tháng 4 năm 1288', 'April 1288'),
        text: l('Cánh quân bộ của Thoát Hoan rút chạy qua Lạng Sơn, chính Thoát Hoan trúng tên độc trên đường về.', 'Toghon\'s land army fled north through Lạng Sơn, and Toghon himself was struck by a poisoned arrow on the way.'),
        units: [{ name: l('Thoát Hoan rút chạy', 'Toghon flees'), side: 'foe', kind: 'army', path: [[106.33, 21.15], [106.45, 21.45], CHI_LANG, LANG_SON, HUU_NGHI], act: 'retreat' }] },
    ],
  },

  'chi-lang-dong-quan-binh-ngo': {
    result: l('Viện binh Minh tan rã, Vương Thông hội thề rút quân. Nguyễn Trãi viết Bình Ngô đại cáo.', 'The Ming relief armies collapsed and Wang Tong swore peace and withdrew. Nguyễn Trãi wrote the Great Proclamation.'),
    marks: [{ at: CHI_LANG, name: l('Ải Chi Lăng', 'Chi Lăng pass') }, { at: THANG_LONG, name: l('Thành Đông Quan', 'Đông Quan citadel') }, { at: [106.2, 21.28], name: l('Xương Giang', 'Xương Giang') }],
    steps: [
      { t: l('Tháng 11 năm 1426', 'November 1426'), clash: [[105.67, 20.89]],
        text: l('Vương Thông đem quân Minh ra tây nam Đông Quan. Quân Lam Sơn tự bắn pháo làm hiệu dụ đối phương vào trận địa mai phục ở Tốt Động - Chúc Động và thắng lớn, rồi vây thành Đông Quan.', 'Wang Tong led the Ming south-west of Đông Quan. The Lam Sơn army fired the signal guns themselves to lure the enemy into an ambush at Tốt Động - Chúc Động, won a great victory and laid siege to Đông Quan.'),
        units: [
          { name: l('Quân Minh (Vương Thông)', 'Ming army (Wang Tong)'), side: 'foe', kind: 'army', path: [THANG_LONG, [105.77, 20.97], [105.68, 20.9]], fate: 'lose' },
          { name: l('Quân Lam Sơn mai phục', 'Lam Sơn ambush'), side: 'vn', kind: 'army', path: [[105.55, 20.82], [105.62, 20.87], [105.66, 20.89]], act: 'ambush' },
          { name: l('Quân Lam Sơn vây Đông Quan', 'Lam Sơn siege'), side: 'vn', kind: 'army', path: [[105.68, 20.89], [105.78, 20.98], [105.84, 21.0]], act: 'siege' },
        ] },
      { t: l('Mùa thu năm 1427', 'Autumn 1427'),
        text: l('Nhà Minh cử hai đạo viện binh: Liễu Thăng theo đường Quảng Tây, Mộc Thạnh theo đường Vân Nam.', 'The Ming sent two relief armies: Liu Sheng by the Guangxi road, Mu Sheng by the Yunnan road.'),
        units: [
          { name: l('Viện binh Liễu Thăng', 'Liu Sheng\'s relief army'), side: 'foe', kind: 'army', path: [HUU_NGHI, LANG_SON, [106.66, 21.72]] },
          { name: l('Viện binh Mộc Thạnh', 'Mu Sheng\'s relief army'), side: 'foe', kind: 'army', path: [[103.97, 22.5], [104.3, 22.2], [104.6, 21.95]] },
        ] },
      { t: l('10 tháng 10 năm 1427', '10 October 1427'), clash: [CHI_LANG],
        text: l('Liễu Thăng bị giết dưới chân núi Mã Yên ở ải Chi Lăng.', 'Liu Sheng was killed beneath Mã Yên mountain in the Chi Lăng pass.'),
        units: [
          { name: l('Quân Liễu Thăng', 'Liu Sheng\'s army'), side: 'foe', kind: 'army', path: [[106.66, 21.72], [106.6, 21.67], CHI_LANG], fate: 'lose' },
          { name: l('Phục binh Lam Sơn', 'Lam Sơn ambush'), side: 'vn', kind: 'army', path: [[106.42, 21.56], [106.49, 21.6], [106.53, 21.615]], act: 'ambush' },
          { name: l('Phục binh Lam Sơn', 'Lam Sơn ambush'), side: 'vn', kind: 'army', path: [[106.68, 21.6], [106.61, 21.61], [106.555, 21.62]], act: 'ambush' },
        ] },
      { t: l('Cuối năm 1427', 'Late 1427'), clash: [[106.2, 21.28]],
        text: l('Tàn quân Minh kéo về Xương Giang nhưng thành đã bị hạ, các tướng bị bắt. Ngày 10 tháng 12, Vương Thông hội thề với Lê Lợi rồi rút quân về nước.', 'The remnant marched for Xương Giang, but the citadel had already fallen and its generals were taken. On 10 December Wang Tong swore peace with Lê Lợi and withdrew his army.'),
        units: [
          { name: l('Tàn quân Minh', 'Ming remnant'), side: 'foe', kind: 'army', path: [CHI_LANG, [106.4, 21.45], [106.22, 21.3]], fate: 'lose' },
          { name: l('Vương Thông rút về nước', 'Wang Tong withdraws'), side: 'foe', kind: 'army', path: [THANG_LONG, [106.05, 21.25], [106.4, 21.5], CHI_LANG, LANG_SON, HUU_NGHI], act: 'retreat' },
        ] },
    ],
  },

  'rach-gam-xoai-mut-1785': {
    result: l('Thủy quân Xiêm bị đánh chìm gần hết, Nguyễn Ánh chạy sang Xiêm.', 'The Siamese fleet was almost entirely sunk and Nguyễn Ánh fled to Siam.'),
    marks: [{ at: [106.248, 10.325], name: l('Rạch Gầm - Xoài Mút', 'Rạch Gầm - Xoài Mút') }, { at: [109.22, 13.77], name: l('Quy Nhơn', 'Quy Nhơn') }],
    steps: [
      { t: l('Cuối năm 1784', 'Late 1784'),
        text: l('Theo lời cầu viện của Nguyễn Ánh, quân thủy bộ Xiêm tiến vào miền Tây Nam Bộ.', 'At Nguyễn Ánh\'s request, Siamese land and naval forces advanced into the western Mekong delta.'),
        units: [
          { name: l('Thủy quân Xiêm', 'Siamese fleet'), side: 'foe', kind: 'fleet', path: [[104.6, 10.2], [105.1, 10.0], [105.5, 10.2], [105.76, 10.29]] },
          { name: l('Bộ binh Xiêm', 'Siamese army'), side: 'foe', kind: 'army', path: [[104.6, 10.4], [105.2, 10.35], [105.62, 10.38]] },
        ] },
      { t: l('Tháng 1 năm 1785', 'January 1785'),
        text: l('Nguyễn Huệ từ Quy Nhơn vào Gia Định, chọn khúc sông Tiền giữa rạch Gầm và rạch Xoài Mút làm trận địa, đặt quân mai phục hai bên bờ.', 'Nguyễn Huệ came south from Quy Nhơn, chose the stretch of the Tiền river between the Gầm and Xoài Mút creeks as his battlefield, and hid troops on both banks.'),
        units: [
          { name: l('Thủy quân Tây Sơn (Nguyễn Huệ)', 'Tây Sơn fleet (Nguyễn Huệ)'), side: 'vn', kind: 'fleet', path: [[109.3, 13.77], [109.35, 12.5], [108.9, 11.3], [107.6, 10.4], [106.75, 10.2], [106.36, 10.36]] },
          { name: l('Phục binh Tây Sơn', 'Tây Sơn ambush'), side: 'vn', kind: 'army', path: [[106.36, 10.4], [106.29, 10.37], [106.25, 10.35]], act: 'ambush' },
        ] },
      { t: l('Đêm 19 rạng sáng 20 tháng 1 năm 1785', 'Night of 19 - 20 January 1785'), clash: [[106.248, 10.325], [106.2, 10.33]],
        text: l('Thủy quân Xiêm xuôi dòng vào trận địa. Quân Tây Sơn đánh từ nhiều phía, thuyền Xiêm bị đánh chìm gần hết.', 'The Siamese fleet sailed downstream into the trap. The Tây Sơn struck from every side and sank almost all the Siamese boats.'),
        units: [
          { name: l('Thủy quân Xiêm', 'Siamese fleet'), side: 'foe', kind: 'fleet', path: [[105.76, 10.29], [105.95, 10.31], [106.12, 10.33], [106.24, 10.325]], fate: 'lose' },
          { name: l('Thủy quân Tây Sơn', 'Tây Sơn fleet'), side: 'vn', kind: 'fleet', path: [[106.36, 10.36], [106.3, 10.34], [106.255, 10.328]], act: 'attack' },
          { name: l('Bộ binh Tây Sơn', 'Tây Sơn infantry'), side: 'vn', kind: 'army', path: [[106.22, 10.4], [106.22, 10.36], [106.21, 10.335]], act: 'ambush' },
        ] },
      { t: l('Sau trận', 'After the battle'),
        text: l('Nguyễn Ánh chạy qua Hà Tiên rồi sang Xiêm.', 'Nguyễn Ánh fled through Hà Tiên to Siam.'),
        units: [{ name: l('Nguyễn Ánh chạy sang Xiêm', 'Nguyễn Ánh flees to Siam'), side: 'foe', kind: 'fleet', path: [[106.1, 10.31], [105.5, 10.2], [104.9, 10.25], [104.48, 10.38]], act: 'retreat' }] },
    ],
  },

  'ngoc-hoi-dong-da-1789': {
    result: l('Quân Thanh tan vỡ, Tôn Sĩ Nghị bỏ chạy về nước. Thăng Long được giải phóng đúng dịp Tết.', 'The Qing army broke and Sun Shiyi fled home. Thăng Long was freed during Tết.'),
    marks: [{ at: [107.58, 16.47], name: l('Phú Xuân', 'Phú Xuân') }, { at: [105.68, 18.67], name: l('Nghệ An', 'Nghệ An') }, { at: [105.836, 20.142], name: l('Tam Điệp', 'Tam Điệp') }, { at: [105.849, 20.921], name: l('Ngọc Hồi', 'Ngọc Hồi') }, { at: [105.8245, 21.04], name: l('Khương Thượng (Đống Đa)', 'Khương Thượng (Đống Đa)') }],
    steps: [
      { t: l('Cuối năm 1788', 'Late 1788'),
        text: l('Quân Thanh do Tôn Sĩ Nghị chỉ huy vượt biên, chiếm Thăng Long không gặp kháng cự, lấy cớ đưa Lê Chiêu Thống trở lại ngôi.', 'A Qing army under Sun Shiyi crossed the border and took Thăng Long unopposed, on the pretext of restoring Lê Chiêu Thống.'),
        units: [{ name: l('Quân Thanh (Tôn Sĩ Nghị)', 'Qing army (Sun Shiyi)'), side: 'foe', kind: 'army', path: [...NORTH_ROAD, THANG_LONG] }] },
      { t: l('Cuối 1788 - 15/1/1789', 'Late 1788 - 15 Jan 1789'),
        text: l('Nguyễn Huệ lên ngôi ở Phú Xuân, lấy hiệu Quang Trung, rồi tiến quân ra Bắc. Ông dừng ở Nghệ An hơn mười ngày mộ quân và ngày 15 tháng 1 tới Tam Điệp.', 'Nguyễn Huệ took the throne at Phú Xuân as Emperor Quang Trung and marched north. He stopped in Nghệ An for more than ten days to raise troops and reached Tam Điệp on 15 January.'),
        units: [{ name: l('Quân Quang Trung', 'Quang Trung\'s army'), side: 'vn', kind: 'army', path: [[107.58, 16.47], [106.6, 17.48], [105.68, 18.67], [105.78, 19.8], [105.836, 20.142]] }] },
      { t: l('Đêm mùng 4 Tết Kỷ Dậu', 'Night of the 4th day of Tết'), clash: [[105.849, 20.921], [105.8245, 21.012]],
        text: l('Quân Tây Sơn dùng ván gỗ che chắn đánh đồn Ngọc Hồi, cánh quân của Đặng Tiến Đông đánh đồn Khương Thượng.', 'The Tây Sơn advanced behind wooden shields against the Ngọc Hồi fort, while Đặng Tiến Đông\'s column attacked the fort at Khương Thượng.'),
        units: [
          { name: l('Đạo quân đánh Ngọc Hồi', 'Column against Ngọc Hồi'), side: 'vn', kind: 'army', path: [[105.836, 20.142], [105.86, 20.6], [105.849, 20.921]], act: 'attack' },
          { name: l('Cánh quân Đặng Tiến Đông', 'Đặng Tiến Đông\'s column'), side: 'vn', kind: 'army', path: [[105.836, 20.142], [105.75, 20.5], [105.66, 20.88], [105.8245, 21.012]], act: 'attack' },
        ] },
      { t: l('Mùng 5 Tết, cuối tháng 1 năm 1789', '5th day of Tết, late January 1789'),
        text: l('Nhiều tướng Thanh tử trận. Tôn Sĩ Nghị cho chặt cầu phao qua sông Hồng, nhiều quân Thanh chết đuối, còn ông mất cả ấn tín và tháo chạy về nước.', 'Several Qing generals were killed. Sun Shiyi had the pontoon bridge over the Red River cut, many of his men drowned, and he fled home without even his seal of office.'),
        units: [
          { name: l('Quân Thanh tháo chạy', 'Qing army flees'), side: 'foe', kind: 'army', path: [THANG_LONG, [106.25, 21.42], CHI_LANG, LANG_SON, HUU_NGHI], act: 'retreat' },
          { name: l('Quân Tây Sơn vào Thăng Long', 'Tây Sơn enter Thăng Long'), side: 'vn', kind: 'army', path: [[105.849, 20.921], [105.85, 21.0], THANG_LONG] },
        ] },
    ],
  },

  'khang-chien-chong-phap-dien-bien-phu': {
    result: l('Tập đoàn cứ điểm thất thủ sau 56 ngày đêm, buộc Pháp phải đàm phán.', 'The fortress fell after 56 days and nights, forcing France to negotiate.'),
    marks: [{ at: [103.017, 21.382], name: l('Điện Biên Phủ', 'Điện Biên Phủ') }, { at: [105.21, 21.82], name: l('Việt Bắc', 'Việt Bắc') }, { at: [105.88, 21.04], name: l('Hà Nội', 'Hanoi') }],
    steps: [
      { t: l('Cuối 1953 - đầu 1954', 'Late 1953 - early 1954'),
        text: l('Pháp dựng tập đoàn cứ điểm ở lòng chảo Điện Biên với khoảng 15.000 quân do đại tá De Castries chỉ huy, tiếp tế bằng đường hàng không từ Hà Nội.', 'France built a fortified complex in the Điện Biên valley, held by about 15,000 men under Colonel de Castries and supplied by air from Hanoi.'),
        units: [{ name: l('Cầu hàng không của Pháp', 'French airlift'), side: 'foe', kind: 'air', path: [[105.88, 21.04], [104.5, 21.6], [103.02, 21.38]] }] },
      { t: l('Đầu năm 1954', 'Early 1954'),
        text: l('Tướng Võ Nguyên Giáp tập trung khoảng 70.000 quân và hơn 100 khẩu pháo quanh lòng chảo.', 'General Võ Nguyên Giáp concentrated about 70,000 troops and more than 100 guns around the valley.'),
        units: [
          { name: l('Quân đội Việt Nam', 'Vietnamese army'), side: 'vn', kind: 'army', path: [[105.21, 21.82], [104.87, 21.72], [104.25, 21.5], [103.91, 21.33], [103.4, 21.45], [103.06, 21.47]], act: 'siege' },
          { name: l('Quân đội Việt Nam', 'Vietnamese army'), side: 'vn', kind: 'army', path: [[103.91, 21.33], [103.5, 21.3], [103.12, 21.36]], act: 'siege' },
          { name: l('Quân đội Việt Nam', 'Vietnamese army'), side: 'vn', kind: 'army', path: [[103.4, 21.2], [103.15, 21.22], [103.03, 21.3]], act: 'siege' },
        ] },
      { t: l('13 tháng 3 năm 1954', '13 March 1954'), clash: [[103.03, 21.41]],
        text: l('Trận đánh mở màn.', 'The battle opened.'),
        units: [{ name: l('Đánh Him Lam', 'Attack on Him Lam'), side: 'vn', kind: 'army', path: [[103.06, 21.47], [103.04, 21.43], [103.03, 21.415]], act: 'attack' }] },
      { t: l('7 tháng 5 năm 1954', '7 May 1954'), clash: [[103.0173, 21.3825]],
        text: l('Đồi A1 bị chiếm, De Castries và bộ chỉ huy bị bắt. Phía Việt Nam ghi 16.200 quân đối phương bị diệt hoặc bị bắt sau 56 ngày đêm.', 'Hill A1 fell and de Castries and his staff were captured. The Vietnamese side records 16,200 enemy troops killed or captured after 56 days and nights.'),
        units: [
          { name: l('Đánh đồi A1', 'Attack on Hill A1'), side: 'vn', kind: 'army', path: [[103.12, 21.36], [103.05, 21.375], [103.02, 21.382]], act: 'attack' },
          { name: l('Đánh vào trung tâm', 'Assault on the centre'), side: 'vn', kind: 'army', path: [[103.03, 21.3], [103.02, 21.35], [103.017, 21.378]], act: 'attack' },
        ] },
    ],
  },
};
