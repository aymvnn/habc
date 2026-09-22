import { Config } from "@remotion/cli/config";
import { existsSync } from "node:fs";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
Config.setEntryPoint("./src/index.ts");

// Use the locally installed Chrome when present; otherwise Remotion downloads
// its own headless shell on first render.
const chrome = "C:/Program Files/Google/Chrome/Application/chrome.exe";
if (existsSync(chrome)) {
  Config.setBrowserExecutable(chrome);
}
