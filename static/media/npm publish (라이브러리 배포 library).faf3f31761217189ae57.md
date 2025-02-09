# npm publish

> commonjs 로 만든 패키지는 esm으로 사용 가능
>
> > esm으로 만든 패키지는 commonjs로 사용 불가능

## login

```sh
npm login
npm whoami # 로그인이 되었는지 확인
npm config ls -l # 설정 확인
```

## package.json

```json
{
  "name": "@mailhyuil/test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js", // commonjs
  "module": "index.js", // esm
  "types": "index.d.ts", // typescript
  "files": [
    "dist", // commonjs
    "esm", // esm
    "src" // src
  ],
  "exports": {
    ".": {
      "default": "./dist/index.js", // commonjs
      "require": "./dist/index.js", // commonjs
      "import": "./esm/index.js", // esm
      "types": "./dist/index.d.ts" // typescript
    }
  },
  "scripts": {
    "version": "npm version patch",
    "build:cjs": "nest build nestjs-libs --config nest-cli.cjs.json --path tsconfig.lib-cjs.json && tsc --emitDeclarationOnly --project tsconfig.lib-cjs.json",
    "build:esm": "nest build nestjs-libs --config nest-cli.esm.json --path tsconfig.lib-esm.json && tsc --emitDeclarationOnly --project tsconfig.lib-esm.json",
    "build": "pnpm run build:cjs && pnpm run build:esm",
    "prepublish": "pnpm build"
  },
  "keywords": [],
  "author": "mailhyuil",
  "license": "ISC",
  "dependencies": {
    "@mailhyuil/local": "file:local"
  }
}
```

## index.js (라이브러리 생성)

```js
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

export { add, divide, multiply, subtract };
```

## 배포

> 한번 publish를 하고 업데이트 하려면 버전 넘버를 올려줘야한다.

```sh
npm publish # 기본이 private 패키지다 private 패키지는 결제가 필요
npm publish --access=public # public 패키지로 publish
npm version patch # 패치버전을 올려준다
npm version minor # 마이너버전을 올려준다
npm version major # 메이저버전을 올려준다
npm publish
```

### prepack script

```json
scripts: {
  "prepack": "npm version patch", // prepack은 npm publish를 실행하기 전에 실행되는 스크립트이다.
}
```
