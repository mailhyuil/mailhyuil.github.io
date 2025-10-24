# rxjs join withLatestFrom

```js
import { fromEvent, interval, withLatestFrom } from "rxjs";

const clicks = fromEvent(document, "click");
const timer = interval(1000);
const result = clicks.pipe(withLatestFrom(timer));
result.subscribe((x) => console.log(x));
```
