# nuxt page transition 오류

## app.vue 변경

```
<template>
  <div>
    <NuxtLayout>
      <NuxtPage :key="$route.fullPath" />
    </NuxtLayout>
  </div>
</template>
```
