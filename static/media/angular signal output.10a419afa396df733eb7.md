# angular signal output

## output

```ts
select = output<string>();
```

## outputFromObservable

```ts
nameChange$ = new Observable<string>(/* ... */);
nameChange = outputFromObservable(this.nameChange$); // OutputRef<string>
```

## outputToObservable

```ts
outputToObservable(myComp.instance.onNameChange)
.pipe(...)
.subscribe(...)
```
