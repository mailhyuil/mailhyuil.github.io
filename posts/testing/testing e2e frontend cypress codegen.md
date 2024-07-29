# testing e2e frontend cypress codegen

## cypress.config.js

> experimentalStudio: true 추가

```js
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalStudio: true,
  },
});
```
