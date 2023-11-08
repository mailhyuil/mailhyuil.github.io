# react hooks

> angular의 directive와 비슷한 역할을 한다

## custom hook 구현

```js
// This is hook
function useCustomHook(ref) {
  // do something
  return ref;
}

function ComponentOne() {
  const ref = useRef(null);
  useCustomHook(ref);
  return <div ref={ref}> ComponentOne </div>;
}

function ComponentTwo() {
  const ref = useRef(null);
  useCustomHook(ref);
  return <div ref={ref}> ComponentTwo </div>;
}
```

## built-in hooks

```
useState
useEffect
useRef
useMemo
useCallback
useReducer
useContext
```
