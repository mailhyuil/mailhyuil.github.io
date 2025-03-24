# vue click-outside-vue3

## install

```
yarn add click-outside-vue3
```

## type 파일 생성

1. types/click-outside-vue3.d.ts

```
declare module "click-outside-vue3";
```

2. tsconfig에서 읽기

## plugins/v-click-outside.client.ts

```
import vClickOutside from "click-outside-vue3";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.directive("clickOutside", vClickOutside.directive);
});
```
