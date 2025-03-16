# puppeteer waitForFunction

> function 내의 조건이 참이 될 때까지 기다린다.

```ts
await page.goto("https://example.com");

await page.waitForFunction(() => {
  const p = document.querySelector("p.target-class"); // 특정 p 태그 선택
  return p && p.innerText.trim().length > 0; // 텍스트가 비어있지 않을 때까지 기다림
});
```
