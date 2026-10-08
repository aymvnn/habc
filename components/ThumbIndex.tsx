"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/* === Waardepapier v12: the thumb index (owner approved 9 Oct 2026) ===
   A long page — one with its own index of four sections or more (.sec-index, app/[locale]/[...slug]/page.tsx) — gets
   tabs cut into the edge of the paper, like a ledger: the numbers of its sections. The tab of the section you are in
   stands out in Bordeaux; over a tab its section's name slides out; a tab is a link to its section (the same-page
   glide of components/SmoothScroll.tsx). It shows once the page's own index has scrolled away, and steps aside at the
   page's end. From 1101px (app/waardepapier.css). The links are the index's own, so no word is added. */
type Tab = { id: string; text: string };

export function ThumbIndex({ label }: { label: string }) {
  const pathname = usePathname();
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [cur, setCur] = useState(0);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".sec-index a[href^='#']"));
    const list = links.map((a) => ({ id: decodeURIComponent(a.hash.slice(1)), text: a.textContent ?? "" })).filter((t) => document.getElementById(t.id));
    setTabs(list.length >= 4 ? list : []);
    setOn(false);
    setCur(0);
    if (list.length < 4) return;
    const index = document.querySelector(".sec-index");
    const end = document.querySelector("main .pe") ?? document.querySelector("footer");
    const secs = list.map((t) => document.getElementById(t.id)!);
    let raf = 0;
    const check = () => {
      raf = 0;
      const line = innerHeight * 0.4;
      let k = 0;
      secs.forEach((s, i) => { if (s.getBoundingClientRect().top <= line) k = i; });
      setCur(k);
      const past = index ? index.getBoundingClientRect().bottom < 0 : true;
      const atEnd = end ? end.getBoundingClientRect().top < innerHeight * 0.6 : false;
      setOn(past && !atEnd);
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(check); };
    check();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  if (!tabs.length) return null;
  const pad = (i: number) => String(i + 1).padStart(2, "0");
  return (
    <nav className={`thumbs${on ? " on" : ""}`} aria-label={label} inert={!on}>
      {tabs.map((t, i) => (
        <a key={t.id} href={`#${t.id}`} className={i === cur ? "on" : undefined} aria-current={i === cur ? "true" : undefined}>
          <b aria-hidden="true">{pad(i)}</b>
          <span className="tt">{t.text}</span>
        </a>
      ))}
    </nav>
  );
}
