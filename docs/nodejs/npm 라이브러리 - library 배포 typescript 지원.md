# npm publish typescript 지원

## install

```sh
npm i -D typescript
npm i -D @types/node
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es6" /* 최신 브라우저는 es6을 대부분 지원한다. */,
    "module": "ES6" /* 모듈 시스템을 지정한다. */,
    "lib": ["es5", "es6", "dom"] /* 타입스크립트가 어떤 버전의 JS의 빌트인 API를 사용할 건지에 대한 것을 명시해 준다. */,
    "declaration": true /* 타입스크립트가 자동으로 타입정의 (d.ts) 파일을 생성해 준다. */,
    "outDir": "dist" /* 컴파일된 결과물을 어디에 저장할지에 대한 것을 명시해 준다. */,
    "strict": true /* 타입스크립트의 엄격한 모드를 활성화한다. */
  },
  "include": ["src/index.ts"] /* 컴파일할 대상을 명시해 준다. */
}
```

## package.json

```json
{
  "name": "@mailhyuil/parent",
  "version": "0.0.3",
  "type": "module",
  "main": "src/index.js",
  "scripts": {
    "prepack": "npm run build", // prepack은 npm publish를 실행하기 전에 실행되는 스크립트이다.
    "build": "npm run build:tsc",
    "build:tsc": "tsc"
  },
  "exports": {
    ".": {
      "types": "./src/index.d.ts", // typescript 지원 시
      "import": "./src/index.js",
      "require": "./src/index.cjs"
    }
  },
  "license": "MIT",
  "devDependencies": {
    "@types/node": "^18.15.0",
    "typescript": "^4.9.5"
  }
}
```
