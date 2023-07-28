# nx webpack angular

## project.json

> executor를 변경

```json
"build": {
    "executor": "@nx/angular:webpack-browser",
    "options": {
        "buildLibsFromSource": false,
        "customWebpackConfig": {
          "path": "packages/client/webpack.config.js"
        }
    }
},
"serve": {
    "executor": "@nx/angular:webpack-dev-server",
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

module.exports = (config, options, context) => {
  // Overwrite the mode set by Angular if the NODE_ENV is set
  config.mode = config.mode;
  config.plugins.push(new webpack.DefinePlugin(getClientEnvironment()));
  return config;
};
```
