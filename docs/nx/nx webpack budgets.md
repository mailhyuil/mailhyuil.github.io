# nx webpack budgets

> 성능 문제가 해결하기가 너무 어려워지기 전에 경고하는 것
>
> > main.js 파일의 크기는 170KB 미만으로 전달하는 것이 좋다

## project.json

> targets -> configurations -> budgets -> maximumError

```json
"configurations": {
        "production": {
          "budgets": [
            {
              "type": "initial",
              "maximumWarning": "500kb",
              "maximumError": "2mb"
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
        }
      },
```
