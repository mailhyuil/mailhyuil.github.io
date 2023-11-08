# angular httpClient Headers

```ts
httpClient.get<IPaginationDTO>("url", { observe: "response" }).subscribe((res) => {
  console.log(res.headers.get("Pagination"));
});
```
