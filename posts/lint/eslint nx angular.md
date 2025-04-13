# eslint nx angular

## eslint.config.js

```js
const baseConfig = require("../../eslint.config.js");
const nx = require("@nx/eslint-plugin");
const rxjsAngular = require("eslint-plugin-rxjs-angular");
const rxjs = require("eslint-plugin-rxjs");
const tseslintParser = require("@typescript-eslint/parser");
const angularEslintPlugin = require("@angular-eslint/eslint-plugin");

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  ...baseConfig,
  // {
  //   ignores: ["**/dist", "**/out", "**/build", "**/node_modules"],
  // },
  // ...nx.configs["flat/base"], // @nx/base
  // ...nx.configs["flat/typescript"], // @typescript-eslint

  ...nx.configs["flat/angular"], // @angular-eslint
  ...nx.configs["flat/angular-template"], // @angular-eslint/template
  {
    files: ["**/*.component.ts"],
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.editor.json"],
        sourceType: "module",
      },
    },
    plugins: {
      "rxjs-angular": rxjsAngular,
      rxjs: rxjs,
    },
    rules: {
      "@typescript-eslint/no-duplicate-enum-values": "off",
      "@angular-eslint/prefer-signals": "error",
      "rxjs-angular/prefer-async-pipe": "warn",
      "rxjs-angular/prefer-takeuntil": "warn",
      "rxjs-angular/prefer-composition": "warn",
    },
  },
  {
    files: ["*.component.html"],
    rules: {
      "@angular-eslint/template/prefer-control-flow": "warn",
      "prettier/prettier": ["error", { overrides: [{ options: { parser: "angular" } }] }], // prettier가 앵귤러 템플릿을 포맷할 때 angular parser를 사용하도록 설정
    },
  },
];
```
