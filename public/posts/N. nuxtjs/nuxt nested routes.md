# nuxt nested routes

> layouts에 nested 레이아웃 생성 page위치에 slot넣기

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
  <NuxtLayout name="nested">
    <NuxtPage />
  </NuxtLayout>
</template>
```

## pages/nested/[a, b, c]

```
<template>
  <div>AAAAAAAA</div>
</template>
```
