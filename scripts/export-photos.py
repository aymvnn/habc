"""
Export the chosen DUKAAT photos to the website.

Reads brand/fotostijl/flow-export/keuze.json (the chosen variant per image), crops each photo to the exact
ratio of its place on the site and writes a web-sized JPEG:

    public/routes/<intent>.jpg          600 × 400   hero route photos (hover + phone thumbnails)
    public/photos/home/<id>.jpg         per TARGETS below

Run:  python scripts/export-photos.py
next/image serves the files under public/photos as AVIF/WebP in the right size; the route photos are
plain <img> in the hero, so they are already small here.
"""
import glob
import json
import os
from PIL import Image

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
EXPORT = os.path.join(ROOT, "brand", "fotostijl", "flow-export")

ROUTES = ["distributor", "supplier", "sell", "buy", "market-entry", "opportunity", "invest", "nominated"]
# id -> (output path, width, height, jpeg quality)
TARGETS = {f"route-{r}": (f"public/routes/{r}.jpg", 600, 400, 80) for r in ROUTES}
TARGETS.update({
    "steps-1-need": ("public/photos/home/steps-1-need.jpg", 1600, 900, 84),
    "steps-2-verify": ("public/photos/home/steps-2-verify.jpg", 1600, 900, 84),
    "steps-3-match": ("public/photos/home/steps-3-match.jpg", 1600, 900, 84),
    "steps-4-introduce": ("public/photos/home/steps-4-introduce.jpg", 1600, 900, 84),
    "steps-5-first-deal": ("public/photos/home/steps-5-first-deal.jpg", 1600, 900, 84),
    "why-1-traders": ("public/photos/home/why-1-traders.jpg", 1200, 1500, 84),
    "why-2-rotterdam": ("public/photos/home/why-2-rotterdam.jpg", 1200, 1500, 84),
    "why-3-both-sides": ("public/photos/home/why-3-both-sides.jpg", 1200, 1500, 84),
    "membership-room": ("public/photos/home/membership-room.jpg", 2560, 1097, 84),
    "founder-1-craft": ("public/photos/home/founder-1-craft.jpg", 880, 1100, 84),
    "founder-2-craft": ("public/photos/home/founder-2-craft.jpg", 880, 1100, 84),
    "closing-letter": ("public/photos/home/closing-letter.jpg", 1200, 800, 84),
})
# a few generations came back with a thin band at one edge: trim it before cropping (fractions of the side)
TRIM = {"founder-1-craft-3": {"bottom": 0.025}}


def fit(im, w, h):
    """centre-crop to the target ratio, then resize"""
    src = im.width / im.height
    dst = w / h
    if src > dst:
        nw = round(im.height * dst)
        x = (im.width - nw) // 2
        im = im.crop((x, 0, x + nw, im.height))
    elif src < dst:
        nh = round(im.width / dst)
        y = (im.height - nh) // 2
        im = im.crop((0, y, im.width, y + nh))
    return im.resize((w, h), Image.LANCZOS)


def main():
    picks = json.load(open(os.path.join(EXPORT, "keuze.json"), encoding="utf8"))
    for pid, (out, w, h, q) in TARGETS.items():
        if pid not in picks:
            print(f"-- {pid}: geen keuze in keuze.json, overgeslagen")
            continue
        name = f"{pid}-{picks[pid]['pick']}"
        src = glob.glob(os.path.join(glob.escape(os.path.join(EXPORT, pid)), name + ".*"))
        if not src:
            print(f"!! {name}: bestand niet gevonden")
            continue
        im = Image.open(src[0]).convert("RGB")
        t = TRIM.get(name)
        if t:
            im = im.crop((0, 0, im.width, im.height - round(im.height * t.get("bottom", 0))))
        im = fit(im, w, h)
        path = os.path.join(ROOT, out)
        os.makedirs(os.path.dirname(path), exist_ok=True)
        im.save(path, "JPEG", quality=q, optimize=True, progressive=True)
        print(f"{name:28} -> {out}  {w}x{h}  {os.path.getsize(path) // 1024} KB")


if __name__ == "__main__":
    main()
