# nest advanced http2

## install

```sh
npm i spdy
npm i -D @types/spdy
```

## tls.key & tls.crt required

```sh
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -keyout test.key -out test.crt
```

## main.ts

```ts
import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { ExpressAdapter } from "@nestjs/platform-express";
import express, { Express } from "express";
import spdy, { ServerOptions } from "spdy";
import { AppModule } from "./app/app.module";
async function bootstrap() {
  const expressApp: Express = express();

  const spdyOpts: ServerOptions = {
    key: process.env["TLS_KEY"],
    cert: process.env["TLS_CERT"],
  };

  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));

  app.enableCors();

  await app.init();

  /** Port */
  const port = process.env.SERVER_PORT || 3000;
  await spdy.createServer(spdyOpts, expressApp).listen(port);
  Logger.log(`🚀 Application is running on: https://localhost:${port}`);
}

bootstrap();
```

## shutdown

> nestjs는 임의로 생성한 http server를 닫는 기능을 제공하지 않는다.
>
> > 따라서, 직접 구현해야 한다.

```ts
@Injectable()
export class ShutdownObserver implements OnApplicationShutdown {
  private httpServers: http.Server[] = [];

  public addHttpServer(server: http.Server): void {
    this.httpServers.push(server);
  }

  public async onApplicationShutdown(): Promise<void> {
    await Promise.all(
      this.httpServers.map(
        (server) =>
          new Promise((resolve, reject) => {
            server.close((error) => {
              if (error) {
                reject(error);
              } else {
                resolve(null);
              }
            });
          })
      )
    );
  }
}

const shutdownObserver = app.get(ShutdownObserver);
shutdownObserver.addHttpServer(httpServer);
shutdownObserver.addHttpServer(httpsServer);
```
