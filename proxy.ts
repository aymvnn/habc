import { NextResponse, type NextRequest } from "next/server";
import { pagePaths } from "@/lib/site";

/* UI-03 (owner, 4 Oct 2026): an unknown address under a known language gets the house 404 inside the site — menu,
   footer, its own language — with status 404. The layout's dynamicParams=false would otherwise send it to the global
   404, which has no layout and cannot know the language. The page list is the site map's own (the same list the
   static pages are built from). Unknown languages (/xx/…) are not matched here and keep app/global-not-found.tsx. */
const KNOWN = new Set(["", ...pagePaths()]);

export function proxy(request: NextRequest) {
  const [, locale, ...rest] = request.nextUrl.pathname.split("/");
  const path = rest.join("/").replace(/\/$/, "");
  if (KNOWN.has(path)) return NextResponse.next();
  return NextResponse.rewrite(new URL(`/${locale}/niet-gevonden`, request.url), { status: 404 });
}

export const config = { matcher: ["/(nl|en|ar)/:path+"] };
