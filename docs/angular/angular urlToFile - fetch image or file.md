# angular urlToFile - fetch image or file

> img, script 등의 일부 태그는 CORS를 제한하지 않는다.
>
> (Origin 헤더를 보내지 않는다.)
>
> > 그러나 fetch를 사용하게 되면 Origin 헤더를 보내게 되고 그 값을 브라우저 캐시에 저장하게 되면
> >
> > 브라우저 로컬 캐시를 사용 시 CORS 헤더가 없는 응답을 캐시하게 되고 이는 CORS 에러로 이어질 수 있다.
> >
> > > 캐시를 하지 않는 방법으로 해결 Cache-Control: no-cache 또는 no-store

```ts
export async function urlToFile(url: string) {
  const res = await fetch(url, {
    cache: "no-cache", // 없으면 cors 에러 발생
    mode: "no-cors",
  });
  const blob = await res.blob();
  return new File([blob], url.split("/").pop() || "", { type: blob.type });
}
```
