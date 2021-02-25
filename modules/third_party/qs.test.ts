import { qs } from "https://deno.land/x/deno_qs@0.0.1/mod.ts";

const obj = qs.parse("a=c");
console.log(obj);
