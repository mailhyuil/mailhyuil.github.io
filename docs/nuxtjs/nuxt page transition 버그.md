# nuxt page transition 버그

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
