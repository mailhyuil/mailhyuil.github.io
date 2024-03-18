# angular SSR server.ts in development

## project.json

```json
"serve-ssr": {
    "executor": "@angular-devkit/build-angular:ssr-dev-server",
    "options": {
    "browserTarget": "client:build:development",
    "serverTarget": "client:build:development"
    },
    "configurations": {
    "development": {}
    },
    "defaultConfiguration": "development"
},
```
