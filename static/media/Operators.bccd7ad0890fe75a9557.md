# Operators

> 중간연산을 할 때 사용
>
> > pipe()내에서 사용

```js
.pipe(map((x)=>x+10))
```

## of and map()

## fromEvent()

> 이벤트로부터 observable 객체 생성
>
> > event.target을 감싼 래퍼 객체를 생성

```
fromEvent<MouseEvent>(document, "mousemove")
```

## lastValueFrom()

## firstValueFrom()

## filter()

## first()

## debounceTime()

```
const div = ref<any>(null);

onMounted(() => {
  fromEvent<MouseEvent>(div.value, "mousemove")
    .pipe(debounceTime(100))
    .subscribe({
      next: (e) => (x.value = e.clientX),
    });
});
```

## throttleTime()

## forkJoin()

## combineLatestWith()

> 두 observable을 합쳐준다

```
obs1$.pipe(
      combineLatestWith(obs2$),
      map(
        ([e1, e2]) =>
          (e1.target).value +
          " - " +
          (e2.target).value
      )
    )
```

## pluck()

## merge()

> observable을 전부 합쳐준다. 동시성 보장

```
merge(a,b,c,d)
```

## mergeMap()

## switchMap()

## concatWith()

## takeUntil()

## distinctUnitChanged()

## tap()

## shareReplay()
