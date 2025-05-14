# react hook useMemo

> 특정 값이 바뀌기 전까지 결과를 캐싱하여 사용
>
> > react의 memo 함수를 사용한다.

```ts
useMemo(calculateValue, [...dependencies]);
```

## usage

```ts
import { useMemo } from "react";

function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}
```
