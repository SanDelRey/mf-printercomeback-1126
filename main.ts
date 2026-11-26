// entry.txt: the office printer's one-line comeback, <=240 chars.
import { mkdirSync, writeFileSync } from "node:fs";

// Printer voice: weary, literal, faintly passive-aggressive, and it holds
// the page hostage rather than admitting a jam.
const LINE =
  "I am not jammed. I am holding your document in tray 2, where it will " +
  "wait until you apologise for the thumping.";

// 111 characters; the gate allows 1 to 240.
const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", LINE + "\n", "utf8");
