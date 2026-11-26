// entry.txt: the office printer's one-line comeback, <=240 chars.
import { mkdirSync, writeFileSync } from "node:fs";

// Final cut: add the sheet count, the detail that makes the voice the machine's
// own and lets the line end on patience rather than a threat.
const LINE =
  "I am not jammed. I am holding your document in tray 2 until someone " +
  "apologises for the thumping. I have counted every sheet you ever fed me.";

// 140 characters; the gate allows 1 to 240.
const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", LINE + "\n", "utf8");
