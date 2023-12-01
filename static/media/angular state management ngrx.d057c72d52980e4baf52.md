# ngrx

> State, Action, Reducer, Selector

## install

```sh
npm i @ngrx/store
npm i @ngrx/effects
npm i @ngrx/store-devtools
npm i @ngrx/router-store
```

## store/count.store.ts

```ts
import { createAction, createReducer, createSelector, on, props } from "@ngrx/store";

export type CountState = {
  count: number;
};

const initialState: CountState = {
  count: 0,
};

export const incrementAction = createAction("[Count] Increment", props<CountState>());

export const decrementAction = createAction("[Count] Decrement", props<CountState>());
export interface AppState {
  count: CountState;
}
export const countReducer = createReducer(
  initialState,
  on(incrementAction, (state) => ({ count: state.count + 1 })),
  on(decrementAction, (state) => ({ count: state.count - 1 }))
);

export const selectFeature = (state: AppState) => state.count;
export const selectFeatureCount = createSelector(selectFeature, (state: CountState) => state.count);
```

## app.config.ts

```ts
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), importProvidersFrom([StoreModule.forRoot({ count: countReducer })])],
};
```

## 사용

```ts
export class AppComponent implements OnInit {
  count$ = this.store.select(selectFeatureCount);
  count = toSignal(this.count$);
  constructor(private readonly store: Store<AppState>) {}
  async ngOnInit() {}
  increment() {
    this.store.dispatch(incrementAction());
  }
  decrement() {
    this.store.dispatch(decrementAction());
  }
}
```
