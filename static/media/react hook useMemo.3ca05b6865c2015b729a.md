# react hook useMemo

> 재계산, 재렌더링을 생략할 수 있게 해주는 hook
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
