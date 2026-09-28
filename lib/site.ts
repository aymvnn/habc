import type { Dict, GroupKey, Locale } from "@/content/types";

/**
 * The site map: one structure for all three languages. Copy (titles, one-line blurbs) lives in
 * content/site.{en,nl,ar}.ts, keyed by the paths below. Every path here is a real page under
 * /{locale}/…; the few with `href` point somewhere else (the intake).
 * Header, mobile menu, footer, the home index and the page template all read from this one list.
 */
export type SiteNode = { path: string; href?: string };
export type SiteGroup = { key: GroupKey; path: string; children: SiteNode[]; aside?: "routes" };

export const groups: SiteGroup[] = [
  {
    key: "about",
    path: "about",
    children: [{ path: "about/story" }, { path: "about/why" }, { path: "about/values" }, { path: "about/founders" }],
  },
  {
    key: "services",
    path: "services",
    aside: "routes",
    children: [
      { path: "services/trade" },
      { path: "services/market-entry" },
      { path: "services/representation" },
      { path: "services/documents" },
      { path: "services/investment" },
    ],
  },
  {
    key: "how",
    path: "how-we-work",
    children: [
      { path: "how-we-work/verification" },
      { path: "how-we-work/fees" },
      { path: "how-we-work/boundaries" },
      { path: "faq" },
    ],
  },
  {
    key: "market",
    path: "market",
    children: [
      { path: "market/products" },
      { path: "market/buyer-requests" },
      { path: "market/stocklots" },
      { path: "market/machinery" },
    ],
  },
  {
    key: "membership",
    path: "membership",
    children: [
      { path: "membership/levels" },
      { path: "membership/guarantees" },
      { path: "membership/who-for" },
      { path: "membership/founding-100" },
      { path: "membership/nominated", href: "contact?intent=nominated#intake" },
    ],
  },
  {
    key: "network",
    path: "network",
    children: [{ path: "network/directory" }, { path: "network/sector-clubs" }, { path: "network/stories" }],
  },
  {
    key: "events",
    path: "events",
    children: [
      { path: "events/calendar" },
      { path: "events/missions" },
      { path: "events/academy" },
      { path: "events/intelligence" },
    ],
  },
];

/** not in the main menu: the footer's legal column */
export const legal: SiteGroup = {
  key: "legal",
  path: "legal",
  children: [
    { path: "legal/privacy" },
    { path: "legal/cookies" },
    { path: "legal/terms" },
    { path: "legal/disclaimer" },
    { path: "legal/company" },
    { path: "legal/member-data" },
    { path: "legal/data-transfers" },
  ],
};

export const allGroups = [...groups, legal];

export const hrefOf = (locale: Locale, n: SiteNode | SiteGroup) => `/${locale}/${"href" in n && n.href ? n.href : n.path}`;

/** every path that renders through the page template (the intake shortcut is not one of them) */
export function pagePaths(): string[] {
  const out: string[] = [];
  for (const g of allGroups) {
    out.push(g.path);
    for (const c of g.children) if (!c.href) out.push(c.path);
  }
  return out;
}

export type Resolved = { group: SiteGroup; title: string; blurb: string; isOverview: boolean };

export function resolve(d: Dict, path: string): Resolved | null {
  for (const group of allGroups) {
    if (group.path === path) {
      const g = d.site.groups[group.key];
      return { group, title: g.label, blurb: g.lede, isOverview: true };
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
