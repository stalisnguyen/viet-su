# Việt Sử Toàn Đồ

Lịch sử Việt Nam kể trên bản đồ 3D, song ngữ Việt - Anh, mỗi thông tin đều có nguồn dẫn.

Hiện có đủ 23 thời kỳ, từ thời đồ đá đến nay, và một chuyên đề về biển đảo Hoàng Sa, Trường Sa. Mỗi thời kỳ viết sau đợt đầu nằm trong một file ở src/data/chapters và được kiểm bằng scripts/check-chapter.mjs; quy cách viết ở docs/chapter-spec.md.

## Chạy trên máy

```
npm install
npm run dev
```

## Build

```
npm run build
```

Kết quả nằm trong thư mục `dist`.

## Cấu trúc

- `src/data` - nội dung: thời kỳ, mục từ, nguồn, câu đố, mốc thế giới
- `src/components` - bản đồ 3D, mô hình và cảnh tái hiện
- `public/audio`, `public/img` - giọng kể và ảnh minh họa (do AI tạo)
- `scripts/geo.mjs` - tạo dữ liệu bản đồ từ Natural Earth
