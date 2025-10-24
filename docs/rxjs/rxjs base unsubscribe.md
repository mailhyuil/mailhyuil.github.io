# rxjs base unsubscribe

## short lived observable

> unsubscribe를 안해도 됨
>
> > 밑의 observable은 값을 받으면 complete 됨

```js
httpClient; // GET, PUT, PATCH, POST, DELETE
of(45);
of(2, 6, 3, 6, 46);
from([1, 23, 4, 64, 5]);
range(1, 10);
```

## long lived observable

> unsubscribe를 해야함

```js
timer(0, 500);
this.formGroup.get("some").valueChanges; // angular form
this.route.params; // angular route
this.firestore.collection().valueChanges(); // firestore
```

## 구독 해제 방법

```js
onDestroy -> unsubscribe or complete
pipe(takeUntil())
pipe(takeUntilDestroyed())
```
