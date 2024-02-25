# Operators

## first()

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

## concatWith()

## distinctUnitChanged()
