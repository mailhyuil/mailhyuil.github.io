# ngx-quicklink

> It provides router preloading strategy which automatically downloads the lazy-loaded modules associated with all the visible links on the screen.
>
> > 이동할 수 있는 링크가 화면에 보여야 preload를 하는 PreloadingStrategy를 제공한다.

## install

```sh
npm i ngx-quicklink
```

## app.config.ts

```ts
import { QuicklinkModule, QuicklinkStrategy } from "ngx-quicklink";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withPreloading(QuicklinkStrategy), // 추가
    ),
    importProvidersFrom([QuicklinkModule]), // 추가
  ],
};
```

## routes

```ts
export const routes: Routes = [
  {
    path: "contact",
    loadChildren: import(() => "./contact/contact.module").then(m => m.ContactModule),
    data: {
      preload: false,
    },
  },
];
```
