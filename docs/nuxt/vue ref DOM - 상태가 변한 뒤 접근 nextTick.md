# vue ref DOM - 상태가 변한 뒤 접근 nextTick

vue는 nextTick에서 re-rendering이 되는 지점입니다. 상태가 변한 뒤 DOM 업데이트가 완료된 시점에 접근하려면 nextTick을 사용해야 합니다.

```ts
count.value++;
await nextTick(); // 이제 DOM 업데이트 완료
console.log(el.value);
```
