# puppeteer confirm 확인 버튼

```ts
page.on("dialog", (dialog) => {
  console.log("dialog");
  dialog.accept();
});
```
