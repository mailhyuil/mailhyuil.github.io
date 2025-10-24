# rxjs filtering takeWhile

```ts
import { fromEvent, takeWhile } from "rxjs";

const clicks = fromEvent<PointerEvent>(document, "click");
const result = clicks.pipe(takeWhile((ev) => ev.clientX > 200));
result.subscribe((x) => console.log(x));
```
