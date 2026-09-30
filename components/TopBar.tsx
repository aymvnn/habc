"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dict, GroupKey, Locale } from "@/content/types";
import { groups, groupOfPathname, hrefOf, type SiteGroup } from "@/lib/site";

// the source's order: ع | EN | NL (1.1)
const LOCALES: { code: Locale; short: string; name: string }[] = [
  { code: "ar", short: "ع", name: "العربية" },
  { code: "en", short: "EN", name: "English" },
  { code: "nl", short: "NL", name: "Nederlands" },
];

type Props = { locale: Locale; nav: Dict["nav"]; site: Dict["site"]; extra: Dict["extra"] };

/**
 * The menu of the source (1.1): Home | Over ons | Academie | Zakelijke diensten | Lidmaatschap | Evenementen | Contact,
 * with the name in the centre. A button with sections under it opens a panel with every page and the source's own
 * title line of each; on phones the same buttons fold open inside the full-screen menu.
 * Above it a thin line with the club's descriptor and the language choice, which folds away once you scroll.
 */
export function TopBar({ locale, nav, site, extra }: Props) {
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

  const item = (g: SiteGroup) => {
    const label = site.groups[g.key].label;
    const has = g.children.length > 0;
    return (
      <li
        key={g.key}
        className={`ni${panel === g.key ? " on" : ""}${g.key === "contact" ? " ni-contact" : ""}`}
        onMouseEnter={() => (has ? hoverOpen(g.key) : hoverClose())}
      >
        <Link href={hrefOf(locale, g)} aria-current={current === g.key ? "true" : undefined}>{label}</Link>
        {has && (
          <button
            type="button"
            className="ni-t"
            aria-expanded={panel === g.key}
            aria-controls={`mp-${g.key}`}
            aria-label={site.ui.submenu.replace("{group}", label)}
            onClick={() => setPanel((p) => (p === g.key ? null : g.key))}
          >
            <svg viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" /></svg>
          </button>
        )}
      </li>
    );
  };

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

  const withPanel = groups.filter((g) => g.children.length > 0);

  return (
    <>
      <header
        className={`topbar${scrolled ? " scrolled" : ""}${isHome ? " is-home" : ""}${panel ? " menu-open" : ""}`}
        onMouseLeave={hoverClose}
        onMouseEnter={() => panel && clearTimeout(timer.current)}
      >
        <div className="tb-util">
          <p className="util-l">
            <span>DUKAAT</span><i aria-hidden="true">◆</i><span>{nav.descriptor}</span>
            <i aria-hidden="true">◆</i><span title={extra.annoTitle}>{extra.anno}</span>
            <i aria-hidden="true">◆</i><span title={extra.byNominationTitle}>{extra.byNomination}</span>
          </p>
          <nav className="util-r" aria-label={nav.langLabel}>
            <Link className="util-key" href={`/${locale}/contact?subject=nominated#contact-form`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo/dukaat-beeldmerk.svg" alt="" width={859} height={998} />
              {extra.nominated}
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
          {/* the source's seven buttons: Home and two groups left of the name, four right */}
          <nav className="tb-nav" aria-label={site.ui.mainNav}>
            <ul className="nav-l">
              <li className="ni" onMouseEnter={hoverClose}>
                <Link href={home} aria-current={isHome ? "page" : undefined}>{nav.home}</Link>
              </li>
              {groups.slice(0, 2).map(item)}
            </ul>
            <ul className="nav-r">{groups.slice(2).map(item)}</ul>
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
          {withPanel.map((g) => {
            const on = panel === g.key;
            return (
              <div key={g.key} id={`mp-${g.key}`} className={`mp${on ? " on" : ""}`} role="region" aria-label={site.groups[g.key].label} inert={!on}>
                <div className="mp-grid">
                  <div className="mp-intro">
                    <p className="mp-title">{site.groups[g.key].label}</p>
                    <p className="mp-lede">{site.groups[g.key].lede}</p>
                    <Link className="more" href={hrefOf(locale, g)} aria-current={pathname === hrefOf(locale, g) ? "page" : undefined}>
                      {site.groups[g.key].label} <span className="arrow" aria-hidden="true">→</span>
                    </Link>
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
                </div>
              </div>
            );
          })}
        </div>
      </header>

      <div className={`veil${open ? " open" : ""}`} id="veil" onClick={closeOnLink} inert={!open}>
        <nav className="veil-in" aria-label={site.ui.mainNav}>
          <Link className="vg-solo" href={home}>{nav.home}</Link>
          {groups.map((g) =>
            g.children.length === 0 ? (
              <Link key={g.key} className="vg-solo" href={hrefOf(locale, g)}>{site.groups[g.key].label}</Link>
            ) : (
              <details key={g.key} className="vg" open={current === g.key || undefined}>
                <summary>
                  <span>{site.groups[g.key].label}</span>
                  <svg viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" /></svg>
                </summary>
                <div className="vg-list">
                  <Link className="vg-all" href={hrefOf(locale, g)}>{site.groups[g.key].label} <span className="arrow" aria-hidden="true">→</span></Link>
                  {g.children.map((c) => (
                    <Link key={c.path} href={hrefOf(locale, c)}>{site.pages[c.path].title}</Link>
                  ))}
                </div>
              </details>
            ),
          )}
          <div className="veil-foot">
            <Link className="util-key" href={`/${locale}/contact?subject=nominated#contact-form`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo/dukaat-beeldmerk.svg" alt="" width={859} height={998} />
              {extra.nominated}
            </Link>
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
