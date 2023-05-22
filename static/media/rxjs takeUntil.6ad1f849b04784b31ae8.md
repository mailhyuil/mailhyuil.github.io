## takeUntil()

> notifier가 value를 emit할 때까지 미러링

```ts
import { interval, fromEvent, takeUntil } from "rxjs";

const source = interval(1000);
const clicks = fromEvent(document, "click");
const result = source.pipe(takeUntil(clicks));
result.subscribe((x) => console.log(x));
```

```
some$?: Observable<{ name: string }>;

this.httpService.get<{ name: string }>('').pipe(takeUntil(this.some$!));
```
