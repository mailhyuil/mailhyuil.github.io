# ngrx effects

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
import { createAction, createReducer, createSelector, on } from "@ngrx/store";

export type CountState = {
  count: number;
};

const initialState: CountState = {
  count: 0,
};

export const incrementAction = createAction("[Count] Increment");
export const decrementAction = createAction("[Count] Decrement");
// effects
export const loadCountAction = createAction("[Count] Load Count");
export const countLoadedSuccessAction = createAction("[Count] Count Loaded Success", (count: number) => ({ payload: count }));
export const countLoadedFailureAction = createAction("[Count] Count Loaded Failure");

export interface AppState {
  count: CountState;
}
export const countReducer = createReducer(
  initialState,
  on(incrementAction, (state) => ({ count: state.count + 1 })),
  on(decrementAction, (state) => ({ count: state.count - 1 })),
  // effects
  on(loadCountAction, (state) => ({ ...state })),
  on(countLoadedSuccessAction, (state, { payload }) => ({
    ...state,
    count: payload,
  })),
  on(countLoadedFailureAction, (_) => ({ count: 0 }))
);

export const selectFeature = (state: AppState) => state.count;
export const selectFeatureCount = createSelector(selectFeature, (state: CountState) => state.count);
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
          map((count) => ({ type: "[Count] Count Loaded Success", payload: count })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
```

## app.config.ts

```ts
export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom([StoreModule.forRoot({ count: countReducer }), EffectsModule.forRoot(CountEffects)])],
};
```
