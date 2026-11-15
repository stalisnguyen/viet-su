# Quy cách viết một thời kỳ cho Việt Sử Toàn Đồ

Mỗi thời kỳ là một file `src/data/chapters/NN-<slug>.ts` (NN là số thứ tự thời kỳ, 05 đến 23), `export default` một đối tượng kiểu `Chapter` (xem `src/data/types.ts`). File chỉ được `import { l, type Chapter } from '../types';`.

Người đọc: công chúng quốc tế và người Việt, từ học sinh đến người nghiên cứu. Trang song ngữ, mọi chuỗi hiển thị đều có `vi` và `en` (dùng `l('tiếng Việt', 'English')`).

## Ba tầng nội dung của mỗi mục

- `summary`: 40 đến 70 chữ tiếng Việt, ai đọc cũng hiểu, nói mục này là gì và vì sao đáng biết.
- `detail`: 2 đến 3 đoạn, mỗi đoạn 50 đến 90 chữ, kể diễn biến, con người, hiện vật, con số cụ thể.
- `scholarly`: 2 đến 3 đoạn cho người đọc sâu: sử liệu nào chép việc này, các nguồn lệch nhau ở đâu, giới nghiên cứu còn tranh luận gì, niên đại chắc đến mức nào. Không viết chung chung.

Thẻ thời kỳ (`period`) cũng có `summary`, `detail`, `scholarly` theo cùng tinh thần, cộng với:
- `question`: một câu hỏi lớn mà thời kỳ này trả lời (ví dụ: "Vì sao sau một nghìn năm bị cai trị, người Việt vẫn giữ được tiếng nói riêng?").
- `start`: mốc bắt đầu viết ngắn (`l('179 TCN', '179 BCE')`).
- `range`: khoảng năm đầy đủ.
- `view`: `north`, `central`, `south` hoặc `all` (bản đồ nhìn vào đâu).
- `regions`: vùng nào sáng lên và tên vùng lúc đó, ví dụ `{ north: l('Giao Chỉ', 'Jiaozhi') }`. Ba vùng là ước lượng thô (bắc: từ Hoành Sơn trở ra; trung: Hoành Sơn đến khoảng Phan Rang; nam: Nam Bộ và cực Nam Trung Bộ), chỉ đặt tên khi tên đó đúng với phần lớn vùng trong thời kỳ.
- `color`: dùng đúng mã màu được giao.

## Mục (entries): 5 đến 8 mục mỗi thời kỳ

Chọn những gì một người cần biết để hiểu thời kỳ: nhân vật, sự kiện, di tích, hiện vật, văn hóa, truyền thuyết. Ưu tiên thứ có địa điểm cụ thể để hiện trên bản đồ. `kind`: `site`, `culture`, `artifact`, `figure`, `legend`, `event`.

- `slug`: chữ thường không dấu, nối bằng gạch ngang, không trùng với các mục đã có (xem `src/data/entries.ts` và các file trong `chapters/`).
- `sort`: số năm trước năm 2000 (năm 40 sau Công nguyên là 1960; năm 179 TCN là 2179). Dùng để xếp thứ tự trong thời kỳ, mục xưa hơn có số lớn hơn.
- `coord`: `[kinh độ, vĩ độ]` của địa điểm chính, đã kiểm lại. Phải nằm trong khung 101.5 đến 112.4 độ Đông, 7.6 đến 23.9 độ Bắc. Việc xảy ra ngoài khung thì dùng địa điểm liên quan trong khung hoặc bỏ `coord`.
- `place`: tên nơi theo địa danh hiện nay.
- `evidence`: mức chứng cứ, một hoặc nhiều trong `arch` (có di tích, hiện vật khảo cổ), `chron` (được sử cũ hoặc văn bản đương thời chép), `legend` (truyền thuyết, tín ngưỡng dân gian). Gắn đúng, không gắn cho đẹp.
- `hooks[slug]`: một câu ngắn gây tò mò, đúng sự thật.

## Nguồn

- Mỗi mục và thẻ thời kỳ có ít nhất 3 nguồn. Mỗi dòng `world` có 1 nguồn.
- Mọi URL phải là trang bạn đã thật sự mở được trong lúc làm và trang đó thật sự nói điều bạn viết. Không bịa URL, không ghi nguồn theo trí nhớ.
- Ưu tiên: sử liệu gốc (Đại Việt sử ký toàn thư, Khâm định Việt sử thông giám cương mục, Sử ký, Hán thư, Hậu Hán thư, Tân Đường thư..., `kind: 'primary'`, có thể không có URL nhưng phải ghi rõ quyển, kỷ), bảo tàng và cơ quan di sản (`museum`: Bảo tàng Lịch sử Quốc gia, UNESCO, Cục Di sản), bài nghiên cứu và sách học thuật (`paper`), bách khoa có biên tập (`reference`: Britannica, World History Encyclopedia), báo chính thống (`news`).
- Wikipedia chỉ là nguồn phụ, tối đa 1 trong số nguồn của mỗi mục.
- `id` của nguồn: chữ thường, gạch ngang, có tiền tố riêng của thời kỳ để không trùng (ví dụ `nv-hanshu`). Dùng lại được nguồn đã có trong `src/data/sources.ts` bằng cách khai báo lại đúng `id` đó trong file của bạn với cùng nội dung.
- `cite` viết đủ: tác giả hoặc cơ quan, năm nếu có, tên bài hoặc sách, nơi đăng.

## Chính xác và công bằng

- Không bịa con số, lời trích, tên người. Nguồn lệch nhau thì nêu cả hai và nói nguồn nào chép gì.
- Tách rõ điều khảo cổ xác nhận, điều sử chép, điều là truyền thuyết.
- Với các thời kỳ còn tranh cãi về cách nhìn (Bắc thuộc, Champa và Nam tiến, Pháp thuộc, 1945 đến nay), viết trung tính: nêu sự kiện, số liệu có nguồn, và các cách nhìn khác nhau của các bên, không dùng từ ngữ tuyên truyền hay miệt thị của bất kỳ bên nào.
- Tên riêng nước ngoài: tiếng Việt dùng tên quen thuộc trong sử Việt (Triệu Đà, Mã Viện), tiếng Anh dùng dạng quốc tế kèm tên Việt khi cần (Zhao Tuo (Triệu Đà)).
- Niên đại: tiếng Việt dùng "TCN" và năm trần; tiếng Anh dùng "BCE" và "CE" khi cần phân biệt.

## Văn phong

- Tiếng Việt: câu đầy đủ chủ vị, tự nhiên, cụ thể, không sáo rỗng, không giọng quảng cáo. Tiếng Anh: rõ, gọn, là bản viết lại tự nhiên chứ không dịch từng chữ.
- Không dùng gạch dài, không dùng mũi tên unicode, không dùng dấu chấm giữa. Khoảng năm viết bằng gạch nối có dấu cách: `40 - 43`.
- Không viết chữ in hoa để nhấn mạnh.

## Phần kèm theo

- `world`: 2 đến 3 dòng "cùng lúc đó trên thế giới", mỗi dòng một sự kiện có năm cụ thể và nguồn, giúp người nước ngoài định vị thời gian.
- `quiz`: đúng 3 câu, mỗi câu 3 lựa chọn, trả lời được từ nội dung đã viết, có `why` giải thích ngắn.
- `badge`: tên một huy hiệu ngắn, gợi tinh thần thời kỳ.
- Không điền `photos`. Thay vào đó, trong báo cáo cuối, liệt kê cho mỗi mục và cho thẻ thời kỳ 1 đến 2 tên file ảnh trên Wikimedia Commons mà bạn đã thấy tồn tại (tên file chính xác, giấy phép nếu thấy), để người khác kiểm tra bằng mắt rồi mới đưa vào.

## Kiểm tra trước khi nộp

Chạy `node scripts/check-chapter.mjs src/data/chapters/NN-<slug>.ts` trong `/home/claude/viet-su` và sửa đến khi báo ĐẠT. Không chạy `npm run build`, không dùng git, không sửa file nào khác.

Tham khảo cách viết ở các mục đã có: `src/data/entries.ts` (ví dụ mục `thanh-co-loa`, `trong-dong-ngoc-lu`) và `src/data/periods.ts` (thời kỳ `au-lac`).
