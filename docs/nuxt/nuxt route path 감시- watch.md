# nuxt path 감시- watch

```ts
const route = useRoute();
const isCurrent = computed<boolean>(() => route.fullPath.includes("home-page"));
```
