# Operators

> 중간연산을 할 때 사용
>
> > pipe()내에서 사용

```js
.pipe(map((x)=>x+10))
```

## of and map()

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

## mergeMap()

## concatWith()

## distinctUnitChanged()

## tap()

## shareReplay()
