# bundle webpack plugin compression image-minimizer-webpack-plugin

## install

```sh
npm i -D image-minimizer-webpack-plugin

# 사용하고 싶은 압축 도구 설치
## lossless
npm i -D imagemin-gifsicle
npm i -D imagemin-jpegtran
npm i -D imagemin-optipng
npm i -D imagemin-svgo

## lossy
npm i -D imagemin-gifsicle
npm i -D imagemin-mozjpeg
npm i -D imagemin-pngquant
npm i -D imagemin-svgo

npm i -D @squoosh/lib
npm i -D sharp
npm i -D svgo
```

## mode

> Lossless : 퀄리티 손실이 없음
>
> > Lossy : 퀄리티 손실이 있음

## imagemin 사용

```js
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = (config, options, context) => {
  // Overwrite the mode set by Angular if the NODE_ENV is set
  config.optimization.minimize = true;
  config.optimization.minimizer.push(
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [["mozjpeg", { quality: 85 }]],
        },
      },
    })
  );
  config.mode = config.mode;
  config.plugins.push(new webpack.DefinePlugin(getClientEnvironment()));
  return config;
};
```

## squoosh 사용

```js
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  module: {
    rules: [
      // You need this, if you are using `import file from "file.ext"`, for `new URL(...)` syntax you don't need it
      {
        test: /\.(jpe?g|png)$/i,
        type: "asset",
      },
    ],
  },
  optimization: {
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.squooshMinify,
          options: {
            // Your options for `squoosh`
          },
        },
      }),
    ],
  },
};
```

## sharp 사용

```js
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  module: {
    rules: [
      // You need this, if you are using `import file from "file.ext"`, for `new URL(...)` syntax you don't need it
      {
        test: /\.(jpe?g|png)$/i,
        type: "asset",
      },
    ],
  },
  optimization: {
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
          options: {
            encodeOptions: {
              // Your options for `sharp`
              // https://sharp.pixelplumbing.com/api-output
            },
          },
        },
      }),
    ],
  },
};
```

## svgo 사용

```js
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  module: {
    rules: [
      // You need this, if you are using `import file from "file.ext"`, for `new URL(...)` syntax you don't need it
      {
        test: /\.(svg)$/i,
        type: "asset",
      },
    ],
  },
  optimization: {
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.svgoMinify,
          options: {
            encodeOptions: {
              // Pass over SVGs multiple times to ensure all optimizations are applied. False by default
              multipass: true,
              plugins: [
                // set of built-in plugins enabled by default
                // see: https://github.com/svg/svgo#default-preset
                "preset-default",
              ],
            },
          },
        },
      }),
    ],
  },
};
```
