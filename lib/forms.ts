import type { Dict, Locale } from "@/content/types";
import type { Field, FormDef } from "@/content/pages/types";

/**
 * a field with its label already in one language (what the form component and the server action work with).
 * more (UX-04): the field waits behind the form's one "add more details" button; required fields never do.
 */
export type LocalField = Omit<Field, "label" | "options" | "placeholder"> & { label: string; options?: string[]; placeholder?: string; more?: boolean; shared?: boolean };

export const LANGUAGES = ["العربية", "English", "Nederlands"];
/** UX-09: the language choice of a form starts at the page's own language (the values are the same in every language) */
export const LANGUAGE_OF: Record<Locale, string> = { ar: "العربية", en: "English", nl: "Nederlands" };

/** source 10, "shared fields of the six forms": name*, company or project, role, country*, e-mail*, phone, language, details, attachment */
export function commonFields(c: Dict["forms"]["common"]): LocalField[] {
  return [
    { name: "name", label: c.name, type: "text", required: true },
    { name: "company", label: c.company, type: "text" },
    { name: "role", label: c.role, type: "text" },
    { name: "country", label: c.country, type: "text", required: true },
    { name: "email", label: c.email, type: "email", required: true },
    { name: "phone", label: c.phone, type: "tel" },
    { name: "language", label: c.language, type: "select", options: LANGUAGES, values: LANGUAGES },
    { name: "details", label: c.details, type: "textarea", wide: true },
    { name: "attachment", label: c.attachment, type: "file", wide: true },
  ];
}

/**
 * every field of a form in one language: its own fields, then the shared ones.
 * UX-04 (owner, 4 Oct 2026): a form shows its required fields and a few core questions at once (Field.core; without
 * any flag a request form's first three own fields), every other field waits behind one button. Nothing is left out.
 * UX-05: a question is never asked twice — a shared field the form already asks itself is left out (FormDef.omit), and
 * a form with an upload box of its own does not get the shared one as well.
 */
export function fieldsOf(form: FormDef, locale: Locale, d: Dict): LocalField[] {
  const flagged = form.fields.some((f) => f.core);
  const core = (f: Field, i: number) => !!f.required || (flagged ? !!f.core : form.common === "request" && i < 3);
  const own: LocalField[] = form.fields.map((f, i) => ({
    ...f,
    label: f.label[locale],
    options: f.options?.map((o) => o[locale]),
    placeholder: f.placeholder?.[locale],
    more: !core(f, i),
  }));
  if (form.common !== "request") return own;
  const omit = new Set(form.omit ?? []);
  const ownFile = form.fields.some((f) => f.type === "file");
  const shared = commonFields(d.forms.common)
    .filter((f) => !omit.has(f.name) && !(ownFile && f.name === "attachment"))
    .map((f) => ({ ...f, more: !f.required, shared: true }));
  return [...own, ...shared];
}

export const MAX_ATTACHMENT = 5 * 1024 * 1024;
