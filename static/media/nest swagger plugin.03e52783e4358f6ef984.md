# nest swagger plugin

> 자동으로 @ApiProperty 붙여준다
>
> > optional, required 세팅.. 등등

## nest-cli.json

```json
"plugins": [
  {
    "name": "@nestjs/swagger",
    "options": {
      "introspectComments": true
    }
  }
]
```

## nx 사용 시

> project.json 에 추가

```json
"options": {
  "target": "node",
  "compiler": "tsc",
  "outputPath": "dist/apps/server",
  "main": "apps/server/src/main.ts",
  "tsConfig": "apps/server/tsconfig.app.json",
  "assets": ["apps/server/src/assets"],
  "isolatedConfig": true,
  "webpackConfig": "apps/server/webpack.config.js",
  "generatePackageJson": true,
  "tsPlugins": [
    {
      "name": "@nestjs/swagger/plugin",
      "options": {
        "classValidatorShim": false,
        "introspectComments": true
      }
    }
  ]
},
```
