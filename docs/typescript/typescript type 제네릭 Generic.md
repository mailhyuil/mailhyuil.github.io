# typescript type 제네릭 Generic

## 컴포넌트를 재사용하기 위해 사용

> 여러 가지 타입에서 동작하는 컴포넌트를 생성

```ts
interface Obj<T, U> {
  a: T;
  // 클래스의 제네릭 타입을 사용
  func1: (b: T) => U;
  func2(b: T): U;
  // 함수의 제네릭 타입을 사용
  func3: <V>(c: V) => void;
  func4<V>(c: V): void;
}

const sayMyName = <T>(e: T): T => {
  console.log(e);
  return e;
};
function sayMyName<T>(e: T): T {
  console.log(e);
  return e;
}
```
