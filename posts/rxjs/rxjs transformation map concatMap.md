# rxjs map concatMap

> outer가 값을 방출할 때마다 buffer에 저장 및 inner를 구독이 끝나면 buffer에 저장된 다음 값에 대해 inner를 구독합니다.
>
> > sequential
> >
> > > 여러개의 HTTP 요청을 순차적으로 보내고 싶을 때

```js
import { interval, map, of, concatMap } from "rxjs";

const letters$ = of("A", "B", "C");
const interval$ = interval(1000);

const result$ = letters$.pipe(concatMap((x) => interval$.pipe(map((i) => x + " => " + i))));

result$.subscribe((x) => console.log(x));

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
