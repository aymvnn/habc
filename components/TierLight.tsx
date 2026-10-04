"use client";

import { useEffect, useRef } from "react";

/* === Signature 9: the light over the three cards ===
   The membership cards lie on the table in the window light; with a mouse the light follows the hand over the three
   at once, the foil and the leather catching it. Writes --mx/--my (the light's position on each card) only while the
   pointer moves over the cards, throttled to one frame. Fine pointers only; nothing under reduced motion (the cards
   keep the still light from the window, top left). Rendered inside the tiers block; it finds the cards beside it. */
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
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch" || !fine.matches || reduce.matches) return;
      px = e.clientX;
      py = e.clientY;
      if (!raf) raf = requestAnimationFrame(paint);
    };
    const onLeave = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      cards.forEach((c) => { c.style.removeProperty("--mx"); c.style.removeProperty("--my"); });
    };
    host.addEventListener("pointermove", onMove, { passive: true });
    host.addEventListener("pointerleave", onLeave);
    return () => {
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <span ref={ref} hidden />;
}
