import { Fragment } from "react";

/** Renders copy with *emphasis* markers as <em> and "\n" as <br>. */
export function Rich({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, li) => (
        <Fragment key={li}>
          {li > 0 && <br />}
          {line.split(/(\*[^*]+\*)/g).map((part, i) =>
            part.startsWith("*") && part.endsWith("*") ? <em key={i}>{part.slice(1, -1)}</em> : <Fragment key={i}>{part}</Fragment>,
          )}
        </Fragment>
      ))}
    </>
  );
}
