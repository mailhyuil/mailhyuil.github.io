# typescript 제네릭 타입

## 컴포넌트를 재사용하기 위해 사용

> 여러 가지 타입에서 동작하는 컴포넌트를 생성

```
interface Obj<T> {
  a: T;
  b: T;
}

const sayMyName = <T>(e: T): void => {
  console.log(e);
};
```
