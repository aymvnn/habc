import Link from "next/link";
import { Arrow } from "./Arrow";
import { Rich } from "./Rich";
import { Seal } from "./Sections";
import { Mash } from "./Licht";
import { hrefIn, shown, type EndActions } from "./Blocks";
import type { Dict, Locale } from "@/content/types";

/* === The reverse of the coin: the page's own close (owner, 4 Oct 2026: "veel korter en kleiner, niet dubbel") ===
   Only the page's own last actions (heading, text and links from the page's content, unchanged) on the dark reverse,
   compact: the heading and text on the start side, the links as a short column on the far side. The lists that only
   repeated the menu and the footer ("In this section", "Elsewhere on the site") are gone. A page without closing
   actions has no slot: the footer follows directly (it carries the foil edge then).
   The seal (static; pressed in once per visit with the extra motion) sits on the boundary — not on the contact page or
   a page with a form (b9). The turning sheet (signature 10) and the mashrabiya light (signature 5) stay.
   Styles: app/muntregister.css ("SLICE 5"), compacted in app/footers.css. */
export function PageEnd({
  locale,
  d,
  actions,
  seal,
}: {
  locale: Locale;
  d: Dict;
  actions?: EndActions;
  seal: boolean;
}) {
  const links = actions ? actions.links.filter((k) => shown(k.href)) : [];
  if (!actions || (!actions.heading && !actions.body && links.length === 0)) return null;

  return (
    <section className={`pe rv-rule has-lead${seal ? " has-seal" : ""}`}>
      <span className="pe-edge" aria-hidden="true" />
      <span className="pe-flap" aria-hidden="true" />
      <Mash />
      {seal && (
        <div className="pe-seal">
          <Seal text={d.extra.correspondence.sealText} />
        </div>
      )}
      <div className="wrap pe-grid">
        {(actions.heading || actions.body) && (
          <div className="pe-head">
            {actions.heading && <h2 className="rv"><Rich text={actions.heading[locale]} /></h2>}
            {actions.body && <p className="pe-body"><Rich text={actions.body[locale]} /></p>}
          </div>
        )}
        {links.length > 0 && (
          <ul className="pe-links">
            {links.map((k, i) => (
              <li key={k.href + i}>
                <Link prefetch={false} href={hrefIn(locale, k.href)} className={i === 0 ? "pe-a is-first" : "pe-a"}>
                  <span className="pe-t"><Rich text={k.label[locale]} /></span>
                  <span className="pe-go" aria-hidden="true"><Arrow /></span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
