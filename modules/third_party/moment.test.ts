import { moment } from "https://deno.land/x/deno_ts_moment@0.0.3/mod.ts";
import { delay } from "../std/mod.ts";

const now = moment();
await delay(1);
const now2 = moment();
console.log(
  `${now} is before ${now2} - is that true? --> ${now.isBefore(now2)} `,
);
