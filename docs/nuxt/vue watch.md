# vue watch

deep

> 객체의 프로퍼티가 변하는지도 확인하기

## single ref

> Do note that you can't watch a property of a reactive object

```ts
watch(x, newX => {
  console.log(`x is ${newX}`);
});
```

## getter

> Instead, use a getter

```ts
watch(
  () => x.value + y.value,
  sum => {
    console.log(`sum of x + y is: ${sum}`);
  },
);
```

## stopping watch

```ts
import { watchEffect } from "vue";

// this one will be automatically stopped
watchEffect(() => {});

// ...this one will not!
setTimeout(() => {
  watchEffect(() => {});
}, 100);
```

```ts
const unwatch = watchEffect(() => {});

// ...later, when no longer needed
unwatch();
```
