# DDD nodejs sheriff

> 의존성이 반대로 향하지 않도록 강제하는 lint

## install

```sh
npm i -D @softarc/sheriff-core
npm i -D @softarc/eslint-plugin-sheriff

npx sheriff init
```

## .eslintrc.js

```js
{
  "files": ["*.ts"],
  "extends": ["plugin:@softarc/sheriff/default"]
}
```

## sheriff.config.ts

```ts
import { SheriffConfig } from "@softarc/sheriff-core";

export const sheriffConfig: SheriffConfig = {
  depRules: {
    root: "noTag",
    noTag: ["noTag", "root"],
  },
};
```
