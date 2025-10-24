# angular httpClient responseType

> 어떤 타입으로 응답을 받을 것인지 설정한다.
>
> > This is used to parse the response appropriately
> >
> > > response를 어떻게 파싱할 것인지 설정한다.

```ts
this.httpClient.get<T>(`${this.baseUrl}/${url}`, {
  ...option,
  withCredentials: true,
  responseType: "blob", // default: json /// blob, arraybuffer, text, json
});
```
