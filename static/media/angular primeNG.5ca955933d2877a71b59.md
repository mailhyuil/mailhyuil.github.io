# angular primeNG

## install

```sh
npm i primeng
npm i @primeng/themes

npm i tailwindcss-primeui
```

## app.config.ts

```ts
import { ApplicationConfig } from "@angular/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { providePrimeNG } from "primeng/config";
import Aura from "@primeng/themes/aura";

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
};
```

## tailwind.config.js

```js
// tailwind.config.js
import PrimeUI from "tailwindcss-primeui";

export default {
  // ...
  plugins: [PrimeUI],
};
```
