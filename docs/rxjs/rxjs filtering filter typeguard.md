# rxjs filtering filter typeguard

```ts
this.actions$.pipe(
  ofType(DCFActions.SAVE_SUCCESS),
  switchMapTo(this.store.pipe(select(selectors.getId))),
  filter((id: number | null): id is number => id !== null),
  map((id: number) => new actions.GetData({ Id }))
);
```

# generic filter

```ts
const notNull = <T>(value: T | null): value is T => value !== null;

filter(notNull);
```
