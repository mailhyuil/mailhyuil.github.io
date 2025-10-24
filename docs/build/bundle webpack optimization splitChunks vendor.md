# bundle webpack optimization splitChunks vendor

> 청크간에 겹치는 패키지들을 별도의 파일로 추출해주는 코드
>
> > "vendor" 코드는 프로젝트의 나머지 코드와 분리되어 관리되며,
> >
> > > 주로 라이브러리 코드의 크기를 줄이거나 브라우저 캐싱을 최적화하기 위해 사용됩니다.

## 패키지들을 각각 다른 bundle로 분리하기

```js
module.exports = {
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/, // 모든 경로의 node_modules 폴더
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace("@", "")}`;
          },
        },
      },
    },
  },
};
```

## 여러 패키지를 따로 분리하기

```js
module.exports = {
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "reactvendor",
        },
        utilityVendor: {
          test: /[\\/]node_modules[\\/](lodash|moment|moment-timezone)[\\/]/,
          name: "utilityVendor",
        },
        bootstrapVendor: {
          test: /[\\/]node_modules[\\/](react-bootstrap)[\\/]/,
          name: "bootstrapVendor",
        },
        vendor: {
          test: /[\\/]node_modules[\\/](!react-bootstrap)(!lodash)(!moment)(!moment-timezone)[\\/]/,
          name: "vendor",
        },
      },
    },
  },
};
```
