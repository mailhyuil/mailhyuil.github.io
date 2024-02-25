# rxjs map exhaustMap

> 이전 Observable을 여전히 구독중이라면 새로운 Observable을 구독하지 않습니다.

```js
import { fromEvent, interval } from "rxjs";
import { exhaustMap, take } from "rxjs/operators";

const click$ = fromEvent(document, "click");
const interval$ = interval(1000).pipe(take(5));

click$.pipe(exhaustMap(() => interval$)).subscribe(console.log);

// click$이 발생하면 interval$을 구독하고, interval$이 끝날때까지 click$을 무시합니다.
```
