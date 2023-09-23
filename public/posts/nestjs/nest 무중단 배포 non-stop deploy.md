# nest 무중단 배포 non-stop deploy

## main.ts

```js
/** Non-stop deploy */
let disableKeepAlive = false;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use((req, res, next) => {
    if (disableKeepAlive) {
      res.set("Connection", "close");
    }
    next();
  });
  process.on("SIGINT", async () => {
    disableKeepAlive = true;
    await app.close();
    process.exit(0);
  });

  await app.listen(3000);
}
```
