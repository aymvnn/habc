"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dict, Locale } from "@/content/types";

const LOCALES: { code: Locale; short: string; name: string }[] = [
  { code: "en", short: "EN", name: "English" },
  { code: "nl", short: "NL", name: "Nederlands" },
  { code: "ar", short: "ع", name: "العربية" },
];

export function TopBar({ locale, nav }: { locale: Locale; nav: Dict["nav"] }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const home = `/${locale}`;
  const isHome = pathname === home || pathname === `${home}/`;
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
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  const links = [
    { href: `${home}#name`, label: nav.about },
    { href: `${home}#how`, label: nav.how },
    { href: `${home}#membership`, label: nav.membership },
    { href: `${home}#behind`, label: nav.behind },
    { href: `${home}/contact`, label: nav.contact },
  ];

  return (
    <>
      <header className={`topbar${scrolled ? " scrolled" : ""}${isHome ? " is-home" : ""}`}>
        <Link className="brand" href={home} aria-label={nav.toHome}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="wordmark" src="/logo/dukaat-woordmerk.svg" alt="DUKAAT" width={748} height={120} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="mark" src="/logo/dukaat-beeldmerk.svg" alt="" width={859} height={998} />
          <span>{nav.descriptor}</span>
        </Link>
        {/* symmetric: three links left, the name in the centre, the rest and the languages right */}
        <nav className="tb-nav" aria-label="Main">
          <div className="nav-l">
            {links.slice(0, 3).map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </div>
          <div className="nav-r">
            {links.slice(3).map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
            <div className="lang" role="group" aria-label={nav.langLabel}>
              {LOCALES.map((l) => (
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
          </div>
        </nav>
        {/* phones: the other two languages stay in the header, beside the menu */}
        <div className="lang-m" role="group" aria-label={nav.langLabel}>
          {LOCALES.filter((l) => l.code !== locale).map((l) => (
            <Link key={l.code} href={inLang(l.code)} hrefLang={l.code} lang={l.code} title={l.name} className={l.code === "ar" ? "ar-glyph" : undefined}>
              {l.short}
            </Link>
          ))}
        </div>
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
      </header>
      <div className={`veil${open ? " open" : ""}`} id="veil" onClick={(e) => { if ((e.target as HTMLElement).tagName === "A") setOpen(false); }}>
        <Link href={`${home}#name`}>{nav.about}</Link>
        <Link href={`${home}#routes`}>{nav.routes}</Link>
        <Link href={`${home}#how`}>{nav.how}</Link>
        <Link href={`${home}#membership`}>{nav.membership}</Link>
        <Link href={`${home}#behind`}>{nav.behind}</Link>
        <Link href={`${home}/contact`}>{nav.contact}</Link>
        <span className="lang-row">
          {LOCALES.filter((l) => l.code !== locale).map((l) => (
            <Link key={l.code} href={inLang(l.code)} hrefLang={l.code} lang={l.code}>{l.name}</Link>
          ))}
        </span>
      </div>
    </>
  );
}
