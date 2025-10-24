# rxjs utility asyncScheduler

> setTimeout & setInterval : asyncScheduler
>
> > Promise : asapScheduler

## usage

> setTimeout과 setInterval처럼 사용

```js
import { asyncScheduler } from "rxjs";

// setTimeout
const task = () => console.log("it works!");

asyncScheduler.schedule(task, 2000);

// After 2 seconds logs:
// "it works!"

// setInterval
import { asyncScheduler } from "rxjs";

function task(state) {
  console.log(state);
  this.schedule(state + 1, 1000); // `this` references currently executing Action,
  // which we reschedule with new state and delay
}

asyncScheduler.schedule(task, 3000, 0);

// Logs:
// 0 after 3s
// 1 after 4s
// 2 after 5s
// 3 after 6s
```

## observeOn pipe 사용

> 구독이 비동기로 동작함

```js
import { Observable, asyncScheduler, observeOn } from "rxjs";

const observable = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
}).pipe(observeOn(asyncScheduler)); // 이 observable의 구독은 비동기로 동작함

console.log("before subscribe");
observable.subscribe({
  next(x) {
    console.log("got value " + x);
  },
  error(err) {
    console.error("something wrong occurred: " + err);
  },
  complete() {
    console.log("done");
  },
});
console.log("after subscribe");

/*
just before subscribe
just after subscribe
got value 1
got value 2
got value 3
done  
*/
```
