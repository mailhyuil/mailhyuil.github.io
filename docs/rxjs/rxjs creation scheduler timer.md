# rxjs creation scheduler timer

> 초기 지연 시간을 지정할 수 있으며, 지정된 시간마다 값을 방출하는 Observable을 생성합니다.
>
> > interval과 비슷하지만, interval은 0부터 시작하여 지정된 시간마다 값을 방출합니다.

```ts
if (!this.cache$) {
  // Set up timer that ticks every X milliseconds
  const timer$ = timer(0, REFRESH_INTERVAL);

  // For each tick make an http request to fetch new data
  this.cache$ = timer$.pipe(
    switchMap((_) => this.requestJokes()),
    shareReplay(CACHE_SIZE)
  );
}

return this.cache$;
```
