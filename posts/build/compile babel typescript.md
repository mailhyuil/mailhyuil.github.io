# babel typescript

> babel은 컴파일 시 타입검사를 할 수 없고 index.d.ts를 생성할 수 없다.
>
> > 때문에 typescript 패키지를 함께 사용해서 typescript로 타입검사를 하고 index.d.ts를 생성 컴파일만 babel로

## install

```sh
npm i -D @babel/core
npm i -D @babel/cli
npm i -D @babel/preset-env
npm i -D @babel/preset-typescript
npm i -D @babel/plugin-proposal-decorators
npm i -D babel-plugin-transform-typescript-metadata

babel src -d dist --extensions .ts
```

## babel.config.js

```js
module: {
  rules: [
    {
      test: /\.(?:ts|js)$/,
      include: path.resolve(__dirname, 'src'),
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { loose: true }],
            '@babel/preset-typescript',
          ],
          plugins: [
            'babel-plugin-transform-typescript-metadata',
            ['@babel/plugin-proposal-decorators', { legacy: true }],
          ],
        },
      },
    },
  ],
},
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "noEmit": true,
    "isolatedModules": true
  }
}
```

## package.json

```json
{
  "scripts": {
    "typecheck": "tsc --noEmit --watch",
    "bundle": "webpack --config webpack.config.js --watch",
    "build": "npm run typecheck && npm run bundle"
  }
}
```
