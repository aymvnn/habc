"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll reveals for .rv and the crossing dividers. Elements get the class "in" once they
 * enter the viewport; under reduced motion everything is shown at once.
 */
export function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    // ?audit=1 flattens the 100svh hero so a full-page screenshot shows the page as one strip
    if (new URLSearchParams(window.location.search).get("audit") === "1") document.documentElement.classList.add("audit");
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rv:not(.in), .kruising:not(.in)"));
    if (!els.length) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
