"use client";

import { useEffect, useRef, useState } from "react";
import type { Dict } from "@/content/types";
import { Rich } from "./Rich";

/**
 * "Five steps, in this order, every time" as one held chapter: the section pins to the screen and
 * scrolling moves through the steps in place, while a gold line fills along the ledger. The pin itself
 * is CSS (position: sticky), so it holds the same on phones, tablets and desktops; this only measures
 * how far through the chapter the reader is. Without room or motion it is the plain list.
 */
export function Steps({ how }: { how: Dict["how"] }) {
  const ref = useRef<HTMLElement>(null);
  const [now, setNow] = useState(0);
  const n = how.steps.length;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const R = el.getBoundingClientRect();
      const span = R.height - innerHeight;
      const p = span > 0 ? Math.min(1, Math.max(0, -R.top / span)) : 1;
      el.style.setProperty("--p", p.toFixed(4));
      setNow(Math.min(n - 1, Math.floor(p * n)));
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); };
  }, [n]);

  return (
    <section className="block chapter" id="how" aria-labelledby="how-h" ref={ref} style={{ ["--n" as string]: n }}>
      <div className="pin">
        <div className="wrap">
          <div className="head">
            <span className="label rv">{how.label}</span>
            <h2 id="how-h" className="rv"><Rich text={how.heading} /></h2>
            <p className="lede rv lag1">{how.lede}</p>
          </div>
          <ol className="ledger">
            {how.steps.map((s, i) => (
              <li className={`step${i < now ? " past" : i === now ? " now" : ""}`} key={s.title}>
                <span className="step-n">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
