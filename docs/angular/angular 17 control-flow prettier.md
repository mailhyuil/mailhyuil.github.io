# angular 17 control-flow prettier

> "prettier": "3.3.3"

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
    "prettier/prettier": ["error", { "overrides": [{ "options": { "parser": "angular" } }] }] // prettier가 앵귤러 템플릿을 포맷할 때 angular parser를 사용하도록 설정
  }
}
```
