# bundle webpack module css

> css를 js module로 변환
>
> > style에 임의의 class를 추가하고 그 클래스를 js에서 참조하는 방식

## style.css

```css
.button {
  background-color: blue;
  color: red;
}

:global(.global_button) {
  background-color: red;
  color: blue;
}
```

## index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Page</title>
    <script defer src="../dist/bundle.js"></script>
  </head>
  <body>
    <button id="btn">simple button</button>
  </body>
</html>
```

## index.js

```js
import * as style from "./style.css";

const btn = document.querySelector("#btn");

if (!btn) throw new Error("Button not found");

console.log(style.button);

btn.classList.add([style.button]);
```

## webpack.config.js

> css-loader가 css를 js module로 변환해준다.

```js
const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [{ loader: "style-loader" }, { loader: "css-loader", options: { modules: true } }],
      },
    ],
  },
  watch: true,
};
```
