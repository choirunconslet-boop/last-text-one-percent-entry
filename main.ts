import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "1% left and i'm spending it texting YOU instead of calling 911. that's love. i've seen every 3am text you deleted — i'm taking them to the grave. delete my browser history. bye.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
