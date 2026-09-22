"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import type { Dict, Locale } from "@/content/types";
import { Tulip } from "./Tulip";
import { Rich } from "./Rich";

/* eslint-disable @next/next/no-img-element -- brand SVGs are served as-is */

type Props = {
  locale: Locale;
  title: string;
  descriptor: string;
  hero: Dict["hero"];
  routes: Dict["routes"];
  tagline: string;
  taglineEcho: string;
};

const isArabic = (s: string) => /[؀-ۿ]/.test(s);

type Anchor = { x: number; y: number; side: 1 | -1 };

/**
 * The hero is the logo, taken apart and used as architecture:
 * the A-bar becomes a line across the whole screen, the wordmark opens out of that line,
 * the tulip stands above it as the centre, and every route is a gold thread into the tulip
 * that runs down its stem to the bar. A pulse travels route → tulip → stem → bar, and the
 * bar glints outward in both directions: value crossing the border.
 */
export function HeroStage({ locale, title, descriptor, hero, routes, tagline, taglineEcho }: Props) {
  const root = useRef<HTMLElement>(null);
  const crest = useRef<HTMLDivElement>(null);
  const key = useRef<HTMLAnchorElement>(null);
  const cap = useRef<HTMLDivElement>(null);
  const band = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLSpanElement>(null);
  const wm = useRef<HTMLDivElement>(null);
  const dock = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [photosReady, setPhotosReady] = useState(false);
  const shineAt = useRef(-1);
  const introDelay = useRef(0);
  const rows = useRef<(HTMLAnchorElement | null)[]>([]);
  const timers = useRef<number[]>([]);
  const hovering = useRef(false);

  const [box, setBox] = useState({ w: 0, h: 0 });
  const [threads, setThreads] = useState<string[]>([]);
  const [stem, setStem] = useState("");
  const [active, setActive] = useState<number | null>(null);
  const [anchors, setAnchors] = useState<(Anchor | null)[]>([]);

  const href = (intent: string) => `/${locale}/contact?intent=${intent}#intake`;
  const trade = routes.items.slice(0, 4);
  const capital = routes.items.slice(4, 7);
  const nominated = routes.items[7];

  /* ---------- geometry: threads from each route into the tulip base, stem down to the bar ---------- */
  const measure = useCallback(() => {
    const r = root.current, c = crest.current, k = key.current, b = band.current;
    if (!r || !c || !k || !b) return;
    const R = r.getBoundingClientRect();
    setBox({ w: R.width, h: R.height });
    r.style.setProperty("--bw", `${R.width}px`);
    if (window.matchMedia("(max-width: 900px)").matches) {
      // one register, no threads: the photo opens at the end of the row, inside it
      const rtl = getComputedStyle(r).direction === "rtl";
      setAnchors(rows.current.map((el) => {
        if (!el) return null;
        const E = el.getBoundingClientRect();
        return { x: (rtl ? E.left : E.right) - R.left, y: E.top + E.height / 2 - R.top, side: rtl ? 1 : -1 };
      }));
      setThreads([]); setStem(""); return;
    }
    const C = c.getBoundingClientRect();
    const tx = C.left + C.width / 2 - R.left;
    const ty = C.bottom - R.top - C.height * 0.015;
    // where each route turns into its thread: the photo opens here, on the side facing the tulip
    const A: (Anchor | null)[] = rows.current.map((el) => {
      if (!el) return null;
      const E = el.getBoundingClientRect();
      const label = el.querySelector(".rt-label")?.getBoundingClientRect() ?? E;
      const fromLeft = E.left + E.width / 2 < C.left + C.width / 2;
      return { x: (fromLeft ? E.right + 12 : E.left - 12) - R.left, y: label.top + label.height / 2 - R.top, side: fromLeft ? 1 : -1 };
    });
    const K0 = k.getBoundingClientRect();
    A[7] = { x: K0.right + 14 - R.left, y: K0.top + K0.height / 2 - R.top, side: 1 };
    setAnchors(A);
    setThreads(
      rows.current.map((el) => {
        if (!el) return "";
        const E = el.getBoundingClientRect();
        const label = el.querySelector(".rt-label")?.getBoundingClientRect() ?? E;
        const fromLeft = E.left + E.width / 2 < C.left + C.width / 2;
        const ax = (fromLeft ? E.right + 12 : E.left - 12) - R.left;
        const ay = label.top + label.height / 2 - R.top;
        // sweep in from the side and join the stem just under the tip — never through the flower
        const side = fromLeft ? -1 : 1;
        const c1x = ax + (tx - ax) * 0.5;
        const c2x = tx + side * Math.min(110, Math.abs(tx - ax) * 0.45);
        const c2y = ty + 16;
        return `M${ax.toFixed(1)},${ay.toFixed(1)} C${c1x.toFixed(1)},${ay.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${tx.toFixed(1)},${(ty + 4).toFixed(1)}`;
      }),
    );
    const K = k.getBoundingClientRect();
    const B = b.getBoundingClientRect();
    const P = cap.current?.getBoundingClientRect();
    const lineTop = B.top + B.height - B.height * 0.0 - (b.querySelector(".wm")?.getBoundingClientRect().height ?? 0) * 0.426 - R.top;
    const seg = (y1: number, y2: number) => (y2 - y1 > 4 ? `M${tx},${y1} L${tx},${y2} ` : "");
    const capTop = P ? P.top - R.top - 6 : K.top - R.top - 6;
    const capBot = P ? P.bottom - R.top + 6 : K.top - R.top - 6;
    setStem((seg(ty + 4, capTop) + seg(capBot, K.top - R.top - 6) + seg(K.bottom - R.top + 6, lineTop)).trim());
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(() => measure());
    if (root.current) ro.observe(root.current);
    root.current?.querySelectorAll(".wing, .crest").forEach((el) => ro.observe(el));
    document.fonts?.ready.then(() => measure());
    // the wings slide in on entrance; measure again once they have landed, or every thread starts short
    const settle = (e: TransitionEvent) => { if (e.propertyName === "transform" && (e.target as Element).classList.contains("wing")) measure(); };
    const r = root.current;
    r?.addEventListener("transitionend", settle);
    return () => { ro.disconnect(); r?.removeEventListener("transitionend", settle); };
  }, [measure]);

  /* ---------- entrance: the first time in a visit, a ducat falls onto the line and strikes it open ---------- */
  useEffect(() => {
    const el = root.current, w = wm.current, c = crest.current;
    if (!el || !w || !c) return;
    let seen = true;
    try { seen = sessionStorage.getItem("dukaat-intro") === "1"; } catch {}
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) {
      const raf = requestAnimationFrame(() => el.classList.add("in"));
      return () => cancelAnimationFrame(raf);
    }
    introDelay.current = 620;
    el.classList.add("intro");
    const coin = el.querySelector<HTMLElement>(".coin")!, ring = el.querySelector<HTMLElement>(".coin-ring")!;
    const anims: Animation[] = [];
    const timers2: number[] = [];
    let cancelled = false;
    const end = () => { el.classList.remove("intro"); anims.forEach((a) => a.cancel()); };
    const skip = () => {
      timers2.forEach(clearTimeout); end();
      el.classList.add("in", "skip");
      timers2.push(window.setTimeout(() => el.classList.remove("skip"), 700));
      off();
    };
    const evs = ["pointerdown", "keydown", "wheel", "touchstart"] as const;
    const off = () => evs.forEach((e) => window.removeEventListener(e, skip));
    evs.forEach((e) => window.addEventListener(e, skip, { passive: true }));
    // mark the visit only once the intro really starts (StrictMode mounts effects twice in dev)
    timers2.push(window.setTimeout(() => { try { sessionStorage.setItem("dukaat-intro", "1"); } catch {} }, 0));
    // measure only once the fonts are in, otherwise the line moves after the coin has aimed at it
    const start = () => {
    if (cancelled || !el.classList.contains("intro")) return;
    const R = el.getBoundingClientRect(), W = w.getBoundingClientRect(), C = c.getBoundingClientRect();
    // the strike has to be seen: if the line sits below the fold (phones, low screens), the ducat strikes the tulip instead
    const lineInView = W.top + W.height * 0.607 <= innerHeight - 30;
    const size = coin.offsetWidth || 84, half = size / 2;
    const x = W.left + W.width / 2 - R.left - half;
    const yLine = W.top + W.height * 0.607 - R.top - half;
    const yCrest = C.top + C.height * 0.46 - R.top - half;
    const yStrike = lineInView ? yLine : yCrest;
    const grow = (C.height * 1.62) / size;
    const at = (y: number, extra = "") => `translate(${x}px, ${y}px) perspective(700px) ${extra}`;
    const fall = coin.animate(
      [{ transform: at(-R.top - size * 1.8, "rotateY(0deg)") }, { transform: at(yStrike, "rotateY(1080deg)") }],
      { duration: 620, easing: "cubic-bezier(.55,0,.85,.4)", fill: "forwards" },
    );
    anims.push(fall);
    fall.finished.then(() => {
      el.classList.add("in"); // the strike: the bar draws out from here, the name opens, the tulip blooms
      anims.push(
        ring.animate(
          [{ transform: `translate(${x}px, ${yStrike}px) scale(.55)`, opacity: 0.95 }, { transform: `translate(${x}px, ${yStrike}px) scale(5.5)`, opacity: 0 }],
          { duration: 950, easing: "cubic-bezier(.16,1,.3,1)", fill: "forwards" },
        ),
        coin.animate(
          [
            { transform: at(yStrike, "rotateY(1080deg) scale(1)"), opacity: 1 },
            { transform: at(yStrike - 14, "rotateY(1080deg) scale(1.04)"), opacity: 1, offset: 0.16 },
            { transform: at(yStrike, "rotateY(1080deg) scale(1)"), opacity: 1, offset: 0.3 },
            { transform: at(yCrest, `rotateY(1080deg) scale(${grow.toFixed(2)})`), opacity: 0 },
          ],
          { duration: 1350, easing: "cubic-bezier(.65,0,.35,1)", fill: "forwards" },
        ),
      );
      timers2.push(window.setTimeout(() => { end(); off(); }, 1500));
    }).catch(() => {});
    };
    Promise.race([document.fonts?.ready ?? Promise.resolve(), new Promise((r) => setTimeout(r, 900))])
      .then(() => requestAnimationFrame(start));
    return () => { cancelled = true; timers2.forEach(clearTimeout); off(); end(); };
  }, []);

  /* ---------- the pulse: route → tulip → stem → bar glint ---------- */
  const restart = (el: Element | null | undefined, cls: string) => {
    if (!el) return;
    el.classList.remove(cls);
    void (el as HTMLElement).getBoundingClientRect();
    el.classList.add(cls);
  };

  const fire = useCallback((i: number) => {
    const r = root.current;
    if (!r || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timers.current.forEach(clearTimeout);
    timers.current = [];
    restart(r.querySelector(`[data-pulse="${i}"]`), "go");
    timers.current.push(
      window.setTimeout(() => {
        r.classList.add("recv");
        restart(r.querySelector('[data-pulse="stem"]'), "go");
      }, 950),
      window.setTimeout(() => {
        r.classList.remove("recv");
        shineAt.current = performance.now();
      }, 1650),
    );
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let last = -1;
    const first = window.setTimeout(() => fire(0), 3000 + introDelay.current);
    const loop = window.setInterval(() => {
      if (hovering.current || document.hidden || !threads.length) return;
      const R = root.current?.getBoundingClientRect();
      if (!R || R.bottom < 0 || R.top > window.innerHeight) return;
      let i = Math.floor(Math.random() * 7);
      if (i === last) i = (i + 3) % 7;
      last = i;
      fire(i);
    }, 4600);
    return () => { clearTimeout(first); clearInterval(loop); timers.current.forEach(clearTimeout); };
  }, [fire, threads.length]);

  useEffect(() => setMounted(true), []);
  useEffect(() => { const t = window.setTimeout(() => setPhotosReady(true), 2600); return () => clearTimeout(t); }, []);

  /* ---------- foil: one light source, following the pointer or drifting on its own ---------- */
  useEffect(() => {
    const r = root.current;
    if (!r || !mounted || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const svg = r.querySelector<SVGSVGElement>("svg.tulip");
    const sheen = svg?.querySelector("radialGradient.t-sheen");
    const foils = [bar.current, r.querySelector<HTMLElement>(".bar-aa"), dock.current?.querySelector<HTMLElement>(".bar-aa")].filter(Boolean) as HTMLElement[];
    let px = -1, py = -1, lastMove = -1e9, cx = innerWidth * 0.62, cy = innerHeight * 0.3, raf = 0, visible = true;
    const onMove = (e: PointerEvent) => { if (e.pointerType === "touch") return; px = e.clientX; py = e.clientY; lastMove = performance.now(); };
    const tick = (t: number) => {
      raf = 0;
      if (!visible || document.hidden) return;
      let lx = px, ly = py;
      if (t - lastMove > 2500 || px < 0) {
        const s = t / 1000; // idle: a slow figure-eight across the hero, like light moving over foil
        lx = innerWidth * (0.5 + 0.4 * Math.sin(s * 0.21));
        ly = innerHeight * (0.42 + 0.3 * Math.sin(s * 0.29 + 1.2));
      }
      cx += (lx - cx) * 0.1; cy += (ly - cy) * 0.1;
      const m = svg?.getScreenCTM();
      if (m && sheen) {
        const p = new DOMPoint(cx, cy).matrixTransform(m.inverse());
        const dx = p.x - 430, dy = p.y - 500, d = Math.hypot(dx, dy), reach = 470;
        const k = d > reach ? reach / d : 1; // far away, the light still lands on the side that faces it
        sheen.setAttribute("cx", (430 + dx * k).toFixed(0));
        sheen.setAttribute("cy", (500 + dy * k).toFixed(0));
      }
      // the glint after a pulse: two lights running outward from the stem, over bar and crossbar alike
      let g1 = -9999, g2 = -9999, ga = 0;
      if (shineAt.current >= 0 && bar.current) {
        const q = (t - shineAt.current) / 1700;
        if (q > 1) shineAt.current = -1;
        else {
          const B = bar.current.getBoundingClientRect(), mid = B.left + B.width / 2;
          const off = (1 - Math.pow(1 - q, 3)) * innerWidth * 0.56;
          g1 = mid - off; g2 = mid + off; ga = q < 0.12 ? q / 0.12 : 1 - (q - 0.12) / 0.88;
        }
      }
      for (const el of foils) {
        const b = el.getBoundingClientRect();
        el.style.setProperty("--g1", `${(g1 - b.left).toFixed(0)}px`);
        el.style.setProperty("--g2", `${(g2 - b.left).toFixed(0)}px`);
        el.style.setProperty("--ga", ga.toFixed(3));
        el.style.setProperty("--lx", `${(cx - b.left).toFixed(0)}px`);
        el.style.setProperty("--li", Math.max(0, 1 - Math.abs(cy - (b.top + b.height / 2)) / 520).toFixed(3));
      }
      raf = requestAnimationFrame(tick);
    };
    const wake = () => { if (!raf && visible && !document.hidden) raf = requestAnimationFrame(tick); };
    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; wake(); });
    io.observe(r);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("visibilitychange", wake);
    wake();
    return () => { cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener("pointermove", onMove); document.removeEventListener("visibilitychange", wake); };
  }, [mounted]);

  /* ---------- docking: the wordmark flies into the nav, the bar thins into the nav's edge ---------- */
  useEffect(() => {
    const w = wm.current, d = dock.current, b = bar.current;
    if (!w || !d || !b || !mounted) return;
    const html = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ready = false, raf = 0;
    const ease = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
    const update = () => {
      raf = 0;
      const nav = document.querySelector(".topbar");
      const tgt = document.querySelector(".topbar .brand .wordmark");
      const W = w.getBoundingClientRect();
      if (reduce || !nav || !tgt || !tgt.getBoundingClientRect().width) {
        html.dataset.dock = window.scrollY > innerHeight * 0.55 ? "done" : "home";
        d.classList.remove("on"); w.style.visibility = ""; b.style.transform = "";
        return;
      }
      const N = nav.getBoundingClientRect(), T = tgt.getBoundingClientRect();
      // the flight starts once the line is on screen (at once on desktop; on phones it sits below the fold)
      const lineAt = W.top + W.height * 0.574 + window.scrollY;
      const from = Math.max(0, lineAt - innerHeight * 0.9);
      const range = Math.max(1, lineAt - N.bottom - from);
      const p = Math.min(1, Math.max(0, (window.scrollY - from) / range));
      if (ready) b.style.transform = `scaleY(${(1 - p * (1 - 3 / (W.height * 0.066))).toFixed(4)})`;
      if (!ready || window.scrollY < 2) { html.dataset.dock = "home"; d.classList.remove("on"); w.style.visibility = ""; return; }
      if (p >= 1) { html.dataset.dock = "done"; d.classList.remove("on"); w.style.visibility = "hidden"; return; }
      html.dataset.dock = "flying";
      // the name rides the gold line and shrinks around its own crossbar (so it never crosses the content
      // above the line); only in the last stretch does it lift off into the centre of the nav
      const k = 1 + (T.width / W.width - 1) * ease(Math.min(1, p / 0.85));
      const onLine = W.top + W.height * 0.607 - k * W.height * 0.607;
      const lift = p <= 0.78 ? 0 : ease((p - 0.78) / 0.22);
      const top = onLine + (T.top - onLine) * lift;
      const cx = W.left + W.width / 2 + (T.left + T.width / 2 - (W.left + W.width / 2)) * ease(p);
      d.style.width = `${W.width}px`;
      d.style.height = `${W.height}px`;
      d.style.setProperty("--bw", `${w.closest(".h3")?.getBoundingClientRect().width ?? innerWidth}px`);
      d.style.setProperty("--wmw", `${W.width}px`);
      d.style.transform = `translate3d(${(cx - (k * W.width) / 2).toFixed(1)}px, ${top.toFixed(1)}px, 0) scale(${k.toFixed(4)})`;
      d.classList.add("on");
      w.style.visibility = "hidden";
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(update); };
    const t = window.setTimeout(() => { ready = true; b.style.transition = "none"; schedule(); }, 2300 + introDelay.current);
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      clearTimeout(t); cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule);
      delete html.dataset.dock; w.style.visibility = ""; b.style.transform = ""; b.style.transition = "";
    };
  }, [mounted]);

  /* ---------- phones: no hover, so the route passing the middle of the screen shows its photo ---------- */
  useEffect(() => {
    const small = window.matchMedia("(max-width: 900px)");
    let raf = 0;
    const spy = () => {
      raf = 0;
      if (!small.matches || hovering.current) return;
      const mid = innerHeight * 0.46;
      let best: number | null = null, dist = innerHeight * 0.17;
      rows.current.forEach((el, i) => {
        if (!el) return;
        const E = el.getBoundingClientRect();
        const d = Math.abs(E.top + E.height / 2 - mid);
        if (d < dist) { dist = d; best = i; }
      });
      setActive(best);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(spy); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); };
  }, []);

  const enter = (i: number) => { hovering.current = true; measure(); setActive(i); fire(i); };
  const leave = () => { hovering.current = false; setActive(null); };

  const photos = () =>
    photosReady && routes.items.map((r, n) => (
      <img key={r.intent} src={`/routes/${r.intent}.jpg`} className={active === n ? "on" : undefined} alt="" width={448} height={296} decoding="async" />
    ));
  const knoop = active !== null ? anchors[active] : null;

  const caption = active === null ? hero.caption : routes.items[active].hint;

  const row = (i: number, item: Dict["routes"]["items"][number]) => (
    <Link
      key={item.intent}
      ref={(el) => { rows.current[i] = el; }}
      className={`rt${active === i ? " on" : ""}`}
      href={href(item.intent)}
      aria-label={routes.ariaPattern.replace("{label}", item.label)}
      onMouseEnter={() => enter(i)}
      onMouseLeave={leave}
      onFocus={() => enter(i)}
      onBlur={leave}
      style={{ ["--i" as string]: i }}
    >
      <span className="rt-idx">{String(i + 1).padStart(2, "0")}</span>
      <span className="rt-label">{item.label}</span>
    </Link>
  );

  return (
    <section className="h3" id="routes" ref={root} aria-labelledby="h3-q">
      <h1 className="sr-only">{title}</h1>

      <svg className="h3-threads" width={box.w} height={box.h} viewBox={`0 0 ${box.w || 1} ${box.h || 1}`} aria-hidden="true">
        {threads.map((d, i) =>
          d ? (
            <g key={i} className={`th${active === i ? " on" : ""}`} style={{ ["--i" as string]: i }}>
              <path className="th-base" pathLength={1} d={d} />
              <path className="pulse" data-pulse={i} pathLength={1} d={d} />
            </g>
          ) : null,
        )}
        {stem && (
          <g className="th stem">
            <path className="th-base" pathLength={1} d={stem} />
            <path className="pulse" data-pulse="stem" pathLength={1} d={stem} />
          </g>
        )}
      </svg>

      {/* a photograph opens where the hovered route turns into its gold thread, in the space before the tulip */}
      <span
          className={`knoop${knoop ? " on" : ""}`}
          aria-hidden="true"
          style={knoop ? { left: knoop.x, top: knoop.y, ["--side" as string]: knoop.side } : undefined}
        >
          <span className="v-in">{photos()}</span>
        </span>

      <span className="coin" aria-hidden="true">
        <span className="coin-face">
          <img className="coin-g" src="/ornament/guilloche-a.svg" alt="" width={500} height={500} />
          <span className="coin-mark" />
        </span>
      </span>
      <span className="coin-ring" aria-hidden="true" />

      <div className="h3-top">
        <p className="h3-eyebrow">{descriptor} <i>◆</i> {hero.chip1}</p>
        <h2 id="h3-q" className="h3-q"><Rich text={routes.heading} /></h2>
      </div>

      <div className="h3-stage">
        <nav className="wing wing-a" aria-label={hero.groupA}>
          <span className="wing-h">{hero.groupA}</span>
          {trade.map((item, n) => row(n, item))}
        </nav>

        <div className="crest-col">
          <div className="crest" ref={crest}>
            <span className="halo" aria-hidden="true" />
            <span className="guilloche" aria-hidden="true">
              <img className="g-a" src="/ornament/guilloche-a.svg" alt="" width={500} height={500} />
              <img className="g-b" src="/ornament/guilloche-b.svg" alt="" width={500} height={500} />
            </span>
            <Tulip id="ht" />
          </div>
          <div className="caption" ref={cap}>
            {/* every hint is stacked in one grid cell, so the box always has the height of the longest one: no layout shift on hover */}
            {[hero.caption, ...routes.items.map((r) => r.hint)].map((t, n) => (
              <p key={n} className={(active === null ? n === 0 : n === active + 1) ? "on" : undefined} aria-hidden="true">{t}</p>
            ))}
          </div>
          <p className="sr-only" aria-live="polite">{caption}</p>
        </div>

        <nav className="wing wing-b" aria-label={hero.groupB}>
          <span className="wing-h">{hero.groupB}</span>
          {capital.map((item, n) => row(n + 4, item))}
          <Link className="rt rt-other" href={`/${locale}/contact`}>
            <span className="rt-idx">—</span>
            <span className="rt-label">{hero.other} <u>{hero.otherLink}</u></span>
          </Link>
        </nav>
      </div>

      <Link
        ref={key}
        className="h3-key"
        href={href(nominated.intent)}
        aria-label={routes.ariaPattern.replace("{label}", nominated.label)}
        onMouseEnter={() => { hovering.current = true; measure(); setActive(7); }}
        onMouseLeave={leave}
      >
        <img src="/logo/dukaat-beeldmerk.svg" alt="" width={859} height={998} />
        <span>{nominated.label}</span>
        <span className="arrow" aria-hidden="true">→</span>
      </Link>

      <div className="h3-band" ref={band}>
        <p className="band-t band-start" lang={isArabic(tagline) ? "ar" : locale}><bdi>{tagline}</bdi></p>
        <div className="wm" ref={wm} role="img" aria-label="DUKAAT">
          <span className="wm-half wm-top"><img src="/logo/dukaat-woordmerk-nobar.svg" alt="" width={3160} height={507} /></span>
          <span className="wm-half wm-bot"><img src="/logo/dukaat-woordmerk-nobar.svg" alt="" width={3160} height={507} /></span>
          <span className="bar-aa" aria-hidden="true" />
        </div>
        <p className="band-t band-end" lang={isArabic(taglineEcho) ? "ar" : "en"}><bdi>{taglineEcho}</bdi></p>
        <span className="band-b band-start">{hero.chip1}</span>
        <span className="band-b band-end">{hero.chip2}</span>
        <span className="bar" ref={bar} aria-hidden="true" />
      </div>

      {mounted && createPortal(
        <div className="dock" ref={dock} aria-hidden="true">
          <img src="/logo/dukaat-woordmerk-nobar.svg" alt="" width={3160} height={507} />
          <span className="bar-aa" />
        </div>,
        document.body,
      )}

      <div className="h3-legend">
        <p className="lg-chips"><span>{hero.chip1}</span><i>◆</i><span>{hero.chip2}</span></p>
        <p className="lg-sentence">{hero.sentence}</p>
      </div>
    </section>
  );
}
