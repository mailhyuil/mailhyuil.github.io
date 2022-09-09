# typescript (타입스크립트)

1. npm i -D typescript
2. package.json
```
  "scripts": {
    "build": "tsc"
  }
```
3. tsconfig.json
```
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
```
declare module "myPackage" {
    function init(config: Config): boolean;
}
```

## JSDoc
```
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

- `npm i -D ts-node`

---

- `npm i -D @types/node`
or
-  `npm i -D @types/packageName`

## Class & Getter, Setter

```
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
`npx create-next-app --typescript new-project`

## create-react-app typescript
`yarn create react-app my-app --template typescript`

## error

useState hook을 사용하여 배열을 정의할 때 타입스크립트 에러가 발생함.

useState 뒤에 <any[]> 를 명시해준다.
`const [arr, setArr] = useState<any[]>([])`