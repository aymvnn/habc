// Renders DUKAAT compositions to out/<id>.mp4
//   node render-all.mjs                 → all landscape + portrait compositions
//   node render-all.mjs --set=v1 | --set=v2 → one of the 9:16 phone sets
//   node render-all.mjs --set=landscape → only the 16:9 set
//   node render-all.mjs --ids=V1-01-Tulp-Munt,V2-04-TweeWerelden
import { spawnSync } from "node:child_process";

const LANDSCAPE = ["01-Munt", "02-Bloei", "02-Bloei-Loop", "03-Lijn", "04-Kruising", "05-Signatuur"];
const V2 = ["V2-01-Muntslag", "V2-02-Kinetisch", "V2-03-Goudfolie", "V2-04-TweeWerelden", "V2-05-Zegel"];
const V1 = ["V1-01-Tulp-Munt", "V1-02-Tulp-Bloei", "V1-03-Lijn", "V1-04-Kruising", "V1-05-Signatuur"];

const args = process.argv.slice(2);
const setArg = args.find((a) => a.startsWith("--set="))?.slice(6);
const idsArg = args.find((a) => a.startsWith("--ids="))?.slice(6);
const extra = args
  .filter((a) => !a.startsWith("--set=") && !a.startsWith("--ids="))
  .map((a) => (a.includes(" ") ? JSON.stringify(a) : a));

const ids = idsArg
  ? idsArg.split(",")
  : setArg === "v2"
    ? V2
  : setArg === "v1"
    ? V1
    : setArg === "landscape"
      ? LANDSCAPE
      : [...LANDSCAPE, ...V1, ...V2];

for (const id of ids) {
  console.log(`\n▶ ${id}`);
  const r = spawnSync("npx", ["remotion", "render", id, `out/${id}.mp4`, "--codec=h264", "--crf=17", ...extra], {
    stdio: "inherit",
    shell: true,
  });
  if (r.status !== 0) {
    console.error(`✖ ${id} failed`);
    process.exit(r.status ?? 1);
  }
}
console.log("\n✔ all renders done");
