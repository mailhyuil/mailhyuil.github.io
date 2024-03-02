# lodash groupBy

```js
import { curryRight, flow, groupBy } from "lodash-es";

const _groupBy = curryRight(groupBy);

const arr = [
  { name: "John", age: 1 },
  { name: "Jane", age: 2 },
  { name: "Hyuil", age: 2 },
  { name: "SB", age: 1 },
];

const res = flow(_groupBy("age"));

console.log(res(arr));
```
