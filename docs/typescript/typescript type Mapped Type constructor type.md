# typescript type constructor type

## type

```ts
type User = {
  name: string;
  age: number;
};

type UserConstructor = {
  new (name: string, age: number): User; // new 라는 이름을 가진 함수는 new 연산자로 호출할 수 있다.
};
```

## Generic Constructor Type

```ts
type Constructor<T> = {
  new (...args: any[]): T;
};
// or
type Constructor<T> = {
  new (...args: any[]): T;
  readonly prototype: T;
};
```

## Example

```ts
type Constructor<T> = {
  new (...args: any[]): T;
  readonly prototype: T;
};

function fn(target: Constructor<User>) {
  const user = new target();
}

@fn
class User {
  name: string;
  age: number;
  constructor() {
    console.log("User initialized!");
    this.name = "John";
    this.age = 30;
  }
}
```
