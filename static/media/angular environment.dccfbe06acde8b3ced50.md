# angular environment

> dotenv 대신 사용

## /environments/environment.dev.ts

```ts
export const environment = {
  baseUrl: "http://localhost:3000",
};
```

## /environments/environment.prod.ts

## angular.json

```json
"configurations": {
"production": {
  "budgets": [
    {
      "type": "initial",
      "maximumWarning": "500kb",
      "maximumError": "1mb"
    },
    {
      "type": "anyComponentStyle",
      "maximumWarning": "2kb",
      "maximumError": "4kb"
    }
  ],
  "fileReplacements": [ // production 때 변경하기
    {
      "replace": "src/environments/environment.dev.ts",
      "with": "src/environments/environment.prod.ts"
    }
  ],
  "outputHashing": "all"
},
}
```
