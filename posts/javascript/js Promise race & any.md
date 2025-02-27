# js Promise.race & Promise.any

> 가장 먼저 resolve되는 것을 반환

## Promise.race

> resolve, reject 중 가장 먼저 발생하는 것을 반환

```ts
const firstResolvedOrRejected = Promise.race([promise1, promise2, promise3]);
```

## Promise.any

> resolve 중 가장 먼저 발생하는 것을 반환

```ts
const firstResolved = Promise.race([promise1, promise2, promise3]);
```
