"use client";

import { useEffect, useRef } from "react";
import { ROSE_ANGLES, ROSE_REST, roseLight } from "@/lib/foil";

/* === Signature 9: the light over the three cards ===
   The membership cards lie on the table in the window light; with a mouse the light follows the hand over the three
   at once, the foil and the leather catching it. Writes --mx/--my (the light's position on each card) only while the
   pointer moves over the cards, throttled to one frame. Fine pointers only; nothing under reduced motion (the cards
   keep the still light from the window, top left). Rendered inside the tiers block; it finds the cards beside it.

   === Werkplaatsen w4 (8 Oct 2026): the foil rosette of the Executive card follows the same light ===
   Each of its 32 petals flares when the light comes along its own angle. With a mouse the light is the hand; on a
   touch screen (extra motion only) it turns with the card's place on the screen as you scroll; at rest it is the
   window's, top left. The flare eases towards the light (no jumps) and the loop sleeps once it has arrived. */
export function TierLight() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const host = ref.current?.parentElement;
    if (!host) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cards = Array.from(host.querySelectorAll<HTMLElement>(".tier-card"));
    let raf = 0, px = 0, py = 0;
    const paint = () => {
      raf = 0;
      for (const c of cards) {
        const r = c.getBoundingClientRect();
        c.style.setProperty("--mx", `${(px - r.left).toFixed(0)}px`);
        c.style.setProperty("--my", `${(py - r.top).toFixed(0)}px`);
      }
    };

    // the foil rosette (w4)
    const rose = host.querySelector<SVGSVGElement>(".tc-rose");
    const petals = rose ? Array.from(rose.querySelectorAll<SVGPathElement>(".fr-h path")) : [];
    let beta = ROSE_REST, target = ROSE_REST, pow = 0.75, powT = 0.75, roseRaf = 0;
    const roseLoop = () => {
      roseRaf = 0;
      const d = Math.atan2(Math.sin(target - beta), Math.cos(target - beta));
      beta += d * 0.12;
      pow += (powT - pow) * 0.1;
      petals.forEach((p, i) => p.setAttribute("opacity", roseLight(ROSE_ANGLES[i], beta, pow).toFixed(3)));
      if (Math.abs(d) > 0.002 || Math.abs(powT - pow) > 0.004) roseRaf = requestAnimationFrame(roseLoop);
    };
    const aim = (t: number, p: number) => {
      target = t;
      powT = p;
      if (!roseRaf && petals.length) roseRaf = requestAnimationFrame(roseLoop);
    };
    const aimAt = (x: number, y: number) => {
      if (!rose) return;
      const r = rose.getBoundingClientRect();
      aim(Math.atan2(y - (r.top + r.height / 2), x - (r.left + r.width / 2)), 1);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch" || !fine.matches || reduce.matches) return;
      px = e.clientX;
      py = e.clientY;
      if (!raf) raf = requestAnimationFrame(paint);
      aimAt(px, py);
    };
    const onLeave = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      cards.forEach((c) => { c.style.removeProperty("--mx"); c.style.removeProperty("--my"); });
      if (fine.matches) aim(ROSE_REST, 0.75);
    };
    host.addEventListener("pointermove", onMove, { passive: true });
    host.addEventListener("pointerleave", onLeave);

    // touch screens: the light turns with the card's place on the screen while it is in view
    let inView = false;
    const onScroll = () => {
      if (!rose || fine.matches || reduce.matches || document.documentElement.dataset.beweging !== "extra") return;
      const r = rose.getBoundingClientRect();
      aim(ROSE_REST + ((r.top + r.height / 2) / innerHeight - 0.5) * 2.4, 0.9);
    };
    const io = rose ? new IntersectionObserver((es) => {
      const now = es.some((e) => e.isIntersecting);
      if (now === inView) return;
      inView = now;
      if (now) { window.addEventListener("scroll", onScroll, { passive: true }); onScroll(); }
      else window.removeEventListener("scroll", onScroll);
    }) : null;
    if (rose) io!.observe(rose);

    return () => {
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
      if (raf) cancelAnimationFrame(raf);
      if (roseRaf) cancelAnimationFrame(roseRaf);
    };
  }, []);

  return <span ref={ref} hidden />;
}
