# vite

> 빠른 개발 속도를 위한 번들링 도구
>
> > esbuild와 rollup을 합친 도구이다.
> >
> > > esbuild로 파일들을 통합하고 rollup을 통해 번들링
> > >
> > > > 핫 리로드 기능으로 빠른 개발 속도를 제공한다. (새로고침 없이 변경사항을 바로 반영한다.)
> > > >
> > > > > 핫 리로드 === HMR(Hot Module Replacement)을 사용하여 빠른 개발 속도를 제공한다.

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
