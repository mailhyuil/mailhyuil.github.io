# typescript conditional type 조건부 타입

> 조건부 타입(conditional type)이란 입력된 제네릭 타입에 따라 타입을 결정 기능을 말한다.
>
> > extends를 === 로 바꿔서 생각해보면 좋다.
> >
> > > extends를 typeof으로 치환해서 생각해도 좋다.
> > >
> > > > (naked) type parameter는 제네릭 T 와 같이 의미가 없는 타입 파라미터를 말하는 것
> > > >
> > > > > never 타입으로 분산이 됬을 경우 이 타입은 제외 시킨다

```ts
type Some<T> = T extends U ? X : Y;
```

- T가 U에 할당될 수 있으면 타입은 X가 되고 그렇지 않다면 타입이 Y가 된다는 것을 의미

## 분산 조건부 타입

> 조건부 타입(conditional types) 에서 (naked) type parameter 가 사용된 경우에만 분산(distributive) 방식으로 동작하게 된다.

```ts
type IsStringType<T> = T extends string ? "yes" : "no";
type T1 = IsStringType<string | number>;

// type parameter를 사용하지 않으면 결과가 다름
type T3 = string | number extends string ? "yes" : "no";
```

## never

> never 타입으로 분산이 됬을 경우 이 타입은 제외 시킨다

```ts
type Never<T> = T extends number ? T : never;

type Types = number | string | object;
type T2 = Never<Types>; // type T2 = number
```

## infer

```ts
type Foo<T> = T extends { a: infer U; b: infer U } ? U : never;
type T10 = Foo<{ a: string; b: string }>; // string
type T11 = Foo<{ a: string; b: number }>; // string | number
```
