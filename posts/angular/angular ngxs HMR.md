# angular HMR

## install

```sh
npm i @ngxs/storage-plugin
```

## main.ts

> 동적 임포트 사용
>
> > 동적 임포트를 사용하면 코드 스플리팅이 된다, 즉 프로덕션 환경에서는 사용되지 않는다
> >
> > > 그러나 번들은 일어남 청크 파일로 존재

```ts
import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { NgxsModule } from "@ngxs/store";
import { AppComponent } from "./app/app.component";
import { AdminState } from "./stores/admin.store";

const providers = [importProvidersFrom(NgxsModule.forRoot([AdminState]))];

if (process.env.NODE_ENV === "development") {
  import("@ngxs/storage-plugin").then((m) => {
    const NgxsStoragePluginModul = m.NgxsStoragePluginModule;
    bootstrapApplication(AppComponent, {
      providers: [...providers, importProvidersFrom(NgxsStoragePluginModul.forRoot())],
    }).catch((err) => console.error(err));
  });
} else {
  bootstrapApplication(AppComponent, {
    providers,
  }).catch((err) => console.error(err));
}
```
