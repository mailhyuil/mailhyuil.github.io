# vue computed vs watch

## computed

```ts
const path = computed(() => route.fullPath);
```

## watch

```ts
const path = ref(route.fullPath);
watch(
  () => route.fullPath,
  value => (path.value = value),
);
```
