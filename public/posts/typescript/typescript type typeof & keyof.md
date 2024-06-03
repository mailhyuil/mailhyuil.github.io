# typescript type typeof & keyof

## 객체를 타입으로

```ts
const obj = {
  red: "apple",
  yellow: "banana",
  green: "cucumber",
};

type Fruit = typeof obj;

// 동적으로 사용
const newObj: typeof obj = {
  red: "apple",
  yellow: "banana",
  green: "cucumber",
};
```

## 객체의 키를 union 타입으로

```ts
const obj = {
  red: "apple",
  yellow: "banana",
  green: "cucumber",
};

type Fruit = typeof obj;

type Color = keyof Fruit;

const color1: Color = "red";
const color2: Color = "green";
const color3: Color = "yellow";
```

```ts
const obj = {
  red: "apple",
  yellow: "banana",
  green: "cucumber",
};

// 동적으로 사용
type Color = keyof typeof obj;

const color1: Color = "red";
const color2: Color = "green";
const color3: Color = "yellow";
```

## values 값을 union 타입으로

```ts
const obj = { red: "apple", yellow: "banana", green: "cucumber" } as const;
type Apple = (typeof obj)["red"]; // apple
```

```ts
const obj = { red: "apple", yellow: "banana", green: "cucumber" } as const;

type ValueOfObj = (typeof obj)[keyof typeof obj];

let ob2: ValueOfObj = "apple";
let ob3: ValueOfObj = "banana";
let ob4: ValueOfObj = "cucumber";
```

```ts
const obj = { red: "apple", yellow: "banana", green: "cucumber" } as const;

type ValueOf<T> = T[keyof T];

type ValueOfObj = ValueOf<typeof obj>;

let ob2: ValueOfObj = "apple";
let ob3: ValueOfObj = "banana";
let ob4: ValueOfObj = "cucumber";
```
