# angular SSR local에서 서버 사용

## project.josn / angular.json

```json
{
  "serve-ssr": {
    "executor": "@angular-devkit/build-angular:ssr-dev-server",
    "configurations": {
      "development": {
        "browserTarget": "client:build:development",
        "serverTarget": "client:build:development",
        "port": 4000,
        "inspect": true,
        "watch": true
      }
    },
    "defaultConfiguration": "development"
  }
}
```

## run

```sh
nx serve-ssr client # dist에 server.mjs가 생성된다.
node --inspect=7000 dist/apps/client/server/server.mjs
```
