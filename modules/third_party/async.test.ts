// 并发控制
import { delay } from "../std/mod.ts";
import { Semaphore } from "https://deno.land/x/async@v2.0.2/mod.ts";

const sem = new Semaphore(3);
let nWorkers = 0;

const worker = async () => {
  await sem.lock(async () => {
    nWorkers += 1;
    console.log(`${nWorkers} workers are working...`);
    await delay(100);
    console.log(`Complete`);
    nWorkers -= 1;
  });
};

const workers = [
  worker(),
  worker(),
  worker(),
  worker(),
  worker(),
  worker(),
  worker(),
  worker(),
  worker(),
  worker(),
];
await Promise.all(workers);
