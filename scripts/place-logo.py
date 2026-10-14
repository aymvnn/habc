# Places the real DUKAAT logo (tulip + wordmark) as hot-stamped gold foil on leather in a photo, in perspective, from the
# official colour reference: AI image models draw the logo differently every time (owner, 14 Oct 2026: "het logo moet 1 op 1 kloppen").
# Round 2 (owner: "het lijkt erop gephotoshopt"): the foil now takes its light from the leather under it (a metal reflects its
# surroundings), the leather grain shows through, the logo is pressed into the surface (shadowed wall on the light side, a lit
# wall opposite, a faint pressed halo), and everything is composited at 3x and brought back down.
#
#   python scripts/place-logo.py <plain.jpg> <out.jpg> TLx,TLy TRx,TRy BRx,BRy BLx,BLy [--light ur|ul|r|l] [--scale 0.9]
#
# The four points are the corners, in the photo, of the logo's bounding box (tulip top to wordmark bottom), clockwise from top-left.
# Start from a photo where the AI logo has been removed first (scripts/edit-photo.mjs "remove the gold emblem…").
import sys
import numpy as np
from PIL import Image, ImageChops, ImageFilter

ROOT = __file__.rsplit("scripts", 1)[0]
REF = ROOT + "brand/fotostijl/DUKAAT-logo-kleurreferentie.png"
S = 3  # supersampling


def logo_mask():
    src = Image.open(REF).convert("RGB")
    diff = ImageChops.difference(src, Image.new("RGB", src.size, (237, 234, 225))).convert("L")
    mask = diff.point(lambda v: 255 if v > 40 else int(v * 255 / 40))
    return mask.crop(mask.getbbox())


def coeffs(src_pts, dst_pts):
    # PIL wants the mapping from output (photo) coordinates back to input (logo) coordinates
    A, B = [], []
    for (x, y), (u, v) in zip(dst_pts, src_pts):
        A.append([x, y, 1, 0, 0, 0, -u * x, -u * y]); B.append(u)
        A.append([0, 0, 0, x, y, 1, -v * x, -v * y]); B.append(v)
    return np.linalg.solve(np.array(A, float), np.array(B, float)).tolist()


def blur(a, r):
    from scipy.ndimage import gaussian_filter
    return gaussian_filter(a.astype(float), r) if r > 0 else a


def shifted(m, dy, dx):
    return np.roll(np.roll(m, dy, axis=0), dx, axis=1)


def main():
    argv = sys.argv[1:]
    def opt(name, default):
        return argv[argv.index(name) + 1] if name in argv else default
    light = opt("--light", "ur")
    scale = float(opt("--scale", "1"))
    pos = [a for i, a in enumerate(argv) if not a.startswith("--") and not (i > 0 and argv[i - 1].startswith("--"))]
    plain, out, *pts = pos
    quad = np.array([[float(c) for c in p.split(",")] for p in pts])
    if scale != 1:
        c = quad.mean(axis=0)
        quad = c + (quad - c) * scale

    photo = Image.open(plain).convert("RGB")
    # work on a padded crop around the logo, upsampled S times
    pad = 40
    x0, y0 = np.floor(quad.min(axis=0)).astype(int) - pad
    x1, y1 = np.ceil(quad.max(axis=0)).astype(int) + pad
    x0, y0 = max(0, x0), max(0, y0)
    x1, y1 = min(photo.width, x1), min(photo.height, y1)
    crop = photo.crop((x0, y0, x1, y1))
    W, H = crop.width * S, crop.height * S
    big = np.asarray(crop.resize((W, H), Image.BICUBIC), float)

    mask = logo_mask()
    w, h = mask.size
    local = [((x - x0) * S, (y - y0) * S) for x, y in quad]
    M = np.asarray(mask.transform((W, H), Image.PERSPECTIVE, coeffs([(0, 0), (w, 0), (w, h), (0, h)], local), Image.BICUBIC), float) / 255.0

    # the light that falls on the leather here, and its fine grain
    gray = big @ np.array([0.299, 0.587, 0.114])
    inside = M > 0.5
    L = blur(gray, 8 * S)
    Ln = L / max(1.0, L[inside].mean())
    grain = gray - blur(gray, 1.2 * S)

    # gold foil: a metal that mirrors its surroundings — deep where the leather is in shade, bright where the leather shines
    resp = np.clip(Ln, 0.5, 1.6) ** 1.8
    deep = np.array([118, 84, 40], float)
    mid = np.array([186, 146, 82], float)
    hi = np.array([238, 210, 150], float)
    t = np.clip((resp - 0.45) / 1.6, 0, 1)[..., None]
    foil = np.where(t < 0.5, deep + (mid - deep) * (t / 0.5), mid + (hi - mid) * ((t - 0.5) / 0.5))
    foil += grain[..., None] * 0.9  # the grain shows through the thin foil
    # a soft, broken sheen along the strokes, as foil never reflects perfectly evenly
    rng = np.random.default_rng(11)
    mottle = blur(rng.normal(0, 1, (H, W)), 6 * S)
    mottle = mottle / (np.abs(mottle).max() + 1e-6)
    foil *= (1 + 0.08 * mottle)[..., None]

    # pressed into the leather: the wall on the light side is in shadow, the opposite wall catches light
    d = max(1, int(round(1.2 * S)))
    dy, dx = {"ur": (d, -d), "ul": (d, d), "r": (0, -d), "l": (0, d)}[light]
    wall_shadow = np.clip(M - shifted(M, dy, dx), 0, 1)
    wall_light = np.clip(M - shifted(M, -dy, -dx), 0, 1)
    wall_shadow = blur(wall_shadow, 0.6 * S)
    wall_light = blur(wall_light, 0.6 * S)
    halo = np.clip(blur(M, 2.5 * S) - M, 0, 1)  # the leather around the stamp is pressed a little darker

    Mb = blur(M, 0.35 * S)[..., None]
    out_big = big * (1 - Mb) + foil * Mb
    out_big *= (1 - 0.10 * halo)[..., None]
    out_big *= (1 - 0.45 * wall_shadow)[..., None]
    out_big += (wall_light * 38)[..., None]
    out_big = np.clip(out_big, 0, 255)

    small = Image.fromarray(out_big.astype("uint8")).resize(crop.size, Image.LANCZOS)
    # the photo's own noise on the new pixels, so the patch has the same texture as the rest
    a = np.asarray(small, float)
    noise = np.random.default_rng(7).normal(0, 1.6, a.shape[:2])[..., None]
    a = np.clip(a + noise * (np.asarray(Image.fromarray((M * 255).astype("uint8")).resize(crop.size), float)[..., None] / 255.0), 0, 255)
    photo.paste(Image.fromarray(a.astype("uint8")), (x0, y0))
    photo.save(out, quality=94)
    print("ok", out)


main()
