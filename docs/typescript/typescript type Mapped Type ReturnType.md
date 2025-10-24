# typescript type Mapped Type ReturnType

> 함수 Type의 반환 타입으로 구성된 타입을 생성합니다.

```ts
// ReturnType<typeof f(n)>: f(n)의 반환 타입

declare function foo(): { a: number; b: string };

type T = ReturnType<typeof foo>;
/*
type T4 = {
    a: number;
    b: string;
}
*/
```
