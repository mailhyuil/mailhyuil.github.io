# nodejs module json

> import 문으로 json을 가져오게끔하는것

## json module 활성화

> `assert { type: "json" }`
>
> > typescript 사용 시 tsconfig에 "resolveJsonModule": true,를 추가

```js
import json from "./project.json" assert { type: "json" };
console.log(json);
```
