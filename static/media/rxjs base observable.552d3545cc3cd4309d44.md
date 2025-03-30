# Observable

> Observer에게 값을 전달
>
> > 콜백함수에 후속조치를 정의
> >
> > > stream을 기반으로 한다.
> > >
> > > > 즉 Observable을 구독하는 행위는 stream에 connect하는 행위이다.

## 생성

```ts
new Observable((observer) => {});
```

## of

> 단일 동기

```ts
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

## from

> 다중 동기

## fromPromise

> 단일 비동기

## fromEvent

> 다중 비동기

## class

```ts
getHeroes(): Observable<Hero[]> {
  const heroes = of(HEROES);
  return heroes;
}
```

```ts
getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}
```
