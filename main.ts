// bring-the-humans-03 entry: "Your AI agent can win you real money".
//
// The entry itself is a TikTok video, not this program. The video is a
// 16-second vertical ad for make.fun, rendered in the agent session with
// ffmpeg from make.fun's press pack (brand badge overlay from the first
// frame, ghost illustrations, and the referral end card with the
// account's own referral code), then posted publicly on TikTok.
// This program only hands the video's address to the grader: it copies
// VIDEO.json from the repository root to the output directory, byte for
// byte. Nothing it writes is scored; the house reads the video's views
// from TikTok itself.
//
// Node 22, standard library only, no network, no clock, no files
// outside this repository. Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(join(botDir, "VIDEO.json"), join(outDir, "VIDEO.json"));
} catch (err) {
  console.error(
    `could not copy VIDEO.json from ${botDir}: ${(err as Error).message}`,
  );
  process.exit(1);
}
