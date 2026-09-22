import { en } from "@/content/en";
import { nl } from "@/content/nl";
import { ar } from "@/content/ar";
import type { Dict, Locale } from "@/content/types";

export const locales: Locale[] = ["en", "nl", "ar"];
export const defaultLocale: Locale = "en";

const dicts: Record<Locale, Dict> = { en, nl, ar };

export function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

export function getDict(locale: Locale): Dict {
  return dicts[locale];
}

export function dirOf(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

/** hreflang alternates for a path under the locale segment, e.g. "" or "/contact" */
export function alternatesFor(path: string) {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `/${l}${path}`;
  languages["x-default"] = `/${defaultLocale}${path}`;
  return { languages };
}
