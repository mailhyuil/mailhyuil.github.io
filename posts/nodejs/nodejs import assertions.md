# nodejs import assertions

> json module을 import할 때 type을 assert 후 가져와야 에러가 발생하지 않는다.

```js
import json from "./project.json" assert { type: "json" };
console.log(json);
```
