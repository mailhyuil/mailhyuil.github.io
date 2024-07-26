# testing jest ts-jest

> jest는 js 기반의 라이브러리이기 때문에 typescript를 사용하려면 ts-jest를 사용해야한다.
>
> > ts-jest를 직접 사용하는 방식과 babel의 transform을 사용하는 방식이 있다.

## ts-jest 직접 사용

```sh
ts-jest config:init
```

## babel transform 사용

> jest.config.ts

```ts
/* eslint-disable */
export default {
  displayName: "server",
  preset: "../../jest.preset.js",
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]s$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.spec.json" }],
  },
  moduleFileExtensions: ["ts", "js", "html"],
  coverageDirectory: "../../coverage/apps/server",
};
```
