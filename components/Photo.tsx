import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";
import type { Locale } from "@/content/types";
import { photos } from "@/content/photos";

/**
 * One photograph of the inner pages. The frame carries the ratio (CSS decides per place, data-ratio is the
 * photo's own format); the image fills it. Missing files show a quiet paper frame with the tulip, so a page
 * can be laid out before its photographs exist.
 */
export function Photo({
  id,
  src,
  locale,
  sizes,
  className = "",
  priority = false,
  decorative = false,
}: {
  id?: string;
  src?: string;
  locale: Locale;
  sizes: string;
  className?: string;
  priority?: boolean;
  decorative?: boolean;
}) {
  const meta = id ? photos[id] : undefined;
  const file = src ?? (id ? `/photos/pages/${id}.jpg` : "");
  const has = !!file && existsSync(path.join(process.cwd(), "public", file));
  const alt = decorative ? "" : (meta?.alt[locale] ?? "");
  return (
    <figure className={`ph ${className}`} data-ratio={meta?.ratio}>
      {has ? (
        <Image src={file} alt={alt} fill sizes={sizes} priority={priority} quality={80} />
      ) : (
        <span className="ph-empty" aria-hidden="true" />
      )}
    </figure>
  );
}
