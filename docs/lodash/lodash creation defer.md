# lodash creation defer

> 콜 스택이 비어있을 때 실행되는 함수를 생성
>
> > setTimeout과 비슷하다.

```js
import { defer } from "lodash-es";

defer(console.log, "hello");
// print hello after 1ms
```
