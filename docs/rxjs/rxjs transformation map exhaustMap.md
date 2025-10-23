# rxjs map exhaustMap

> outer가 값을 방출하면 inner를 구독하고 구독 중 outer가 방출한 값을 무시합니다.
>
> > 첫번째 HTTP 요청을 보내고 구독 중 들어오는 outer의 값에 대한 구독을 무시하고 싶을 때

```js
import { fromEvent, interval } from "rxjs";
import { exhaustMap, take } from "rxjs/operators";

const click$ = fromEvent(document, "click");
const interval$ = interval(1000).pipe(take(5));

click$.pipe(exhaustMap(() => interval$)).subscribe(console.log);

// click$이 발생하면 interval$을 구독하고, interval$이 끝날때까지 click$을 무시합니다.
```
