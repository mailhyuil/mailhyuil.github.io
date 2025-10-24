# angular state management ngrx effects

> 비동기로 동작하는 service의 task를 action을 통해 호출, dispatch한다. (ajax, websocket, ...)
>
> > effect는 action을 받아서 service를 호출하고, service의 결과를 action으로 dispatch한다.

## install

```sh
npm i @ngrx/store
npm i @ngrx/effects
```

## store/count.store.ts

```ts
import { createAction, createFeature, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";

export type CountState = {
  count: number;
};

export const countFeatureKey = "count";

const initialState: CountState = {
  count: 0,
};

export const incrementAction = createAction("[Count] Increment");
export const decrementAction = createAction("[Count] Decrement");
// effects
export const loadCountAction = createAction("[Count] Load Count");
export const countLoadedSuccessAction = createAction(
  "[Count] Count Loaded Success",
  // ajax response
  (count: number) => ({ payload: count })
);
export const countLoadedFailureAction = createAction("[Count] Count Loaded Failure");

export const countReducer = createReducer(
  initialState,
  on(incrementAction, (state) => ({ count: state.count + 1 })),
  on(decrementAction, (state) => ({ count: state.count - 1 })),
  // effects
  on(loadCountAction, (state) => ({ count: state.count })),
  on(countLoadedSuccessAction, (state, { payload }) => ({
    count: state.count + payload,
  })),
  on(countLoadedFailureAction, (_) => ({ count: 0 }))
);

export const selectCount = createFeatureSelector<CountState>(countFeatureKey);

export const countSelector = createSelector(selectCount, (selectedCount: CountState) => selectedCount.count);

export const countFeature = createFeature({
  name: countFeatureKey,
  reducer: countReducer,
});
```

## store/count.effects.ts

```ts
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, exhaustMap, catchError } from "rxjs/operators";
import { CountService } from "./count.service";

@Injectable()
export class CountEffects {
  constructor(private actions$: Actions, private countService: CountService) {}

  loadCount$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Count] Load Count"),
      exhaustMap(() =>
        this.countService.get().pipe(
          // success Action
          map((count) => ({ type: "[Count] Count Loaded Success", payload: count })),
          // failure Action
          catchError((err) => {
            console.error(err);
            return of({
              type: "[Count] Count Loaded Failure",
            });
          })
        )
      )
    )
  );
}
```

## app.config.ts

```ts
export const appConfig: ApplicationConfig = {
  providers: [provideStore(), provideState(countFeature), provideEffects(CountEffects)],
};
```
