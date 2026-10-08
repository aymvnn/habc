"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { GroupKey } from "@/content/types";
import { groupOfPathname } from "@/lib/site";

/* === Waardepapier v20: the printed sheet (owner approved 9 Oct 2026) ===
   Printed or saved as PDF, every sheet carries the club's frame in its margins (app/waardepapier.css, @page). This
   writes the two lines that differ per page into the foot of every sheet: the page's group (the menu's own word) and
   the page's address. Only for print; on the screen nothing shows. */
const css = (s: string) => JSON.stringify(s).replace(/</g, "\\3C ");

export function PrintSheet({ labels }: { labels: Record<GroupKey, string> }) {
  const pathname = usePathname();
  const [href, setHref] = useState(pathname);
  useEffect(() => { setHref(`${location.host}${pathname}`); }, [pathname]);
  const g = groupOfPathname(pathname);
  const rule = `@media print{@page{@bottom-left{content:${css(g ? labels[g] : "DUKAAT")}}@bottom-right{content:${css(href)}}}}`;
  return <style dangerouslySetInnerHTML={{ __html: rule }} />;
}
