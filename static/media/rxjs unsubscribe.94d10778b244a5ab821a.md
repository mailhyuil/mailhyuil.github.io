# rxjs unsubscribe

## short lived observable

> unsubscribe를 안해도 됨
>
> > 밑의 observable은 값을 받으면 complete 됨

```
httpClient // GET, PUT, PATCH, POST, DELETE
of(45);
of(2, 6, 3, 6, 46);
from([1, 23, 4, 64, 5]);
range(1, 10);
```

## long lived observable

> unsubsribe를 해야함

```
timer(500, 500);
this.formGroup.get('some').valueChages // angular form
this.route.params // angular route
this.firestore.collection().valueChanges(); // firestore
```

## 구독 해제 방법

```
onDestroy -> unsubscribe
pipe(takeUntil())
pipe(takeUntilDestoryed())
```
