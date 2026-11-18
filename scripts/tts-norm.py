# Chuẩn hóa văn bản tiếng Việt trước khi đưa vào TTS: số -> chữ, ngày tháng, viết tắt
import re
D = ['không','một','hai','ba','bốn','năm','sáu','bảy','tám','chín']

def under1000(n, full=False):
    h, r = divmod(n, 100); t, u = divmod(r, 10)
    out = []
    if h or full: out += [D[h], 'trăm']
    if t == 0:
        if u:
            if h or full: out.append('linh')
            out.append(D[u])
    elif t == 1:
        out.append('mười')
        if u: out.append('lăm' if u == 5 else D[u])
    else:
        out += [D[t], 'mươi']
        if u == 1: out.append('mốt')
        elif u == 4: out.append('tư')
        elif u == 5: out.append('lăm')
        elif u: out.append(D[u])
    return out

def num(n):
    if n == 0: return 'không'
    parts = []
    units = ['', 'nghìn', 'triệu', 'tỷ']
    groups = []
    while n: groups.append(n % 1000); n //= 1000
    for i in range(len(groups) - 1, -1, -1):
        g = groups[i]
        if g == 0: continue
        full = i < len(groups) - 1
        parts += under1000(g, full) + ([units[i]] if units[i] else [])
    return ' '.join(parts)

def month(m):
    return {1: 'giêng', 4: 'tư'}.get(m, num(m)) if False else ('tư' if m == 4 else num(m))

ROMAN = {'II': 'hai', 'III': 'ba', 'IV': 'bốn', 'V': 'năm', 'VI': 'sáu', 'VII': 'bảy', 'VIII': 'tám', 'IX': 'chín', 'X': 'mười', 'XI': 'mười một', 'XII': 'mười hai', 'XIII': 'mười ba', 'XIV': 'mười bốn', 'XV': 'mười lăm', 'XVI': 'mười sáu', 'XVII': 'mười bảy', 'XVIII': 'mười tám', 'XIX': 'mười chín', 'XX': 'hai mươi'}
WORDS = {'TCN': 'trước Công nguyên', 'UNESCO': 'U-nét-xcô', 'ASEAN': 'A-xê-an', 'WTO': 'Tổ chức Thương mại Thế giới', 'ADN': 'a-đê-en', 'K.5': 'Ka năm', 'COC': 'Bộ quy tắc ứng xử', 'Indravarman II': 'Indravarman đệ nhị', 'Simhavarman III': 'Simhavarman đệ tam', 'km': 'ki-lô-mét', 'km²': 'ki-lô-mét vuông', 'ha': 'héc-ta'}

def norm(t):
    t = t.replace('–', '-').replace('—', '-')
    for k, v in WORDS.items():
        t = re.sub(r'(?<![\w.])' + re.escape(k) + r'(?![\w])', v, t)
    t = re.sub(r'\b(khóa|thứ|quyển|Phaolô|Gioan|Đại hội|Quốc hội) (II|III|IV|V|VI|VII|VIII|IX|X|XI|XII|XIII|XIV)\b', lambda m: m.group(1) + ' ' + ROMAN[m.group(2)], t)
    t = re.sub(r'\bthế kỷ ([IVX]+)\b', lambda m: 'thế kỷ ' + ROMAN.get(m.group(1), m.group(1)), t)
    # ngày/tháng/năm, tháng/năm
    t = re.sub(r'\b(\d{1,2})/(\d{1,2})/(\d{3,4})\b', lambda m: f'{num(int(m.group(1)))} tháng {month(int(m.group(2)))} năm {num(int(m.group(3)))}', t)
    t = re.sub(r'\b(\d{1,2})/(\d{3,4})\b', lambda m: f'{month(int(m.group(1)))} năm {num(int(m.group(2)))}', t)
    t = re.sub(r'\b(\d{1,2})/(\d{1,2})\b', lambda m: f'{num(int(m.group(1)))} tháng {month(int(m.group(2)))}', t)
    t = re.sub(r'\btháng (\d{1,2})\b', lambda m: 'tháng ' + month(int(m.group(1))), t)
    # khoảng a - b
    t = re.sub(r'(\d)\s*-\s*(\d)', r'\1 đến \2', t)
    # phần trăm, số thập phân, số có dấu chấm ngăn nghìn
    t = re.sub(r'(\d+),(\d+)\s*%', lambda m: f'{num(int(m.group(1)))} phẩy {" ".join(D[int(c)] for c in m.group(2))} phần trăm', t)
    t = re.sub(r'(\d+)\s*%', lambda m: num(int(m.group(1))) + ' phần trăm', t)
    t = re.sub(r'\b(\d{1,3}(?:\.\d{3})+)\b', lambda m: m.group(1).replace('.', ''), t)
    t = re.sub(r'\b(\d+),(\d+)\b', lambda m: f'{num(int(m.group(1)))} phẩy {num(int(m.group(2))) if len(m.group(2)) < 3 and not m.group(2).startswith("0") else " ".join(D[int(c)] for c in m.group(2))}', t)
    t = re.sub(r'\d+', lambda m: num(int(m.group(0))), t)
    # dấu câu
    t = re.sub(r'\s*\(\s*', ', ', t).replace(')', ',')
    t = re.sub(r',\s*$', '', t)
    t = t.replace('"', '').replace('“', '').replace('”', '').replace(';', ',').replace(':', ',')
    t = re.sub(r'\s*/\s*', ' ', t)
    t = re.sub(r',\s*([,.])', r'\1', t); t = re.sub(r'\s+', ' ', t).strip()
    return t

if __name__ == '__main__':
    for s in ['Cuối năm 938, Ngô Quyền', 'Năm 42 - 43, tướng', 'ngày 30/4/1975. Năm 1976', 'từ ngày 15 đến 18/12/1986 giữa', 'tháng 12/2024, và', 'Quốc hội khóa VI', 'năm 2026 có 102 triệu dân, 800.000 người, 2,5 lần, 14,6%', '1405, 1010, 105, 21, 34, 115, 1000000, 2001, thế kỷ 15', 'khoảng 200 TCN (theo UNESCO)']:
        print(norm(s))
