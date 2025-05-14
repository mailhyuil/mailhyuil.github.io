# react hook custom

## useExample.ts

```ts
import { useEffect } from "react";

export default function useExample() {
  useEffect(() => {
    console.log("useEffect");
    return () => {
      console.log("useEffect cleanup");
    };
  }, []);
}
```
