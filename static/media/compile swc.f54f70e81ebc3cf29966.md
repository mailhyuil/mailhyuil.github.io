# swc (Speedy Web Compiler)

> Rust-based compiler

## install

```sh
npm i -D @swc/cli
npm i -D @swc/core
```

## .swcrc

```json
{
  "$schema": "https://swc.rs/schema.json",
  "jsc": {
    "parser": {
      "syntax": "typescript",
      "jsx": false,
      "dynamicImport": false,
      "privateMethod": false,
      "functionBind": false,
      "exportDefaultFrom": false,
      "exportNamespaceFrom": false,
      "decorators": false,
      "decoratorsBeforeExport": false,
      "topLevelAwait": false,
      "importMeta": false
    },
    "transform": null,
    "target": "es5",
    "loose": false,
    "externalHelpers": false,
    "minify": {
      "mangle": true,
      "compress": true
    },
    // Requires v1.2.50 or upper and requires target to be es2016 or upper.
    "keepClassNames": false
  },
  "minify": true
}
```

## script

```json
{
  "scripts": {
    "compile": "swc ./main.ts -o dist/main.js"
  }
}
```
