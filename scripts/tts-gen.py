# Tạo giọng kể tiếng Việt cho từng thời kỳ và mục bằng VieNeu-TTS (giọng Thiện Minh).
# Đầu vào: scripts/narration-vi.json (id -> văn bản đã chuẩn hóa bằng scripts/tts-norm.py)
# Đầu ra: <out>/<id>.mp3, mono 64 kbps. Bỏ qua file đã có để chạy tiếp được nhiều đợt.
import json, os, subprocess, sys, time
import imageio_ffmpeg
from vieneu import Vieneu
src, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
FF = imageio_ffmpeg.get_ffmpeg_exe()
v = Vieneu()
items = json.load(open(src))
for i, (k, t) in enumerate(items.items()):
    mp3 = os.path.join(out, k + '.mp3')
    if os.path.exists(mp3): continue
    s = time.time(); a = v.infer(t, voice='Thiện Minh')
    wav = mp3[:-4] + '.wav'; v.save(a, wav)
    subprocess.run([FF, '-y', '-v', 'error', '-i', wav, '-af', 'silenceremove=start_periods=1:start_threshold=-50dB,areverse,silenceremove=start_periods=1:start_threshold=-50dB,areverse,loudnorm=I=-18:TP=-2', '-ac', '1', '-b:a', '64k', mp3], check=True)
    os.remove(wav)
    print(i, k, round(len(a) / 48000, 1), round(time.time() - s, 1), flush=True)
print('done')
