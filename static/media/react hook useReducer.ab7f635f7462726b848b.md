# react hook useReducer

> 여러가지의 상태값을 관리할 때 useState 대신 useReducer를 사용할 수 있다.

```ts
import React, { useReducer } from "react";

type State = "LOADING" | "SUCCESS" | "ERROR";

type Action = { type: "LOADING" } | { type: "SUCCESS" } | { type: "ERROR" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LOADING":
      return "LOADING";
    case "SUCCESS":
      return "SUCCESS";
    case "ERROR":
      return "ERROR";
    default:
      return state;
  }
};

const initialState: State = "LOADING";

const [state, dispatch] = useReducer(reducer, initialState);

export const useMyReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoading = () => dispatch({ type: "LOADING" });
  const setSuccess = () => dispatch({ type: "SUCCESS" });
  const setError = () => dispatch({ type: "ERROR" });

  return { state, setLoading, setSuccess, setError };
};
```
