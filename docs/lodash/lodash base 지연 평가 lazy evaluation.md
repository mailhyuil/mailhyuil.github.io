# lodash base 지연 평가 lazy evaluation

> 함수에 모든 배열을 다 넘기지 않고 하나의 값씩 넘겨서 연산
>
> > chain 방식에서만 지원한다.

```js
import _ from "lodash";
import flow from "lodash/fp/flow.js";
import map from "lodash/fp/map.js";
import take from "lodash/fp/take.js";

const arr = [1, 2, 3, 4, 5];

// chain 사용 // lazy evaluation을 지원한다.
const result1 = _.chain(arr)
  .map((val) => {
    console.log(val);
    return val;
  })
  .take(2)
  .value();

console.log("chaining result : ", result1);
// 1
// 2
// chaining result :  [ 1, 2 ]

// flow 사용 // lazy evaluation를 지원하지 않는다.
const fn = flow(
  map((val) => {
    console.log(val);
    return val;
  }),
  take(2)
);
const result2 = fn(arr);
console.log("flowing result : ", result2);
// 1
// 2
// 3
// 4
// 5
// flowing result :  [ 1, 2 ]
```
