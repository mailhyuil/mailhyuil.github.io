# next base navigation useRouter

> app router 에서는 반드시 'next/navigation' 에서 제공하는 router 를 사용해야 한다.

```tsx
"use client";
import { useRouter } from "next/navigation";

export default function Router() {
  const router = useRouter();

  const onClick = () => {
    router.push("/posts");
  };

  return (
    <div>
      <p>Router</p>
      <button onClick={onClick}>Go to posts</button>
    </div>
  );
}
```
