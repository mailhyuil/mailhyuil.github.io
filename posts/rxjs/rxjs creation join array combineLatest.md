# rxjs combineLatest

> source를 array로 받음 /// combineLatest([a$, b$])

```js
const a$ = new BehaviorSubject(1);
const b$ = new BehaviorSubject(2);
const total$ = combineLatest([a$, b$]).pipe(map(([a, b]) => a + b));

// 위는 아래와 같다.
let a = 1;
let b = 2;
let total = a + b;
```
