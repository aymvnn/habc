"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/* === Waardepapier v14: the reading ribbon (owner approved 9 Oct 2026) ===
   On a phone (up to 900px), where there is no gold thread, a Bordeaux silk ribbon hangs from under the header on the
   far side, as in a register or a bound book: the further you read, the longer it hangs (--p, 0…1); a tap takes you
   back to the top. It replaces the "back to top" of the page bar (components/PageBar.tsx keeps "Contact us"). Only on
   pages taller than two screens, once you have started reading, and never while the menu is open. Styles:
   app/waardepapier.css. */
export function Ribbon({ back }: { back: string }) {
  const pathname = usePathname();
  const ref = useRef<HTMLButtonElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const small = window.matchMedia("(max-width: 900px)");
    let raf = 0;
    const check = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
      el.style.setProperty("--p", p.toFixed(4));
      const menuOpen = document.body.style.overflow === "hidden";
      setOn(small.matches && max > innerHeight && scrollY > innerHeight * 0.35 && !menuOpen);
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(check); };
    check();
    const late = window.setTimeout(check, 1200);
    const mo = new MutationObserver(schedule);
    mo.observe(document.body, { attributes: true, attributeFilter: ["style"] });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    small.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(late);
      mo.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      small.removeEventListener("change", schedule);
    };
  }, [pathname]);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };
  return (
    <button ref={ref} type="button" className={`rib-hit${on ? " on" : ""}`} onClick={toTop} aria-label={back} tabIndex={on ? 0 : -1} aria-hidden={!on}>
      <span className="rib" />
    </button>
  );
}
