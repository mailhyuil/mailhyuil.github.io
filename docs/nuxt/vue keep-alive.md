# vue keep-alive

- 컴포넌트를 메모리에 캐싱하여 상태를 유지한 채로 재사용할 수 있도록 하는 기능
- 활성/비활성시 `onActivated` / `onDeactivated` 훅이 호출됨

```vue
<template>
  <keep-alive>
    <component :is="currentComponent" />
  </keep-alive>
</template>
```

## Nuxt 방식

```vue
<NuxtPage keepalive />
```
