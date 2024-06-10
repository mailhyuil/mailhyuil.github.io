# typescript eslint no-throw-literal

> class로 정의한 error만 throw하도록 eslint 설정

```json
{
    "files": ["*.ts", "*.tsx"],
    "extends": ["plugin:@nx/typescript"],
    "rules": {
    "@typescript-eslint/no-throw-literal": "off",
    }
},
```
