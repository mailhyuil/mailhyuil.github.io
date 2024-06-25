# css to js module

## styles.css

```css
body {
  background-color: lightgray;
}
```

## webpack.config.js

> css-loader가 css를 js module로 변환해준다.

```js
export default {
  entry: "./index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        loader: "css-loader",
        options: {
          modules: true,
        },
      },
    ],
  },
};
```

## usage

```js
import styles from "./styles.css";

console.log(styles);
```
