import { l, type L } from './types';

// Ranh giới phía nam của Đại Việt qua các mốc mở đất, vẽ trên bản đồ dưới dạng đường đứt nét.
// Đây là đường ước lượng nối từ vùng núi phía tây ra bờ biển ở vĩ độ của mốc đó, không phải biên giới chính xác:
// ranh giới thời xưa thường là một dải đèo, sông hay vùng đệm chứ không phải một đường kẻ.
export interface Frontier { year: number; a: [number, number]; b: [number, number]; name: L }

export const FRONTIERS: Frontier[] = [
  { year: 1069, a: [106.55, 16.86], b: [107.2, 16.86], name: l('1069 - ba châu Bố Chính, Địa Lý, Ma Linh', '1069 - three districts from Champa') },
  { year: 1306, a: [107.3, 16.2], b: [108.17, 16.2], name: l('1306 - châu Ô, châu Lý', '1306 - Ô and Lý districts') },
  { year: 1471, a: [108.55, 13.65], b: [109.25, 13.65], name: l('1471 - sau khi Vijaya thất thủ', '1471 - after the fall of Vijaya') },
  { year: 1611, a: [108.75, 12.88], b: [109.43, 12.88], name: l('1611 - phủ Phú Yên', '1611 - Phú Yên prefecture') },
];

// Thời kỳ nào hiện những mốc nào (mốc cuối là mốc của chính thời kỳ đó, hiện rõ nhất)
export const FRONTIER_BY_ERA: Record<string, number[]> = {
  ly: [1069],
  tran: [1069, 1306],
  'ho-minh': [1069, 1306],
  'le-so': [1069, 1306, 1471],
  'mac-trinh-nguyen': [1306, 1471, 1611],
};
