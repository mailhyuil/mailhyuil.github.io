# testing jest ts-jest

> jest는 js 기반의 라이브러리이기 때문에 typescript를 사용하려면 ts-jest를 사용해야한다.
>
> > ts-jest를 직접 사용하는 방식과 babel의 transform을 사용하는 방식이 있다.

## ts-jest 직접 사용

```sh
npm install -D jest
npm install -D @types/jest
npm install -D ts-jest
npm install -D typescript

npx ts-jest config:init
```

## babel transform 사용

> jest.config.ts

```ts
/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
};
```

## some.spec.ts

> test, expect.. 는 import할 필요 없음

```ts
test("1 + 1은?", () => {
  expect(1 + 1).toBe(2);
});
```
