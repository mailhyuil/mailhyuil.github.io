# typescript enum

> 사용 지양 tree-shaking 문제
>
> > as const를 사용해라

## 문법

```ts
enum Enum {
    A = 'A'
    B = 'B'
}

const enum Enum {
    A = 'A'
    B = 'B'
}

const Enum = {
    A = 'A'
    B = 'B'
} as const
```

## String 값으로 찾기

```ts
Enum["A"] === A;
```
