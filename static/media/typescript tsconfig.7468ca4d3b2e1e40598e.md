# typescript tsconfig.json

> tsconfig.json determines how TypeScript does type checking
>
> > tsconfig.json은 TypeScript가 타입 체크를 하는 방법을 결정한다.

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

## types

> If types is specified, only packages listed will be included in the global scope.
>
> > types를 지정하면, 전역 스코프에 나열된 패키지만 포함된다.
> >
> > > @types/node, @types/jest 만 전역 스코프

```js
types: ["node", "jest"];
```
