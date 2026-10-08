import { Fragment, type CSSProperties, type ReactNode } from "react";

/**
 * UI-07 (owner, 4 Oct 2026): with `words`, every word is set in its own two spans — a mask (.w) and the word that
 * rises inside it (.wi) — numbered in reading order (--w), so a heading can come up from behind an edge line by line
 * (app/premium.css; components/Reveal.tsx numbers the lines). The words and the spaces between them are unchanged.
 */
/* Waardepapier v7 (owner, 9 Oct 2026: "alleen het woordje dukaat"): the club's name in running text is set in its
   own span so it can carry the red ink of a rubric (app/waardepapier.css). The whole word, never a letter of it, so
   the Arabic stays joined; headings and dark surfaces keep it unstyled. */
const NAME = /(DUKAAT|دوكات)/;
function plain(text: string, words: boolean, next: () => number): ReactNode {
  if (!words) {
    if (!NAME.test(text)) return text;
    return text.split(NAME).map((part, i) => (i % 2 ? <span className="rub" key={i}>{part}</span> : part));
  }
  return text.split(/(\s+)/).map((part, i) => {
    if (!part || /^\s+$/.test(part)) return part;
    const n = next();
    return (
      <span className="w" key={i} style={{ "--w": n } as CSSProperties}>
        <span className="wi">{part}</span>
      </span>
    );
  });
}

/** A value the founders still have to confirm, written between square brackets: "[48] newsletters". */
function pending(text: string, words: boolean, next: () => number): ReactNode {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span className="pending" key={i}>{plain(part, words, next)}</span>
    ) : (
      <Fragment key={i}>{plain(part, words, next)}</Fragment>
    ),
  );
}

/** Renders copy with *emphasis* markers as <em>, "\n" as <br>, and [bracketed] pending values marked as such. */
export function Rich({ text, words = false }: { text: string; words?: boolean }) {
  let count = 0;
  const next = () => count++;
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, li) => (
        <Fragment key={li}>
          {li > 0 && <br />}
          {line.split(/(\*[^*]+\*)/g).map((part, i) =>
            part.startsWith("*") && part.endsWith("*") ? (
              <em key={i}>{pending(part.slice(1, -1), words, next)}</em>
            ) : (
              <Fragment key={i}>{pending(part, words, next)}</Fragment>
            ),
          )}
        </Fragment>
      ))}
    </>
  );
}
