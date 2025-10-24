# nest advanced http2 - spdy

> client와 nginx가 http2를 사용하고 있다면 nginx와 nestjs 사이에도 http2를 사용해야 멀티플렉싱의 이점을 누릴 수 있다.

## install

```sh
npm i spdy
npm i -D @types/spdy
```

## tls.key & tls.crt required

```sh
openssl req -x509 -newkey rsa:4096 -nodes -sha256 -keyout private.pem -out crt.pem
```

## main.ts

```ts
import express, { Express } from "express";
import { ServerOptions, createServer } from "spdy";

async function bootstrap() {
  const expressApp: Express = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));

  /** Config */
  /*   ....  */
  app.enableCors();

  /** Init */
  await app.init();
  /** Create HTTP Server */
  const spdyOpts: ServerOptions = {
    key: fs.readFileSync(process.env["PRIVATE_KEY_PATH"], "utf8"),
    cert: fs.readFileSync(process.env["CERTIFICATE_PATH"], "utf8"),
  };
  const http2Server = createServer(spdyOpts, expressApp);
  /** Port */
  const port = process.env.SERVER_PORT || 3000;
  /** Server Listen */
  http2Server.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
  /** Shutdown */
  const shutdownProvider = app.get(HttpShutdownProvider);
  shutdownProvider.addHttpServer(http2Server);
}

bootstrap();
```

## http-shutdown.provider.ts

> nestjs는 임의로 생성한 http server를 닫는 기능을 제공하지 않기 때문에 OnApplicationShutdown을 사용하여 직접 구현해야 한다.
>
> > 생성 후 App Module의 Provider에 등록

```ts
@Injectable()
export class HttpShutdownProvider implements OnApplicationShutdown {
  private httpServers: http.Server[] = [];

  public addHttpServer(server: http.Server): void {
    this.httpServers.push(server);
  }

  public async onApplicationShutdown(): Promise<void> {
    await Promise.all(
      this.httpServers.map(
        server =>
          new Promise((resolve, reject) => {
            server.close(error => {
              if (error) {
                reject(error);
              } else {
                resolve(null);
              }
            });
          }),
      ),
    );
  }
}

const shutdownObserver = app.get(ShutdownObserver);
shutdownObserver.addHttpServer(httpServer);
shutdownObserver.addHttpServer(httpsServer);
```
