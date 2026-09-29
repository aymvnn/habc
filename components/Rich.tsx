import { Fragment } from "react";

/** A value the founders still have to confirm, written between square brackets: "[48] newsletters". */
function Pending({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\[[^\]]+\])/g).map((part, i) =>
        part.startsWith("[") && part.endsWith("]") ? <span className="pending" key={i}>{part}</span> : <Fragment key={i}>{part}</Fragment>,
      )}
    </>
  );
}

/** Renders copy with *emphasis* markers as <em>, "\n" as <br>, and [bracketed] pending values marked as such. */
export function Rich({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, li) => (
        <Fragment key={li}>
          {li > 0 && <br />}
          {line.split(/(\*[^*]+\*)/g).map((part, i) =>
            part.startsWith("*") && part.endsWith("*") ? <em key={i}><Pending text={part.slice(1, -1)} /></em> : <Pending key={i} text={part} />,
          )}
        </Fragment>
      ))}
    </>
  );
}
