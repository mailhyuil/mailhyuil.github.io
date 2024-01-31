# rxjs forkJoin & zip & combineLatest

> Promise.all과 비슷하다.
>
> > 모든 옵저버블이 완료되면, 마지막에 각각의 값을 방출한다.
> >
> > > 옵저버블을 병렬로 실행하고자 할 때 사용한다.

## combineLatest

> Promise.all 과 같은 기능

```js
import { timer, combineLatest } from "rxjs";

const timerOne$ = timer(1000, 4000);
const timerTwo$ = timer(2000, 4000);
const timerThree$ = timer(3000, 4000);

combineLatest(
  timerOne$,
  timerTwo$,
  timerThree$,
  // combineLatest also takes an optional projection function
  (one, two, three) => {
    return `Timer One (Proj) Latest: ${one},
              Timer Two (Proj) Latest: ${two},
              Timer Three (Proj) Latest: ${three}`;
  }
).subscribe(console.log);
```

## forkJoin

```js

```

## zip

```js

```
