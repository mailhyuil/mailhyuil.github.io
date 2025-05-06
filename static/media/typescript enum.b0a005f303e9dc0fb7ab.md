# typescript enum

> 사용을 지양해라!
>
> typescript가 자체 지원하는 기능으로 js로 컴파일 시 함수로 컴파일되는 방식
>
> 이는 enum을 사용하지 않아도 tree-shaking이 되지 않는 문제를 유발한다.
>
> > const enum 방식은 tree-shaking이 되지만 babel로 트랜스파일할 수 없고, typescript의 --isolatedModules 옵션이 있을 시 무용지물
> >
> > > as const, union type 방식을 사용하자

## enum 대신 이렇게 사용할 것

```ts
const Enum = {
  A: "에이",
  B: "비",
} as const;

type EnumType = typeof Enum; // { A: '에이', B: '비' }
type EnumKeys = keyof EnumType; // 'A' | 'B'
type EnumValues = EnumType[keyof EnumType]; // '에이' | '비'
```

## enum은 사용하지 말 것

```ts
// 사용하지 말자!
enum Enum {
    A
    B
}
enum Enum {
    A = '에이'
    B = '비'
}

// 이것도 비추천
const enum Enum {
    A = '에이'
    B = '비'
}
```
