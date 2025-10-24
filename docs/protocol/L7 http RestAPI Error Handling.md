# L7 http RestAPI Error Handling

> Api에서 에러가 발생 시 어떻게 클라이언트에게 전달할 것인지를 설계
>
> > 지원할 기능을 정의하고 설계한다.

## Http Status Code 지원

> 4xx, 5xx 에러 코드를 지원한다.
>
> > Facebook은 graphql api에서 항상 200 OK를 반환하고 에러는 body에 담아서 전달한다.
> >
> > NHN Cloud의 경우 REST API에서도 항상 200 OK를 반환하고 에러는 body에 담아서 전달한다.

## error code 지원

> error code를 통해서 클라이언트가 도큐먼트를 참고하여 에러를 해결할 수 있도록 지원한다.

## 복수 error 지원

> 복수의 에러가 발생 시 모든 에러를 한번에 전달한다.

```json
{
  "errors": [
    {
      "message": "Invalid parameter",
      "field": "name"
    },
    {
      "message": "Invalid parameter",
      "field": "email"
    }
  ]
}
```

## 오류 발생 위치 지원

> 에러가 발생한 위치를 지원한다.

```json
{
  "error": {
    "errors": [
      {
        "domain": "global",
        "reason": "invalidParameter",
        "message": "Invalid string value: 'asdf'. Allowed values: [mostpopular]",
        "locationType": "parameter", // <- 에러 발생 위치 타입
        "location": "chart" // <- 에러 발생 위치
      }
    ],
    "code": 400,
    "message": "Invalid string value: 'asdf'. Allowed values: [mostpopular]"
  }
}
```

## 메세지 지원

> 에러 메세지를 지원한다.
