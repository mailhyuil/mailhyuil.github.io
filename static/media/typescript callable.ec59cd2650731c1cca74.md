# typescript callable interface

> 함수처럼 호출 가능한 객체를 만들 수 있습니다.

```ts
interface A {
  (): string;
}

const a: A = () => "hi";
```
