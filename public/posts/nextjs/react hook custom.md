# react hooks

> 생명주기와 연동(hook into)되는 함수를 일컫는다.

## useExample.ts

```ts
import { useEffect } from "react";

export default function useExample() {
  useEffect(() => {
    console.log("useEffect");
  }, []);
}
```
