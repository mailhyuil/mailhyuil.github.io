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

# icon
npm i -D @iconify/json
npm i -D @iconify/tailwind
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
    importProvidersFrom([ApiModule, BrowserAnimationsModule]),
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
const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [addDynamicIconSelectors()],
  important: true,
};
```

## mat.scss

> "node_modules/@angular/material/prebuilt-themes/indigo-pink.css" 추가

## index.html

```html
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
```
