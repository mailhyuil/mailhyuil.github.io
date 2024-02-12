# typescript type extends & infer

## extends

> X가 Y타입에 할당 될 수 있는지를 확인
>
> > 리스코프 치환 원칙이 준수되는지 확인하는 것

```ts
type Type<X> = X extends Y ? Y : X;
```

## infer

> U의 타입으로 추론하는 것

```ts
infer U

type PromiseType<T> = T extends Promise<infer U> ? U : never;
type A = PromiseType<Promise<number>>; // number

// [string, boolean, number] 중 헤드[string]을 제외한 나머지(테일)[boolean, number]를 가져오고 싶을 때 사용
type TailOf<T> = T extends [unknown, ...infer U] ? U : [];
type A = TailOf<[string, boolean, number]>; // [boolean, number]
```
