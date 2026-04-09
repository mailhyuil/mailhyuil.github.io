# vueuse

> vue의 Composition Utilities 패키지
>
> > file 핸들링같은 여러 유틸리티를 제공

## install

```sh
npm i -D @vueuse/nuxt @vueuse/core
```

## nuxtConfig

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt"],
});
```

## useFileDialog

```ts
const { files, open, reset } = useFileDialog({ multiple: true });
```
