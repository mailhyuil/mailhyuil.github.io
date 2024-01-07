# Subscription

> .subscribe는 subscription 객체를 리턴한다
>
> > subscription.unsubscribe() 함수를 사용해서 구독을 취소 할 수 있다.

```ts
import { interval } from "rxjs";

const observable = interval(1000);
const subscription = observable.subscribe((x) => console.log(x));
// Later:
// This cancels the ongoing Observable execution which
// was started by calling subscribe with an Observer.
subscription.unsubscribe();
```
