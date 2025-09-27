# react hook useTransition

> useTransition은 React 18에서 추가된 Concurrent Features 중 하나로, 상태 업데이트를 “긴급한 것”과 “덜 긴급한 것”으로 구분할 수 있게 해주는 훅
>
> > 보통 React에서 setState 하면 → 바로 리렌더링 발생
> >
> > 하지만 어떤 업데이트는 사용자 인터랙션(즉시 반응 필요) 이고,
> >
> > 어떤 업데이트는 데이터 패칭/렌더링 같은 무거운 작업(조금 늦어도 됨) 임.
> >
> > > 늦어도 되는 작업은 useTransition을 통해서 분리

## usage

```tsx
"use client";
import { useState, useTransition } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value); // 즉시 업데이트 (긴급)

    // 결과 필터링은 transition (덜 긴급)
    startTransition(() => {
      const filtered = bigList.filter(item => item.includes(value));
      setResults(filtered);
    });
  };

  return (
    <div>
      <input value={query} onChange={handleChange} />
      {isPending && <p>로딩 중...</p>}
      <ul>
        {results.map(r => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </div>
  );
}
```
