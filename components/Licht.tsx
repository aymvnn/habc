"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/* === Signature 5: one light — the window (owner approved 4 Oct 2026) ===
   The whole site is lit by one tall window at the top left: the merchant's light of the photographs. A fixed layer
   under the header (z-index 30; the header is 40, the dock 45) lays a soft diagonal shaft of warm light over the paper
   and a faint shade in the far corner, so the page has weight. It is felt more than seen (a few percent).
   - The hero stays exactly as it is: on the homepage the light only comes on once the wordmark has docked into the
     header (html[data-dock="done"]), and it is off by default until this script decides, so it never flashes over it.
   - The window moves a little with the hand (fine pointers only), smoothed; requestAnimationFrame runs only while the
     light is catching up with the pointer. Scrolling needs nothing: the paper moves under a light that stays put.
   - Reduced motion: the light stays where it is. Print: hidden (app/signaturen.css).
   The same light falls through a mashrabiya onto the dark surfaces (the page end, the homepage finale, the footer):
   that pattern is pure CSS (.mash in app/signaturen.css). */
const HOME = /^\/(nl|en|ar)\/?$/;

export function Licht() {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const html = document.documentElement;
    const home = HOME.test(pathname);
    const sync = () => {
      el.dataset.on = !home || html.dataset.dock === "done" ? "1" : "0";
    };
    sync();
    const mo = new MutationObserver(sync);
    mo.observe(html, { attributes: true, attributeFilter: ["data-dock"] });
    return () => mo.disconnect();
  }, [pathname]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
    const tick = () => {
      raf = 0;
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      el.style.setProperty("--lpx", cx.toFixed(4));
      el.style.setProperty("--lpy", cy.toFixed(4));
      if (Math.abs(tx - cx) > 0.0008 || Math.abs(ty - cy) > 0.0008) raf = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch" || !fine.matches || reduce.matches) return;
      tx = e.clientX / innerWidth - 0.5;
      ty = e.clientY / innerHeight - 0.5;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="licht" aria-hidden="true" data-on="0" />;
}

/* the light through a mashrabiya, for the dark surfaces: an empty, decorative layer (styles in app/signaturen.css) */
export function Mash() {
  return (
    <span className="mash" aria-hidden="true">
      <span />
    </span>
  );
}
