# rxjs higher order observable

> observable을 방출하는 observable
>
> > switchMap, mergeMap, concatMap, exhaustMap을 통해 higher order observable을 쉽게 다룰 수 있다.

```js
// 내부적으로 http.get(url)을 방출하는 url$은 higher order observable이다.
const normal$ = url$.pipe(concatMap((url) => http.get(url)));

// concatMap은 내부적으로
// 1. url$이 방출하는 값을 버퍼에 저장하고
// 2. http.get()을 구독하고
// 3. http.get()이 방출하는 값을 복사하여 넘긴다.
```
