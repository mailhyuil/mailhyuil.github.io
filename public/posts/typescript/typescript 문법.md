# 문법

## 기본문법

```ts
const areYouCool: boolean = true;
const answer: number = 42;
const typescript: string = "great";
const greetings: string = `
Hello, Readers!
Welcome to TypeScript.
`;
const hasType: Object = {
  TypeScript: true,
  JavaScript: false,
};
```

## 특별한 타입

### any

> any 타입은 모든 타입과 호환 가능하다. (i.e. 모든 값의 타입을 any 로 지정할 수 있고, any 타입의 변수에는 모든 값을 할당할 수 있다.)

```ts
let bool: any = true;
bool = 3;
bool = "whatever";
bool = {};
```

### void

> void는 null과 undefined 만을 값으로 가질 수 있는 타입이다. 아무런 값도 반환하지 않는 함수의 반환 타입을 표시할 때 사용한다.

```ts
function nothing(): void {}
```

### never

> 의미상으로 never 타입은 – 그 이름이 암시하듯 – 절대 존재할 수 없는 값을 암시한다. 따라서 never 타입의 변수에는 null, undefined를 포함해 어떤 값도 할당할 수 없다.
>
> > 절대 반환을 하지 않는 함수
> >
> > > 실행이 종료되지 않는 함수나 오류를 발생시키기 위해서만 사용

```ts
function alwaysThrow(): never {
  throw new Error(`I'm a wicked function!`);
}
```

## 타입 별칭

```js
// type NewType = Type;

type UUID = string;
type Height = number;
type AnotherUUID = UUID;
type Animals = Animal[];
type User = {
  name: string,
  height: number,
};
```

## 유니온 타입

> A 또는 B 타입일 수 있는 타입”을 A | B 로 쓰는 식이다

```ts
const stringOrNumber: string | number = square(randomNumber, randomBoolean);
```

## 인터섹션 타입

> 여러 타입을 앰퍼샌드(&) 기호로 이어서 인터섹션 타입
>
> > 두개의 타입이 다 들어가있어야한다.

```ts
type Infeasible = string & number;
type Awesome = Programmer & BeerLover & CatLover;
```

## 열거형

```ts
enum Direction {
  East,
  West,
  South,
  North,
}
enum ExplicitDirection {
  East = 0,
  West = 1,
  South = 2,
  North = 3,
}
```
