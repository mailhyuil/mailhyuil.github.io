# react redux

> App `<->` Provider `<-` Store `<-` Reducer(State / Actions)

## Reducer(State / Actions)

> redux toolkit의 createSlice를 사용하여 Reducer를 생성한다.

```ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
};

const initialState = {
  value: 0,
} as CounterState;

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: () => initialState,
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, incrementByAmount, decrement, decrementByAmount, reset } = counter.actions;

export default counter.reducer;
```

## Store

> redux toolkit의 configureStore를 사용하여 Store를 생성한다.

```ts
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import counterReducer from "./features/counterSlice";
import { userApi } from "./services/userApi";

export const store = configureStore({
  reducer: {
    counterReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

## Provider

> react-redux의 Provider를 사용하여 Store를 전역으로 사용할 수 있도록 한다.

```tsx
"use client";

import { store } from "./store";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
```

## Hooks

> react-redux의 useSelector, useDispatch를 사용하여 Store를 사용한다.

```tsx
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```
