"use client";

import { useEffect, useRef } from "react";

/* === The footer's guilloche: a living engraved ground (owner, 4 Oct 2026) ===
   No focal points, no hover: fine gold wave lines spread over the whole footer, a little irregular (every line has
   its own phase, swing and slow wobble, from a fixed seed, so the figure never repeats in a grid). There are two such
   layers, each drawn once on its own canvas. They drift slowly in different directions (CSS transforms, on the GPU —
   nothing is redrawn while they move), so where they cross the moiré of a banknote keeps changing: always in motion,
   never at one place. Barely visible. Reduced motion: still. Decorative (aria-hidden). Styles: app/footers.css. */
const PAD = 110; // each canvas reaches this far beyond the footer, so the drift never shows an edge
const GOLD = "220,177,122";

type Layer = { seed: number; gap: number; k: number; swing: number; alpha: number; tilt: number };
const LAYERS: Layer[] = [
  { seed: 7, gap: 13, k: 3, swing: 30, alpha: 0.14, tilt: 0.05 },
  { seed: 19, gap: 16, k: 4, swing: 36, alpha: 0.12, tilt: -0.07 },
];

function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function paint(cv: HTMLCanvasElement, W: number, H: number, L: Layer) {
  const ctx = cv.getContext("2d");
  if (!ctx) return;
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const w = W + PAD * 2, h = H + PAD * 2;
  cv.width = Math.round(w * dpr);
  cv.height = Math.round(h * dpr);
  cv.style.width = `${w}px`;
  cv.style.height = `${h}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, w, h);
  ctx.lineWidth = 0.6;
  ctx.lineJoin = "round";
  ctx.strokeStyle = `rgba(${GOLD},${L.alpha})`;
  const rnd = rng(L.seed);
  for (let y0 = -60; y0 < h + 60; y0 += L.gap) {
    const ph = rnd() * Math.PI * 2;
    const ph2 = rnd() * Math.PI * 2;
    const sw = L.swing * (0.7 + rnd() * 0.6);
    const k = L.k + rnd() * 0.8;
    ctx.beginPath();
    for (let x = 0; x <= w; x += 5) {
      const u = (x / w) * Math.PI * 2;
      const y = y0 + x * L.tilt + sw * Math.sin(k * u + ph) * (0.65 + 0.35 * Math.sin(1.7 * u + ph2));
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
}

export function FooterGuilloche() {
  const a = useRef<HTMLCanvasElement>(null);
  const b = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = a.current?.parentElement;
    if (!host || !a.current || !b.current) return;
    const draw = () => {
      const W = host.clientWidth, H = host.clientHeight;
      paint(a.current!, W, H, LAYERS[0]);
      paint(b.current!, W, H, LAYERS[1]);
    };
    let raf = 0;
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(draw);
    });
    ro.observe(host);
    draw();
    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <canvas ref={a} className="f-guil f-guil-a" aria-hidden="true" />
      <canvas ref={b} className="f-guil f-guil-b" aria-hidden="true" />
    </>
  );
}
