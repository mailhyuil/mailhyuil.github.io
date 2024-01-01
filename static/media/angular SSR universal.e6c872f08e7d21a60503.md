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
