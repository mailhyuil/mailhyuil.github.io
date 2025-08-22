# next base navigation redirect

```tsx
"use client";
import { redirect } from "next/navigation";

export default function Redirect() {
  redirect("/posts");
  return <div>Redirect</div>;
}
```
