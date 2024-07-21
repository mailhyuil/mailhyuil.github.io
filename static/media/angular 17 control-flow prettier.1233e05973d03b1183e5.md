# angular control-flow prettier

> prettier 3.1.1

## .prettierrc

```json
{
  "overrides": [
    {
      "files": "*.html",
      "options": {
        "parser": "angular"
      }
    }
  ]
}
```

## eslint 사용 시 (eslintrc.json)

```json
{
  "files": ["*.component.html"],
  "extends": ["plugin:@angular-eslint/template/recommended", "plugin:prettier/recommended"],
  "rules": {
    "@angular-eslint/template/prefer-control-flow": "warn",
    "prettier/prettier": ["error", { "overrides": [{ "options": { "parser": "angular" } }] }]
  }
}
```
