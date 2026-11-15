import { l, type L } from './types';

// Sơ đồ trận đánh vẽ trên bản đồ khi đang xem mục tương ứng. Đường đi là sơ đồ minh họa nối các địa danh
// được nêu trong bài (theo đúng thứ tự diễn biến), không phải lộ trình chính xác từng dặm.
// side: 'vn' là quân Việt (vàng), 'foe' là quân xâm lược (xanh). air: đường hàng không (vẽ nét đứt).
export type LonLat = [number, number];
export interface Route { side: 'vn' | 'foe'; pts: LonLat[]; air?: boolean }
export interface Battle { routes: Route[]; marks: { at: LonLat; name: L }[] }

const BACH_DANG_STAKES: LonLat = [106.785, 20.935];
const THANG_LONG: LonLat = [105.85, 21.03];
const HUU_NGHI: LonLat = [106.711, 21.97];
const CHI_LANG: LonLat = [106.542, 21.62];

export const BATTLES: Record<string, Battle> = {
  // 938: thủy quân Nam Hán vào cửa Bạch Đằng lúc triều lên, bị dụ vào sâu, nước rút thì vướng bãi cọc
  'tran-bach-dang-938': {
    routes: [
      { side: 'foe', pts: [[107.15, 20.72], [106.95, 20.8], [106.85, 20.86], BACH_DANG_STAKES, [106.72, 20.99]] },
      { side: 'vn', pts: [[106.62, 21.06], [106.7, 21.0], [106.76, 20.96]] },
      { side: 'vn', pts: [[106.9, 21.02], [106.84, 20.97], [106.8, 20.94]] },
    ],
    marks: [{ at: BACH_DANG_STAKES, name: l('Bãi cọc Bạch Đằng', 'Bạch Đằng stakes') }, { at: [107.15, 20.72], name: l('Thủy quân Nam Hán', 'Southern Han fleet') }],
  },
  // 1076 - 1077: quân Tống từ biên giới xuống Lạng Sơn, tới bờ bắc sông Như Nguyệt và bị chặn ở phòng tuyến bờ nam
  'ly-thuong-kiet-nhu-nguyet': {
    routes: [
      { side: 'foe', pts: [HUU_NGHI, [106.76, 21.85], CHI_LANG, [106.25, 21.42], [105.97, 21.27]] },
      { side: 'vn', pts: [[105.84, 21.2], [105.9, 21.23], [105.946, 21.233], [106.02, 21.2], [106.1, 21.16]] },
    ],
    marks: [{ at: [105.946, 21.233], name: l('Phòng tuyến Như Nguyệt', 'Như Nguyệt line') }, { at: HUU_NGHI, name: l('Quân Tống vào', 'Song army enters') }],
  },
  // 1288: thủy quân Nguyên rút từ Vạn Kiếp ra biển theo sông Bạch Đằng, bị chặn ở bãi cọc
  'bach-dang-1288': {
    routes: [
      { side: 'foe', pts: [[106.33, 21.15], [106.5, 21.05], [106.66, 20.99], BACH_DANG_STAKES] },
      { side: 'vn', pts: [[106.62, 20.88], [106.72, 20.9], [106.77, 20.925]] },
      { side: 'vn', pts: [[106.95, 21.05], [106.86, 20.98], [106.8, 20.945]] },
    ],
    marks: [{ at: BACH_DANG_STAKES, name: l('Bãi cọc Bạch Đằng', 'Bạch Đằng stakes') }, { at: [106.33, 21.15], name: l('Vạn Kiếp', 'Vạn Kiếp') }],
  },
  // 1427: viện binh Liễu Thăng qua cửa ải vào Chi Lăng thì bị phục kích; nghĩa quân đang vây Đông Quan
  'chi-lang-dong-quan-binh-ngo': {
    routes: [
      { side: 'foe', pts: [HUU_NGHI, [106.76, 21.85], [106.66, 21.72], CHI_LANG] },
      { side: 'vn', pts: [[106.42, 21.56], [106.49, 21.6], [106.53, 21.615]] },
      { side: 'vn', pts: [[106.66, 21.6], [106.6, 21.61], [106.555, 21.62]] },
    ],
    marks: [{ at: CHI_LANG, name: l('Ải Chi Lăng', 'Chi Lăng pass') }, { at: THANG_LONG, name: l('Thành Đông Quan bị vây', 'Đông Quan under siege') }],
  },
  // 1785: thủy quân Xiêm xuôi sông Tiền về phía Mỹ Tho, lọt vào trận địa mai phục giữa Rạch Gầm và Xoài Mút
  'rach-gam-xoai-mut-1785': {
    routes: [
      { side: 'foe', pts: [[105.76, 10.29], [105.92, 10.31], [106.08, 10.33], [106.2, 10.33], [106.248, 10.325]] },
      { side: 'vn', pts: [[106.36, 10.36], [106.31, 10.34], [106.26, 10.33]] },
      { side: 'vn', pts: [[106.25, 10.4], [106.25, 10.36], [106.25, 10.335]] },
    ],
    marks: [{ at: [106.248, 10.325], name: l('Rạch Gầm - Xoài Mút', 'Rạch Gầm - Xoài Mút') }],
  },
  // 1788 - 1789: quân Thanh vào Thăng Long; Quang Trung từ Phú Xuân qua Nghệ An, Tam Điệp, Ngọc Hồi, một cánh vào Đống Đa
  'ngoc-hoi-dong-da-1789': {
    routes: [
      { side: 'foe', pts: [HUU_NGHI, [106.76, 21.85], CHI_LANG, [106.2, 21.3], THANG_LONG] },
      { side: 'vn', pts: [[107.58, 16.47], [106.6, 17.48], [105.68, 18.67], [105.78, 19.8], [105.836, 20.142], [105.86, 20.6], [105.849, 20.921], [105.85, 21.03]] },
      { side: 'vn', pts: [[105.836, 20.142], [105.75, 20.5], [105.66, 20.88], [105.8245, 21.012]] },
    ],
    marks: [{ at: [107.58, 16.47], name: l('Phú Xuân', 'Phú Xuân') }, { at: [105.68, 18.67], name: l('Nghệ An', 'Nghệ An') }, { at: [105.836, 20.142], name: l('Tam Điệp', 'Tam Điệp') }, { at: [105.84, 20.97], name: l('Ngọc Hồi - Đống Đa', 'Ngọc Hồi - Đống Đa') }, { at: HUU_NGHI, name: l('Quân Thanh vào', 'Qing army enters') }],
  },
  // 1953 - 1954: quân Pháp tiếp tế bằng đường không từ Hà Nội; quân đội Việt Nam hành quân từ Việt Bắc lên Tây Bắc
  'khang-chien-chong-phap-dien-bien-phu': {
    routes: [
      { side: 'foe', pts: [[105.88, 21.04], [104.5, 21.6], [103.02, 21.38]], air: true },
      { side: 'vn', pts: [[105.21, 21.82], [104.87, 21.72], [104.25, 21.5], [103.91, 21.33], [103.4, 21.4], [103.017, 21.382]] },
    ],
    marks: [{ at: [103.017, 21.382], name: l('Điện Biên Phủ', 'Điện Biên Phủ') }, { at: [105.21, 21.82], name: l('Việt Bắc', 'Việt Bắc') }],
  },
};


