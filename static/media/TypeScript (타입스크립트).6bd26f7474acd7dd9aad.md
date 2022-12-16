# typescript (타입스크립트)

1. npm i -D typescript

2. package.json
```json
  "scripts": {
    "build": "tsc"
  }
```

3. tsconfig.json
```json
{
    "include": [
        "src"
    ],
    "compilerOptions": {
        "outDir": "build",
        "target": "ES6",
        "lib": [
            "ES6",
            "DOM"
        ],
        "strict": true,
        "allowJs": true
    }
}
```

4. *.d.ts
```ts
declare module "myPackage" {
    function init(config: Config): boolean;
}
```
## 기본문법
```js
const areYouCool: boolean = true;
const answer: number = 42;
const typescript: string = "great";
const greetings: string = `
Hello, Readers!
Welcome to TypeScript.
`;
const hasType: Object = {
  TypeScript: true,
  JavaScript: false
};
```
## 특별한 타입
```js
// any 타입은 모든 타입과 호환 가능하다. 즉, 모든 값의 타입을 any 로 지정할 수 있고, any 타입의 변수에는 모든 값을 할당할 수 있다.
let bool: any = true;
bool = 3;
bool = 'whatever';
bool = {};
// void는 null과 undefined 만을 값으로 가질 수 있는 타입이다. 아무런 값도 반환하지 않는 함수의 반환 타입을 표시할 때 사용한다.
function nothing(): void { }
// 의미상으로 never 타입은 – 그 이름이 암시하듯 – 절대 존재할 수 없는 값을 암시한다. 따라서 never 타입의 변수에는 null, undefined를 포함해 어떤 값도 할당할 수 없다.
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
  name: string;
  height: number;
};
```

## 유니온 타입
> A 또는 B 타입일 수 있는 타입”을 A | B 로 쓰는 식이다
```js
const stringOrNumber: string | number = square(randomNumber, randomBoolean);
```

## 인터섹션 타입
> 여러 타입을 앰퍼샌드(&) 기호로 이어서 인터섹션 타입
```js
type Infeasible = string & number
type Awesome = Programmer & BeerLover & CatLover;
```

## 열거형
```js
enum Direction {
  East,
  West,
  South,
  North
}
enum ExplicitDirection {
  East = 0,
  West = 1,
  South = 2,
  North = 3
}
```

## JSDoc
```js
// @ts-check

/**
 * 
 * @param {object} config 
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */

export function init(config) {
    return true;
}

/**
 * 
 * @param {number} code
 * @returns {number}
 */
export function exit(code) {
    return code + 1;
}
```

```
npm i -D ts-node
```

```
npm i -D @types/node
```

```
npm i -D @types/packageName
```

## Class & Getter, Setter

```ts
class MovieVO {
    private _title: string = "";

    get title(): string {
        console.log("I'm called!!");
        return this._title;
    }
    set title(value: string) {
        this._title = value;
    }
}

const vo = new MovieVO();

vo.title = "love and thunder"

console.log(vo.title);
```

## next.js with typescript
```
npx create-next-app --typescript new-project
```

## create-react-app typescript
```
yarn create react-app my-app --template typescript
```

## error
> useState hook을 사용하여 배열을 정의할 때 타입스크립트 에러가 발생함.

- useState 뒤에 <any[]> 를 명시해준다.
```
const [arr, setArr] = useState<any[]>([])
```