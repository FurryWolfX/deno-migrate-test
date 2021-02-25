import moment from "https://deno.land/x/momentjs@2.29.1-deno/mod.ts";
import { delay } from "../std/mod.ts";

const now = moment();
await delay(1);
const now2 = moment();
console.log(
  `${now} is before ${now2} - is that true? --> ${now.isBefore(now2)} `,
);
