# vue readonly

- 불변한 값에 적용하기
- `readonly`는 Vue의 반응형 시스템에서 제공하는 유틸리티로, 객체를 읽기 전용으로 만들어 수정할 수 없도록 합니다. 이는 주로 상태 관리나 컴포넌트 간 데이터 전달 시, 데이터의 불변성을 유지하기 위해 사용됩니다.

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
