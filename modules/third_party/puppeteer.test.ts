import puppeteer, {
  Browser,
} from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

const browser: Browser = await puppeteer.launch({
  headless: false,
  defaultViewport: {
    width: 1200,
    height: 700,
    deviceScaleFactor: 1,
  },
});
const page = await browser.newPage();
await page.goto("https://www.baidu.com");
await browser.close();
