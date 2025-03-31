# Subscription

> .subscribe는 동기적을 실행됨
>
> > 비동기적으로 실행하고 싶다면 .subscribe()를 setTimeout()으로 감싸서 실행하면 된다.
> >
> > 또는 observeOn(asyncScheduler)를 사용하면 된다.
> >
> > > subscription.unsubscribe() 함수를 사용해서 구독을 취소 할 수 있다.

```ts
import { interval } from "rxjs";

const observable = interval(1000);
const subscription = observable.subscribe((x) => console.log(x));
// Later:
// This cancels the ongoing Observable execution which
// was started by calling subscribe with an Observer.
subscription.unsubscribe();
```
