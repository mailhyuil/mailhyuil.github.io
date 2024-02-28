# rxjs transformation buffer

> notifierObservable이 값을 방출하기 전까지 값을 모은다.

```js
import { fromEvent, interval, buffer } from "rxjs";

const clicks = fromEvent(document, "click");
const intervalEvents = interval(1000);
const buffered = intervalEvents.pipe(buffer(clicks));
buffered.subscribe((x) => console.log(x));
```
