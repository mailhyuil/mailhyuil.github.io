# angular SSR

> server에서 데이터를 미리 받아서 html을 완성해서 브라우저에 보내주는 방식
>
> > 사용자가 바로 완성된 뷰를 볼 수 있지만 데이터 받는 시간이 오래걸리게 되면 사용자는 빈 화면을 보게된다.
> >
> > > 따라서 미리 데이터를 prefetching 해두거나
> > >
> > > > 사이트에 처음 접속하는 home 화면이라면 최소한의 데이터만 받아서 데이터 받는 시간을 줄여야한다.
> > > >
> > > > > 반드시 절대 패스 값을 사용해야한다.
> > > > >
> > > > > > ssr을 설정한 후 http request를 보내면 서버에서 렌더링된 html을 받아온다.

## configs

```ts
// main.ts
const appConfig = { providers: [provideClientHydration(), provideRouter(appRoutes)] };

// main.server.ts
const serverConfig = { providers: [provideClientHydration()] };
export const config = mergeApplicationConfig(appConfig, serverConfig);
```

## server.ts

> html을 렌더링해서 보내주는 서버

```ts
import { APP_BASE_HREF } from "@angular/common";
import { CommonEngine } from "@angular/ssr";
import express from "express";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import bootstrap from "./src/main.server";

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, "../browser");
  const indexHtml = join(serverDistFolder, "index.server.html");

  const commonEngine = new CommonEngine();

  server.set("view engine", "html");
  server.set("views", browserDistFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get(
    "*.*",
    express.static(browserDistFolder, {
      maxAge: "1y",
    })
  );

  // All regular routes use the Angular engine
  server.get("*", (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env["PORT"] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
```

## 브라우저 API 사용

> window, document, location, navigator

```ts
constructor(@Inject(DOCUMENT) private document: Document) {}
```
