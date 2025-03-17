# angular 세팅 setting

## install

```sh
# angular material
npm i @angular/material

# tailwindcss plugins
npm i -D @tailwindcss/typography
npm i -D @iconify/json
npm i -D @iconify/tailwind

# color tools
npm i -D @nextcss/color-tools

# quilcklink preload strategy
npm i ngx-quicklink

################### optional ###########################

# cookie
npm i ngx-cookie-service

# swiper
npm i swiper

# object to formdata
npm i object-to-formdata

# file-saver
npm i file-saver-es
npm i -D @types/file-saver-es

# animation
npm i gsap
npm i locomotive-scroll
npm i angular-animations

# timepicker component
npm i ngx-material-timepicker

# chart
npm i chart.js
npm i ng2-charts

# quill editor
npm i quill
npm i ngx-quill
npm i quill-image-resizor
npm i quill-mention

# google analytics
npm i angulartics2

# google map
npm i @angular/google-maps

# youtube
npm i @angular/youtube-player

# tiptap
npm i ngx-tiptap
npm i @tiptap/starter-kit
npm i @tiptap/extension-text-align
npm i @tiptap/extension-text-style
npm i @tiptap/extension-image
npm i tiptap-extension-resize-image
npm i @tiptap/extension-link
npm i tiptap-extension-font-size
```

## app.config.ts

```ts
import { ApplicationConfig, importProvidersFrom, APP_INITIALIZER } from "@angular/core";
import { provideRouter, withPreloading, withComponentInputBinding, withInMemoryScrolling } from "@angular/router";
import { ApiModule } from "@/api";
import { appRoutes } from "./app.routes";
import { QuicklinkModule, QuicklinkStrategy } from "ngx-quicklink";
import { provideAnimations } from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withPreloading(QuicklinkModule),
      withInMemoryScrolling({
        scrollPositionRestoration: "top",
      }),
      withComponentInputBinding(),
    ),
    provideHttpClient(withInterceptors([HttpInterceptor])),
    provideAnimations(),
    importProvidersFrom([ApiModule, QuicklinkModule]),
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    {
      provide: APP_INITIALIZER,
      useFactory: AuthFactory,
      multi: true,
    },
  ],
};
```

## app.routes.ts / page.routes.ts

## tailwind.config.js

```js
const { createGlobPatternsForDependencies } = require("@nx/angular/tailwind");
const { join } = require("path");
const { addDynamicIconSelectors } = require("@iconify/tailwind");
const { toneMap } = require("@nextcss/color-tools");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, "src/**/!(*.stories|*.spec).{ts,html}"), ...createGlobPatternsForDependencies(__dirname)],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1469C0",
          ...toneMap("#1469C0"),
        },
        secondary: {
          DEFAULT: "#FFBEB2",
          ...toneMap("#FFBEB2"),
        },
        info: {
          DEFAULT: "#1E88E5",
          ...toneMap("#1E88E5"),
        },
        success: {
          DEFAULT: "#43A047",
          ...toneMap("#43A047"),
        },
        warning: {
          DEFAULT: "#FB8C00",
          ...toneMap("#FB8C00"),
        },
        medium: {
          DEFAULT: "#808080",
          ...toneMap("#808080"),
        },
        danger: {
          DEFAULT: "#E53935",
          ...toneMap("#E53935"),
        },
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
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
