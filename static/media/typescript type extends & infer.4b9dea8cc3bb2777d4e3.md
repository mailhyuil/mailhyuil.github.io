# typescript type extends & infer

## extends

> extends 키워드는 제네릭 타입 매개변수가 특정 타입을 확장하도록 제한하는 데 사용된다.
>
> > 특정 Type이 아닐 시 대체 타입을 지정하거나 에러를 발생시키고 싶을 때

```ts
// 대체 타입 사용
const obj1 = {
  red: "apple",
  yellow: "banana",
  green: "cucumber",
};

type ObjType<X> = X extends typeof obj1 ? typeof obj1 : X;

const obj2 = {
  red: "apple",
  orange: "orange",
  green: "cucumber",
};

const obj1Mock: ObjType<typeof obj1> = {
  red: "apple",
  yellow: "banana",
  green: "cucumber",
};

const obj2Mock: ObjType<typeof obj2> = {
  red: "apple",
  orange: "orange",
  green: "cucumber",
};
```

## extends { [K in Type]: ReturnType }

> key가 없을시 에러

```ts
// 특정 타입이 아닐 시 에러
type Operations =
  | "aggregate"
  | "count"
  | "create"
  | "createMany"
  | "delete"
  | "deleteMany"
  | "findFirst"
  | "findMany"
  | "findUnique"
  | "update"
  | "updateMany"
  | "upsert";

export class PrismaRepo<
  D extends { [K in Operations]: (args: unknown) => unknown },
  A extends { [K in Operations]: unknown },
  R extends { [K in Operations]: unknown }
> {
  //...
}
```

## infer

> U 가 T로부터 추론 가능한 타입이면 참, 아니면 거짓

```ts
// X
type PromiseType<T> = T extends Promise<U> ? U : never; // U 라는 타입을 제네릭으로 넘겨주지 않았음
// O
type PromiseType<T> = T extends Promise<infer U> ? U : never; // U 라는 타입은 T에서 추론이 가능
type A = PromiseType<Promise<number>>; // number
```

## ...infer

> tuple 배열 에서 사용가능

```ts
// [string, boolean, number] 중 헤드[string]을 제외한 나머지(테일)[boolean, number]를 가져오고 싶을 때 사용
type TailOf<T> = T extends [unknown, ...infer U] ? U : [];
type A = TailOf<[string, boolean, number]>; // [boolean, number]
```
