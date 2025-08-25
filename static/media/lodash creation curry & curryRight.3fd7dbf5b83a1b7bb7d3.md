# lodash creation curry

> 함수를 받아서 인자를 받을 때까지 기다리는 함수를 반환한다. (커링 함수)

## curry

```js
import { curry, groupBy } from "lodash-es";

const fn = curry(groupBy);

const res = fn([6.1, 4.2, 6.3])(Math.floor);

console.log(res);
```

## curryRight

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
