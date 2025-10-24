# typescript type Conditional Type infer

> U 가 T로부터 추론 가능한 타입이면 참, 아니면 거짓
>
> > extends 절에서만 사용할 수 있다.

```ts
type MyType = T extends infer U ? X : Y;
```

## T extends infer U

```ts
// X
type PromiseType<T> = T extends Promise<U> ? U : never; // U 라는 타입을 제네릭으로 넘겨주지 않았음
// O
type PromiseType<T> = T extends Promise<infer U> ? U : never; // U 라는 타입은 T에서 추론이 가능
type A = PromiseType<Promise<number>>; // number
```

```ts
type Lecture = {
  id: number;
  title: string;
  type: "free" | "paid";
  price: number;
};

type Type<T> = T extends { type: infer U } ? U : never; // T가 type을 가지고 있으면 U로 추론

const type: Type<Lecture> = "free";
```

## T extends [...infer U]

> tuple 배열 에서 사용가능

```ts
// [string, boolean, number] 중 헤드[string]을 제외한 나머지(테일)[boolean, number]를 가져오고 싶을 때 사용
type TailOf<T> = T extends [unknown, ...infer U] ? U : [];
type A = TailOf<[string, boolean, number]>; // [boolean, number]
```
