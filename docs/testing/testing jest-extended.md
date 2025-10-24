# testing jest-extended

## install

```bash
npm i -D jest-extended
```

## extends

```js
// add all jest-extended matchers
import * as matchers from "jest-extended";
import { toBeArray, toBeSealed } from "jest-extended";

expect.extend(matchers);
// or just add specific matchers
expect.extend({ toBeArray, toBeSealed });

expect([1, 2, 3]).toBeArray();
```
