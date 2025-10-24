# bundle webpack loader js swc-loader

## install

```sh
npm i -D swc-loader
```

## usage

```js
const swcDefaultConfig = require("@nestjs/cli/lib/compiler/defaults/swc-defaults").swcDefaultsFactory().swcOptions;

module.exports = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "swc-loader",
          options: swcDefaultConfig,
        },
      },
    ],
  },
};
```
