const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

// A fixed literal keeps the UTF-8 entry identical on every run.
const entry =
  "The tide slips away from two smooth stones. In the pool between them, a star appears, then another. The water is still warm from the sun. All that distance rests here, without a sound.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), `${entry}\n`, "utf8");
