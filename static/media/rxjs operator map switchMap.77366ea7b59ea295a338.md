# rxjs map switchMap

> 구독중이던 Observable을 unsubscribe하고 새로운 Observable을 구독합니다.

```js
getDate() {
    if (!this.cache$) {
      const timer$ = timer(0, REFRESH_INTERVAL);

      this.cache$ = timer$.pipe(
        switchMap(() => this.http.get('/data')),
        takeUntil(this.reload$),
        shareReplay(CACHE_SIZE)
      );
    }

    return this.cache$;
}
```
