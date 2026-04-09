# vue click-outside-vue3

## install

```sh
npm i click-outside-vue3
```

## type 파일 생성

1. types/click-outside-vue3.d.ts

```ts
declare module "click-outside-vue3";
```

1. tsconfig에서 읽기
   - plugins/v-click-outside.client.ts

```ts
import vClickOutside from "click-outside-vue3";

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive("clickOutside", vClickOutside.directive);
});
```
