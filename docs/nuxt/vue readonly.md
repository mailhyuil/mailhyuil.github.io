# vue readonly

```ts
// useCounter.ts
export function useCounter() {
  const count = ref(0);

  const increment = () => count.value++;

  // count는 읽기 전용으로 내보내고, 수정은 increment 함수로만 가능하게 함
  return {
    count: readonly(count),
    increment,
  };
}
```
