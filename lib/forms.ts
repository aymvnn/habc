import type { Dict, Locale } from "@/content/types";
import type { Field, FormDef } from "@/content/pages/types";

/** a field with its label already in one language (what the form component and the server action work with) */
export type LocalField = Omit<Field, "label" | "options" | "placeholder"> & { label: string; options?: string[]; placeholder?: string };

export const LANGUAGES = ["العربية", "English", "Nederlands"];

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

/** every field of a form in one language: its own fields, then the shared ones */
export function fieldsOf(form: FormDef, locale: Locale, d: Dict): LocalField[] {
  const own: LocalField[] = form.fields.map((f) => ({
    ...f,
    label: f.label[locale],
    options: f.options?.map((o) => o[locale]),
    placeholder: f.placeholder?.[locale],
  }));
  if (form.common !== "request") return own;
  // one upload box per form (owner, 30 Sep 2026): where the form has its own attachment field, the shared one is left out
  const ownAttachment = form.fields.some((f) => f.type === "file" && /^(files|attachments?)$/.test(f.name));
  const shared = commonFields(d.forms.common).filter((f) => !(ownAttachment && f.name === "attachment"));
  return [...own, ...shared];
}

export const MAX_ATTACHMENT = 5 * 1024 * 1024;
