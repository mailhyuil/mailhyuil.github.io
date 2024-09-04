# eslint config json

> json을 사용한 레거시한 방식 (deprecated)
>
> > 여전히 많이 사용된다.

## .eslintrc.json

```json
{
  "root": true,
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": { "project": ["./tsconfig.json"] },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "@typescript-eslint/strict-boolean-expressions": [
      2,
      {
        "allowString": false,
        "allowNumber": false
      }
    ]
  },
  "ignorePatterns": ["src/**/*.test.ts", "src/frontend/generated/*"]
}
```
