# testing jest config transform

> if you use some syntax not supported by Node out of the box (such as JSX, TypeScript, Vue templates) then you'll need to transform that code into plain JavaScript
>
> > 만약 node에서 지원하지 않는 문법 (e.g. jsx, typescript, vue..)을 사용한다면 transform을 통해서 plain javascript로 변환해줘야한다.

## jest.config.ts

> typescript를 ts-jest를 통해 transform하고 그 때 사용할 tsconfig를 명시

```ts
/* eslint-disable */
export default {
  transform: {
    "^.+\\.[tj]s$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.spec.json" }],
  },
};
```
