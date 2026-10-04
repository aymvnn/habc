"use client";

import { useEffect, useRef } from "react";

/* === The footer's ground: the tulip, engraved in guilloche (owner, 5 Oct 2026: "the tulip, made of the luxury
   guilloche patterns") ===
   One large tulip (the emblem's own outline, /logo/dukaat-beeldmerk.svg, as a mask) at the footer's right, filled
   with fine gold engraving like a banknote: hundreds of thin wavy rings that spread from the foot of the tulip. Two
   layers of rings, each waving differently, lie over each other — where they cross, the weave of a guilloche shows.
   Each layer is drawn once on its own canvas; the two then turn in opposite directions and breathe out of step (CSS
   rotate/scale, nothing is redrawn), so the engraving shimmers and ripples while the tulip itself stands still. Reduced motion: still.
   Decorative (aria-hidden). Styles: app/footers.css. */
const GOLD = "220,177,122";
const FOOT = 0.78; // the rings' centre: the foot of the tulip, as a share of its height

type Layer = { lobes: number; drift: number; alpha: number };
const LAYERS: Layer[] = [
  { lobes: 10, drift: 0.06, alpha: 0.38 },
  { lobes: 14, drift: -0.05, alpha: 0.27 },
];

function paint(cv: HTMLCanvasElement, R: number, L: Layer) {
  const ctx = cv.getContext("2d");
  if (!ctx) return;
  const dpr = Math.min(1.5, window.devicePixelRatio || 1);
  const size = R * 2;
  cv.width = Math.round(size * dpr);
  cv.height = Math.round(size * dpr);
  cv.style.width = `${size}px`;
  cv.style.height = `${size}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, size, size);
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = `rgba(${GOLD},${L.alpha})`;
  const TAU = Math.PI * 2;
  for (let r = 4; r < R; r += 4.2) {
    ctx.beginPath();
    for (let i = 0; i <= 720; i++) {
      const t = (i / 720) * TAU;
      const rr = r + 1.7 * Math.sin(L.lobes * t + r * L.drift) + 0.8 * Math.sin(3 * t + r * 0.02);
      const x = R + rr * Math.cos(t), y = R + rr * Math.sin(t);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
}

export function FooterTulip() {
  const host = useRef<HTMLSpanElement>(null);
  const a = useRef<HTMLCanvasElement>(null);
  const b = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el || !a.current || !b.current) return;
    let last = "";
    const draw = () => {
      const W = el.clientWidth, H = el.clientHeight;
      const key = `${W}x${H}`;
      if (!W || !H || key === last) return;
      last = key;
      // the canvases turn around the foot of the tulip, so they reach its farthest corner at every angle
      const R = Math.ceil(Math.hypot(W / 2, H * FOOT)) + 8;
      for (const [cv, L] of [[a.current!, LAYERS[0]], [b.current!, LAYERS[1]]] as const) {
        paint(cv, R, L);
        cv.style.left = `${W / 2 - R}px`;
        cv.style.top = `${H * FOOT - R}px`;
      }
    };
    let raf = 0;
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(draw);
    });
    ro.observe(el);
    draw();
    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="f-lat" aria-hidden="true">
      <span ref={host} className="f-tulip">
        <canvas ref={a} className="f-tulip-a" />
        <canvas ref={b} className="f-tulip-b" />
      </span>
    </div>
  );
}
