"""Generate the DUKAAT guilloche rosettes (banknote-style engraving) as two SVG layers.

Each band is K phase-shifted copies of a polar wave r(t) = r0 + a*sin(m*t + phase) * lobe(t);
the overlapping copies produce the woven lattice of security printing. Two layers are made so
they can counter-rotate on the page, which creates a slow moire shimmer.
Run: python scripts/guilloche.py
"""
import math

def band(r0, a, m, k, lobes=0, lobe_depth=0.0, steps_per_wave=14, twist=0.0):
    paths = []
    n = m * steps_per_wave
    for j in range(k):
        ph = 2 * math.pi * j / k
        pts = []
        for i in range(n + 1):
            t = 2 * math.pi * i / n
            lobe = 1 - lobe_depth + lobe_depth * math.cos(lobes * t) if lobes else 1
            r = r0 + a * math.sin(m * t + ph) * lobe + twist * math.sin(3 * t + ph)
            pts.append((r * math.cos(t), r * math.sin(t)))
        d = "M" + " ".join(f"{x:.1f} {y:.1f}" for x, y in pts) + "Z"
        paths.append(d)
    return paths

def svg(bands, sw):
    body = "".join(f'<path d="{d}"/>' for b in bands for d in b)
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="-250 -250 500 500">'
            f'<g fill="none" stroke="#B39455" stroke-width="{sw}" stroke-linejoin="round">{body}</g></svg>')

layer_a = [
    band(r0=214, a=12, m=36, k=7),                     # outer rim
    band(r0=184, a=9, m=48, k=3),                      # fine outer ribbon
    band(r0=98, a=20, m=14, k=9, lobes=7, lobe_depth=.35),  # inner lobed rosette
]
layer_b = [
    band(r0=150, a=26, m=22, k=9, lobes=5, lobe_depth=.3, twist=4),  # main lattice
    band(r0=124, a=7, m=40, k=4),                                     # hairline ring
]
open("public/ornament/guilloche-a.svg", "w").write(svg(layer_a, .55))
open("public/ornament/guilloche-b.svg", "w").write(svg(layer_b, .5))
print("ok")
