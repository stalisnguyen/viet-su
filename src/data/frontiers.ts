import { l, type L } from './types';

// Ranh giới phía nam của Đại Việt qua các mốc mở đất, vẽ trên bản đồ dưới dạng đường đứt nét.
// Đây là đường ước lượng nối từ vùng núi phía tây ra bờ biển ở vĩ độ của mốc đó, không phải biên giới chính xác:
// ranh giới thời xưa thường là một dải đèo, sông hay vùng đệm chứ không phải một đường kẻ.
export interface Frontier { year: number; a: [number, number]; b: [number, number]; name: L }

export const FRONTIERS: Frontier[] = [
  { year: 1069, a: [106.55, 16.86], b: [107.2, 16.86], name: l('1069 - Bố Chính, Địa Lý, Ma Linh', '1069 - three Cham districts') },
  { year: 1306, a: [107.3, 16.2], b: [108.17, 16.2], name: l('1306 - châu Ô, châu Lý', '1306 - Ô and Lý districts') },
  { year: 1471, a: [108.55, 13.65], b: [109.25, 13.65], name: l('1471 - Vijaya', '1471 - Vijaya') },
  { year: 1611, a: [108.75, 12.88], b: [109.43, 12.88], name: l('1611 - phủ Phú Yên', '1611 - Phú Yên prefecture') },
  { year: 1653, a: [108.6, 11.57], b: [109.02, 11.57], name: l('1653 - Khánh Hòa', '1653 - Khánh Hòa') },
  { year: 1693, a: [107.35, 10.85], b: [107.78, 10.85], name: l('1693 - Ninh Thuận, Bình Thuận', '1693 - Ninh Thuận, Bình Thuận') },
  { year: 1698, a: [106.2, 10.33], b: [106.78, 10.33], name: l('1698 - phủ Gia Định', '1698 - Gia Định') },
  { year: 1757, a: [104.82, 9.0], b: [105.42, 9.0], name: l('1757 - toàn miền Tây', '1757 - the whole delta') },
];

// Thời kỳ nào hiện những mốc nào (mốc cuối là mốc của chính thời kỳ đó, hiện rõ nhất).
// Các mốc hiện lần lượt từ bắc xuống nam như một đoạn phim ngắn về quá trình mở đất.
// Mốc 1653 - 1757 theo SGK Lịch sử và Địa lí 8 (bài Quá trình khai phá vùng đất phía Nam thế kỷ XVI - XVIII).
export const FRONTIER_BY_ERA: Record<string, number[]> = {
  ly: [1069],
  tran: [1069, 1306],
  'ho-minh': [1069, 1306],
  'le-so': [1069, 1306, 1471],
  'mac-trinh-nguyen': [1069, 1306, 1471, 1611, 1653, 1693, 1698, 1757],
  nguyen: [1471, 1611, 1653, 1693, 1698, 1757],
};
