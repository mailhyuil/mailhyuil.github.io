# rxjs zip

```js
import { of, zip, map } from "rxjs";

const age$ = of(27, 25, 29);
const name$ = of("Foo", "Bar", "Beer");
const isDev$ = of(true, true, false);

zip(age$, name$, isDev$)
  .pipe(map(([age, name, isDev]) => ({ age, name, isDev })))
  .subscribe((x) => console.log(x));

// Outputs
// { age: 27, name: 'Foo', isDev: true }
// { age: 25, name: 'Bar', isDev: true }
// { age: 29, name: 'Beer', isDev: false }
```
