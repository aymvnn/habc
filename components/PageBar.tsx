"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/content/types";

/* === UX-22 / UX-24 (owner, 4 Oct 2026): on a phone, a long page keeps a way out in reach ===
   On screens up to 900px wide and pages taller than five screens, a slim bar rises at the bottom once the visitor has
   scrolled past the first screen and a half: "Back to top" and the menu's own "Contact us" (left out where the page
   itself is the contact form). It steps aside near the footer and whenever the menu is open. Styles: app/ux.css.
   Waardepapier v14 (owner, 9 Oct 2026): the way back to the top is now the reading ribbon (components/Ribbon.tsx);
   the bar keeps only "Contact us", and is not shown where the page itself is the contact form. */
const TASK = /\/(contact|looking-for|partnerships)\/?$/;

export function PageBar({ locale, contact }: { locale: Locale; contact: string; back?: string }) {
  const pathname = usePathname();
  const [on, setOn] = useState(false);
  const [long, setLong] = useState(false);

  useEffect(() => {
    const small = window.matchMedia("(max-width: 900px)");
    let raf = 0;
    const check = () => {
      raf = 0;
      const H = document.documentElement.scrollHeight;
      const isLong = small.matches && H > innerHeight * 5;
      setLong(isLong);
      if (!isLong) return setOn(false);
      const foot = document.querySelector("footer");
      const footTop = foot ? foot.getBoundingClientRect().top : Infinity;
      const menuOpen = document.body.style.overflow === "hidden";
      setOn(scrollY > innerHeight * 1.5 && footTop > innerHeight - 8 && !menuOpen);
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(check); };
    check();
    const late = window.setTimeout(check, 1200); // after photographs and fonts have settled the page's height
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    small.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(late);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      small.removeEventListener("change", schedule);
    };
  }, [pathname]);

  if (!long || TASK.test(pathname)) return null;
  return (
    <div className={`pbar only-contact${on ? " on" : ""}`} inert={!on}>
      <Link className="pbar-contact" href={`/${locale}/contact`} prefetch={false}>{contact}</Link>
    </div>
  );
}
