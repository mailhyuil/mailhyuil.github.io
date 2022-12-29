# Observable

> 애플리케이션은 리모트 서버에서 데이터를 가져오는 것이 일반적이기 때문에, 비동기 동작을 처리해야 하는 경우가 대부분입니다.
>
> > rxjs 사용

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
