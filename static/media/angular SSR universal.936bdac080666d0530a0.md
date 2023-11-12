# angular SSR

> 브라우저 명령어는 Location, DOCUMENT.. 같은 angular API를 사용해야함
>
> > 반드시 절대 패스 값을 사용해야한다.
> >
> > > ssr을 설정한 후 http request를 보내면 서버에서 렌더링된 html을 받아온다.

## install

```sh
ng add @nguniversal/express-engine
```

## import provider (standalone)

```ts
providers: [provideClientHydration()];
```

## server.ts

```ts
import express from "express";
import type { Request, Response } from "express";
import * as fs from "fs";
import { renderApplication } from "@angular/platform-server";

const app = express();

app.engine("html", async (path, options, callback) => {
  const document = fs.readFileSync(path, "utf-8");
  const { req } = { ...options } as { req: Request; res: Response };

  // Bootstrap and render a Standalone Component
  const html = await renderApplication(AppComponent, {
    appId: "server-app",
    document: document,
    url: `${req.baseUrl}${req.url}`,
    providers: [provideRouter(routes)],
  });
  callback(null, html);
});
app.set("view engine", "html");

app.get("/**/*", (req: Request, res: Response) => {
  res.render("../dist/index", {
    req,
    res,
  });
});
```

## 브라우저 API 사용

> window, document, location, navigator

```ts
constructor(@Inject(DOCUMENT) private document: Document) {}
```
