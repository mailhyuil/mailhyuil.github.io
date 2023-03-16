# typescript typeof & keyof

> 객체를 type으로 바꿀 수 있다

## typeof

> 객체 데이터를 객체 타입(인터페이스)으로 변환해주는 연산자

```ts
const obj = {
  red: "apple",
  yellow: "banana",
  green: "cucumber",
};

// 위의 객체를 타입으로 변환하여 사용하고 싶을때
type Fruit = typeof obj;

/* 결과
type Fruit = {
    red: string;
    yellow: string;
    green: string;
}
*/
```

## keyof

> 객체 타입(인터페이스)의 키를 유니온 타입으로 만들어주는 연산자

```ts
type Type = {
  name: string;
  age: number;
  married: boolean;
};

type Union = keyof Type;
/* 결과
 type Union = name | age | married
*/
```

## keyof typeof

> 연속으로 사용해서 객체 데이터의 키를 유니온 타입으로 바꾸기

```ts
const obj = { red: "apple", yellow: "banana", green: "cucumber" } as const; // 상수 타입을 구성하기 위해서는 타입 단언을 해준다.

// 위의 객체에서 red, yellow, green 부분만 꺼내와 타입으로서 사용하고 싶을떄
type Color = keyof typeof obj; // 객체의 key들만 가져와 상수 타입으로

let ob2: Color = "red";
let ob3: Color = "yellow";
let ob4: Color = "green";
```

## typeof obj[keyof typeof obj]

> 객체 데이터의 value를 유니온 타입으로 바꾸기

```ts
const obj = { red: "apple", yellow: "banana", green: "cucumber" } as const;

type Key = typeof obj[keyof typeof obj]; // 객체의 value들만 가져와 상수 타입으로

let ob2: Key = "apple";
let ob3: Key = "banana";
let ob4: Key = "cucumber";
```
