"use client";

import { useEffect, useRef } from "react";

/** The crossing film: plays once when it comes into view, then rests on its final frame. */
export function NameFilm() {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    let played = false;
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting && !played) {
            played = true;
            v.load();
            v.play().catch(() => {});
            io.disconnect();
          }
        }
      },
      { threshold: 0.55 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <video ref={ref} className="film-blend" muted playsInline preload="none" poster="/video/kruising-end.jpg" aria-hidden="true" tabIndex={-1} width={1600} height={900}>
      <source src="/video/kruising.webm" type="video/webm" />
      <source src="/video/kruising.mp4" type="video/mp4" />
    </video>
  );
}
