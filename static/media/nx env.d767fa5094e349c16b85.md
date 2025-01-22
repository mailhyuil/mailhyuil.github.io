# nx env

> .env.local, .env.development, .env.production 로 나누기

## project.json

```json
# build
# local 추가
"configurations": {
  "production": {
    "budgets": [
      {
        "type": "initial",
        "maximumWarning": "500kb",
        "maximumError": "3mb"
      },
      {
        "type": "anyComponentStyle",
        "maximumWarning": "2kb",
        "maximumError": "4kb"
      }
    ],
    "outputHashing": "all"
  },
  "development": {
    "buildOptimizer": false,
    "optimization": false,
    "vendorChunk": true,
    "extractLicenses": false,
    "sourceMap": true,
    "namedChunks": true
  },
  "local": {
    "buildOptimizer": false,
    "optimization": false,
    "vendorChunk": true,
    "extractLicenses": false,
    "sourceMap": true,
    "namedChunks": true
  }
},

# serve
# local 추가
"configurations": {
  "production": {
    "browserTarget": "donghang-client:build:production"
  },
  "development": {
    "browserTarget": "donghang-client:build:development"
  },
  "local": {
    "browserTarget": "donghang-client:build:local"
  }
},
```

## .env.local

```sh
SERVER_PORT=3000

# CLIENT
NX_API_ENDPOINT=http://localhost:3000/api/v1
NX_IMAGE_SERVER_URL=https://image.lepisode.team/api/upload.php
NX_FILE_SERVER_URL=https://files.lepisode.team
NX_FILE_SERVER_TOKEN=73532F8CBC421AD7B7EE43A2DE1C7
NX_DISCORD_URL=https://discord.com/api/webhooks/1042266869769441341/GKK0-TI8jlw1k9aZ-G6pZHN4gddCigwmmzk-1hUyBXd0fCgbyB-MI2kdz8u-XO4hmo5A

DATABASE_URL="postgresql://postgres:password@59.3.87.92:5432/wings-v2?schema=public"

# JWT KEY
JWT_SECRET_KEY=5BTENutJCTpGO2aHfDDs2u0KKKKpKV8s
JWT_PUBLIC_KEY=Xv26XN6L86kGOvHMS2rfV2k9HsLVEEEp
JWT_PRIVATE_KEY=PAwXjs5j7eLj8WIeczIRgZN2TdJqi2Bn

# ADMIN
ADMIN_USERNAME=admin
ADMIN_REALNAME=admin
ADMIN_PASSWORD=admin
ADMIN_PHONE=01011111111
ADMIN_ROLE=MASTER
```

## webpack

> client에서 webpack 사용 시 NX\_ prefix 붙이기

### webpack.config.js

```js
const webpack = require("webpack");

function getClientEnvironment() {
  // Grab NX_* environment variables and prepare them to be injected
  // into the application via DefinePlugin in webpack configuration.
  const NX_APP = /^NX_/i;

  const raw = Object.keys(process.env)
    .filter(key => NX_APP.test(key))
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
  config.resolve.fallback = {
    util: false,
    stream: false,
  };
  return config;
};
```
