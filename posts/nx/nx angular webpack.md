# nx webpack angular

## project.json

> executor를 변경

```json
"build": {
    "executor": "@nx/angular:webpack-browser",
    "options": {
        "main": "apps/admin/src/main.ts", // "browser": "apps/admin/src/main.ts" 를 main으로 변경
        "buildLibsFromSource": false,
        "customWebpackConfig": {
          "path": "apps/client/webpack.config.js"
        }
    }
},
"serve": {
    "executor": "@nx/angular:dev-server",
}
```

## webpack.config.js

```js
const webpack = require("webpack");

function getClientEnvironment() {
  // Grab NX_* environment variables and prepare them to be injected
  // into the application via DefinePlugin in webpack configuration.
  const NX_APP = /^NX_/i;

  const raw = Object.keys(process.env)
    .filter((key) => NX_APP.test(key))
    .reduce((env, key) => {
      env[key] = process.env[key];
      return env;
    }, {});

  // Stringify all values so we can feed into webpack DefinePlugin
  return {
    "process.env": Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {}),
  };
}

/**
 * @param {import('webpack').Configuration} config
 * @param {*} options
 * @param {*} context
 * @returns {import('webpack').Configuration}
 */
module.exports = (config, options, context) => {
  // Overwrite the mode set by Angular if the NODE_ENV is set
  config.mode = config.mode;
  config.plugins = config.plugins || [];
  config.plugins.push(new webpack.DefinePlugin(getClientEnvironment()));
  return config;
};
```
