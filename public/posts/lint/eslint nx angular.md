# eslint nx angular

## eslint.config.js

```js
const nx = require("@nx/eslint-plugin");
const baseConfig = require("../../eslint.config.js");
const rxjsAngular = require("eslint-plugin-rxjs-angular");
const rxjs = require("eslint-plugin-rxjs");
const tseslintParser = require("@typescript-eslint/parser");
const angularEslintPlugin = require("@angular-eslint/eslint-plugin");

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  ...baseConfig,
  ...nx.configs["flat/angular"],
  ...nx.configs["flat/angular-template"],
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
      "@angular-eslint": angularEslintPlugin,
    },
    rules: {
      "rxjs-angular/prefer-async-pipe": "warn",
      "rxjs-angular/prefer-takeuntil": "warn",
      "rxjs-angular/prefer-composition": "warn",
      "@typescript-eslint/no-duplicate-enum-values": "off",
      "@angular-eslint/prefer-signals": "error",
    },
  },
  {
    files: ["*.component.html"],
    extends: ["plugin:@angular-eslint/template/recommended", "plugin:prettier/recommended"],
    rules: {
      "@angular-eslint/template/prefer-control-flow": "warn",
      "prettier/prettier": ["error", { overrides: [{ options: { parser: "angular" } }] }],
    },
  },
];
```
