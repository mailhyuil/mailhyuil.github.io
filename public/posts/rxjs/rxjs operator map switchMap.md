# rxjs map switchMap

> 구독중이던 Observable을 unsubscribe하고 새로운 Observable을 구독합니다.
>
> > map함수를 쓸 때마다 observable의 분기가 생긴다.
> >
> > > 사용 예시: 여러개의 요청을 순차적으로 보내고 싶을 때

```js
import { interval, map, of, switchMap } from "rxjs";

const letters$ = of("A", "B", "C");
const interval$ = interval(1000);

const result$ = letters$.pipe(switchMap((x) => interval$.pipe(map((i) => x + " => " + i))));

result$.subscribe((x) => console.log(x));

// A, B, C가 방출될 때마다 interval$을 구독하고, 이전 구독을 unsubscribe합니다.
// 따라서 A, B는 구독이 취소되고 C만 구독됩니다.
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
