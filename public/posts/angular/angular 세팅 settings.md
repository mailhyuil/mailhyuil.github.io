# angular 세팅 setting

## install

```sh
# angular material
npm i @angular/material

# timepicker component
npm i ngx-material-timepicker

# cookie
npm i ngx-cookie-service

# data-grid
npm i ag-grid-angular

# client-side pagination
npm i ngx-pagination

# chart
npm i ng2-charts
npm i chart.js

# swiper
npm i swiper

# tiptap
npm i ngx-tiptap
npm i @tiptap/starter-kit
npm i @tiptap/extension-text-align
npm i @tiptap/extension-text-style
npm i @tiptap/extension-image
npm i tiptap-extension-resize-image

# google analytics
npm i angulartics2

# color tools
npm i @nextcss/color-tools

# object to formdata
npm i object-to-formdata

# file-saver
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
      }),
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
