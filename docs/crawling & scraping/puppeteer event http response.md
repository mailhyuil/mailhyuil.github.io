# puppeteer event http response

```ts
page.on("response", response => {
  if (response.url().endsWith("/posts")) {
    console.log(response.json());
  }
});
```
