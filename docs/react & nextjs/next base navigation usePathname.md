# next base navigation usePathname

```tsx
"use client";
import { usePathname } from "next/navigation";

export default function Pathname() {
  const pathname = usePathname();

  return (
    <div>
      <p>Pathname: {pathname}</p>
    </div>
  );
}
```
