import Link from "next/link";
import type { Dict, Locale } from "@/content/types";
import { groups, hrefOf } from "@/lib/site";

/** Under every inner page: the other groups, so no page is a dead end. */
export function OtherGroups({ locale, site, current }: { locale: Locale; site: Dict["site"]; current: string }) {
  return (
    <nav className="og" aria-label={site.ui.otherSections}>
      <div className="wrap">
        <p className="label">{site.ui.otherSections}</p>
        <ul>
          {groups.filter((g) => g.key !== current).map((g) => (
            <li key={g.key}>
              <Link href={hrefOf(locale, g)}>
                <span className="og-t">{site.groups[g.key].label}<span className="arrow" aria-hidden="true">→</span></span>
                <span className="og-b">{site.groups[g.key].lede}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
