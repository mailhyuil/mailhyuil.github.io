# angular PreloadingStrategy

> 네비게이션 속도를 높이기 위해 사용한다.
>
> > you can download and cache JavaScript associated with routes
> >
> > > 라우트에 연결된 자바스크립트를 다운로드하고 캐시할 수 있다.
> > >
> > > > standalone : withPreloading() method

## PreloadAllModules Strategy

> preloads all lazy-loaded routes

```ts
import { RouterModule, PreloadAllModules } from "@angular/router";

RouterModule.forRoot([], {
  preloadingStrategy: PreloadAllModules,
});
```

## Quicklink Strategy

> preloads only the routes associated with links on the current page.

### install

```sh
npm install ngx-quicklink
```

```ts
import { QuicklinkStrategy, QuicklinkModule } from "ngx-quicklink";

RouterModule.forRoot([], {
  preloadingStrategy: QuicklinkStrategy,
});
```
