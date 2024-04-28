# nest advanced http2

## install

```sh
npm i spdy
npm i -D @types/spdy
```

## generate-cert

```sh
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -keyout test.key -out test.crt
```

## main.ts

```ts
// main.ts
async function bootstrap() {
  const expressApp: Express = express();

  const spdyOpts: ServerOptions = {
    key: fs.readFileSync("./test.key"),
    cert: fs.readFileSync("./test.crt"),
  };

  const server: Server = spdy.createServer(spdyOpts, expressApp);

  const app: NestApplication = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));

  await app.init();
  await server.listen(3000);
}

bootstrap();
```
