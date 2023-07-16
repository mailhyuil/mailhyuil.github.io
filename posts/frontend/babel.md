# babel

## install

```sh
npm i -D @babel/core
npm i -D @babel/cli
npm i -D @babel/preset-env
npm i -D @babel/polyfill
```

## .babelrc

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry"
      }
    ]
  ]
}
```
