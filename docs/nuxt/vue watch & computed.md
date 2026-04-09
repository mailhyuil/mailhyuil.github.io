# vue computed vs watch

- 사이드 이펙트가 필요한 경우 watch
- 값을 계산하는 경우 computed

## watch

```ts
const path = ref(route.fullPath);
watch(
  () => route.fullPath,
  value => (path.value = value),
);
```

## computed

```ts
const path = computed(() => route.fullPath);
```
