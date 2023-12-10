# httpClient responseType

> 어떤 타입으로 응답을 받을 것인지 설정한다.
>
> > stream은 blob으로 받는다.

```ts
this.httpClient.get<T>(`${this.baseUrl}/${url}`, {
  ...option,
  withCredentials: true,
  responseType: "blob", // default: json /// blob, arraybuffer, text, json
});
```
