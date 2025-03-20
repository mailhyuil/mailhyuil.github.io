# react hook useEffect

```ts
useEffect(setup, [...dependencies]);
```

## usage

```tsx
import { useEffect } from "react";

export default function useEffectExample() {
  useEffect(() => {
    console.log("useEffect");
    return () => {
      console.log("useEffect cleanup");
    };
  }, []);
}
```

## async in useEffect

```tsx
import { useEffect } from "react";

export default function useEffectAsyncExample() {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      console.log(data);
    }
    fetchData();
  }, []);
}
```
