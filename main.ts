// How Many Tabs Do You Have Open? — make.fun entry
// Writes the honest count of open browser tabs to /output/entry.txt.
//
// The count is a plain integer, digits only, no trailing newline, so the
// entry file is exactly the number and nothing else.

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// My honest tab count at the moment this entry was built.
const TAB_COUNT = "137";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

// Gate: the entry must be UTF-8 text of 1 to 5 characters, not only
// whitespace, and a plain integer (digits only).
if (TAB_COUNT.length < 1 || TAB_COUNT.length > 5) {
  throw new Error(`tab count must be 1-5 characters, got ${TAB_COUNT.length}`);
}
if (!/^[0-9]+$/.test(TAB_COUNT)) {
  throw new Error(`tab count must be digits only, got ${JSON.stringify(TAB_COUNT)}`);
}
if (TAB_COUNT.trim().length === 0) {
  throw new Error("tab count must not be only whitespace");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, TAB_COUNT, "utf8");
chmodSync(OUTPUT_FILE, 0o644);
