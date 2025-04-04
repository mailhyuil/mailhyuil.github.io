# lodash lang isMatch

> property가 object와 일치하는지 확인하는 함수이다.

```js
import isMatch from "lodash/isMatch";

const object = { a: 1, b: 2 };

isMatch(object, { b: 2 });
// => true

isMatch(object, { b: 1 });
// => false
```
