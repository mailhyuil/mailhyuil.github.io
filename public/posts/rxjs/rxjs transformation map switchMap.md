# rxjs map switchMap

> outer가 값을 방출할 때마다 inner를 구독하고, 이전 구독을 unsubscribe합니다.
>
> > 첫번째 HTTP 요청을 보내고 구독 중 다른 값이 들어오면 구독을 교체하고 싶을 때
> >
> > > 항상 가장 최신 값에 대한 inner를 구독합니다.

```js
import { interval, map, of, switchMap } from "rxjs";

const letters$ = of("A", "B", "C");
const interval$ = interval(1000);

const result$ = letters$.pipe(switchMap((x) => interval$.pipe(map((i) => x + " => " + i))));

result$.subscribe((x) => console.log(x));

// Output:
// C => 0
// C => 1
// C => 2
// C => 3
// C => 4
// C => 5
// C => 6
// ...
```
