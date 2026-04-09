# vue 부모에서 자식 함수 호출

> defineExpose()를 사용하여 부모에서 자식 함수를 호출할 수 있다.

## child

```ts
defineExpose({
  childFn,
});
```

## parent

```ts
const child = ref();
child.value.childFn();
```
