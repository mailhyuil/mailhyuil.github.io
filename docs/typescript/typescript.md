# typescript

> ts -트랜스파일링-> js -번들링-> main.js -> deploy

## install

```sh
npm i -D typescript

## usage
npx tsc
```

## tsconfig.json

> tsc --optionName 대신 tsconfig.json의 설정을 읽어서 실행시킬 수 있다.

```json
{
  "include": ["src"], // 읽을 ts 파일 경로 **/*.ts로 하면 전부 읽음
  "compilerOptions": {
    "outDir": "build",
    "target": "ES6",
    "lib": ["ES6", "DOM"],
    "strict": true,
    "allowJs": true
  }
}
```
