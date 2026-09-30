import type { Dict, GroupKey, Locale } from "@/content/types";

/**
 * The site map, as the source prescribes (1.1): Home | Over ons | Academie | Zakelijke diensten | Lidmaatschap |
 * Evenementen | Contact, with every other section of the source under the menu button it belongs to.
 * Copy (titles, one-line blurbs) lives in content/site.{en,nl,ar}.ts, keyed by the paths below.
 * Header, mobile menu, footer and the page template all read from this one list.
 *
 * A group's own page is the source section of the same name (about = 2.1, academy = 4, membership = 9, events = 5,
 * contact = 19); "services" is an overview of its sections. After the source's sections each group lists the extras
 * the owner kept on 30 Sep 2026 (report 9pZxu4Jeprq9yqE3KkNu5V): pages that are not in the source.
 */
/** href: a menu line that leads somewhere else than its own page (the nomination line goes to the contact form) */
export type SiteNode = { path: string; href?: string };
export type SiteGroup = { key: GroupKey; path: string; children: SiteNode[] };

export const groups: SiteGroup[] = [
  {
    key: "about", // 2.1, with 2.2–2.5
    path: "about",
    children: [
      { path: "about/name" },
      { path: "about/vision" },
      { path: "about/mission" },
      { path: "about/goals" },
      { path: "about/why" }, // extra
      { path: "about/founders" }, // extra
    ],
  },
  { key: "academy", path: "academy", children: [] }, // 4
  {
    key: "services",
    path: "services",
    children: [
      { path: "services/connect" }, // 3
      { path: "services/matchmaking" }, // 12
      { path: "services/advisory" }, // 6
      { path: "services/market" }, // 7
      { path: "services/purchase-requests" }, // 13
      { path: "services/stocklots-machinery" }, // 14
      { path: "services/invest" }, // 8.1
      { path: "services/directory" }, // 11
      { path: "services/intelligence" }, // 15
      { path: "services/representation" }, // extra
      { path: "services/documents" }, // extra
      { path: "services/boundaries" }, // extra
    ],
  },
  {
    key: "membership", // 9
    path: "membership",
    children: [
      { path: "membership/sector-networks" }, // 16
      { path: "membership/stories" }, // 17
      { path: "membership/admission" }, // extra
      { path: "membership/fees" }, // extra
      { path: "membership/ambassadors" }, // extra
      { path: "membership/nominated", href: "contact?subject=nominated#contact-form" }, // extra
    ],
  },
  { key: "events", path: "events", children: [{ path: "events/missions" }] }, // 5, 8.2
  {
    key: "contact", // 19
    path: "contact",
    children: [{ path: "looking-for" }, { path: "partnerships" }, { path: "faq" }], // 10, 18, 20
  },
];

/** not in the main menu: the footer's legal links (source 21) */
export const legal: SiteGroup = {
  key: "legal",
  path: "legal",
  children: [
    { path: "legal/privacy" },
    { path: "legal/terms" },
    { path: "legal/cookies" },
    { path: "legal/disclaimer" }, // extra
    { path: "legal/company" }, // extra
    { path: "legal/member-data" }, // extra
    { path: "legal/data-transfers" }, // extra
  ],
};

export const allGroups = [...groups, legal];

/** the homepage around the tulip (source 1.3, 1.4) and "Discover more" (1.6): where each line leads */
export const homeKnow = ["about", "about/vision", "about/mission", "about/goals"];
export const homeNetwork = ["services/connect", "academy", "events", "services/advisory", "services/market", "services/invest", "membership"];
export const homeMore = [
  ["services/directory", "services/matchmaking", "services/purchase-requests", "services/stocklots-machinery"],
  ["services/intelligence", "membership/sector-networks", "membership/stories", "partnerships"],
];
/** the footer links (source 21), in the source's order */
export const footerLinks = ["about", "academy", "services", "membership", "events", "contact"];

export const hrefOf = (locale: Locale, n: SiteNode | SiteGroup | string) =>
  `/${locale}/${typeof n === "string" ? n : "href" in n && n.href ? n.href : n.path}`;

/** every path that renders through the page template */
export function pagePaths(): string[] {
  const out: string[] = [];
  for (const g of allGroups) {
    if (g.key !== "legal") out.push(g.path);
    for (const c of g.children) if (!c.href) out.push(c.path);
  }
  return out;
}

export type Resolved = { group: SiteGroup; title: string; blurb: string; isOverview: boolean; seo?: string };

export function resolve(d: Dict, path: string): Resolved | null {
  for (const group of allGroups) {
    if (group.path === path && group.key !== "legal") {
      const g = d.site.groups[group.key];
      return { group, title: g.label, blurb: g.lede, isOverview: true, seo: g.seo };
    }
    const child = group.children.find((c) => c.path === path && !c.href);
    if (child) {
      const p = d.site.pages[child.path];
      return { group, title: p.title, blurb: p.blurb, isOverview: false };
    }
  }
  return null;
}

/** the group a pathname belongs to, for the active state in the menu */
export function groupOfPathname(pathname: string): GroupKey | null {
  const rest = pathname.replace(/^\/(en|nl|ar)\/?/, "");
  if (!rest) return null;
  for (const g of allGroups) {
    if (rest === g.path || rest.startsWith(`${g.path}/`) || g.children.some((c) => rest === c.path)) return g.key;
  }
  return null;
}
