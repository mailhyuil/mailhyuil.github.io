# merge

> observable을 전부 합쳐준다. 동시성 보장

```js
import { merge, fromEvent, interval } from "rxjs";

const clicks = fromEvent(document, "click");
const timer = interval(1000);
const clicksOrTimer = merge(clicks, timer);
clicksOrTimer.subscribe((x) => console.log(x));
```
