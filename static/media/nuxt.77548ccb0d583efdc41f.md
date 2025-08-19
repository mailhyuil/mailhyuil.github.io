# nuxtjs

> Nuxt.js는 Vue.js 애플리케이션 개발을 보다 강력하고 사용하기 쉽게 만들어 주는 프레임워크

## install

```bash
npx nuxi init <project-name>
```

## pages

> app.vue에 NuxtPage 모듈 임포트
>
> > pages 폴더에 들어있는 index.vue파일을 / path로 자동 매핑
> >
> > > about.vue 파일은 /about path로 매핑
> > >
> > > > template 태그로 감싸져있어야 한다.

### app.vue

```vue
<template>
  <div>
    <NuxtPage />
  </div>
</template>
```

## layouts

> layouts 폴더에 default.vue 생성

### layouts/default.vue

```vue
<script lang="ts" setup></script>
<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>
```

### app.vue

```vue
<script lang="ts" setup></script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
```
