/**
 * The public origin of the site: canonical URLs, hreflang alternates, Open Graph, robots.txt and sitemap.xml.
 * NEXT_PUBLIC_SITE_URL wins when it is set. Otherwise a production build uses www.dukaatbusinessclub.com — the domain
 * attached to the Vercel project whose apex (dukaatbusinessclub.com) redirects to www, and the one the club's e-mail
 * address is on — and development stays on localhost.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.NODE_ENV === "production" ? "https://www.dukaatbusinessclub.com" : "http://localhost:3000")
).replace(/\/$/, "");
