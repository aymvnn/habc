"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { sendForm, type FormState } from "@/app/actions/forms";
import type { LocalField } from "@/lib/forms";
import type { Locale } from "@/content/types";

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
};

type El = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

/**
 * One form of the source: its fields as the source lists them, the shared fields where the source asks for them,
 * and the source's own messages for required fields, sending, failure and confirmation (10, 21).
 */
export function Form({ id, locale, fields, submit, success, successNote, option, consent = true, msgs }: FormProps) {
  const [state, action, pending] = useActionState<FormState, FormData>(sendForm, { status: "idle" });
  const ref = useRef<HTMLFormElement>(null);
  const [tooBig, setTooBig] = useState(false);

  // a link elsewhere on the site can preselect a choice: contact?subject=membership
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    for (const f of fields) {
      if (f.type !== "select" || !f.values) continue;
      const v = q.get(f.name);
      const el = ref.current?.elements.namedItem(f.name);
      if (v && f.values.includes(v) && el instanceof HTMLSelectElement) el.value = v;
    }
  }, [fields]);

  if (state.status === "ok") {
    return (
      <div className="fm-ok" role="status">
        <p>{success}</p>
        {successNote && <p className="fm-ok-note">{successNote}</p>}
      </div>
    );
  }

  const check = (e: React.FormEvent<El>) => {
    const el = e.currentTarget;
    el.setCustomValidity(el.validity.valueMissing ? msgs.required : el.validity.typeMismatch ? msgs.invalidEmail : "");
  };
  const clear = (e: React.FormEvent<El>) => e.currentTarget.setCustomValidity("");
  const fid = (name: string) => `${id}-${name}`;

  const input = (f: LocalField) => {
    const common = { id: fid(f.name), name: f.name, required: f.required, onInvalid: check, onInput: clear };
    switch (f.type) {
      case "textarea":
        return <textarea {...common} placeholder={f.placeholder} />;
      case "select":
        return (
          <select {...common} defaultValue="">
            <option value="" disabled={f.required}>{msgs.choose}</option>
            {(f.options ?? []).map((o, i) => (
              <option key={i} value={f.values?.[i] ?? o}>{o}</option>
            ))}
          </select>
        );
      case "file":
        return (
          <input
            {...common}
            type="file"
            onChange={(e) => setTooBig((e.currentTarget.files?.[0]?.size ?? 0) > 5 * 1024 * 1024)}
          />
        );
      default:
        return (
          <input
            {...common}
            type={f.type ?? "text"}
            placeholder={f.placeholder}
            autoComplete={f.name === "email" ? "email" : f.name === "name" ? "name" : f.name === "phone" ? "tel" : f.name === "company" ? "organization" : undefined}
          />
        );
    }
  };

  const hasFile = fields.some((f) => f.type === "file");

  return (
    <form ref={ref} action={action} className="fm" id={`${id}-form`}>
      <input type="hidden" name="formId" value={id} />
      <input type="hidden" name="locale" value={locale} />
      <div className="hp" aria-hidden="true">
        <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="fm-grid">
        {fields.map((f) => (
          <div className={`field${f.wide || f.type === "textarea" ? " wide" : ""}`} key={f.name}>
            <label htmlFor={fid(f.name)}>
              {f.label}
              {f.required && <span className="req" aria-hidden="true">*</span>}
            </label>
            {input(f)}
            {f.type === "file" && <span className="hint">{msgs.attachmentHint}</span>}
          </div>
        ))}
      </div>

      {hasFile && <p className="fm-note">{msgs.note}</p>}

      {option && (
        <label className="fm-check">
          <input type="checkbox" name="option" />
          <span>{option}</span>
        </label>
      )}
      {consent && (
        <>
          <label className="fm-check">
            <input type="checkbox" name="privacy" required onInvalid={check} onInput={clear} />
            <span>{msgs.privacy}</span>
          </label>
          <label className="fm-check">
            <input type="checkbox" name="optin" />
            <span>{msgs.optIn}</span>
          </label>
        </>
      )}

      {(state.status === "error" || state.status === "invalid" || tooBig) && (
        <p className="notice err" role="alert">{msgs.failed}</p>
      )}

      <button className="btn" type="submit" disabled={pending}>
        {pending ? msgs.sending : submit} <span className="arrow" aria-hidden="true">→</span>
      </button>
    </form>
  );
}

/** the six "What are you looking for?" forms behind one choice; #supplier etc. opens one directly */
export function FormSet({ id, forms }: { id: string; forms: (FormProps & { choice: string; title?: string; intro?: string })[] }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const pick = () => {
      const h = window.location.hash.slice(1);
      const i = forms.findIndex((f) => f.id === h);
      if (i >= 0) setActive(i);
    };
    pick();
    window.addEventListener("hashchange", pick);
    return () => window.removeEventListener("hashchange", pick);
  }, [forms]);
  const f = forms[active];
  return (
    <div className="fs" id={id}>
      <div className="fs-choices" role="tablist">
        {forms.map((x, i) => (
          <button
            key={x.id}
            id={x.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls={`${id}-panel`}
            className={i === active ? "on" : undefined}
            onClick={() => {
              setActive(i);
              history.replaceState(null, "", `#${x.id}`);
            }}
          >
            {x.choice}
          </button>
        ))}
      </div>
      <div className="fs-panel" id={`${id}-panel`} role="tabpanel" aria-labelledby={f.id}>
        {f.title && <h3 className="fs-title">{f.title}</h3>}
        {f.intro && <p className="fs-intro">{f.intro}</p>}
        <Form key={f.id} {...f} />
      </div>
    </div>
  );
}
