"use client";

import { useEffect, useRef } from "react";

/* === Werkplaatsen w3: the rose engine (owner approved 8 Oct 2026) ===
   The coin certificate's rosette is engraved in front of you, the way a rose engine cuts one for a banknote: a bright
   point runs round, leaves a fine line behind, starts the next loop a little turned — the woven band fills loop by
   loop. When the inner band closes, one light runs over the whole rosette and the tulip is struck in the middle (w1).
   - Two bands (9 and 15 lobes, 14 and 10 loops): 24 lines, so it stays fluent on an ordinary laptop. The lines are
     built here, in the browser (the markup would otherwise carry 70 kB of path data on every visit).
   - Plays once, when half of it is in view; only with the extra motion, without reduced motion and not for a keyboard
     visitor. Otherwise it is simply drawn. Decorative: hidden from screen readers. Styles: app/werkplaatsen.css. */

const BANDS = [
  { R: 98, A: 20, n: 9, K: 14 },
  { R: 56, A: 9, n: 15, K: 10 },
];
const STEPS = 360;

function lines() {
  const out: string[] = [];
  for (const b of BANDS) {
    for (let k = 0; k < b.K; k++) {
      const ph = (k * 2 * Math.PI) / b.K;
      let d = "";
      for (let i = 0; i <= STEPS; i++) {
        const t = (i / STEPS) * Math.PI * 2;
        const r = b.R + b.A * Math.sin(b.n * t + ph);
        d += (i ? "L" : "M") + (150 + r * Math.cos(t - Math.PI / 2)).toFixed(1) + " " + (150 + r * Math.sin(t - Math.PI / 2)).toFixed(1);
      }
      out.push(d + "Z");
    }
  }
  return out;
}

const DUR = 1050; // one loop
const STEP = 52; // the next loop starts this much later
const EASE = "cubic-bezier(.45,0,.25,1)";

export function RoseEngine() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    const svg = host.querySelector("svg")!;
    const mark = host.querySelector<HTMLElement>(".ro-mark")!;
    const gDraw = svg.querySelector(".ro-draw")!, gCut = svg.querySelector(".ro-cut")!, gGl = svg.querySelector(".ro-gl")!;
    const ns = "http://www.w3.org/2000/svg";
    const html = document.documentElement;
    const live = html.dataset.beweging === "extra" && html.dataset.kbd === undefined && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const draw: SVGPathElement[] = [], cut: SVGPathElement[] = [];
    gDraw.replaceChildren(); gCut.replaceChildren(); gGl.replaceChildren(); // a second run of the effect (development) starts clean
    for (const d of lines()) {
      const a = document.createElementNS(ns, "path");
      a.setAttribute("d", d);
      a.setAttribute("pathLength", "1");
      a.setAttribute("stroke-dasharray", "1 1");
      a.setAttribute("stroke-dashoffset", live ? "1" : "0");
      gDraw.appendChild(a);
      draw.push(a);
      const c = a.cloneNode() as SVGPathElement;
      c.setAttribute("stroke-dasharray", "0.022 1.2");
      c.setAttribute("stroke-dashoffset", "0.022");
      gCut.appendChild(c);
      cut.push(c);
      const g = document.createElementNS(ns, "path");
      g.setAttribute("d", d);
      gGl.appendChild(g);
    }
    if (!live) return;
    mark.style.opacity = "0";
    const lin = svg.querySelector("linearGradient")!;
    let raf = 0, timer = 0;

    const glint = () => {
      const t0 = performance.now(), D = 1100;
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / D), x = -160 + p * 520;
        lin.setAttribute("x1", String(x));
        lin.setAttribute("x2", String(x + 120));
        if (p < 1) raf = requestAnimationFrame(tick);
        else { lin.setAttribute("x1", "-160"); lin.setAttribute("x2", "-40"); }
      };
      raf = requestAnimationFrame(tick);
      mark.style.opacity = "";
      mark.classList.add("is-struck");
    };
    const play = () => {
      draw.forEach((p, i) => {
        p.animate([{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], { duration: DUR, delay: i * STEP, easing: EASE, fill: "backwards" })
          .finished.then(() => p.setAttribute("stroke-dashoffset", "0"), () => {});
      });
      cut.forEach((p, i) =>
        p.animate(
          [{ strokeDashoffset: 0.022, opacity: 0 }, { opacity: 1, offset: 0.04 }, { opacity: 1, offset: 0.92 }, { strokeDashoffset: -0.978, opacity: 0 }],
          { duration: DUR, delay: i * STEP, easing: EASE },
        ),
      );
      timer = window.setTimeout(glint, (draw.length - 1) * STEP + DUR + 40);
    };
    const io = new IntersectionObserver((es) => {
      if (!es.some((e) => e.isIntersecting)) return;
      io.disconnect();
      play();
    }, { threshold: 0.5 });
    io.observe(host);
    return () => {
      io.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(raf);
      svg.getAnimations?.({ subtree: true }).forEach((a) => a.cancel());
      mark.style.opacity = "";
      mark.classList.remove("is-struck");
    };
  }, []);

  return (
    <div className="rose" ref={ref} aria-hidden="true">
      <svg viewBox="0 0 300 300" focusable="false">
        <defs>
          <linearGradient id="ro-gl" gradientUnits="userSpaceOnUse" x1="-160" y1="0" x2="-40" y2="60">
            <stop offset="0" stopColor="#FFF3D2" stopOpacity="0" />
            <stop offset=".5" stopColor="#FFF3D2" stopOpacity="1" />
            <stop offset="1" stopColor="#FFF3D2" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle className="ro-rim" cx="150" cy="150" r="136" />
        <circle className="ro-rim2" cx="150" cy="150" r="131" />
        <g className="ro-draw" />
        <g className="ro-cut" />
        <g className="ro-gl" stroke="url(#ro-gl)" />
        <circle className="ro-rim2" cx="150" cy="150" r="30" />
      </svg>
      <span className="ro-mark" />
    </div>
  );
}
