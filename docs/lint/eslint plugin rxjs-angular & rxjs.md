# eslint plugin rxjs-angular & rxjs

## install

```sh
npm i -D eslint-plugin-rxjs
npm i -D eslint-plugin-rxjs-angular
```

## .eslintrc.json

```json
{
  "overrides": [
    {
      "rules": {
        "rxjs-angular/prefer-takeuntil": [
          "error",
          {
            "alias": ["untilDestroyed"],
            "checkComplete": false,
            "checkDecorators": ["Component"],
            "checkDestroy": false
          }
        ],
        "rxjs/no-unsafe-takeuntil": [
          "error",
          {
            "alias": ["untilDestroyed"]
          }
        ]
      }
    }
  ]
}
```
