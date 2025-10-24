# lodash collection groupBy

```js
import { curryRight, flow, groupBy } from "lodash-es";

const _groupBy = curryRight(groupBy);

const objArr = [
  { name: "John", age: 1 },
  { name: "Jane", age: 2 },
  { name: "Hyuil", age: 2 },
  { name: "SB", age: 1 },
];
const groupByAge = flow(_groupBy("age"));
console.log(groupByAge(objArr));
// { '1': [ { name: 'John', age: 1 }, { name: 'SB', age: 1 } ], '2': [ { name: 'Jane', age: 2 }, { name: 'Hyuil', age: 2 } ] }

const strArr = ["one", "two", "three"];
const groupByLength = flow(_groupBy("length"));
console.log(groupByLength(strArr));
// { '3': [ 'one', 'two' ], '5': [ 'three' ] }

const floatArr = [6.1, 4.2, 6.3];
const groupByFloor = flow(_groupBy(Math.floor));
console.log(groupByFloor(floatArr));
// { '4': [ 4.2 ], '6': [ 6.1, 6.3 ] }
```
