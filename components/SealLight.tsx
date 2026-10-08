"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ROSE_REST, SEAL_ANGLES, roseLight } from "@/lib/foil";

/* === Waardepapier v6: the light on the seals' foil (owner approved 9 Oct 2026) ===
   Every seal carries the Executive card's foil (components/SealFoil.tsx). With a mouse, the light is the hand: each
   seal in view turns its flare towards the pointer, brighter the closer it comes. On a touch screen (extra motion only)
   the light turns with the seal's place on the screen as you scroll. At rest it is the window's, from the top left.
   The flare eases towards the light and the loop sleeps once it has arrived. Nothing under reduced motion. */
type Foil = { el: SVGSVGElement; petals: SVGPathElement[]; beta: number; target: number; pow: number; powT: number };

export function SealLight() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const foils: Foil[] = Array.from(document.querySelectorAll<SVGSVGElement>(".seal-foil")).map((el) => ({
      el,
      petals: Array.from(el.querySelectorAll<SVGPathElement>(".sf-h path")),
      beta: ROSE_REST, target: ROSE_REST, pow: 0.7, powT: 0.7,
    }));
    if (!foils.length) return;
    const seen = new Set<Foil>();
    let raf = 0, px = -1, py = -1;

    const loop = () => {
      raf = 0;
      let busy = false;
      for (const f of foils) {
        const d = Math.atan2(Math.sin(f.target - f.beta), Math.cos(f.target - f.beta));
        if (Math.abs(d) < 0.002 && Math.abs(f.powT - f.pow) < 0.004) continue;
        f.beta += d * 0.12;
        f.pow += (f.powT - f.pow) * 0.1;
        f.petals.forEach((p, i) => p.setAttribute("opacity", roseLight(SEAL_ANGLES[i], f.beta, f.pow).toFixed(3)));
        busy = true;
      }
      if (busy) raf = requestAnimationFrame(loop);
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(loop); };

    const aimAll = () => {
      for (const f of seen) {
        const r = f.el.getBoundingClientRect();
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        if (fine.matches && px >= 0) {
          const dist = Math.hypot(px - cx, py - cy);
          f.target = Math.atan2(py - cy, px - cx);
          f.powT = Math.max(0.6, Math.min(1, 1.15 - dist / 700));
        } else if (!fine.matches && document.documentElement.dataset.beweging === "extra") {
          f.target = ROSE_REST + (cy / innerHeight - 0.5) * 2.4;
          f.powT = 0.9;
        }
      }
      kick();
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch" || !seen.size) return;
      px = e.clientX; py = e.clientY;
      aimAll();
    };
    const onScroll = () => { if (seen.size && !fine.matches) aimAll(); };
    const io = new IntersectionObserver((es) => {
      for (const en of es) {
        const f = foils.find((x) => x.el === en.target);
        if (!f) continue;
        if (en.isIntersecting) seen.add(f);
        else seen.delete(f);
      }
      if (seen.size && !fine.matches) aimAll();
    });
    foils.forEach((f) => io.observe(f.el));
    document.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      document.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}
