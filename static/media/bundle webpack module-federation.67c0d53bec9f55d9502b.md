# bundle webpack module-federation

## install

```sh
npm i -D webpack webpack-cli # webpack version 5 이상
```

## webpack.config.js (remote)

> localhost:3000/remoteEntry.js 에서 Button, Card 컴포넌트를 불러올 수 있게 설정

```js
const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  devServer: {
    port: 3000,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "components",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button/Button.jsx",
        "./Card": "./src/components/Card/Card.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};
```

## webpack.config.js (host)

> import('components/\*') 로 Button, Card 컴포넌트를 불러올 수 있게 설정

```js
const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  devServer: {
    port: 3000,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "home",
      filename: "remoteEntry.js",
      remotes: {
        components: "components@http://localhost:3000/remoteEntry.js",
      },
      exposes: {
        "./HomePage": "./src/pages/HomePage/HomePage.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};
```

## usage

```js
const Button = React.lazy(() => import("components/Button"));
```
