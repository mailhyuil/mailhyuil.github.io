# nuxt nested routes

> layouts에 nested 레이아웃 생성 page위치에 slot넣기

## layouts/default.vue

```
<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>
```

## layouts/nested.vue

> layout 파일 이름은 무조건 케밥케이스 some-layout

```
<template>
  <div>
    <div class="flex gap-10 items-center justify-center">
      <NuxtLink to="/nested/a" class="bg-blue-400 px-4">a</NuxtLink>
      <NuxtLink to="/nested/b" class="bg-blue-400 px-4">b</NuxtLink>
      <NuxtLink to="/nested/c" class="bg-blue-400 px-4">c</NuxtLink>
    </div>
    <slot />
  </div>
</template>
```

## pages/nested.vue

```
<template>
  <div>
    <NuxtLayout name="nested">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
```

## pages/nested/[a, b, c]

```
<template>
  <div>AAAAAAAA</div>
</template>
```

## pages/nested/[id]

## default.vue 바꾸기

```
definePageMeta({
  layout: "other-layout",
  title: "other",
  name: "대시보드",
});
```

## 주의

> NuxtPage에 key 값을 넣으면 리프래쉬됨

```
<NuxtPage :key="$route.fullPath" />
```

## nuxt routing bug

> app.vue에 하면 안된다!!

```
  <NuxtLayout name="admin-layout">
    <NuxtPage :key="$route.fullPath" />
  </NuxtLayout>
```
