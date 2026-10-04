"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/* === Signature 1: the gold thread (owner approved 4 Oct 2026) ===
   The hero's bar does not stop: below it one gold line holds the whole page. It runs down the margin, crosses the
   page in the paper between two sections (every crossing from one side to the other is a border crossed), runs down
   the other margin, and so on, until it arrives at the foil edge of the page's end. It passes BEHIND photographs and
   bands, the way the bar passes behind the letters in the hero. A small struck coin marks every turn.
   - Inner pages: it leaves the masthead's line at the far end and turns down; the homepage: it starts under the hero
     (which stays untouched) at the left edge.
   - It draws itself at the pace of the scroll (the head runs at 75% of the screen): a page you have not read yet is
     not yet drawn. When you rest, a glint of the header's light runs along the part in view, every 8 s.
   - Only with the extra motion (html[data-beweging="extra"]) and without reduced motion; otherwise it is simply drawn
     in full and still. Hidden on narrow screens (≤900px), where the margin is too small for it. RTL: mirrored.
   - One SVG behind the content of <main> (z-index:-1 inside main's stacking context): paper shows it, every
     photograph, band and dark surface covers it. Recomputed when the page's height or the window changes.
   Styles: app/signaturen.css ("Signature 1"). */

type Piece = { len: number; y0: number; y1: number; at: number };
type Coin = { x: number; y: number; at: number };
const BAND = 150; // the scroll distance over which one crossing draws itself
const MIN_GAP = 220; // crossings closer than this are skipped
const HOME = /^\/(nl|en|ar)\/?$/;

export function GoldThread() {
  const pathname = usePathname();
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const main = svg?.parentElement;
    if (!svg || !main) return;
    const path = svg.querySelector<SVGPathElement>(".dr-line")!;
    const glint = svg.querySelector<SVGPathElement>(".dr-glint")!;
    const coinsG = svg.querySelector<SVGGElement>(".dr-coins")!;
    const html = document.documentElement;
    const wide = window.matchMedia("(min-width: 901px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let pieces: Piece[] = [];
    let coins: { el: SVGCircleElement; at: number; on: boolean }[] = [];
    let total = 0;
    let raf = 0;
    let layoutRaf = 0;
    let idleTimer = 0;
    let glintAnim: Animation | null = null;
    const home = HOME.test(pathname);
    const live = () => html.dataset.beweging === "extra" && !reduce.matches && wide.matches;

    const layout = () => {
      layoutRaf = 0;
      if (!wide.matches) { svg.style.display = "none"; return; }
      svg.style.display = "";
      const rtl = html.dir === "rtl";
      const W = main.clientWidth;
      const mainTop = main.getBoundingClientRect().top + scrollY;
      const wrap = main.querySelector<HTMLElement>(".sp .wrap, :scope > section.block .wrap");
      const inset = wrap ? Math.max(14, wrap.getBoundingClientRect().left) : 48;
      const xs = { start: rtl ? W - inset / 2 : inset / 2, end: rtl ? inset / 2 : W - inset / 2 };
      const top = (el: Element) => el.getBoundingClientRect().top + scrollY - mainTop;

      // where the thread begins, which blocks it crosses before, and where it ends
      let x0: number, y0: number, side: "start" | "end";
      let blocks: HTMLElement[];
      const end = main.querySelector<HTMLElement>(".pe");
      if (home) {
        const hero = main.querySelector<HTMLElement>("section.h3");
        if (!hero) { svg.style.display = "none"; return; }
        y0 = top(hero) + hero.offsetHeight; x0 = rtl ? W : 0; side = "start";
        blocks = Array.from(main.querySelectorAll<HTMLElement>(":scope > section.block:not(.pe)"));
      } else {
        const bar = main.querySelector<HTMLElement>(".mh .mh-bar");
        if (!bar) { svg.style.display = "none"; return; }
        y0 = top(bar) + 1.5; x0 = rtl ? 0 : W; side = "end";
        blocks = Array.from(main.querySelectorAll<HTMLElement>(".sp > section.b")).filter((b) => !b.classList.contains("pe"));
      }
      const yEnd = end ? top(end) + 1.5 : main.offsetHeight - 2;

      // the crossings: in the paper above a block (the middle of its top padding), or along the top edge of a block
      // that has its own background (a band): the line then runs along its edge and goes on behind it
      const cross: number[] = [];
      let last = y0;
      for (const b of blocks) {
        const cs = getComputedStyle(b);
        const t = top(b);
        const opaque = cs.backgroundColor !== "rgba(0, 0, 0, 0)" && cs.backgroundColor !== "transparent";
        const y = opaque ? t - 1.5 : t + parseFloat(cs.paddingTop || "0") * 0.5;
        if (parseFloat(cs.paddingTop || "0") < 26 && !opaque) continue;
        if (y - last < MIN_GAP || yEnd - y < MIN_GAP * 0.6) continue;
        cross.push(y);
        last = y;
      }

      // the polyline: lead-in (homepage), then down, across, down, across … down to the end
      let x = xs[side];
      const pts: [number, number][] = home ? [[x0, y0], [x, y0]] : [[x, y0]];
      for (const y of cross) {
        pts.push([x, y]);
        side = side === "start" ? "end" : "start";
        x = xs[side];
        pts.push([x, y]);
      }
      pts.push([x, yEnd]);

      const d = pts.map(([px, py], i) => `${i ? "L" : "M"}${px.toFixed(1)} ${py.toFixed(1)}`).join(" ");
      path.setAttribute("d", d);
      glint.setAttribute("d", d);
      svg.setAttribute("viewBox", `0 0 ${W} ${main.offsetHeight}`);
      svg.setAttribute("width", String(W));
      svg.setAttribute("height", String(main.offsetHeight));

      // pieces for drawing by scroll: a vertical run draws as the head passes it; a crossing draws over a band of
      // BAND px of scroll around its height (the runs next to it wait meanwhile)
      pieces = [];
      total = 0;
      const newCoins: Coin[] = [];
      for (let i = 1; i < pts.length; i++) {
        const [ax, ay] = pts[i - 1], [bx, by] = pts[i];
        const len = Math.hypot(bx - ax, by - ay);
        if (len < 0.5) continue;
        let y0p: number, y1p: number;
        if (Math.abs(by - ay) < 0.5) { y0p = ay - BAND / 2; y1p = ay + BAND / 2; }
        else { y0p = ay + (i > 1 ? BAND / 2 : 0); y1p = by - (i < pts.length - 1 ? BAND / 2 : 0); if (y1p < y0p) y1p = y0p; }
        if (i === 1 && Math.abs(by - ay) < 0.5) { y0p = ay - BAND; y1p = ay; } // the homepage's lead-in
        pieces.push({ len, y0: y0p, y1: y1p, at: total });
        total += len;
        if (i < pts.length - 1) newCoins.push({ x: bx, y: by, at: total });
      }
      // coins at every turn (not at the very start and end: there the thread meets the bar and the foil edge)
      coinsG.replaceChildren(
        ...newCoins.map((c) => {
          const el = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          el.setAttribute("cx", c.x.toFixed(1));
          el.setAttribute("cy", c.y.toFixed(1));
          el.setAttribute("r", "4.5");
          el.setAttribute("class", "dr-coin");
          return el;
        }),
      );
      coins = Array.from(coinsG.children).map((el, i) => ({ el: el as SVGCircleElement, at: newCoins[i].at, on: false }));
      path.style.strokeDasharray = `${total} ${total}`;
      draw();
    };

    const drawnAt = (yHead: number) => {
      let s = 0;
      for (const p of pieces) {
        if (yHead >= p.y1) s = p.at + p.len;
        else if (yHead > p.y0) { s = p.at + p.len * ((yHead - p.y0) / Math.max(1, p.y1 - p.y0)); break; }
        else break;
      }
      return s;
    };

    function draw() {
      raf = 0;
      if (!pieces.length) return;
      if (!live()) {
        path.style.strokeDashoffset = "0";
        coins.forEach((c) => { if (!c.on) { c.on = true; c.el.classList.add("on"); } });
        return;
      }
      const mainTop = main!.getBoundingClientRect().top + scrollY;
      const yHead = scrollY + innerHeight * 0.75 - mainTop;
      const s = drawnAt(yHead);
      path.style.strokeDashoffset = String(Math.max(0, total - s));
      for (const c of coins) {
        const on = s >= c.at - 0.5;
        if (on !== c.on) { c.on = on; c.el.classList.toggle("on", on); }
      }
    }

    // the glint: when the page rests, a short light runs along the part of the thread in view
    const runGlint = () => {
      idleTimer = 0;
      if (!live() || document.hidden || !pieces.length) return;
      const mainTop = main!.getBoundingClientRect().top + scrollY;
      const a = drawnAt(scrollY - mainTop + innerHeight * 0.1);
      const b = Math.min(drawnAt(scrollY - mainTop + innerHeight * 0.75), total);
      if (b - a > 120) {
        glintAnim?.cancel();
        glint.style.strokeDasharray = `90 ${total + 200}`;
        glintAnim = glint.animate(
          [{ strokeDashoffset: String(-a + 90), opacity: 0 }, { opacity: 1, offset: 0.12 }, { opacity: 1, offset: 0.8 }, { strokeDashoffset: String(-b), opacity: 0 }],
          { duration: Math.min(2400, 900 + (b - a) * 0.9), easing: "cubic-bezier(0.23,1,0.32,1)" },
        );
      }
      // UX-29 (owner, 4 Oct 2026): once the page is calm (components/Calm.tsx) the light no longer returns by itself
      if (html.dataset.calm === undefined) idleTimer = window.setTimeout(runGlint, 8000);
    };
    const restartIdle = () => {
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = window.setTimeout(runGlint, 1600);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(draw);
      restartIdle();
    };
    const relayout = () => { if (!layoutRaf) layoutRaf = requestAnimationFrame(layout); };
    const ro = new ResizeObserver(relayout);
    ro.observe(main);
    const mo = new MutationObserver(() => { draw(); restartIdle(); });
    mo.observe(html, { attributes: true, attributeFilter: ["data-beweging", "dir"] });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", relayout, { passive: true });
    wide.addEventListener("change", relayout);
    reduce.addEventListener("change", relayout);
    // fonts and late images shift the blocks: lay out once more when everything has settled
    document.fonts?.ready.then(relayout);
    const late = window.setTimeout(relayout, 1200);
    layout();
    restartIdle();
    return () => {
      ro.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", relayout);
      wide.removeEventListener("change", relayout);
      reduce.removeEventListener("change", relayout);
      if (raf) cancelAnimationFrame(raf);
      if (layoutRaf) cancelAnimationFrame(layoutRaf);
      if (idleTimer) clearTimeout(idleTimer);
      clearTimeout(late);
      glintAnim?.cancel();
    };
  }, [pathname]);

  return (
    <svg ref={svgRef} className="draad" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="dr-coin-g" cx=".34" cy=".28" r=".8">
          <stop offset="0" stopColor="#F7E6BE" />
          <stop offset=".34" stopColor="#DDBA7A" />
          <stop offset=".7" stopColor="#B08850" />
          <stop offset="1" stopColor="#8A6634" />
        </radialGradient>
      </defs>
      <path className="dr-line" d="" />
      <path className="dr-glint" d="" />
      <g className="dr-coins" />
    </svg>
  );
}
