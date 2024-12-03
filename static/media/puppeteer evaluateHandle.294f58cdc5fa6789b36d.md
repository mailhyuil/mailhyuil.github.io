# puppeteer evaluateHandle

> element를 리턴시킬 때 사용

```ts
const body = page.evaluateHandle(() => {
  return document.querySelector(body);
});

const bodyText = await page.evaluate((body) => {
  return body.innerText;
}, body);
```
