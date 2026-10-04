import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";
import type { Locale } from "@/content/types";
import { photos } from "@/content/photos";

/**
 * One photograph of the inner pages. The place decides the frame (CSS per place; data-ratio, the photo's own
 * format, is only the weightless default); the image fills it, around the registry's focus point when it has one. Missing files show a quiet paper frame with the tulip, so a page
 * can be laid out before its photographs exist.
 * Muntregister a9-1: `preload` (Next 16's name for the old `priority`) is meant for the masthead band only — the one
 * photograph that can be the page's largest paint; it is then also fetched with high priority. While a file loads,
 * the frame shows the registry's tone colour (--tone, blocks.css) instead of an empty grey box.
 */
export function Photo({
  id,
  src,
  locale,
  sizes,
  className = "",
  preload = false,
  decorative = false,
}: {
  id?: string;
  src?: string;
  locale: Locale;
  sizes: string;
  className?: string;
  preload?: boolean;
  decorative?: boolean;
}) {
  const meta = id ? photos[id] : undefined;
  const file = src ?? (id ? `/photos/pages/${id}.jpg` : "");
  const has = !!file && existsSync(path.join(process.cwd(), "public", file));
  const alt = decorative ? "" : (meta?.alt[locale] ?? "");
  // Muntregister a3-1: the registry's optional focus point and tone travel as custom properties (blocks.css reads them)
  const style: Record<string, string> = {};
  if (meta?.focus) style["--fx"] = meta.focus;
  if (meta?.focusSm) style["--fx-sm"] = meta.focusSm;
  if (meta?.tone) style["--tone"] = meta.tone;
  return (
    <figure
      className={`ph ${className}`}
      data-ratio={meta?.ratio}
      data-photo={id}
      style={Object.keys(style).length ? (style as React.CSSProperties) : undefined}
    >
      {has ? (
        <Image src={file} alt={alt} fill sizes={sizes} preload={preload} fetchPriority={preload ? "high" : undefined} quality={80} />
      ) : (
        <span className="ph-empty" aria-hidden="true" />
      )}
    </figure>
  );
}
