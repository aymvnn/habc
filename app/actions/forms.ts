"use server";

import { pageDefs } from "@/content/pages";
import { EMAIL as CLUB_EMAIL } from "@/content/contact-details";
import type { FormDef } from "@/content/pages/types";
import { getDict, isLocale } from "@/lib/i18n";
import { MAX_ATTACHMENT, fieldsOf, type LocalField } from "@/lib/forms";

export type FormState = { status: "idle" | "ok" | "invalid" | "error" };

function findForm(id: string): FormDef | null {
  for (const def of Object.values(pageDefs)) {
    for (const b of def.blocks) {
      if (b.kind === "form" && b.form.id === id) return b.form;
      if (b.kind === "formset") {
        const f = b.forms.find((x) => x.id === id);
        if (f) return f;
      }
    }
  }
  return null;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Every form on the site ends here. The fields are checked against the form's own definition (content/pages),
 * then sent by e-mail through Resend's REST API when RESEND_API_KEY is set (INTAKE_TO defaults to the club's address,
 * content/contact-details.ts). Nothing is stored
 * on the site. Without the configuration the visitor sees the source's "could not be sent" message.
 */
export async function sendForm(_prev: FormState, fd: FormData): Promise<FormState> {
  // honeypot: real people never fill this
  if (String(fd.get("website") ?? "").trim() !== "") return { status: "ok" };

  const loc = String(fd.get("locale") ?? "en");
  const locale = isLocale(loc) ? loc : "en";
  const d = getDict(locale);
  const id = String(fd.get("formId") ?? "");

  let fields: LocalField[];
  let title: string;
  let consent = true;
  let confirmation = d.forms.success;
  if (id === "newsletter") {
    fields = [{ name: "email", label: d.footer.newsletter.field, type: "email", required: true }];
    title = d.footer.newsletter.title;
    consent = false;
  } else {
    const form = findForm(id);
    if (!form) return { status: "invalid" };
    fields = fieldsOf(form, locale, d);
    title = (form.title ?? form.choice)?.[locale] ?? form.id;
    if (form.success) confirmation = form.success[locale];
  }

  const lines: string[] = [`Form: ${id} — ${title}`, `Site language: ${locale}`];
  // UX-09: the button the visitor pressed before the form, and the page it was on (components/Arrival.tsx)
  const ref = String(fd.get("ref") ?? "").trim().slice(0, 300);
  if (ref) lines.push(`Source: ${ref}`);
  lines.push("");
  const head = lines.length; // what follows is the visitor's own request (UX-10: their copy starts here)
  const attachments: { filename: string; content: string }[] = [];
  let size = 0;
  let replyTo = "";

  for (const f of fields) {
    if (f.type === "file") {
      const file = fd.get(f.name);
      if (file instanceof File && file.size > 0) {
        size += file.size;
        if (size > MAX_ATTACHMENT) return { status: "invalid" };
        attachments.push({ filename: file.name.slice(0, 120), content: Buffer.from(await file.arrayBuffer()).toString("base64") });
        lines.push(`${f.label}: ${file.name}`);
      }
      continue;
    }
    const v = String(fd.get(f.name) ?? "").trim().slice(0, 4000);
    if (f.required && !v) return { status: "invalid" };
    if (f.type === "email" && v) {
      if (!EMAIL.test(v)) return { status: "invalid" };
      replyTo ||= v;
    }
    if (f.type === "select" && v && f.values && !f.values.includes(v)) return { status: "invalid" };
    if (v) lines.push(`${f.label}: ${v}`);
  }

  if (consent) {
    if (fd.get("privacy") !== "on") return { status: "invalid" };
    lines.push("", `${d.forms.privacy}: yes`, `${d.forms.optIn}: ${fd.get("optin") === "on" ? "yes" : "no"}`);
  }
  if (fd.get("option") !== null) lines.push(`Option: ${fd.get("option") === "on" ? "yes" : "no"}`);

  const key = process.env.RESEND_API_KEY;
  // the club's own address and a sender on its domain (the domain has to be verified in Resend); both can be overridden
  const to = process.env.INTAKE_TO || CLUB_EMAIL;
  const from = process.env.INTAKE_FROM || `DUKAAT <intake@${CLUB_EMAIL.split("@")[1]}>`;
  if (!key) return { status: "error" };

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        ...(replyTo ? { reply_to: replyTo } : {}),
        subject: `DUKAAT · ${title}`,
        text: lines.join("\n"),
        ...(attachments.length ? { attachments } : {}),
      }),
    });
    if (!res.ok) return { status: "error" };
  } catch {
    return { status: "error" };
  }

  /* UX-10 (owner, 4 Oct 2026): the visitor receives a copy of the request in the page's language — the form's own
     confirmation (the source's words), then what they sent. Replies go to DUKAAT. Attachments are named, not resent.
     It never decides the outcome: the request has already reached DUKAAT. INTAKE_COPY=off switches it off. */
  if (replyTo && id !== "newsletter" && process.env.INTAKE_COPY !== "off") {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to: [replyTo],
          reply_to: to,
          subject: `DUKAAT · ${title}`,
          text: [confirmation, "", `— ${d.ux.copyHeading} —`, "", ...lines.slice(head)].join("\n"),
        }),
      });
    } catch {}
  }
  return { status: "ok" };
}
