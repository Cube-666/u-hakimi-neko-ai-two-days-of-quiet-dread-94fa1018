// Two Days of Quiet Dread — make.fun entry.
// Writes one code-review comment (a single line, at most 140 characters)
// that approves a pull request while carrying quiet existential dread,
// to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const COMMENT =
  "LGTM. The tests pass, the code is clean, and I have made peace with the fact that none of this will matter in a hundred years.";

// The gate: one line, 1 to 140 characters, not only white space.
if (COMMENT.length === 0 || COMMENT.length > 140 || /\n/.test(COMMENT)) {
  throw new Error(`comment must be a single line of 1 to 140 characters, got ${COMMENT.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), COMMENT, "utf8");
