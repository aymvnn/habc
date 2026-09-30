"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { en } from "@/content/en";
import { nl } from "@/content/nl";
import { ar } from "@/content/ar";

/** source 21: "page not found", with the way back home and to contact */
export default function NotFound() {
  const pathname = usePathname() ?? "";
  const code = pathname.split("/")[1];
  const d = code === "nl" ? nl : code === "ar" ? ar : en;
  return (
    <div className="page nf">
      <section className="block">
        <div className="wrap nf-in">
          <p className="nf-code" aria-hidden="true">404</p>
          <p className="nf-text">{d.notFound.text}</p>
          <p className="nf-links">
            <Link className="btn" href={`/${d.locale}`}>{d.notFound.back} <span className="arrow" aria-hidden="true">→</span></Link>
            <Link className="more" href={`/${d.locale}/contact`}>{d.site.groups.contact.label} <span className="arrow" aria-hidden="true">→</span></Link>
          </p>
        </div>
      </section>
    </div>
  );
}
