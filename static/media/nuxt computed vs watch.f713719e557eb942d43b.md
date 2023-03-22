# nuxt computed vs watch

## computed

```
const path = computed(()=>route.fullPath);
```

## watch

```
const path = ref(route.fullPath);
watch(
	() => route.fullPath,
	(value) => (path.value = value)
);
```
