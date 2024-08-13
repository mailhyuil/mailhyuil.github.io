# angular 세팅 setting

## install

```sh
npm i @angular/material
npm i ngx-material-timepicker

npm i ng2-charts
npm i chart.js

npm i ngx-cookie-service

npm i swiper

npm i ngx-tiptap
npm i @tiptap/starter-kit
npm i @tiptap/extension-text-align
npm i @tiptap/extension-text-style
npm i @tiptap/extension-image
npm i tiptap-extension-resize-image

npm i angulartics2

npm i @nextcss/color-tools

npm i object-to-formdata

npm i file-saver
```

## app.config.ts

```ts
import { ApplicationConfig, importProvidersFrom, APP_INITIALIZER } from "@angular/core";
import { PreloadAllModules, provideRouter, withPreloading } from "@angular/router";
import { ApiModule } from "@/api";
import { appRoutes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withPreloading(PreloadAllModules),
      withInMemoryScrolling({
        scrollPositionRestoration: "top",
      })
    ),
    provideHttpClient(withInterceptors([HttpInterceptor])),
    importProvidersFrom([ApiModule]),
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    {
      provide: APP_INITIALIZER,
      useFactory: AuthFactory,
      multi: true,
    },
  ],
};
```

## tailwind.config.js

```js

```

## root.scss

```scss

```
