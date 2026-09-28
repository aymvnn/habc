"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dict, GroupKey, Locale } from "@/content/types";
import { groups, groupOfPathname, hrefOf } from "@/lib/site";

const LOCALES: { code: Locale; short: string; name: string }[] = [
  { code: "en", short: "EN", name: "English" },
  { code: "nl", short: "NL", name: "Nederlands" },
  { code: "ar", short: "ع", name: "العربية" },
];

type Props = {
  locale: Locale;
  nav: Dict["nav"];
  site: Dict["site"];
  chips: [string, string];
  routes: Dict["routes"]["items"];
};

/**
 * Two rows. A thin utility line (what the club is, FAQ, "I have been nominated", languages) that folds
 * away once you scroll, and the main row: four groups, the name in the centre, three groups and Contact.
 * Every group opens a panel with all of its pages and a one-line blurb for each, so every page on the
 * site is one hover or one tap away. On phones the same groups fold open inside the full-screen menu.
 */
export function TopBar({ locale, nav, site, chips, routes }: Props) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // phones: the full-screen menu
  const [panel, setPanel] = useState<GroupKey | null>(null); // desktop: the open group
  const timer = useRef(0);
  const home = `/${locale}`;
  const isHome = pathname === home || pathname === `${home}/`;
  const current = groupOfPathname(pathname);
  // same page in another language: swap the first path segment
  const rest = pathname.replace(/^\/(en|nl|ar)(?=\/|$)/, "");
  const inLang = (code: Locale) => `/${code}${rest}`;
  const nominated = `/${locale}/contact?intent=nominated#intake`;
  const contactHref = `/${locale}/contact`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      setPanel((p) => {
        if (p) (document.querySelector(`[aria-controls="mp-${p}"]`) as HTMLElement | null)?.focus();
        return null;
      });
    };
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); setPanel(null); }, [pathname]);

  // hover intent: opening waits a moment (no flicker when the pointer only passes), switching is instant
  const hoverOpen = (k: GroupKey) => {
    clearTimeout(timer.current);
    if (!window.matchMedia("(hover: hover)").matches) return;
    if (panel) setPanel(k);
    else timer.current = window.setTimeout(() => setPanel(k), 110);
  };
  const hoverClose = () => {
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setPanel(null), 220);
  };
  const closeOnLink = (e: React.MouseEvent) => { if ((e.target as HTMLElement).closest("a")) { setPanel(null); setOpen(false); } };

  const item = (g: (typeof groups)[number]) => (
    <li key={g.key} className={`ni${panel === g.key ? " on" : ""}`} onMouseEnter={() => hoverOpen(g.key)}>
      <Link href={hrefOf(locale, g)} aria-current={current === g.key ? "true" : undefined}>{site.groups[g.key].label}</Link>
      <button
        type="button"
        className="ni-t"
        aria-expanded={panel === g.key}
        aria-controls={`mp-${g.key}`}
        aria-label={site.ui.submenu.replace("{group}", site.groups[g.key].label)}
        onClick={() => setPanel((p) => (p === g.key ? null : g.key))}
      >
        <svg viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" /></svg>
      </button>
    </li>
  );

  const langs = (cls: string, all: boolean) => (
    <div className={cls} role="group" aria-label={nav.langLabel}>
      {LOCALES.filter((l) => all || l.code !== locale).map((l) => (
        <Link
          key={l.code}
          href={inLang(l.code)}
          hrefLang={l.code}
          lang={l.code}
          title={l.name}
          className={l.code === "ar" ? "ar-glyph" : undefined}
          aria-current={l.code === locale ? "page" : undefined}
        >
          {l.short}
        </Link>
      ))}
    </div>
  );

  return (
    <>
      <header
        className={`topbar${scrolled ? " scrolled" : ""}${isHome ? " is-home" : ""}${panel ? " menu-open" : ""}`}
        onMouseLeave={hoverClose}
        onMouseEnter={() => panel && clearTimeout(timer.current)}
      >
        <div className="tb-util">
          <p className="util-l">
            <span>{nav.descriptor}</span><i aria-hidden="true">◆</i><span>{chips[0]}</span><i aria-hidden="true">◆</i><span>{chips[1]}</span>
          </p>
          <nav className="util-r" aria-label={site.ui.utilNav}>
            <Link href={`/${locale}/faq`}>{site.ui.faq}</Link>
            <Link className="util-key" href={nominated}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo/dukaat-beeldmerk.svg" alt="" width={859} height={998} />
              {site.pages["membership/nominated"].title}
            </Link>
            {langs("lang", true)}
          </nav>
        </div>

        <div className="tb-main">
          <Link className="brand" href={home} aria-label={nav.toHome}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="mark" src="/logo/dukaat-beeldmerk.svg" alt="" width={859} height={998} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="wordmark" src="/logo/dukaat-woordmerk.svg" alt="DUKAAT" width={748} height={120} />
          </Link>
          {/* symmetric: four groups left, the name in the centre, three groups and Contact right */}
          <nav className="tb-nav" aria-label={site.ui.mainNav}>
            <ul className="nav-l">{groups.slice(0, 4).map(item)}</ul>
            <ul className="nav-r">
              {groups.slice(4).map(item)}
              <li className="ni ni-contact" onMouseEnter={hoverClose}>
                <Link href={contactHref} aria-current={pathname.startsWith(contactHref) ? "page" : undefined}>{nav.contact}</Link>
              </li>
            </ul>
          </nav>
          {/* phones: the other two languages stay in the header, beside the menu */}
          {langs("lang-m", false)}
          <button
            className="burger"
            type="button"
            aria-expanded={open}
            aria-controls="veil"
            aria-label={open ? nav.menuClose : nav.menuOpen}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span />
          </button>
        </div>

        <div className={`mega${panel ? " on" : ""}`} onClick={closeOnLink}>
          {groups.map((g, gi) => {
            const on = panel === g.key;
            return (
              <div key={g.key} id={`mp-${g.key}`} className={`mp${on ? " on" : ""}`} role="region" aria-label={site.groups[g.key].label} inert={!on}>
                <div className="mp-grid">
                  <div className="mp-intro">
                    <span className="mp-n">{String(gi + 1).padStart(2, "0")}</span>
                    <p className="mp-title">{site.groups[g.key].label}</p>
                    <p className="mp-lede">{site.groups[g.key].lede}</p>
                    <Link className="more" href={hrefOf(locale, g)}>{site.ui.overview} <span className="arrow" aria-hidden="true">→</span></Link>
                  </div>
                  <ul className="mp-list">
                    {g.children.map((c) => (
                      <li key={c.path}>
                        <Link href={hrefOf(locale, c)} className={c.href ? "is-key" : undefined} aria-current={pathname === hrefOf(locale, c) ? "page" : undefined}>
                          <span className="mp-t">{site.pages[c.path].title}<span className="arrow" aria-hidden="true">→</span></span>
                          <span className="mp-b">{site.pages[c.path].blurb}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {g.aside === "routes" && (
                    <div className="mp-aside">
                      <p className="mp-aside-h">{site.ui.intake}</p>
                      {routes.slice(0, 7).map((r, i) => (
                        <Link key={r.intent} href={`/${locale}/contact?intent=${r.intent}#intake`}>
                          <i>{String(i + 1).padStart(2, "0")}</i>{r.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </header>

      <div className={`veil${open ? " open" : ""}`} id="veil" onClick={closeOnLink} inert={!open}>
        <nav className="veil-in" aria-label={site.ui.mainNav}>
          {groups.map((g) => (
            <details key={g.key} className="vg" open={current === g.key || undefined}>
              <summary>
                <span>{site.groups[g.key].label}</span>
                <svg viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" /></svg>
              </summary>
              <div className="vg-list">
                <Link className="vg-all" href={hrefOf(locale, g)}>{site.ui.overview} <span className="arrow" aria-hidden="true">→</span></Link>
                {g.children.map((c) => (
                  <Link key={c.path} href={hrefOf(locale, c)}>{site.pages[c.path].title}</Link>
                ))}
              </div>
            </details>
          ))}
          <Link className="vg-solo" href={contactHref}>{nav.contact}</Link>
          <div className="veil-foot">
            <Link className="util-key" href={nominated}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo/dukaat-beeldmerk.svg" alt="" width={859} height={998} />
              {site.pages["membership/nominated"].title}
            </Link>
            <Link href={`/${locale}/faq`}>{site.ui.faq}</Link>
            <span className="lang-row">
              {LOCALES.filter((l) => l.code !== locale).map((l) => (
                <Link key={l.code} href={inLang(l.code)} hrefLang={l.code} lang={l.code}>{l.name}</Link>
              ))}
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}
