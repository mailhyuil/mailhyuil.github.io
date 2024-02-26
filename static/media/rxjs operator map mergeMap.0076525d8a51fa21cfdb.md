# rxjs map mergeMap

> switchMap과 비슷하지만, 이전 Observable을 unsubscribe하지 않고 새로운 Observable을 구독합니다.
>
> > map함수를 쓸 때마다 observable의 분기가 생긴다.
> >
> > > 사용 예시: 여러개의 HTTP 요청을 동시에 보내고 싶을 때

```js
import { interval, map, of, mergeMap } from "rxjs";

const letters$ = of("A", "B", "C");
const interval$ = interval(1000);

const result$ = letters$.pipe(mergeMap((x) => interval$.pipe(map((i) => x + " => " + i))));

result$.subscribe((x) => console.log(x));

// A, B, C가 방출될 때마다 interval$을 구독하고, 이전 구독을 unsubscribe하지 않습니다.
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
