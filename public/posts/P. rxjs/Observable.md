# Observable

> 애플리케이션은 리모트 서버에서 데이터를 가져오는 것이 일반적이기 때문에, 비동기 동작을 처리해야 하는 경우가 대부분입니다.

## 구성

```
Observable =
Subject =
Observer =
```

```
import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

console.log("just before subscribe");
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
console.log("just after subscribe");
```

## of

> Converts the arguments to an observable sequence.

```
of([1, 2, 3, 4]).subscribe({
  next: () => {
    console.log("next");
  },
  complete: () => {
    console.log("completed");
  },
  error: () => {
    console.error("error");
  },
});
```

## class

```
getHeroes(): Observable<Hero[]> {
  const heroes = of(HEROES);
  return heroes;
}
```

```
getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}
```
