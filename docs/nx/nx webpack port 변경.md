# nx webpack port 변경

```json
"serve": {
  "executor": "@angular-devkit/build-angular:dev-server",
  "options": {
    "port": 4201
  },
  "configurations": {
    "production": {
      "buildTarget": "admin:build:production"
    },
    "development": {
      "buildTarget": "admin:build:development"
    }
  },
  "defaultConfiguration": "development"
},
```
