# bundle webpack loader assets webpack-image-resize-loader

## install

```sh
npm i -D sharp
npm i -D webpack-image-resize-loader
```

## webpack.config.js

```js
module.exports = (config) => {
  config.optimization.minimize = true;
  config.module.rules[1].oneOf[1] = {
    test: /\.(jpe?g|png|webp)$/i,
    use: {
      loader: "responsive-loader",
      options: {
        adapter: require("responsive-loader/sharp"),
      },
    },
  };

  return config;
};
```
