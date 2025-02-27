# playwright

## install

```sh
npm i playwright
```

## usage

```ts
import { chromium } from "playwright";

const getQuotes = async () => {
  // Start a Playwright session with:
  // - headless : 브라우저 여부
  // - defaultViewport : 웹페이지 width / height 크기 null === full screen
  const browser = await chromium.launch({
    headless: false,
    defaultViewport: null,
  });

  // Open a new page
  const page = await browser.newPage();

  // On this new page:
  // - open the "http://quotes.toscrape.com/" website
  // - wait until the dom content is loaded (HTML is ready)
  await page.goto("http://quotes.toscrape.com/", {
    waitUntil: "domcontentloaded",
  });

  await page.click(".pager > .next > a");

  // Get page data
  const quotes = page.locator(".quote").map(quote => {
    const text = quote.locator(".text").innerText();
    const author = quote.locator(".author").innerText();
    return { text, author };
  });

  // Display the quotes
  console.log(quotes);

  // Close the browser
  await browser.close();
};
```
