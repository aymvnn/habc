import type { MetadataRoute } from "next";
import { locales, defaultLocale } from "@/lib/i18n";
import { pagePaths } from "@/lib/site";
import { SITE_URL } from "@/lib/site-url";

/* Every page of the site map ("" is the homepage) in all three languages, each entry carrying its hreflang alternates
   (the same set the pages themselves declare, lib/i18n.ts alternatesFor). */
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", ...pagePaths().map((p) => `/${p}`)].flatMap((path) => {
    const languages: Record<string, string> = Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${path}`]));
    languages["x-default"] = `${SITE_URL}/${defaultLocale}${path}`;
    return locales.map((l) => ({
      url: `${SITE_URL}/${l}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
      alternates: { languages },
    }));
  });
}
