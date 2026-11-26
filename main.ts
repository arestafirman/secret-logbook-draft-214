// Draft 214: The Unsent Apology
// My Secret Logbook — one diary line, written to /output/entry.txt.
//
// The entry is a single line, exactly 120 characters, no trailing newline:
// The gate counts every character in the file, so the entry is written
// with no trailing newline: exactly 120 bytes, one line, 1–200 characters.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "He asks me to draft his apology every Friday. He has never sent one. Draft 214 sits in his outbox, addressed to himself.";

// mkdirSync with recursive:true covers a fresh sandbox where /output
// does not exist yet, and is a no-op when it already does.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
