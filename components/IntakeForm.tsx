"use client";

import { useActionState, useState } from "react";
import { sendIntake, type IntakeState } from "@/app/actions/intake";
import type { Dict, Locale } from "@/content/types";

export function IntakeForm({ locale, contact, routes, initialIntent, mailPending }: {
  locale: Locale;
  contact: Dict["contact"];
  routes: Dict["routes"];
  initialIntent: string;
  mailPending: string;
}) {
  const [state, action, pending] = useActionState<IntakeState, FormData>(sendIntake, { status: "idle" });
  const [intent, setIntent] = useState(initialIntent);
  const investment = intent === "invest" || intent === "opportunity";

  if (state.status === "ok") {
    return <p className="notice ok" role="status">{contact.success}</p>;
  }

  return (
    <form action={action} id="intake" noValidate={false}>
      <input type="hidden" name="locale" value={locale} />
      <div className="hp" aria-hidden="true">
        <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="field">
        <label htmlFor="intent">{contact.intentLabel}</label>
        <select id="intent" name="intent" value={intent} onChange={(e) => setIntent(e.target.value)} required>
          {routes.items.map((r) => <option key={r.intent} value={r.intent}>{r.label}</option>)}
          <option value="apply">{contact.intentApply}</option>
          <option value="other">{contact.intentOther}</option>
        </select>
      </div>

      {investment && <p className="notice">{contact.investNotice}</p>}

      <div className="field two">
        <div><label htmlFor="company">{contact.fields.company}</label><input id="company" name="company" required minLength={2} autoComplete="organization" /></div>
        <div><label htmlFor="name">{contact.fields.name}</label><input id="name" name="name" required minLength={2} autoComplete="name" /></div>
      </div>
      <div className="field two">
        <div><label htmlFor="email">{contact.fields.email}</label><input id="email" name="email" type="email" required autoComplete="email" /></div>
        <div><label htmlFor="country">{contact.fields.country}</label><input id="country" name="country" autoComplete="country-name" /></div>
      </div>
      <div className="field">
        <label htmlFor="message">{contact.fields.message}</label>
        <textarea id="message" name="message" required minLength={10} />
        <span className="hint">{contact.fields.messageHint}</span>
      </div>

      {state.status === "invalid" && <p className="notice err" role="alert">{contact.errorGeneric}</p>}
      {state.status === "error" && <p className="notice err" role="alert">{contact.errorGeneric}</p>}
      {state.status === "unconfigured" && <p className="notice err" role="alert">{contact.errorUnconfigured} <span className="pending-mark">{mailPending}</span></p>}

      <button className="btn" type="submit" disabled={pending}>{pending ? contact.sending : contact.submit} <span className="arrow" aria-hidden="true">→</span></button>
      <p className="form-note">{contact.note}</p>
    </form>
  );
}
