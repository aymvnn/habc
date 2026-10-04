"use client";

import { useEffect, useRef } from "react";

const END = "/video/kruising-end.jpg";

/* === Muntregister: the Name film — on time, on the right frame, in full tone (a6-5, b8) ===
   The crossing film draws the name on paper and then rests on its final frame. Measured (ffmpeg signalstats): its
   first frame is empty paper (Y 213–214 everywhere), so the first frame is never used as a poster; the end frame
   (kruising-end.jpg) is the poster for everyone who does not see it play (no script, reduced motion, already in view).
   - Not yet in view when the page mounts: the poster is taken away, so the band shows the same empty paper as the
     film's first frame. The film then draws itself on that paper: nothing jumps back from the end frame to frame 0.
   - It loads ahead when it comes near (60% of a screen below the fold; 30% with Save-Data), plays once when at least
     half of it is visible and it can play through, and then lies still on its last frame. A browser that will not
     buffer ahead (iOS) gets play() anyway 1.5s after the film is in view: its first frame is the same empty paper, so a
     short wait shows nothing wrong. If it cannot play at all (an error, play() refused), the end frame comes back as a
     still and it never plays.
   - Already in view when the page mounts (a reload halfway down): it keeps the end frame and does not play.
   - Reduced motion: the end frame stays and the film never loads. */
export function NameFilm() {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const r = v.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) return; // already on screen: rest on the end frame

    v.removeAttribute("poster");
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    let ready = false; // can play through
    let seen = false; // at least half visible
    let done = false; // fell back to the still
    let timer = 0;

    const still = () => {
      if (done) return;
      done = true;
      window.clearTimeout(timer);
      near.disconnect();
      half.disconnect();
      v.pause();
      v.setAttribute("poster", END);
      v.preload = "none";
      v.load(); // back to no data, so the poster (the end frame) shows
    };
    let started = false;
    const go = (force = false) => {
      if (done || started || !seen || !(ready || force)) return;
      started = true;
      window.clearTimeout(timer);
      half.disconnect();
      v.play().catch(still);
    };
    const onReady = () => { ready = true; go(); };
    v.addEventListener("canplaythrough", onReady);
    v.addEventListener("error", still, true); // a <source> error does not bubble; catch it on the way down

    const near = new IntersectionObserver(
      (es) => {
        if (es.some((e) => e.isIntersecting)) {
          near.disconnect();
          v.preload = "auto";
          v.load();
        }
      },
      { rootMargin: `0px 0px ${saveData ? 30 : 60}% 0px` },
    );
    const half = new IntersectionObserver(
      (es) => {
        if (es.some((e) => e.isIntersecting) && !seen) {
          seen = true;
          if (!ready) timer = window.setTimeout(() => go(true), 1500);
          go();
        }
      },
      { threshold: 0.5 },
    );
    near.observe(v);
    half.observe(v);
    return () => {
      window.clearTimeout(timer);
      near.disconnect();
      half.disconnect();
      v.removeEventListener("canplaythrough", onReady);
      v.removeEventListener("error", still, true);
    };
  }, []);
  return (
    <video ref={ref} className="film-band" muted playsInline preload="none" poster={END} aria-hidden="true" tabIndex={-1} width={1600} height={900}>
      <source src="/video/kruising.webm" type="video/webm" />
      <source src="/video/kruising.mp4" type="video/mp4" />
    </video>
  );
}
