# lodash creation wrap

> decorator 함수를 생성

```js
import { wrap } from "lodash-es";

const h1 = wrap(_.escape, function (func, text) {
  return "<h1>" + func(text) + "</h1>";
});

h1("fred, barney, & pebbles");
// => '<h1>fred, barney, &amp; pebbles</h1>'
```
