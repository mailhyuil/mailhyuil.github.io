# angular signal output

## output

```ts
select = output<string>();
```

## outputFromObservable

```ts
counter$ = from([1, 2, 3, 4]);
counter = outputFromObservable(this.counter$);
```
