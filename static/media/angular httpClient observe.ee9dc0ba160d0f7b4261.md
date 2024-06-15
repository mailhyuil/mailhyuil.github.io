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

## body

> default 값
>
> > 응답이 완료된 후 body만 받는다.

## response

> 응답이 완료된 후 HttpResponse 객체를 받는다.
>
> > 이 안에 header, body 등이 들어있다.

## events

> HttpEventType이 발생할 때마다 값을 받을 수 있다.
>
> > reportProgress를 true로 설정하면 progress(진행률)와 함께 chunk를 받을 때마다 event가 발생한다.

```ts
this.httpClient
  .get<T>(`${this.baseUrl}/${url}`, {
    ...option,
    observe: "events",
    reportProgress: true,
  })
  .subscribe((res) => {
    if (res.type === HttpEventType.DownloadProgress) {
      console.log(res.loaded, res.total);
    }
  });
```
