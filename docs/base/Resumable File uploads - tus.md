# Resumable File uploads - tus

## HEAD

> offset을 알아내기 위한 request

```ts
this.http.head(url, { observe: "response" }).subscribe((response) => {
  const offset = parseInt(response.headers.get("Upload-Offset") || "0", 10);
  console.log(offset);
});
```

## PATCH

> 파일을 업로드하기 위한 request
>
> > HEAD를 통해 알아낸 offset을 헤더에 담아서 전송하여 특정 offset부터 파일을 업로드한다.

```ts
this.http
  .patch(url, file, {
    headers: {
      "Upload-Offset": offset.toString(),
      "Content-Type": "application/offset+octet-stream",
    },
    observe: "response",
  })
  .subscribe((response) => {
    console.log(response);
  });
```
