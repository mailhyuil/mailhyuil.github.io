# rxjs map concatMap

> Observable이 값을 방출할 때마다 inner Observable의 값을 전부 방출할 때까지 기다립니다.
>
> > map함수를 쓸 때마다 observable의 분기가 생긴다.
> >
> > > 사용 예시: 앞선 HTTP요청이 완료될 때까지 다음 요청을 보내지 않고 싶을 때

```js
import { interval, map, of, concatMap } from "rxjs";

const letters$ = of("A", "B", "C");
const interval$ = interval(1000);

const result$ = letters$.pipe(concatMap((x) => interval$.pipe(map((i) => x + " => " + i))));

result$.subscribe((x) => console.log(x));

// A, B, C가 방출될 때마다 interval$을 구독하고, 이전 구독이 완료될 때까지 기다립니다.
// 따라서 A가 방출되고 A가 완료되지 않았기 때문에 B, C는 방출되지 않습니다. (interval은 완료가 되지 않기 때문에)
// Output:
// A => 0
// A => 1
// A => 2
// A => 3
// A => 4
// A => 5
// A => 6
// ...
```
