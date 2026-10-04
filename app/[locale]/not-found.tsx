"use client";

import { usePathname } from "next/navigation";
import { NotFoundPage } from "@/components/NotFoundPage";
import { en } from "@/content/en";
import { nl } from "@/content/nl";
import { ar } from "@/content/ar";

/** source 21: "page not found". Normally proxy.ts answers an unknown address with app/[locale]/niet-gevonden; this
    boundary only shows when a known address still calls notFound(). Same page (UI-03), language from the address. */
export default function NotFound() {
  const pathname = usePathname() ?? "";
  const code = pathname.split("/")[1];
  const d = code === "nl" ? nl : code === "ar" ? ar : en;
  return <NotFoundPage locale={d.locale} d={d} />;
}
