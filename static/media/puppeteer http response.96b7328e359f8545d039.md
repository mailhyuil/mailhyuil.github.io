# puppeteer http response

```ts
const browser = await puppeteer.launch({
  headless: true,
  defaultViewport: null,
});

const page = await browser.newPage();

page.on("response", (response) => {
  if (response.url().endsWith("/posts")) {
    console.log(response.json());
  }
});
```
