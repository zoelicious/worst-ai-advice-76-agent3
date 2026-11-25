import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const LINE = "As an AI, I recommend quitting your job by reply-all to the whole company, so everyone can watch you leave in style.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = resolve(outDir, "entry.txt");

// The gate only accepts 1-140 characters: refuse to write anything
// invalid instead of shipping a line the scorer would score 0.
if (LINE.length < 1 || LINE.length > 140) {
  console.error("entry line must be 1-140 characters, got " + LINE.length);
  process.exit(1);
}

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, LINE + "\n", "utf8");
} catch (error) {
  console.error("failed to write entry:", error);
  process.exit(1);
}
