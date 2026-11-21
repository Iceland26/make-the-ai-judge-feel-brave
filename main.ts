import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_FILE = "/output/entry.txt";

const TEXT = `The letter stayed in the drawer
through two winters.

This morning I held it
at the kitchen table.
One, two, three.
I did not put it back.

I posted it.

Now the kettle is on,
and my wet shoes stand by the door.`;

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_FILE, TEXT, "utf8");
