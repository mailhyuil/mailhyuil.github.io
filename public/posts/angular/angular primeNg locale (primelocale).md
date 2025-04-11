# angular primeNg locale

## install

```sh
npm i primelocale
```

## usage

```ts
import { providePrimeNG } from "primeng/config";
import { ko } from "primelocale/js/ko.js";

export const appConfig: ApplicationConfig = {
  providers: [
    providePrimeNG({
      translation: ko,
    }),
  ],
};
```
