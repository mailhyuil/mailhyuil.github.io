# angular urlToFile

> httpClient 사용 시 cors 오류

```ts
export async function urlToFile(url: string) {
  const res = await fetch(url, {
    cache: "no-cache", // 없으면 cors 에러 발생
  });
  const blob = await res.blob();
  return new File([blob], url.split("/").pop() || "", { type: blob.type });
}
```
