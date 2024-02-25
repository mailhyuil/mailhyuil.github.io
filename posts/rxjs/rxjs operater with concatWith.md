# rxjs operator concatWith

```js
import { fromEvent, map, take, concatWith } from "rxjs";

const clicks$ = fromEvent(document, "click");
const moves$ = fromEvent(document, "mousemove");

clicks$
  .pipe(
    map(() => "click"),
    take(1),
    concatWith(moves$.pipe(map(() => "move")))
  )
  .subscribe((x) => console.log(x));

// 'click'
// 'move'
// 'move'
// 'move'
// ...
```
