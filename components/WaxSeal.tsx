"use client";

import { useEffect, useId, useLayoutEffect, useRef } from "react";
import { sealTab } from "./SealedTab";

/* === Werkplaatsen w2: from a drop to the seal (owner approved 8 Oct 2026) ===
   The wax on the sealed letter (Signature 6) is poured, not placed: once the sheet has folded, a drop of Bordeaux wax
   lands on the fold, spreads with an irregular edge, and the die presses it round and flat; the ring and the tulip
   are struck into it with the site's strike (w1) and one gloss settles on the wax. GSAP's MorphSVG does the pour and
   the press — CSS cannot turn one irregular outline into another, and Safari cannot animate a path at all.
   - GSAP (about 37 kB) is fetched only here, once a letter has been sent; prefetchWax() warms it when a visitor starts
     to write (components/Form.tsx), so it is usually there before the fold ends.
   - Only with the extra motion, without reduced motion and not for a keyboard visitor; otherwise, and if GSAP cannot
     be fetched, the seal simply lies on the letter as before. The confirmation text never waits for the wax. */

// irregular closed outlines (Catmull-Rom through points on a wobbling circle), in a 80×80 box around (40, 40)
function blob(R: number, parts: [number, number, number][], n: number, cx = 40, cy = 40) {
  const p: [number, number][] = [];
  for (let i = 0; i < n; i++) {
    const t = (i / n) * Math.PI * 2;
    let r = R;
    for (const [amp, k, ph] of parts) r += R * amp * Math.sin(k * t + ph);
    p.push([cx + r * Math.cos(t), cy + r * Math.sin(t)]);
  }
  const f = (v: number) => v.toFixed(2);
  let d = `M${f(p[0][0])},${f(p[0][1])}`;
  for (let i = 0; i < n; i++) {
    const p0 = p[(i - 1 + n) % n], p1 = p[i], p2 = p[(i + 1) % n], p3 = p[(i + 2) % n];
    d += `C${f(p1[0] + (p2[0] - p0[0]) / 6)},${f(p1[1] + (p2[1] - p0[1]) / 6)} ${f(p2[0] - (p3[0] - p1[0]) / 6)},${f(p2[1] - (p3[1] - p1[1]) / 6)} ${f(p2[0])},${f(p2[1])}`;
  }
  return d + "Z";
}
const DROP = blob(6, [[0.1, 3, 0.4], [0.06, 5, 1.3]], 24, 40, 39);
const POOL = blob(23, [[0.09, 3, 1.1], [0.07, 5, 0.2], [0.05, 7, 2.1], [0.04, 2, 0.7]], 30, 40.6, 40.6);
const PRESSED = blob(27.6, [[0.035, 11, 0.3], [0.025, 17, 1.7], [0.02, 3, 0.9], [0.02, 5, 2.4]], 36);

let gsapLoad: Promise<[typeof import("gsap"), typeof import("gsap/MorphSVGPlugin")]> | null = null;
export function prefetchWax() {
  if (!gsapLoad) gsapLoad = Promise.all([import("gsap"), import("gsap/MorphSVGPlugin")]);
  return gsapLoad;
}

const live = () => {
  const html = document.documentElement;
  return html.dataset.beweging === "extra" && html.dataset.kbd === undefined && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};
/** a visitor starts to write a letter: fetch GSAP now if the wax will be poured, so it is there when the letter is sent */
export function warmWax() {
  if (live()) prefetchWax().catch(() => {});
}

/** delay: when the drop may land (ms after the letter appeared) — the fold of Signature 6 ends at about 740ms */
export function WaxSeal({ delay = 760 }: { delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const gid = useId().replace(/[^a-zA-Z0-9_-]/g, "");

  // Waardepapier v21: a letter has been sent, so the tab's icon becomes the wax seal for the rest of the visit
  useEffect(() => { sealTab(); }, []);

  // before the first paint: if the wax is to be poured, nothing of it may show yet
  useLayoutEffect(() => {
    if (ref.current && live()) ref.current.dataset.wax = "wait";
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.dataset.wax !== "wait") return;
    const inner = el.querySelector<HTMLElement>(".lt-wax-in")!;
    const body = el.querySelector<SVGPathElement>(".lt-wax-body")!;
    const gloss = el.querySelector<SVGEllipseElement>(".lt-wax-gloss")!;
    const stamp = Array.from(el.querySelectorAll<HTMLElement>(".lt-wax-ring, .lt-wax-mk"));
    const born = performance.now();
    let alive = true;
    let tl: { kill: () => void } | null = null;
    const giveUp = window.setTimeout(() => { if (alive && el.dataset.wax === "wait") delete el.dataset.wax; }, 2600);

    prefetchWax().then(([{ gsap }, { MorphSVGPlugin }]) => {
      if (!alive || el.dataset.wax !== "wait") return;
      clearTimeout(giveUp);
      gsap.registerPlugin(MorphSVGPlugin);
      const wait = Math.max(0, delay - (performance.now() - born)) / 1000;
      const t = gsap.timeline({ delay: wait, onComplete: () => { gsap.set([body, gloss, ...stamp], { clearProps: "transform,opacity" }); } });
      t.call(() => { el.dataset.wax = "gsap"; })
        .set(body, { attr: { d: DROP }, opacity: 0, scale: 0.6, svgOrigin: "40 39" })
        .set(gloss, { opacity: 0 })
        .set(stamp, { opacity: 0 })
        // the drop lands
        .to(body, { opacity: 1, scale: 1, duration: 0.22, ease: "power2.out" })
        // it spreads, with the irregular edge of real wax
        .to(body, { morphSVG: POOL, duration: 0.6, ease: "power3.out" }, "+=0.04")
        // the die: round and flat in a fifth of a second, then the strike (w1) on the whole seal
        .to(body, { morphSVG: PRESSED, duration: 0.2, ease: "power4.out" }, "+=0.2")
        .call(() => { inner.classList.remove("is-struck"); void inner.offsetWidth; inner.classList.add("is-struck"); })
        .fromTo(stamp, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 0.32, ease: "power3.out" }, "<0.02")
        .to(gloss, { opacity: 0.2, duration: 0.6, ease: "power2.out" }, "<0.1");
      tl = t;
    }, () => { if (alive) { clearTimeout(giveUp); delete el.dataset.wax; } });

    return () => { alive = false; clearTimeout(giveUp); tl?.kill(); };
  }, [delay]);

  return (
    <span className="lt-wax" ref={ref}>
      {/* the inner layer takes the strike: the outer one keeps its translate, which places the seal on the fold */}
      <span className="lt-wax-in">
        <svg className="lt-wax-b" viewBox="0 0 80 80" aria-hidden="true" focusable="false">
          <defs>
            <radialGradient id={`${gid}-w`} cx=".36" cy=".3" r=".85">
              <stop offset="0" stopColor="#A11B3D" />
              <stop offset=".46" stopColor="#7A0C29" />
              <stop offset="1" stopColor="#540618" />
            </radialGradient>
          </defs>
          <path className="lt-wax-body" d={PRESSED} fill={`url(#${gid}-w)`} />
          <ellipse className="lt-wax-gloss" cx="29" cy="27" rx="8" ry="3.2" fill="#FFF3F5" opacity=".2" transform="rotate(-32 29 27)" />
        </svg>
        <i className="lt-wax-ring" />
        <i className="lt-wax-mk" />
      </span>
    </span>
  );
}
