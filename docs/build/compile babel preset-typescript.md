# compile babel preset-typescript

> tsc 대신 babel을 사용할 수 있게 해주는 플러그인
>
> > 내부에 @babel/plugin-transform-typescript가 포함되어 있다.
> >
> > > babel은 컴파일시 타입검사를 할 수 없고 index.d.ts를 생성할 수 없다.
> > >
> > > > 때문에 typescript 패키지를 함께 사용해서 typescript로 타입검사를 하고 index.d.ts를 생성 컴파일만 babel로

## install

```sh
npm i -D @babel/preset-env
npm i -D @babel/preset-typescript

# js가 아닌 파일을 사용 시 ts파일을 반드시 명시해줘야한다.
babel src -d dist --extensions .ts
```

## babel.config.json

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-typescript"]
}
```

## 컴파일

> 터미널에서 실행하거나 node에서 실행하여 컴파일 가능

```sh
babel --presets @babel/preset-typescript main.ts
```

```js
require("@babel/core").transformSync("code", {
  presets: ["@babel/preset-typescript"],
  filename: "script.ts",
});
```
