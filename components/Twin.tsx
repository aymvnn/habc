import type { Locale } from "@/content/types";
import { Rich } from "./Rich";

/* === Signature 4: two scripts on one line (owner approved 4 Oct 2026) ===
   A heading and its own text in the other script stand on one gold line: Dutch (or English) from the start side,
   Arabic from the far side — two parties at one table. On /ar the Arabic leads and the Dutch answers. The words are
   the source's own (the same heading, in the other language of the same content entry); the twin is decorative
   (aria-hidden), so a screen reader hears the heading once. With the extra motion the line draws in from both ends
   and glints once where they meet, and the twin arrives from its side. Styles: app/signaturen.css ("Signature 4"). */
export const twinOf = (l: Locale): Locale => (l === "ar" ? "nl" : "ar");

export function TwinLine({ children, twin, lang }: { children: React.ReactNode; twin?: string; lang: Locale }) {
  if (!twin) return <>{children}</>;
  return (
    <div className="twinline rv-rule">
      {children}
      <span className="twin-h" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} aria-hidden="true">
        <Rich text={twin} />
      </span>
      <span className="twin-rule" aria-hidden="true">
        <i />
        <i />
      </span>
    </div>
  );
}
