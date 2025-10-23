# next lazy loading (dynamic, import)

## dynamic

> "use server" + dynamic = js를 청크로 분리
>
> > "use client" + dynamic ssr:true = html은 서버에서 생성, js는 청크로 분리
> >
> > > "use client" + dynamic ssr:false = html, js 모두 클라이언트에서 렌더링

```tsx
// next dynamic import
import dynamic from "next/dynamic";
const DynamicComponent = dynamic(() => import("./DynamicComponent"), {
  loading: () => <p>Loading...</p>, // 로딩 중에 보여줄 컴포넌트
  ssr: false, // 서버 사이드 렌더링을 하지 않음
});
return <DynamicComponent />;
```

## import()

```tsx
"use client";

import { useState } from "react";

const names = ["Tim", "Joe", "Bel", "Lee"];

export default function Page() {
  const [results, setResults] = useState();

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={async e => {
          const { value } = e.currentTarget;
          // Dynamically load fuse.js
          const Fuse = (await import("fuse.js")).default;
          const fuse = new Fuse(names);

          setResults(fuse.search(value));
        }}
      />
      <pre>Results: {JSON.stringify(results, null, 2)}</pre>
    </div>
  );
}
```
