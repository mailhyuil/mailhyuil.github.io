# lodash creation flip

> `flip`은 함수의 인자 순서를 뒤집어주는 함수이다.

```js
import flip from "lodash/flip";
import toArray from "lodash/toArray";

const flipped = flip(() => toArray(arguments));

flipped("a", "b", "c", "d");
// ['d', 'c', 'b', 'a']
```
