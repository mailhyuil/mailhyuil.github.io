# angular httpClient Headers

> \{observe: "response"} 옵션을 주면 body가 아닌 HttpResponse 전체를 반환한다.

```ts
httpClient.get<IPaginationDTO>("url", { observe: "response" }).subscribe(res => {
  const { body, headers, status } = res;

  headers.get("X-Pagination");
});
```
