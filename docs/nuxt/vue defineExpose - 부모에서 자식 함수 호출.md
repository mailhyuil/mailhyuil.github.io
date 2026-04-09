# vue 부모에서 자식 함수 호출

> defineExpose()를 사용하여 부모에서 자식 함수를 호출할 수 있다.

## child

```ts
const internalCount = ref(0);
const increment = () => internalCount.value++;

defineExpose({
  increment, // 외부에서 자식.value.increment() 호출 가능
  internalCount,
});
```

## parent

```ts
const child = ref();
child.value.increment();
```
