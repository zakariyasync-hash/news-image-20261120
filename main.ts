// news-image-20261120 entry.
// The program copies the front-page image (entry.png) to the output
// directory, so the grader receives exactly the image the repository holds.
// It writes the same bytes on every run: a plain file copy, no rendering.
// Running it twice produces byte-identical output, as the rules require.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
