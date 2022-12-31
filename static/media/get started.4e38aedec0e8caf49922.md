# typescript (타입스크립트)

> ts -트랜스파일링-> js -번들링-> main.js -> deploy

1. npm i -D typescript

2. package.json

```json
  "scripts": {
    "build": "tsc"
  }
```

3. tsconfig.json
   > tsc --optionName 대신 tsconfig.json의 설정을 읽어서 실행시킬 수 있다.

```json
{
  "include": ["src"],
  "compilerOptions": {
    "outDir": "build",
    "target": "ES6",
    "lib": ["ES6", "DOM"],
    "strict": true,
    "allowJs": true
  }
}
```

## error

> useState hook을 사용하여 배열을 정의할 때 타입스크립트 에러가 발생함.

- useState 뒤에 <any[]> 를 명시해준다.

```ts
const [arr, setArr] = useState<any[]>([]);
```
