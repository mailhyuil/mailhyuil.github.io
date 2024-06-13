# vite

> 빠른 개발 속도를 위한 번들링 도구
>
> > 개발환경과 운영환경을 빌드 시 다른 번들러를 사용하게 끔 한 라이브러리
> >
> > 개발 시 esbuild, 운영 시 rollup을 사용
> >
> > > 개발 시 HMR(Hot Module Replacement) 기능으로 빠른 개발 속도를 제공한다. (새로고침 없이 변경사항을 바로 반영한다.)

## install

```sh
npm i -D vite
```

## vite.config.js

```js
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
});
```
