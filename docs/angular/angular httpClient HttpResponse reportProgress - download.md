# angular httpClient HttpResponse reportProgress - download

> observe: 'events' + reportProgress: true 사용
>
> > HttpEventType의 DownloadProgress를 사용하여 진행률을 확인할 수 있다.

```ts
this.httpClient
  .get<T>(`${this.baseUrl}/${url}`, {
    ...option,
    observe: "events",
    reportProgress: true,
  })
  .subscribe((res) => {
    if (res.type === HttpEventType.DownloadProgress) {
      // 진행률
      const progress = Math.round((100 * res.loaded) / res.total);
      console.log(`File is ${progress}% loaded.`);
    } else if (res instanceof HttpResponse) {
      // 완료
      console.log("File is completely loaded!");
    }
  });
```
