# puppeteer navigation

> page.evaluate 내에서는 안됨

```js
await page.goto("https://example.com", {
  waitUntil: "domcontentloaded",
});
```
