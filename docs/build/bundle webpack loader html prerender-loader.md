# bundle webpack loader html prerender-loader

## install

```sh
npm i -D prerender-loader
```

## usage

```js
module.exports = {
  module: {
    rules: [
      {
        test: "src/index.html",
        loader: "prerender-loader?string",
      },
    ],
  },
};
```
