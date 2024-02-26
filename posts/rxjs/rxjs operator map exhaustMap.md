# rxjs map exhaustMap

> 이전 Observable을 여전히 구독중이라면 새로운 Observable을 구독하지 않습니다.
>
> > map함수를 쓸 때마다 observable의 분기가 생긴다.
> >
> > > 사용 예시: 여러개의 HTTP 요청을 보내고, 이전 요청이 완료되지 않았다면 새로운 요청을 보내지 않고 싶을 때

```js
import { fromEvent, interval } from "rxjs";
import { exhaustMap, take } from "rxjs/operators";

const click$ = fromEvent(document, "click");
const interval$ = interval(1000).pipe(take(5));

click$.pipe(exhaustMap(() => interval$)).subscribe(console.log);

// click$이 발생하면 interval$을 구독하고, interval$이 끝날때까지 click$을 무시합니다.
```
