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

> Converts the arguments to an observable sequence.
>
> > of(1,2,3)는 observer.next(1), observer.next(2), observer.next(3)과 같다

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
