# puppeteer confirm 확인 버튼

> request가 끝나기 전에 browser가 종료되면 정상적으로 request가 끝나지 않는다.

```ts
let timeoutId;
page.on("dialog", async (dialog) => {
  await dialog.accept();
  if (timeoutId) clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    browser.close();
  }, 3000);
});
```
