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
// type A = number
type A = PromiseType<Promise<number>>;

type TailOf<T> = T extends [unknown, ...infer U] ? U : [];
// type A = [boolean, number];
type A = TailOf<[string, boolean, number]>;
```
