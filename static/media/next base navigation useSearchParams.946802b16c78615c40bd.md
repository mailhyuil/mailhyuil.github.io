# next base navigation useSearchParams

> useSearchParams의 searchParams는 readonly 객체이기 때문에 set을 사용하려면 새로운 URLSearchParams 객체를 만들어야 한다.

```ts
"use client";
import { useSearchParams } from "next/navigation";

export default function SearchParams() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const sort = searchParams.get("sort");

  // to set searchParams
  const newSearchParams = new URLSearchParams(searchParams);

  return (
    <div>
      <p>Page: {page}</p>
      <p>Sort: {sort}</p>
    </div>
  );
}
```
