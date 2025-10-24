# eslint typescript

## install

```sh
npm i -D eslint
npm i -D @typescript-eslint/parser
npm i -D @typescript-eslint/eslint-plugin
```

## .eslintrc.json

```json
{
    "files": ["*.ts", "*.tsx"],
    "extends": ["plugin:@nx/typescript"],
    "rules": {
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/unbound-method": "off"
    }
},
```
