"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/* === Muntregister: the living gold line (a6-2, owner feedback 1 Oct) ===
   The gold lines of the page's chrome catch the same light as the bar in the hero: the masthead's bar under the page
   title, the foil edge of the page's end (and of the homepage finale) and the one crossing line. One light source for
   all of them — it follows a mouse, and drifts in a slow figure-eight when the pointer rests or there is none — plus
   the hero's outward glint (two lights running out from the middle of the line, 1700ms, cubic ease-out) when a line
   is first in view (after it has drawn itself) and then every 4.6s while it stays in view.
   The values are copied from the hero (app/hero.css .bar::after, HeroStage's light loop); nothing is imported from it
   and the hero itself is not touched. This file only writes custom properties (--lx, --fl, --g1, --g2, --ga) on the
   lines themselves — leaf elements (the page end's edge is its own empty span, .pe-edge), so a frame restyles three
   small elements, never a whole section and everything that inherits from it. app/muntregister.css ("SLICE 9") paints
   them with mix-blend-mode:screen.
   Only under html[data-beweging="extra"]. requestAnimationFrame runs only while a line is in view, the tab is visible
   and something changes: the pointer moves (until the light has caught up), a glint runs, or the page scrolls. In
   between the loop sleeps and a timer wakes it for the next glint; the idle drift advances only while the loop runs, so
   it continues where it stopped. Under prefers-reduced-motion nothing runs and the CSS shows a still, soft sheen. */

const TARGETS = ".mh .mh-bar, .pe > .pe-edge, .x-rule > span";
const GLINT_MS = 1700;
const EVERY_MS = 4600;
const IDLE_MS = 2500;
const DRAW_MS = 1150; // the page end's edge and the crossing line draw in 1100ms before they glint
const SCROLL_MS = 160; // keep following the lines this long after the last scroll event
const PROPS = ["--lx", "--fl", "--g1", "--g2", "--ga"];

type Line = { el: HTMLElement; visible: boolean; readyAt: number; next: number; glintAt: number; waiting: boolean };

export function FoilLight() {
  const pathname = usePathname();
  // the pointer and the drift outlive a page change, so the light does not jump back on every navigation
  const ptr = useRef({ px: -1, py: -1, lastMove: -1e9, cx: -1, cy: -1, drift: -1 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch" || !fine.matches) return;
      const p = ptr.current;
      p.px = e.clientX; p.py = e.clientY; p.lastMove = performance.now();
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const p = ptr.current;
    if (p.cx < 0) { p.cx = innerWidth * 0.62; p.cy = innerHeight * 0.3; }
    if (p.drift < 0) p.drift = performance.now();
    let lines: Line[] = [];
    let io: IntersectionObserver | null = null;
    let raf = 0;
    let timer = 0;
    let lastT = 0;
    let scrollUntil = 0;
    let on = false;
    // UX-29 (owner, 4 Oct 2026): after the first seconds the page is calm (components/Calm.tsx): no new glints by themselves
    const calm = () => html.dataset.calm !== undefined;

    // the loop sleeps: wake it when the next line is due to glint
    const sleep = () => {
      lastT = 0;
      let due = Infinity;
      for (const l of lines) if (l.visible && !l.waiting && l.readyAt >= 0 && l.glintAt < 0) due = Math.min(due, Math.max(l.readyAt, l.next));
      if (due < Infinity && !calm()) timer = window.setTimeout(wake, Math.max(0, due - performance.now()));
    };

    const tick = (t: number) => {
      raf = 0;
      if (!on || document.hidden) return;
      const vis = lines.filter((l) => l.visible);
      if (!vis.length) return;
      const dt = lastT ? Math.min(t - lastT, 50) : 16;
      lastT = t;
      const pointing = p.px >= 0 && t - p.lastMove <= IDLE_MS;
      let lx = p.px, ly = p.py;
      if (!pointing && !calm()) {
        p.drift += dt; // idle: a slow figure-eight across the screen, like light moving over foil
        const s = p.drift / 1000;
        lx = innerWidth * (0.5 + 0.4 * Math.sin(s * 0.21));
        ly = innerHeight * (0.42 + 0.3 * Math.sin(s * 0.29 + 1.2));
      }
      p.cx += (lx - p.cx) * 0.1; p.cy += (ly - p.cy) * 0.1;
      const settled = Math.abs(lx - p.cx) < 0.5 && Math.abs(ly - p.cy) < 0.5;
      let glinting = false;
      const rects = vis.map((l) => l.el.getBoundingClientRect()); // all reads first, then all writes
      vis.forEach((l, i) => {
        const b = rects[i];
        let g1 = -9999, g2 = -9999, ga = 0;
        if (!calm() && l.glintAt < 0 && !l.waiting && l.readyAt >= 0 && t >= l.readyAt && t >= l.next) { l.glintAt = t; l.next = t + EVERY_MS; }
        if (l.glintAt >= 0) {
          const q = (t - l.glintAt) / GLINT_MS;
          if (q > 1) l.glintAt = -1;
          else {
            glinting = true;
            const mid = b.left + b.width / 2;
            const off = (1 - Math.pow(1 - q, 3)) * innerWidth * 0.56;
            g1 = mid - off; g2 = mid + off; ga = q < 0.12 ? q / 0.12 : 1 - (q - 0.12) / 0.88;
          }
        }
        const lineY = b.top + Math.min(b.height, 3) / 2; // every line sits on its element's top edge
        const li = Math.max(0, 1 - Math.abs(p.cy - lineY) / 520);
        const st = l.el.style;
        st.setProperty("--lx", `${(p.cx - b.left).toFixed(0)}px`);
        st.setProperty("--fl", (0.3 + li * 0.7).toFixed(3));
        st.setProperty("--g1", `${(g1 - b.left).toFixed(0)}px`);
        st.setProperty("--g2", `${(g2 - b.left).toFixed(0)}px`);
        st.setProperty("--ga", ga.toFixed(3));
      });
      // keep going only while something changes; otherwise sleep until the next glint (a move or a scroll wakes it)
      if (glinting || t < scrollUntil || (pointing && !settled)) raf = requestAnimationFrame(tick);
      else sleep();
    };
    function wake() {
      if (timer) { clearTimeout(timer); timer = 0; }
      if (on && !raf && !document.hidden && lines.some((l) => l.visible)) raf = requestAnimationFrame(tick);
    }
    const onScroll = () => { scrollUntil = performance.now() + SCROLL_MS; wake(); };

    // the first time a line is in view: wait until it has drawn itself, then glint
    const firstSight = (l: Line) => {
      const now = performance.now();
      if (l.el.classList.contains("mh-bar")) {
        const anims = l.el.getAnimations ? l.el.getAnimations() : [];
        if (!anims.length) { l.readyAt = now + 120; return; }
        l.waiting = true;
        Promise.all(anims.map((a) => a.finished)).then(
          () => { l.waiting = false; l.readyAt = performance.now() + 60; wake(); },
          () => { l.waiting = false; l.readyAt = performance.now(); wake(); },
        );
      } else l.readyAt = now + DRAW_MS;
    };

    const start = () => {
      if (on) return;
      on = true;
      lines = Array.from(document.querySelectorAll<HTMLElement>(TARGETS)).map((el) => ({ el, visible: false, readyAt: -1, next: 0, glintAt: -1, waiting: false }));
      if (!lines.length || !("IntersectionObserver" in window)) return;
      io = new IntersectionObserver(
        (entries) => {
          for (const en of entries) {
            const l = lines.find((x) => x.el === en.target);
            if (!l) continue;
            l.visible = en.isIntersecting;
            if (l.visible && l.readyAt < 0 && !l.waiting) firstSight(l);
            else if (l.visible) l.next = Math.max(l.next, performance.now() + 400); // back in view: glint soon
          }
          wake();
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0 }, // the same line as the reveals (components/Reveal.tsx)
      );
      lines.forEach((l) => io!.observe(l.el));
    };
    const stop = () => {
      on = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      if (timer) clearTimeout(timer);
      timer = 0;
      lastT = 0;
      io?.disconnect();
      io = null;
      lines.forEach((l) => PROPS.forEach((k) => l.el.style.removeProperty(k))); // back to the still sheen
      lines = [];
    };
    const sync = () => (html.dataset.beweging === "extra" && !reduce.matches ? start() : stop());

    sync();
    const mo = new MutationObserver(sync);
    mo.observe(html, { attributes: true, attributeFilter: ["data-beweging"] });
    reduce.addEventListener("change", sync);
    document.addEventListener("visibilitychange", wake);
    window.addEventListener("pointermove", wake, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      stop();
      mo.disconnect();
      reduce.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", wake);
      window.removeEventListener("pointermove", wake);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return null;
}
