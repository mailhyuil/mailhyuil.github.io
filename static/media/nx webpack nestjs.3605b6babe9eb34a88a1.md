# nx webpack nest

## project.json

```json
"build": {
      "executor": "@nx/webpack:webpack",
      "options": {
        "webpackConfig": "apps/server/webpack.config.js",
      },
}
```

## webpack.config.js

```js
const { composePlugins, withNx } = require("@nx/webpack");

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), (config) => {
  // Update the webpack config as needed here.
  // (e.g. `config.plugins.push(new MyPlugin())`)
  return {
    ...config,
  };
});
```
