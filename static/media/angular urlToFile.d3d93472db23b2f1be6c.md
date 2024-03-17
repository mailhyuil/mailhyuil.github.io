# angular urlToFile

> httpClient 사용 시 cors 오류

```ts
async urlToFile(url: string) {
  const res = await fetch(url);
  const blob = await res.blob();
  return new File([blob], url.split('/').pop() || '', { type: blob.type });
}
```
