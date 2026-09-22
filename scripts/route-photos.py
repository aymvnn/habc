"""Fetch the route photos from Pexels and grade them in the DUKAAT palette.

Pexels licence: free for commercial use, no attribution required (credits are kept in
public/routes/CREDITS.md anyway). Placeholders until the founders' own photography exists.
Run: python scripts/route-photos.py [grade]   grade = tone (default) | duo
"""
import io, os, sys, urllib.request
from PIL import Image, ImageOps

PHOTOS = {  # intent: (pexels id, photographer, subject)
    "distributor": (29454379, "William Buzeichuk", "Warehouse aisle"),
    "supplier": (31352672, "Pexels contributor", "Factory floor with presses"),
    "sell": (36652827, "Rafael Rodrigues", "Container terminal"),
    "buy": (25067701, "Pexels contributor", "Nuts at a bazaar"),
    "market-entry": (10549886, "Pexels contributor", "Dubai skyline"),
    "opportunity": (29174068, "Pexels contributor", "Construction cranes at dusk"),
    "invest": (8730987, "Mikhail Nilov", "Signing a contract"),
    "nominated": (7190500, "Pexels contributor", "Envelope with red wax seal"),
}
OUT_W, OUT_H = 448, 296  # 2x of the 224x148 card
STOPS = [(0.0, (30, 4, 10)), (0.38, (111, 10, 37)), (0.72, (190, 146, 92)), (1.0, (246, 236, 216))]

def lut(stops):
    table = []
    for c in range(3):
        for i in range(256):
            t = i / 255
            for (a, ca), (b, cb) in zip(stops, stops[1:]):
                if a <= t <= b:
                    f = (t - a) / (b - a) if b > a else 0
                    table.append(round(ca[c] + (cb[c] - ca[c]) * f)); break
    return table

def fit(im):
    r = max(OUT_W / im.width, OUT_H / im.height)
    im = im.resize((round(im.width * r), round(im.height * r)), Image.LANCZOS)
    x, y = (im.width - OUT_W) // 2, (im.height - OUT_H) // 2
    return im.crop((x, y, x + OUT_W, y + OUT_H))

def grade(im, mode):
    im = fit(im.convert("RGB"))
    g = ImageOps.autocontrast(ImageOps.grayscale(im), cutoff=1)
    duo = Image.merge("RGB", [g] * 3).point(lut(STOPS))
    if mode == "duo":
        return duo
    # "tone": keep a little of the real colour so the subject still reads
    return Image.blend(duo, im, 0.28)

def main():
    mode = sys.argv[1] if len(sys.argv) > 1 else "tone"
    os.makedirs("public/routes", exist_ok=True)
    credits = ["# Route photos — credits", "", "Placeholders from Pexels (free licence, no attribution required).", ""]
    for intent, (pid, who, what) in PHOTOS.items():
        url = f"https://images.pexels.com/photos/{pid}/pexels-photo-{pid}.jpeg?auto=compress&cs=tinysrgb&w=1400"
        data = urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})).read()
        out = grade(Image.open(io.BytesIO(data)), mode)
        out.save(f"public/routes/{intent}.jpg", "JPEG", quality=80, optimize=True, progressive=True)
        credits.append(f"- `{intent}.jpg` — {what}, {who}: https://www.pexels.com/photo/{pid}/")
        print(intent, os.path.getsize(f"public/routes/{intent}.jpg"))
    open("public/routes/CREDITS.md", "w", encoding="utf-8").write("\n".join(credits) + "\n")

if __name__ == "__main__":
    main()
