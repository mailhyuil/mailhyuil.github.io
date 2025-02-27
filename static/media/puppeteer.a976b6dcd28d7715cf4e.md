# puppeteer

> puppeteer보다 playwright가 더 지원하는 기능이 많다
>
> > puppeteer는 더 이상 업데이트 되지 않는다

## install

```sh
npm i puppeteer
```

## usage

```js
import puppeteer from "puppeteer";

const getQuotes = async () => {
  // Start a Puppeteer session with:
  // - headless : 브라우저 여부
  // - defaultViewport : 웹페이지 width / height 크기 null === full screen
  const browser = await puppeteer.launch({
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
  const quotes = await page.evaluate(() => {
    const quoteList = document.querySelectorAll(".quote");
    return Array.from(quoteList).map(quote => {
      const text = quote.querySelector(".text").innerText;
      const author = quote.querySelector(".author").innerText;
      return { text, author };
    });
  });

  // Display the quotes
  console.log(quotes);

  // Close the browser
  await browser.close();
};

// Start the scraping
getQuotes();
```
