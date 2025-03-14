# babel plugin preset-react

> 내부적으로 @babel/plugin-syntax-jsx, @babel/plugin-transform-react-jsx, @babel/plugin-transform-react-display-name 플러그인이 포함되어 있다.

## install

```sh
npm i -D @babel/preset-env
npm i -D @babel/preset-react
```

## babel.config.json

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

## usage

> 터미널에서 실행하거나 node에서 실행하여 컴파일 가능

```sh
babel --presets @babel/preset-react script.js
```

```js
require("@babel/core").transformSync("code", {
  presets: ["@babel/preset-react"],
});
```
