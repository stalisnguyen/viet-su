import type { L } from './types';
import { chapters } from './more';

// Ảnh thật lấy từ Wikimedia Commons, tải thẳng từ máy chủ của Commons. Mỗi ảnh ghi rõ tác giả và giấy phép.
export interface Photo { file: string; by: string; license: string; caption: L; tall?: boolean }
const l = (vi: string, en: string): L => ({ vi, en });

export const photos: Record<string, Photo> = {
  'an-khe': { file: 'Rìu tay được tìm thấy ở Di tích Rộc Tưng 3.jpg', by: 'Dratharr', license: 'CC BY-SA 4.0',
    caption: l('Rìu tay tìm thấy ở di tích Rộc Tưng, An Khê.', 'Handaxes found at the Rộc Tưng site, An Khê.') },
  'son-vi': { file: 'Son Vi-Industrie.jpg', by: 'AReinecke', license: 'CC BY-SA 4.0',
    caption: l('Công cụ cuội ghè của kỹ nghệ Sơn Vi.', 'Flaked pebble tool of the Sơn Vi industry.') },
  'thung-binh': { file: 'Trang An Landscape Complex, Ninh Binh Province, Vietnam, 20240202 1456 5313.jpg', by: 'Jakub Hałun', license: 'CC BY 4.0',
    caption: l('Cảnh quan núi đá vôi Tràng An, nơi có hang Thung Bình 1. Ảnh không chụp chính hang này.', 'The limestone landscape of Tràng An, where Thung Bình 1 cave lies. The photo does not show the cave itself.') },
  'cai-beo': { file: '2024-03-25-Cai Beo floating village-2915.jpg', by: 'Superbass', license: 'CC BY-SA 4.0',
    caption: l('Làng chài nổi Cái Bèo ở đảo Cát Bà ngày nay, cùng khu vực với di chỉ.', 'The Cái Bèo floating village on Cát Bà island today, in the same area as the site.') },
  'phung-nguyen': { file: 'Phung Nguyen Culture Pottery.jpg', by: 'Gary Todd', license: 'CC0',
    caption: l('Đồ gốm văn hóa Phùng Nguyên tại Bảo tàng Lịch sử Quốc gia, Hà Nội.', 'Phùng Nguyên pottery at the National Museum of History, Hanoi.') },
  'dong-dau-go-mun': { file: 'Go Mun Bronze Axes and Stone Moulds for Casting (cropped).jpg', by: 'Gary Todd', license: 'CC0',
    caption: l('Rìu đồng và khuôn đúc bằng đá của văn hóa Gò Mun, Bảo tàng Lịch sử Quốc gia.', 'Gò Mun bronze axes and stone casting moulds, National Museum of History.') },
  'dong-son': { file: 'Dong Son Bronze Drum 14.jpg', by: 'Gary Todd', license: 'CC0',
    caption: l('Một trống đồng Đông Sơn tại Bảo tàng Lịch sử Quốc gia, Hà Nội.', 'A Đông Sơn bronze drum at the National Museum of History, Hanoi.') },
  'trong-dong-ngoc-lu': { file: 'Ngoc Lu.jpg', by: 'VuThiAnh', license: 'Public domain',
    caption: l('Trống đồng Ngọc Lũ.', 'The Ngọc Lũ bronze drum.') },
  'sa-huynh': { tall: true, file: 'Pottery vase Sa Huynh Culture.JPG', by: 'Bình Giang', license: 'Public domain',
    caption: l('Bình gốm văn hóa Sa Huỳnh.', 'A pottery vase of the Sa Huỳnh culture.') },
  'lac-long-quan-au-co': { file: 'Phù điêu Tổ mẫu Âu Cơ tại Đền Nội Bình Đà, xã Bình Minh, huyện Thanh Oai, thành phố Hà Nội.jpg', by: 'Lengoctho2207', license: 'CC BY-SA 4.0',
    caption: l('Phù điêu Âu Cơ tại đền Nội Bình Đà, Hà Nội. Đây là tác phẩm thờ tự của đời sau, không phải hiện vật thời cổ.', 'Relief of Âu Cơ at Nội Bình Đà temple, Hanoi. It is a later devotional work, not an ancient artefact.') },
  'hung-vuong': { file: 'Đền Hùng, đền Thượng.jpg', by: 'Thang Nguyen', license: 'CC BY-SA 2.0',
    caption: l('Đền Thượng trong khu di tích Đền Hùng, Phú Thọ.', 'The Upper Temple at the Hùng Temple complex, Phú Thọ.') },
  'an-duong-vuong': { tall: true, file: 'AnDuongVuong.jpg', by: 'Amore Mio', license: 'CC BY-SA 3.0',
    caption: l('Tượng An Dương Vương, do người đời sau dựng.', 'Statue of An Dương Vương, made in modern times.') },
  'thanh-co-loa': { file: 'Thanh co loa2.jpg', by: 'Viethavvh', license: 'Public domain',
    caption: l('Một đoạn lũy đất thành Cổ Loa vào mùa lễ hội.', 'A stretch of the Cổ Loa earthen rampart during the festival season.') },
};
chapters.forEach((c) => Object.assign(photos, c.photos || {}));
