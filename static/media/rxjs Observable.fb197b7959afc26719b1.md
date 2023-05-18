# Observable

> Observer에게 값을 전달
>
> > 콜백함수에 후속조치를 정의

## 생성

```
new Observable((observer)=>{

})
```

## of

> 단일 동기

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

## from

> 다중 동기

## fromPromise

> 단일 비동기

## fromEvent

> 다중 비동기

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
