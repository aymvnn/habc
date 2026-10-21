"use client";

import { startTransition, useActionState, useEffect, useLayoutEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { sendForm, type FormState } from "@/app/actions/forms";
import { LANGUAGE_OF, MAX_ATTACHMENT, type LocalField } from "@/lib/forms";
import type { Locale } from "@/content/types";
import { Arrow } from "./Arrow";
import { takeArrival } from "./Arrival";
import { Rich } from "./Rich";

/* eslint-disable @next/next/no-img-element -- the brand mark is served as-is */

export type FormMsgs = {
  note: string;
  privacy: string;
  optIn: string;
  required: string;
  invalidEmail: string;
  sending: string;
  failed: string;
  attachmentHint: string;
  choose: string;
};

/** the interface words the UX assessment added (owner, 4 Oct 2026; content/types.ts "ux") */
export type FormUx = {
  more: string; // UX-04 / R1: the button behind which the optional fields wait
  checkFields: string; // UX-07
  respondingTo: string; // UX-09, "{ref}"
  direct: string; // R1 / UX-07: the heading of the direct channels
};

/** a direct channel from the contact page's business card (its title and value, a value still to come in brackets) */
export type Channel = { label: string; value: string };

export type FormProps = {
  id: string;
  locale: Locale;
  fields: LocalField[];
  submit: string;
  success: string;
  successNote?: string;
  /** a consent line of the source for this form (e.g. the publication option) */
  option?: string;
  /** privacy acknowledgement + optional newsletter consent (source 10) */
  consent?: boolean;
  msgs: FormMsgs;
  ux?: FormUx;
  /** UX-07: the channels shown when sending fails, so the visitor always has another way */
  channels?: Channel[];
  /**
   * R1: the newsletter consent moves from the form to the confirmation (same words), offered once the request is sent;
   * subscribe = the footer newsletter's button and confirmation.
   */
  optInAfter?: { button: string; success: string };
  /**
   * Muntregister a4-8: what is pressed beside the confirmation — the seal where no other seal is on the page, the bare
   * tulip in the footer, nothing on the contact page (b9: its business card carries the page's one seal). Decorative.
   */
  mark?: ReactNode;
  /** Muntregister a4-5: the footer's newsletter sets its one field and button on one line */
  inline?: boolean;
};

type El = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
type FileInfo = { name: string; size: number };

/* === Muntregister: the right keyboard for every field (a4-6) ===
   Addresses, numbers and links are written left to right in every language (dir=ltr, right-aligned on /ar by CSS).
   A link and a year are typed text with the right keyboard rather than url/number fields, so the browser never
   shows a check the source has no words for. */
function kindOf(f: LocalField) {
  switch (f.type) {
    case "email":
      return { type: "email", inputMode: "email", autoComplete: "email", autoCapitalize: "none", spellCheck: false, dir: "ltr" } as const;
    case "tel":
      return { type: "tel", inputMode: "tel", autoComplete: "tel", dir: "ltr" } as const;
    case "url":
      return { type: "text", inputMode: "url", autoComplete: "url", autoCapitalize: "none", spellCheck: false, dir: "ltr" } as const;
    case "number":
      return { type: "text", inputMode: "numeric", autoComplete: "off", dir: "ltr" } as const;
    case "date":
      return { type: "date" } as const;
    default: {
      const ac: Record<string, string> = { name: "name", company: "organization", role: "organization-title", country: "country-name" };
      return { type: "text", autoComplete: ac[f.name] } as const;
    }
  }
}

/** a file's size in the page's language: "2,4 MB", "830 kB" (Western digits, as everywhere on the site) */
function sizeOf(bytes: number, locale: Locale) {
  const mb = bytes / (1024 * 1024);
  const big = mb >= 1;
  return new Intl.NumberFormat(`${locale}-u-nu-latn`, {
    style: "unit",
    unit: big ? "megabyte" : "kilobyte",
    unitDisplay: "short",
    maximumFractionDigits: big ? 1 : 0,
  }).format(big ? mb : Math.max(1, bytes / 1024));
}

/* === UX-01: nothing the visitor typed is ever lost ===
   The form is sent from onSubmit inside a transition (not through the form's action attribute), so React never resets
   it: after a failure every field still holds what was typed. While typing, the fields are kept as a draft in this
   tab (sessionStorage, never files, never the consents); a reload or a return to the page restores them, a sent
   form clears its draft. */
const DRAFT = (id: string, l: Locale) => `dukaat-draft:${id}:${l}`;
const KEEP = (el: Element): el is El =>
  (el instanceof HTMLInputElement && !["hidden", "file", "checkbox", "radio", "submit"].includes(el.type) && el.name !== "website") ||
  el instanceof HTMLSelectElement ||
  el instanceof HTMLTextAreaElement;

/**
 * One form of the source: its fields as the source lists them, the shared fields where the source asks for them,
 * and the source's own messages for required fields, sending, failure and confirmation (10, 21).
 * Muntregister (a4-5 … a4-8): fields as lined letter paper, errors under the field in the source's words (no browser
 * bubbles), the attachment as a drop zone in the page's language, a button that never changes width.
 * UX assessment (owner's choices, 4 Oct 2026): the optional fields behind one button (UX-04), a list of the fields
 * still to correct (UX-07), the page's language and the visitor's starting point filled in (UX-09), and every typed
 * word kept (UX-01).
 */
export function Form({ id, locale, fields, submit, success, successNote, option, consent = true, msgs, ux, channels, optInAfter, mark, inline }: FormProps) {
  const [state, dispatch, pending] = useActionState<FormState, FormData>(sendForm, { status: "idle" });
  const ref = useRef<HTMLFormElement>(null);
  const okRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDetailsElement>(null);
  const [errs, setErrs] = useState<Record<string, string>>({});
  const [tried, setTried] = useState(false);
  const [files, setFiles] = useState<Record<string, FileInfo | undefined>>({});
  const [over, setOver] = useState<string | null>(null);
  const [live, setLive] = useState("");
  const [arrival, setArrival] = useState<{ label: string; from: string } | null>(null);
  const sentEmail = useRef("");
  const focused = useRef(false);
  const saveTimer = useRef(0);

  const core = fields.filter((f) => !f.more);
  const more = ux ? fields.filter((f) => f.more) : [];
  const shown = ux ? core : fields;
  const labelOf = (name: string) => (name === "privacy" ? msgs.privacy : fields.find((f) => f.name === name)?.label ?? name);

  // restore a draft of this tab, then let the address preselect a choice (contact?subject=membership wins)
  useEffect(() => {
    const form = ref.current;
    if (!form) return;
    let openMore = false;
    try {
      const raw = sessionStorage.getItem(DRAFT(id, locale));
      const draft = raw ? (JSON.parse(raw) as Record<string, string>) : null;
      if (draft) {
        for (const el of Array.from(form.elements)) {
          if (!KEEP(el) || !(el.name in draft) || !draft[el.name]) continue;
          if (el instanceof HTMLSelectElement && !Array.from(el.options).some((o) => o.value === draft[el.name])) continue;
          el.value = draft[el.name];
          if (el.closest(".fm-more")) openMore = true;
        }
      }
    } catch {}
    const q = new URLSearchParams(window.location.search);
    for (const f of fields) {
      if (f.type !== "select" || !f.values) continue;
      const v = q.get(f.name);
      const el = form.elements.namedItem(f.name);
      if (v && f.values.includes(v) && el instanceof HTMLSelectElement) el.value = v;
    }
    if (openMore && moreRef.current) moreRef.current.open = true;
  }, [fields, id, locale]);

  // UX-09: the button the visitor came from (stored by components/Arrival.tsx) — shown once, sent along
  useEffect(() => {
    const read = () => setArrival(takeArrival(id));
    read();
    window.addEventListener("dukaat-arrival", read);
    return () => window.removeEventListener("dukaat-arrival", read);
  }, [id]);

  const keepDraft = () => {
    clearTimeout(saveTimer.current);
    saveTimer.current = window.setTimeout(() => {
      const form = ref.current;
      if (!form) return;
      const draft: Record<string, string> = {};
      for (const el of Array.from(form.elements)) if (KEEP(el) && el.value) draft[el.name] = el.value;
      try {
        if (Object.keys(draft).length) sessionStorage.setItem(DRAFT(id, locale), JSON.stringify(draft));
        else sessionStorage.removeItem(DRAFT(id, locale));
      } catch {}
    }, 350);
  };

  // a4-8: the confirmation takes the focus (without a jump), so it is read out and the visitor stays in place
  // in development only: the review switch "Brief: proef" shows the sealed letter even when e-mail is not configured
  const proef = process.env.NODE_ENV !== "production" && typeof document !== "undefined" && document.documentElement.dataset.brief === "proef";
  const ok = state.status === "ok" || (proef && state.status === "error");
  useLayoutEffect(() => {
    if (!ok) return;
    okRef.current?.focus({ preventScroll: true });
    try { sessionStorage.removeItem(DRAFT(id, locale)); } catch {}
  }, [ok, id, locale]);

  if (ok) {
    const confirmation = (
      <div className="fm-ok-t">
        <p>{success}</p>
        {successNote && <p className="fm-ok-note">{successNote}</p>}
        {optInAfter && sentEmail.current && <OptInAfter email={sentEmail.current} locale={locale} text={msgs.optIn} {...optInAfter} />}
      </div>
    );
    /* Signature 6: the letter. Every form but the footer's newsletter is a sheet of the club's letter paper; once
       sent, the sheet folds in three and the wax seal of DUKAAT is pressed on it (under a second, once; reduced
       motion and keyboard: the sealed letter is simply there). The words are the existing confirmation. */
    if (!inline) {
      return (
        <div className="fm-ok is-letter" role="status" tabIndex={-1} ref={okRef}>
          <div className="lt" aria-hidden="true">
            <div className="lt-fold">
              <i className="lt-p lt-p1" />
              <i className="lt-p lt-p2" />
              <i className="lt-p lt-p3" />
            </div>
            <span className="lt-wax" />
          </div>
          {confirmation}
        </div>
      );
    }
    return (
      <div className={`fm-ok${mark ? " has-mark" : ""}`} role="status" tabIndex={-1} ref={okRef}>
        {mark && <div className="fm-mark" aria-hidden="true">{mark}</div>}
        {confirmation}
      </div>
    );
  }

  const fid = (name: string) => `${id}-${name}`;
  const eid = (name: string) => `${id}-${name}-err`;

  /* === Muntregister: errors under the field (a4-6, b11) ===
     The browser's own bubbles are replaced by the source's texts (21) under the field: a missing value, a wrong
     e-mail address; an attachment that is too large shows the source's failure line (b11, no new sentence). The
     first wrong field takes the focus; one polite live region reads its message. UX-07: the fields still to correct
     are also listed above the form, each a button that takes the visitor there. */
  const msgOf = (el: El) =>
    el.validity.customError ? el.validationMessage : el.validity.typeMismatch ? msgs.invalidEmail : msgs.required;
  const setErr = (name: string, msg?: string) =>
    setErrs((e) => {
      if ((e[name] ?? undefined) === msg) return e;
      const n = { ...e };
      if (msg) n[name] = msg;
      else delete n[name];
      return n;
    });
  const onInvalid = (e: React.FormEvent<El>) => {
    e.preventDefault();
    const el = e.currentTarget;
    const msg = msgOf(el);
    setErr(el.name, msg);
    setTried(true);
    const box = el.closest("details");
    if (box && !box.open) box.open = true;
    if (!focused.current) {
      focused.current = true;
      el.focus();
      setLive(msg);
      requestAnimationFrame(() => (focused.current = false));
    }
  };
  // once a field has been marked, it is checked again while it is corrected (never before)
  const recheck = (e: React.FormEvent<El>) => {
    const el = e.currentTarget;
    if (!(el.name in errs)) return;
    setErr(el.name, el.validity.valid ? undefined : msgOf(el));
  };
  const goTo = (name: string) => {
    const el = ref.current?.elements.namedItem(name);
    if (!(el instanceof HTMLElement)) return;
    const box = el.closest("details");
    if (box && !box.open) box.open = true;
    el.focus();
  };

  const pickFile = (el: HTMLInputElement) => {
    const f = el.files?.[0];
    setFiles((s) => ({ ...s, [el.name]: f ? { name: f.name, size: f.size } : undefined }));
    const tooBig = (f?.size ?? 0) > MAX_ATTACHMENT;
    el.setCustomValidity(tooBig ? msgs.failed : "");
    setErr(el.name, tooBig ? msgs.failed : undefined);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    sentEmail.current = String(fd.get("email") ?? "");
    startTransition(() => dispatch(fd));
  };

  const described = (f: LocalField, ...ids: (string | false | undefined)[]) => {
    const all = [...ids, errs[f.name] && eid(f.name)].filter(Boolean).join(" ");
    return all || undefined;
  };

  const input = (f: LocalField) => {
    const common = {
      id: fid(f.name),
      name: f.name,
      required: f.required,
      onInvalid,
      "aria-invalid": errs[f.name] ? (true as const) : undefined,
    };
    switch (f.type) {
      case "textarea":
        return (
          <span className="ctl">
            <textarea {...common} placeholder={f.placeholder} onInput={recheck} aria-describedby={described(f)} />
          </span>
        );
      case "select": {
        // UX-09: the language of communication starts at the page's own language
        const lang = LANGUAGE_OF[locale];
        const start = f.name === "language" && (f.values ?? f.options ?? []).includes(lang) ? lang : "";
        return (
          <span className="ctl is-select">
            <select {...common} defaultValue={start} onChange={recheck} aria-describedby={described(f)}>
              <option value="" disabled={f.required}>{msgs.choose}</option>
              {(f.options ?? []).map((o, i) => (
                <option key={i} value={f.values?.[i] ?? o}>{o}</option>
              ))}
            </select>
          </span>
        );
      }
      case "file": {
        const info = files[f.name];
        return (
          /* === Muntregister: the attachment as a drop zone (a4-6) ===
             The native file field lies invisibly over the whole zone: a click or a dropped file goes straight to it,
             the keyboard reaches it as before, and the browser's English "Choose File" is never seen. The zone shows
             the brand mark, the source's hint and — once chosen — the file's name and size. */
          <span className={`dz${over === f.name ? " is-over" : ""}${info ? " has-file" : ""}`}>
            <img className="dz-mark" src="/logo/dukaat-beeldmerk.svg" alt="" width={859} height={998} aria-hidden="true" />
            <span className="dz-t">
              <span className="hint" id={`${fid(f.name)}-hint`}>{msgs.attachmentHint}</span>
              {info && (
                <span className="dz-file" id={`${fid(f.name)}-file`}>
                  <bdi className="dz-name">{info.name}</bdi>
                  <span className="dz-size">{sizeOf(info.size, locale)}</span>
                </span>
              )}
            </span>
            <input
              {...common}
              className="dz-in"
              type="file"
              aria-describedby={described(f, `${fid(f.name)}-hint`, info && `${fid(f.name)}-file`)}
              onChange={(e) => pickFile(e.currentTarget)}
              onDragEnter={() => setOver(f.name)}
              onDragLeave={() => setOver(null)}
              onDrop={() => setOver(null)}
            />
          </span>
        );
      }
      default:
        return (
          <span className="ctl">
            <input {...common} {...kindOf(f)} placeholder={f.placeholder} enterKeyHint="next" onInput={recheck} aria-describedby={described(f)} />
          </span>
        );
    }
  };

  const fieldEl = (f: LocalField) => (
    <div className={`field${f.wide || f.type === "textarea" ? " wide" : ""}${f.type === "file" ? " is-file" : ""}`} key={f.name}>
      <label htmlFor={fid(f.name)}>
        {f.label}
        {f.required && <span className="req" aria-hidden="true">*</span>}
      </label>
      {input(f)}
      {errs[f.name] && <span className="err" id={eid(f.name)}>{errs[f.name]}</span>}
    </div>
  );

  const hasFile = fields.some((f) => f.type === "file");
  const failed = state.status === "error" || state.status === "invalid";
  const toFix = Object.keys(errs);
  const real = (channels ?? []).filter((c) => c.value.trim());

  return (
    <form ref={ref} onSubmit={onSubmit} onInput={keepDraft} onChange={keepDraft} className={`fm${inline ? " is-inline" : " is-letter"}`} id={`${id}-form`}>
      {/* Signature 6: the letterhead of the club's paper (the mark only, decorative) */}
      {!inline && (
        <div className="lt-head" aria-hidden="true">
          <img src="/logo/dukaat-beeldmerk.svg" alt="" width={859} height={998} />
          <i />
        </div>
      )}
      <input type="hidden" name="formId" value={id} />
      <input type="hidden" name="locale" value={locale} />
      {arrival && <input type="hidden" name="ref" value={`${arrival.label} (${arrival.from})`} />}
      <div className="hp" aria-hidden="true">
        <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      {/* UX-09: where the visitor came from, in the words of the button they pressed */}
      {arrival && ux && <p className="fm-ctx">{ux.respondingTo.replace("{ref}", arrival.label)}</p>}

      {/* UX-07: the fields still to correct, above the form, each one a way back to its field */}
      {ux && tried && toFix.length > 0 && (
        <div className="fm-sum" role="group" aria-labelledby={`${id}-sum`}>
          <p className="fm-sum-t" id={`${id}-sum`}>{ux.checkFields}</p>
          <ul>
            {toFix.map((n) => (
              <li key={n}>
                <button type="button" onClick={() => goTo(n)}>{labelOf(n)}</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* a request form: its own questions first, then — after a quiet rule — who is asking (the shared fields) */}
      <div className="fm-grid">
        {shown.map((f, i) =>
          f.shared && i > 0 && !shown[i - 1].shared ? [<span className="fm-split" aria-hidden="true" key={`${f.name}-split`} />, fieldEl(f)] : fieldEl(f),
        )}
      </div>

      {/* UX-04: every optional field behind one button; nothing is left out, a draft or a mistake opens it */}
      {more.length > 0 && ux && (
        <details className="fm-more" ref={moreRef}>
          <summary>{ux.more}</summary>
          <div className="fm-grid">{more.map(fieldEl)}</div>
        </details>
      )}

      {hasFile && <p className="fm-note">{msgs.note}</p>}

      {option && (
        <label className="fm-check">
          <input type="checkbox" name="option" />
          <span>{option}</span>
        </label>
      )}
      {consent && (
        <>
          <div className="fm-check-w">
            <label className="fm-check">
              <input
                type="checkbox"
                name="privacy"
                required
                onInvalid={onInvalid}
                onChange={recheck}
                aria-invalid={errs.privacy ? true : undefined}
                aria-describedby={errs.privacy ? eid("privacy") : undefined}
              />
              <span>{msgs.privacy}</span>
            </label>
            {errs.privacy && <span className="err" id={eid("privacy")}>{errs.privacy}</span>}
          </div>
          {!optInAfter && (
            <label className="fm-check">
              <input type="checkbox" name="optin" />
              <span>{msgs.optIn}</span>
            </label>
          )}
        </>
      )}

      {/* the source's failure line; UX-07: with the direct channels beside it, so there is always another way */}
      {failed && (
        <div className="notice err" role="alert">
          <p>{msgs.failed}</p>
          {ux && real.length > 0 && (
            <div className="fm-direct">
              <p className="fm-direct-t">{ux.direct}</p>
              <dl>
                {real.map((c) => (
                  <div key={c.label}>
                    <dt>{c.label}</dt>
                    <dd><Rich text={c.value} /></dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      )}

      {/* === Muntregister: a button that keeps its width (a4-8) ===
          The button keeps its own words while the request goes out; only its arrow turns into a small ring. The source's
          "sending" line appears beside it (and is read out), so nothing is hidden in the page and nothing jumps. */}
      <div className="fm-send">
        <button className="btn" type="submit" disabled={pending} aria-busy={pending || undefined}>
          <span className="btn-l">{submit}</span>
          <span className={`btn-i${pending ? " is-busy" : ""}`} aria-hidden="true">
            <Arrow />
            <span className="spin" />
          </span>
        </button>
        <p className="fm-sending" role="status">{pending ? msgs.sending : null}</p>
      </div>
      <p className="fm-live" aria-live="polite">{live}</p>
    </form>
  );
}

/** R1: after a sent request, the newsletter consent (the source's words) with the footer newsletter's own button */
function OptInAfter({ email, locale, text, button, success }: { email: string; locale: Locale; text: string; button: string; success: string }) {
  const [state, dispatch, pending] = useActionState<FormState, FormData>(sendForm, { status: "idle" });
  const [checked, setChecked] = useState(false);
  if (state.status === "ok") return <p className="fm-optin-ok" role="status">{success}</p>;
  return (
    <div className="fm-optin">
      <label className="fm-check">
        <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.currentTarget.checked)} />
        <span>{text}</span>
      </label>
      {checked && (
        <button
          type="button"
          className="act-a"
          disabled={pending}
          onClick={() => {
            const fd = new FormData();
            fd.set("formId", "newsletter");
            fd.set("locale", locale);
            fd.set("email", email);
            startTransition(() => dispatch(fd));
          }}
        >
          {button} <Arrow />
        </button>
      )}
    </div>
  );
}

/**
 * the six "What are you looking for?" forms behind one choice; #supplier etc. opens one directly.
 * Muntregister a4-9: a bordeaux marker glides to the chosen line (measured per button: lines differ in height); the
 * arrow keys move through the choices (a vertical tablist, roving tabindex); a choice made from the keyboard or
 * through the address (#…) changes at once, a click lets the marker glide and the new form settle in softly.
 */
export function FormSet({ id, forms, headingLevel = 3 }: { id: string; forms: (FormProps & { choice: string; title?: string; intro?: string })[]; headingLevel?: 2 | 3 }) {
  const [active, setActive] = useState(0);
  const [instant, setInstant] = useState(true);
  const list = useRef<HTMLDivElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const [ind, setInd] = useState<{ y: number; h: number } | null>(null);

  useEffect(() => {
    const pick = () => {
      const h = window.location.hash.slice(1);
      const i = forms.findIndex((f) => f.id === h);
      if (i >= 0) {
        setInstant(true);
        setActive(i);
      }
    };
    pick();
    window.addEventListener("hashchange", pick);
    return () => window.removeEventListener("hashchange", pick);
  }, [forms]);

  // the marker follows the chosen button, also when the lines re-wrap (resize, font load)
  useLayoutEffect(() => {
    const b = tabs.current[active];
    const l = list.current;
    if (!b || !l) return;
    const m = () => setInd((p) => (p && p.y === b.offsetTop && p.h === b.offsetHeight ? p : { y: b.offsetTop, h: b.offsetHeight }));
    m();
    const ro = new ResizeObserver(m);
    ro.observe(l);
    return () => ro.disconnect();
  }, [active]);

  const choose = (i: number, fromKeys: boolean) => {
    setInstant(fromKeys);
    setActive(i);
    history.replaceState(null, "", `#${forms[i].id}`);
    if (fromKeys) tabs.current[i]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const n = forms.length;
    const rtl = getComputedStyle(e.currentTarget).direction === "rtl";
    const step: Record<string, number> = { ArrowDown: 1, ArrowUp: -1, ArrowRight: rtl ? -1 : 1, ArrowLeft: rtl ? 1 : -1 };
    let i = -1;
    if (e.key in step) i = (active + step[e.key] + n) % n;
    else if (e.key === "Home") i = 0;
    else if (e.key === "End") i = n - 1;
    if (i < 0) return;
    e.preventDefault();
    choose(i, true);
  };

  const f = forms[active];
  const Title = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className="fs" id={id}>
      <div className="fs-choices" role="tablist" aria-orientation="vertical" ref={list} onKeyDown={onKeyDown} data-instant={instant ? "" : undefined}>
        {ind && <span className="fs-ind" aria-hidden="true" style={{ ["--y" as string]: `${ind.y}px`, ["--h" as string]: `${ind.h}` }} />}
        {forms.map((x, i) => (
          <button
            key={x.id}
            id={x.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls={`${id}-panel`}
            tabIndex={i === active ? 0 : -1}
            className={i === active ? "on" : undefined}
            onClick={() => choose(i, false)}
          >
            {x.choice}
          </button>
        ))}
      </div>
      <div className="fs-panel" id={`${id}-panel`} role="tabpanel" aria-labelledby={f.id} key={f.id} data-instant={instant ? "" : undefined}>
        {f.title && <Title className="fs-title">{f.title}</Title>}
        {f.intro && <p className="fs-intro">{f.intro}</p>}
        <Form {...f} />
      </div>
    </div>
  );
}
