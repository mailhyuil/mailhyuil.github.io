# typescript tsconfig compilerOptions paths

> baseUrl을 기준으로 상대경로를 이용해서 설정
>
> > paths는 tsc만 알아먹기 때문에 빌드 후에도 resolve할 수 있도록 추가 설정이 필요하다.
> >
> > > webpack의 resolve.alias 기능을 사용하거나
> > >
> > > ts-node를 사용 시 tsconfig-paths 라이브러리를 사용

## install

```sh
npm i -D typescript

# webpack 사용 시
npm i -D webpack
npm i -D webpack-cli
npm i -D ts-loader

# ts-node 사용 시
npm i -D ts-node
npm i -D tsconfig-paths
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "baseUrl": ".",
    "skipLibCheck": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*"]
}
```

## webpack.config.js

```js
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [{ test: /\.ts$/, exclude: /node_modules/, use: "ts-loader" }],
  },
};
```

## script

```json
{
  "scripts": {
    // webpack resolve 사용 시
    "webpack": "webpack build --config ./webpack.config.js && node dist/bundle.js",
    // ts-node 사용 시
    "ts-node": "ts-node -r tsconfig-paths/register src/index.ts"
  }
}
```
