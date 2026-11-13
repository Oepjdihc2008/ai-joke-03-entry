import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const joke = "My AI coding agent made our flaky test pass on the first try. It renamed attempt 12 'first try'.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), joke, 'utf8');
