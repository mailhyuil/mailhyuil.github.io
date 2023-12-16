# httpClient observe

> 응답을 어디까지 받을 것인지 설정한다.
>
> > 기본은 body만 받는다.
> >
> > > header까지 받으려면 response로 설정한다.
> > >
> > > > events로 설정하면 header, body, progress 등을 받을 수 있다.

```ts
this.httpClient.get<T>(`${this.baseUrl}/${url}`, {
  ...option,
  observe: "response", // default: body /// body, events, response
});
```
