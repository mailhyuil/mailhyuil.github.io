# puppeteer waitForSelector

> selector가 나타날 때까지 기다린다.
>
> > selector로 잡은 요소의 handle을 반환한다.

```ts
await page.goto("https://example.com");
const pHandle = await page.waitForSelector("p");
```
