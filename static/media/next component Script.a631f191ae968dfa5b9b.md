# next routing

> script를 추가

```tsx
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Script src="https://example.com/script.js" strategy="lazyOnload" />
      <p>Home</p>
    </div>
  );
}
```
