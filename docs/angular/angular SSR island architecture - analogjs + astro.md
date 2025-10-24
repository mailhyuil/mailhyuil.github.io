# angular SSR island architecture - analogjs + astro

> static한 부분은 SSR로, 동적인 부분은 CSR로 처리하는 아키텍처
>
> > analogjs와 astro를 사용하여 구현할 수 있다.

## install

```sh
npm i astro
npm i @analogjs/astro-angular
```

## astro.config.mjs

```js
import { defineConfig } from "astro/config";
import angular from "@analogjs/astro-angular";

export default defineConfig({
  integrations: [angular()],
});
```
