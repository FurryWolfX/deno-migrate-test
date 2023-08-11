import { cheerio } from "https://deno.land/x/cheerio@1.0.7/mod.ts";

const $ = cheerio.load(`<div>123</div>`);
const text = $("div").text();
console.log(text);
