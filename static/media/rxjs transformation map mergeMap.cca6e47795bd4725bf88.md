# rxjs map mergeMap

> outer가 값을 방출할 때마다 inner를 구독합니다.
>
> > parallel
> >
> > > 모든 HTTP 요청을 병렬로 보내고 싶을 때

```js
import { interval, map, of, mergeMap } from "rxjs";

const letters$ = of("A", "B", "C");
const interval$ = interval(1000);

const result$ = letters$.pipe(mergeMap((x) => interval$.pipe(map((i) => x + " => " + i))));

result$.subscribe((x) => console.log(x));

// Output:
// A => 0
// B => 0
// C => 0
// A => 1
// B => 1
// C => 1
// A => 2
// B => 2
// C => 2
// A => 3
// B => 3
// C => 3
// A => 4
// B => 4
// C => 4
// ...
```
