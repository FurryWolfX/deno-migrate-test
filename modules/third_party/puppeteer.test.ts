import puppeteer, { Browser } from "https://deno.land/x/puppeteer@5.5.1/mod.ts";

const browser: Browser = await puppeteer.launch({
  executablePath:
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: false,
  defaultViewport: {
    width: 1200,
    height: 700,
    deviceScaleFactor: 1,
  },
});
const page = await browser.newPage();
await page.goto("https://example.com");
await browser.close();
