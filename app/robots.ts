import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";

/* Everything is open to crawlers, search engines and AI assistants alike; the sitemap lists the 41 pages in three languages. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
