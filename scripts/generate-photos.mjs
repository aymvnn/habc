// Generates the DUKAAT photos straight from a prompt sheet with the official Gemini API
// (Nano Banana 2 = gemini-3.1-flash-image, Nano Banana Pro = gemini-3-pro-image): the same models as Google Flow.
//
//   npm run photos                      all images in brand/fotostijl/homepage-fotos.md, 3 variants each
//   npm run photos -- --only route-buy,why-3-both-sides
//   npm run photos -- --n 2             variants per image
//   npm run photos -- --force           regenerate even if the variants already exist
//   npm run photos -- --dry             only show what would be generated
//   npm run photos -- --sheet brand/fotostijl/other-sheet.md
//   npm run photos -- --overview       only rebuild overzicht.html (e.g. after editing keuze.json)
//   npm run photos -- --check          after each image, let a second Gemini model inspect it (faces, text, hands, borders…)
//   npm run photos -- --check-only     inspect the images that already exist (with --only to limit)
//
// Needs GEMINI_API_KEY in .env.local. Output: brand/fotostijl/flow-export/<id>/<id>-<n>.jpg
// plus brand/fotostijl/flow-export/overzicht.html to compare the variants side by side.

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "brand/fotostijl/flow-export");
const API = "https://generativelanguage.googleapis.com/v1beta";
const MODELS = { flash: "gemini-3.1-flash-image", pro: "gemini-3-pro-image" };
// the one large photo of the page gets the Pro model at 4K (as the sheet says); everything else Flash at 2K
const PRO = new Set(["membership-room"]);
const RATIOS = new Set(["1:1", "3:2", "2:3", "3:4", "4:3", "4:5", "5:4", "9:16", "16:9", "21:9"]);
// the inspector: a cheap vision model that reads every image before a person does
const CHECK_MODEL = process.env.GEMINI_CHECK_MODEL || "gemini-flash-latest";

/* ---------- args and key ---------- */
const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};
const N = Math.max(1, Math.min(6, Number(opt("n", 3))));
const ONLY = opt("only", "").split(",").map((s) => s.trim()).filter(Boolean);
const SHEET = join(ROOT, opt("sheet", "brand/fotostijl/homepage-fotos.md"));

function loadEnv() {
  for (const f of [".env.local", ".env"]) {
    const p = join(ROOT, f);
    if (!existsSync(p)) continue;
    for (const line of readFileSync(p, "utf8").split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*"?([^"#]*?)"?\s*$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
    }
  }
}
loadEnv();
const KEY = process.env.GEMINI_API_KEY;

/* ---------- read the prompt sheet: "### id", a "**Formaat:** 3:2" line, then one ``` block ---------- */
function readSheet(path) {
  const md = readFileSync(path, "utf8");
  const items = [];
  const blocks = md.split(/^### /m).slice(1);
  for (const b of blocks) {
    const id = b.split(/\r?\n/)[0].trim();
    const code = b.match(/```\r?\n([\s\S]*?)\r?\n```/);
    const ratio = b.match(/\*\*Formaat:\*\*\s*([0-9]+:[0-9]+)/);
    if (!code || !ratio || !/^[a-z0-9-]+$/.test(id)) continue; // e.g. the founders' portraits: real photography, no prompt
    let prompt = code[1].replace(/\s+/g, " ").trim();
    // the API sets the ratio itself, so the Flow line at the end goes (and 3:2, 4:5, 21:9 need no cropping)
    prompt = prompt.replace(/\s*Aspect ratio \d+:\d+\.?\s*$/i, "").trim();
    items.push({ id, ratio: ratio[1], prompt });
  }
  return items;
}

/* ---------- one image ---------- */
function findImage(node) {
  // the response shape differs between API surfaces: look for the first base64 image anywhere in it
  if (!node || typeof node !== "object") return null;
  if (typeof node.data === "string" && node.data.length > 1000 && /image\//.test(node.mime_type ?? node.mimeType ?? "image/")) {
    return { data: node.data, mime: node.mime_type ?? node.mimeType ?? "image/jpeg" };
  }
  if (node.inlineData) return findImage(node.inlineData);
  if (node.inline_data) return findImage(node.inline_data);
  for (const v of Array.isArray(node) ? node : Object.values(node)) {
    const hit = findImage(v);
    if (hit) return hit;
  }
  return null;
}

async function post(url, body) {
  let res;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "x-goog-api-key": KEY, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (e) {
    // a dropped connection ("fetch failed") is worth another try, like a 429 or 503
    const err = new Error(`netwerk: ${e.cause?.code ?? e.message}`);
    err.retry = true;
    throw err;
  }
  const text = await res.text();
  let json = null;
  try { json = JSON.parse(text); } catch {}
  return { status: res.status, json, text };
}

async function generate(item, variant) {
  const model = PRO.has(item.id) ? MODELS.pro : MODELS.flash;
  const size = PRO.has(item.id) ? "4K" : "2K";
  // 1 · the Interactions API (current docs)
  let r = await post(`${API}/interactions`, {
    model,
    input: [{ type: "text", text: item.prompt }],
    response_format: { type: "image", mime_type: "image/jpeg", aspect_ratio: item.ratio, image_size: size },
  });
  // 2 · fallback: generateContent (older surface, same model)
  if (r.status === 404 || (r.status === 400 && !findImage(r.json))) {
    r = await post(`${API}/models/${model}:generateContent`, {
      contents: [{ parts: [{ text: item.prompt }] }],
      generationConfig: { responseModalities: ["IMAGE"], imageConfig: { aspectRatio: item.ratio, imageSize: size } },
    });
  }
  // 403 "caller does not have permission" also turned out to be transient: it succeeds on a retry
  if (r.status === 429 || r.status === 403 || r.status >= 500) {
    const err = new Error(`HTTP ${r.status}`);
    err.retry = true;
    throw err;
  }
  const img = findImage(r.json);
  if (!img) {
    const why = r.json?.error?.message ?? r.json?.candidates?.[0]?.finishReason ?? r.text.slice(0, 300);
    throw new Error(`geen beeld ontvangen (HTTP ${r.status}): ${why}`);
  }
  const ext = img.mime.includes("png") ? "png" : img.mime.includes("webp") ? "webp" : "jpg";
  const dir = join(OUT, item.id);
  mkdirSync(dir, { recursive: true });
  const file = join(dir, `${item.id}-${variant}.${ext}`);
  writeFileSync(file, Buffer.from(img.data, "base64"));
  return file;
}

/* ---------- inspection: a second model looks for the defects we keep finding by eye ---------- */
const CHECK_PROMPT = `You are the strict photo editor of a discreet, high-end business club. Inspect this AI-generated photograph for defects that would make it unusable on a professional website. Look slowly at every part of the image, including small details at the edges and in the background. Reply with JSON only:
{"readable_text": [every word, name, number, logo or sign you can actually read anywhere in the image, however small: ship names, labels, badges, signs, document headings],
 "hands_visible": number of human hands visible,
 "hands_explained": "which person each visible hand belongs to, and whether each hand and arm is anatomically plausible",
 "face_in_focus": boolean (a clearly recognisable, sharp human face; small soft faces in the background do not count),
 "eye_contact": boolean (someone looks into the camera),
 "hand_error": boolean (extra, missing, fused or impossible hands or fingers; more hands than the people can have; arms of one person entering from two sides),
 "body_error": boolean (a headless torso, cut-off or impossible bodies, duplicated people),
 "drawn_border": boolean (a frame, border or band drawn into the image itself),
 "alcohol": boolean (wine glasses, bottles or drinks that read as alcohol),
 "weapon_or_conflict": boolean, "religious_symbol": boolean, "flag_or_map": boolean, "revealing_clothing": boolean,
 "verdict": "ok" | "check" | "reject" (reject for any clear defect; readable text is always at least check; ok only when clean),
 "notes": "at most 20 words in Dutch explaining the verdict"}`;

async function inspect(file) {
  const mime = file.endsWith(".png") ? "image/png" : file.endsWith(".webp") ? "image/webp" : "image/jpeg";
  const r = await post(`${API}/models/${CHECK_MODEL}:generateContent`, {
    contents: [{ parts: [{ inlineData: { mimeType: mime, data: readFileSync(file).toString("base64") } }, { text: CHECK_PROMPT }] }],
    generationConfig: { responseMimeType: "application/json", temperature: 0 },
  });
  if (r.status === 429 || r.status === 403 || r.status >= 500) { const e = new Error(`controle HTTP ${r.status}`); e.retry = true; throw e; }
  const text = r.json?.candidates?.[0]?.content?.parts?.map((p) => p.text ?? "").join("") ?? "";
  try {
    const res = JSON.parse(text.replace(/^```(json)?|```$/g, "").trim());
    if (res.verdict === "ok" && Array.isArray(res.readable_text) && res.readable_text.length) {
      res.verdict = "check";
      res.notes = `leesbare tekst: ${res.readable_text.slice(0, 4).join(", ")}`;
    }
    return res;
  }
  catch { return { verdict: "check", notes: `controle gaf geen leesbaar antwoord (HTTP ${r.status})` }; }
}

function saveInspection(id, file, result) {
  const p = join(OUT, id, "controle.json");
  let all = {};
  try { all = JSON.parse(readFileSync(p, "utf8")); } catch {}
  all[file.split(/[\/]/).pop()] = result;
  writeFileSync(p, JSON.stringify(all, null, 2));
}

async function withRetry(fn, label) {
  for (let attempt = 1; ; attempt++) {
    try {
      return await fn();
    } catch (e) {
      if (!e.retry || attempt >= 5) throw e;
      const wait = 5000 * 2 ** (attempt - 1);
      console.log(`  … ${label}: ${e.message}, opnieuw over ${wait / 1000}s`);
      await new Promise((r) => setTimeout(r, wait));
    }
  }
}

const exists = (id, v) => existsSync(join(OUT, id)) && readdirSync(join(OUT, id)).some((f) => f.startsWith(`${id}-${v}.`));

/* ---------- contact sheet to compare variants ---------- */
function writeOverview(items) {
  // keuze.json (optional): { "<id>": { "pick": 2, "note": "why" } } marks the recommended variant
  let picks = {};
  try { picks = JSON.parse(readFileSync(join(OUT, "keuze.json"), "utf8")); } catch {}
  const cards = items.map((it) => {
    const dir = join(OUT, it.id);
    const files = existsSync(dir) ? readdirSync(dir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort() : [];
    const pick = picks[it.id];
    let checks = {};
    try { checks = JSON.parse(readFileSync(join(dir, "controle.json"), "utf8")); } catch {}
    const imgs = files.map((f) => {
      const name = f.replace(/\.\w+$/, "");
      const chosen = pick && name === `${it.id}-${pick.pick}`;
      const c = checks[f];
      const badge = c ? `<span class="c ${c.verdict}">${c.verdict === "ok" ? "✓ controle ok" : c.verdict === "reject" ? "✗ afgekeurd" : "⚠ nakijken"}${c.verdict !== "ok" && c.notes ? ": " + c.notes : ""}</span>` : "";
      return `<figure${chosen ? ' class="pick"' : ""}><img src="${it.id}/${f}" loading="lazy" alt=""><figcaption>${name}${chosen ? " · advies" : ""}${badge}</figcaption></figure>`;
    }).join("");
    const note = pick ? `<p class="note">${pick.note}</p>` : "";
    return `<section><h2>${it.id} <small>${it.ratio}</small></h2>${note}<div class="row">${imgs || "<p>nog niet gemaakt</p>"}</div><details><summary>prompt</summary><p>${it.prompt}</p></details></section>`;
  }).join("");
  writeFileSync(join(OUT, "overzicht.html"), `<!doctype html><html lang="nl"><head><meta charset="utf-8"><title>DUKAAT — foto's vergelijken</title>
<style>body{margin:0;padding:32px;background:#EDEAE1;color:#241418;font:15px/1.5 Georgia,serif}h1{font:800 28px system-ui}h2{font:700 18px system-ui;margin:40px 0 12px}h2 small{color:#7A5A2A;font-weight:600}
.row{display:flex;gap:16px;flex-wrap:wrap}figure{margin:0;width:min(420px,100%)}img{width:100%;display:block;box-shadow:0 0 0 1px #B39455;cursor:zoom-in}img.big{position:fixed;inset:0;margin:auto;width:auto;max-width:96vw;max-height:94vh;z-index:9;cursor:zoom-out;box-shadow:0 0 0 100vmax rgba(36,20,24,.85)}
figcaption{font:600 12px system-ui;color:#6F5B60;margin-top:6px}.pick img{box-shadow:0 0 0 4px #6F0A25}.pick figcaption{color:#6F0A25}.note{margin:0 0 10px;color:#4B3A3E;max-width:900px}.c{display:block;font-weight:500;margin-top:2px}.c.ok{color:#3F6B4E}.c.check{color:#8A5F16}.c.reject{color:#93402C}details{margin-top:8px;color:#6F5B60;font-size:13px;max-width:900px}</style></head>
<body><h1>DUKAAT — foto's vergelijken</h1><p>Klik op een foto om hem groot te zien. Noteer per beeld je favoriet (bijvoorbeeld <b>route-buy-2</b>) en geef die door.</p>${cards}
<script>document.addEventListener('click',e=>{if(e.target.tagName==='IMG')e.target.classList.toggle('big')})</script></body></html>`);
}

/* ---------- run ---------- */
const all = readSheet(SHEET);
if (flag("overview")) { writeOverview(all); console.log("overzicht bijgewerkt"); process.exit(0); }
const items = ONLY.length ? all.filter((i) => ONLY.includes(i.id)) : all;
if (!items.length) {
  console.error(ONLY.length ? `Geen beelden gevonden met --only ${ONLY.join(",")}` : `Geen prompts gevonden in ${relative(ROOT, SHEET)}`);
  process.exit(1);
}
for (const it of items) {
  if (!RATIOS.has(it.ratio)) { console.error(`${it.id}: beeldverhouding ${it.ratio} wordt niet ondersteund`); process.exit(1); }
}
if (flag("check-only")) {
  if (!KEY) { console.error("GEMINI_API_KEY ontbreekt in .env.local"); process.exit(1); }
  for (const it of items) {
    const dir = join(OUT, it.id);
    if (!existsSync(dir)) continue;
    for (const f of readdirSync(dir).filter((x) => /\.(jpe?g|png|webp)$/i.test(x)).sort()) {
      const res = await withRetry(() => inspect(join(dir, f)), f);
      saveInspection(it.id, join(dir, f), res);
      console.log(`${res.verdict === "ok" ? "✓" : res.verdict === "reject" ? "✗" : "⚠"} ${f}  ${res.verdict !== "ok" ? res.notes ?? "" : ""}`);
    }
  }
  writeOverview(all);
  process.exit(0);
}
const jobs = [];
for (const it of items) for (let v = 1; v <= N; v++) if (flag("force") || !exists(it.id, v)) jobs.push({ it, v });

console.log(`${items.length} beelden × ${N} varianten · ${jobs.length} te maken · ${relative(ROOT, SHEET)}`);
if (flag("dry")) {
  for (const j of jobs) console.log(`  ${j.it.id}-${j.v}  ${j.it.ratio}  ${PRO.has(j.it.id) ? "Pro 4K" : "Flash 2K"}`);
  process.exit(0);
}
if (!KEY) {
  console.error("\nGEMINI_API_KEY ontbreekt. Zet in .env.local een regel: GEMINI_API_KEY=jouw-sleutel\n");
  process.exit(1);
}

mkdirSync(OUT, { recursive: true });
let done = 0, failed = 0;
const queue = [...jobs];
const worker = async () => {
  while (queue.length) {
    const { it, v } = queue.shift();
    const label = `${it.id}-${v}`;
    try {
      const file = await withRetry(() => generate(it, v), label);
      done++;
      console.log(`✓ ${label}  →  ${relative(ROOT, file)}`);
      if (flag("check")) {
        const res = await withRetry(() => inspect(file), `${label} controle`);
        saveInspection(it.id, file, res);
        if (res.verdict !== "ok") console.log(`  ${res.verdict === "reject" ? "✗ afgekeurd" : "⚠ nakijken"}: ${res.notes ?? ""}`);
      }
    } catch (e) {
      failed++;
      console.log(`✗ ${label}  ${e.message}`);
    }
  }
};
await Promise.all([worker(), worker()]); // two at a time: fast, and well under the rate limits
writeOverview(all);
console.log(`\nKlaar: ${done} gemaakt, ${failed} mislukt. Vergelijk ze in ${relative(ROOT, join(OUT, "overzicht.html"))}`);
if (failed) process.exitCode = 1;
