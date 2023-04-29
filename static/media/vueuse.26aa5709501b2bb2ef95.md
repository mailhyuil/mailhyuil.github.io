# @vueuse/core

> vue의 Composition Utilities 패키지
>
> > file 핸들링같은 여러 유틸리티를 제공

## install

```
npm i -D @vueuse/nuxt @vueuse/core
```

## nuxtConfig

```
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
  ],
})
```

## useFileDialog

```
const { files, open, reset } = useFileDialog({ multiple: true });
```
