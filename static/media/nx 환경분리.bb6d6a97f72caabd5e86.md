# nx 환경분리

> project.json 파일의 configuations에 local 추가
>
> > 자동으로 env.local을 읽는다.

## build

> local 추가

```json
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
```

## serve

> local 추가

```json
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
