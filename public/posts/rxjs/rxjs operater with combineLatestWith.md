# rxjs operator combineLatestWith

```js
import { fromEvent, combineLatestWith, map } from 'rxjs';

// Setup: Add two inputs to the page
const input1 = document.createElement('input');
document.body.appendChild(input1);
const input2 = document.createElement('input');
document.body.appendChild(input2);

// Get streams of changes
const input1Changes$ = fromEvent(input1, 'change');
const input2Changes$ = fromEvent(input2, 'change');

// Combine the changes by adding them together
input1Changes$.pipe(
  combineLatestWith(input2Changes$),
  map(([e1, e2]) => (<HTMLInputElement>e1.target).value + ' - ' + (<HTMLInputElement>e2.target).value)
)
.subscribe(x => console.log(x));
```
