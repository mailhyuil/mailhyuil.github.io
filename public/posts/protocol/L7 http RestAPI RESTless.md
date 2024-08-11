# RestAPI RESTless

> RESTful 원칙을 지키지 않는 API (e.g. 원칙을 지키지 않은 HTTP API, GraphQL API, SOAP API 등)
>
> > 선호도에 따라서 RESTless API를 만들 수도 있다.
> >
> > > 중요한건 일관성과 문서화이다.

## RESTless API

> 서버가 다운되지 않는 한 모든 API 요청에 "200 OK"로 응답한다.
>
> > 응답 결과는 응답 본문의 헤더를 참고합니다.

### 성공 200 OK

```json
{
  "header": {
    "success": true,
    "result": "success",
    "code": 0
  },
  "users": {
    "name": "John",
    "age": 30
  },
  "posts": [
    {
      "title": "Hello World",
      "content": "Hello World!",
      "author": "John"
    },
    {
      "title": "Goodbye World",
      "content": "Goodbye World!",
      "author": "John"
    }
  ]
}
```

### 실패 200 OK

```json
{
  "header": {
    "success": false,
    "result": "fail", // unauthorized, forbidden, notfound, badrequest, internalservererror...
    "message": "API URL과 HTTP Method를 확인해주세요",
    "code": 404
  }
}
```
