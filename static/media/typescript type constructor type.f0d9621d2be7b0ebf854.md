# typescript type constructor type

## type

```ts
type User = {
  name: string;
  age: number;
};

type UserConstructor = {
  new (name: string, age: number): User;
};
```

## Generic Constructor Type

```ts
export type Constructor<T> = {
  new (...args: any[]): T;
  readonly prototype: T;
};
```
