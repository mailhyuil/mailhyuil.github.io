# cache browser cache etag

> Express.js는 기본적으로 모든 응답에 Etag를 자동으로 생성해서 헤더에 추가한다.
>
> > 데이터가 바뀌면 해시값이 바뀐다
> >
> > > npm etag 패키지를 사용해도 된다.
> > >
> > > > If-Match or If-None-Match or If-Modified-Since로 확인

## If-Match vs If-None-Match vs If-Modified-Since

> 서버로부터 넘겨받은 응답 헤더에 Etag가 있다면, 브라우저(크롬만 확인)는 Etag의 값과 응답을 받은 시간을 기록해두었다가, 다음 번에 동일한 요청을 전송할 때 아래 두 개의 필드를 헤더에 추가하여 서버로 전송한다.
>
> > 저장해둔 Etag 값을 넣어서 서버에 리퀘스트

# 구현

```js
const oldEtag = request.headers["if-none-match"]; // request headers에서 Etag 값을 가져온다.
const currentEtag = etag(JSON.stringify(data), { weak: true }); // data를 해시해서 Etag를 생성한다.

// Etag를 비교
if (oldEtag && oldEtag === currentEtag) {
  response.status(304); // Etag가 같다면 304 응답을 보낸다.
  return null; // null을 반환해서 더 이상의 처리를 하지 않는다.
} else {
  response.set("Etag", currentEtag); // Etag가 다르다면 응답 헤더에 Etag를 추가한다.
  return data; // Etag가 다르다면 응답을 보낸다.
}
```
