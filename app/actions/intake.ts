"use server";

export type IntakeState = { status: "idle" | "ok" | "error" | "unconfigured" | "invalid" };

const INTENTS = new Set(["distributor", "supplier", "sell", "buy", "market-entry", "opportunity", "invest", "nominated", "apply", "other"]);

/**
 * Intake behind the eight routers. Sends an e-mail through Resend's REST API when
 * RESEND_API_KEY and INTAKE_TO are set; until the founders' own domain exists it reports
 * "unconfigured" so the page can point to the correspondence address instead.
 * An application (intent "apply") is reviewed like a nomination and guarantees nothing — nothing is stored server-side.
 */
export async function sendIntake(_prev: IntakeState, formData: FormData): Promise<IntakeState> {
  // honeypot: real people never fill this
  if (String(formData.get("website") ?? "").trim() !== "") return { status: "ok" };

  const s = (k: string) => String(formData.get(k) ?? "").trim().slice(0, 2000);
  const intent = s("intent");
  const company = s("company");
  const name = s("name");
  const email = s("email");
  const country = s("country");
  const message = s("message");
  const locale = s("locale") || "en";

  if (!INTENTS.has(intent) || company.length < 2 || name.length < 2 || message.length < 10 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "invalid" };
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.INTAKE_TO;
  const from = process.env.INTAKE_FROM ?? "DUKAAT intake <onboarding@resend.dev>";
  if (!key || !to) return { status: "unconfigured" };

  const text = [
    `Intent: ${intent}`,
    `Language: ${locale}`,
    `Company: ${company}`,
    `Name: ${name}`,
    `E-mail: ${email}`,
    `Country: ${country}`,
    "",
    message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject: `DUKAAT intake · ${intent} · ${company}`, text }),
    });
    return res.ok ? { status: "ok" } : { status: "error" };
  } catch {
    return { status: "error" };
  }
}
