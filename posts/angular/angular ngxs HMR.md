# angular HMR

## install

```sh
npm i @ngxs/storage-plugin
```

## main.ts

> 동적 임포트 사용
>
> > 그냥 사용해도 프로덕션 빌드중에 트리 쉐이킹 될지도..?

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
