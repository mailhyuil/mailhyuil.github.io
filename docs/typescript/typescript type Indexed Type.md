# typescript type Indexed Type

> Index Access를 사용하여 Type을 가져올 수 있다.

```ts
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"]; // number
type IndexedType = Person["age" | "name"]; // number | string
```

```ts
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person = (typeof MyArray)[number];

type Person = {
  name: string;
  age: number;
};
type Age = (typeof MyArray)[number]["age"];

type Age = number;
// Or
type Age2 = Person["age"];
```
