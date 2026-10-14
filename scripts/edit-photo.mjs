// Fixes one small defect in a generated photo with the same Gemini model (an edit, not a new picture):
// a logo on a laptop, a short sleeve, a stray word on a screen.
//
//   node scripts/edit-photo.mjs <in.jpg> <out.jpg> "instruction" [--ratio 21:9] [--size 2K] [--model pro|flash] [--ref portrait.jpg]
//
// --ref adds a reference image (e.g. a cast portrait) after the photo: the instruction can then say "the person in the reference portrait".
//
// The instruction should name only the change and ask to keep everything else identical.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
for (const f of [".env.local", ".env"]) {
  const p = join(ROOT, f);
  if (!existsSync(p)) continue;
  for (const line of readFileSync(p, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*"?([^"#]*?)"?\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
}
const KEY = process.env.GEMINI_API_KEY;
const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};
const [input, output, instruction] = args.filter((a, i) => !a.startsWith("--") && !(i > 0 && args[i - 1].startsWith("--")));
if (!KEY || !input || !output || !instruction) {
  console.error('gebruik: node scripts/edit-photo.mjs <in.jpg> <out.jpg> "instructie" [--ratio 21:9] [--size 2K]');
  process.exit(1);
}
const model = opt("model", "pro") === "flash" ? "gemini-3.1-flash-image" : "gemini-3-pro-image";
const REF = opt("ref", "");
const text = `${REF ? "Image 1 is the photograph to edit; image 2 is a reference portrait, used only for that person's identity. " : ""}Edit this photograph. ${instruction} Keep everything else exactly as it is: the same people, faces, poses, clothing, composition, framing, light and colour grade. The result is the same photograph with only that change.`;

for (let attempt = 1; attempt <= 4; attempt++) {
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
    method: "POST",
    headers: { "x-goog-api-key": KEY, "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [
        { inlineData: { mimeType: "image/jpeg", data: readFileSync(input).toString("base64") } },
        ...(REF ? [{ inlineData: { mimeType: REF.endsWith(".png") ? "image/png" : "image/jpeg", data: readFileSync(REF).toString("base64") } }] : []),
        { text },
      ] }],
      generationConfig: { responseModalities: ["IMAGE"], imageConfig: { aspectRatio: opt("ratio", "21:9"), imageSize: opt("size", "2K") } },
    }),
  });
  const json = await res.json().catch(() => null);
  const part = json?.candidates?.[0]?.content?.parts?.find((p) => p.inlineData?.data);
  if (part) {
    writeFileSync(output, Buffer.from(part.inlineData.data, "base64"));
    console.log(`✓ ${output}`);
    process.exit(0);
  }
  const why = json?.error?.message ?? json?.candidates?.[0]?.finishReason ?? `HTTP ${res.status}`;
  if (res.status === 402 || /spending cap|prepayment|billing/i.test(why)) { console.error(`✗ betaalreden: ${why}`); process.exit(2); }
  if (!(res.status === 429 || res.status === 403 || res.status >= 500)) { console.error(`✗ ${why}`); process.exit(1); }
  console.log(`  … ${why}, opnieuw over ${5 * attempt}s`);
  await new Promise((r) => setTimeout(r, 5000 * attempt));
}
console.error("✗ geen beeld na vier pogingen");
process.exit(1);
