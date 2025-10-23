# http SOP CORS (Cross-Origin Resource Sharing) 교차 출처 리소스 공유

> SOP 정책에서 다른 Origin을 허용하는 방법

## 단순요청 (Simple Request)

> 아래의 헤더만 있는 요청의 경우 preflight request를 보내지 않는다.
>
> > Access-Control-Allow-Origin의 값만 확인한다.

```txt
Accept
Accept-Language
Content-Language
Content-Type (단, text/plain, application/x-www-form-urlencoded, multipart/form-data)
```

## 사전 요청 (Preflight Request)

> 아래의 경우 반드시 preflight request를 보낸다.
>
> > Access-Control-Allow-\* 의 모든 값을 확인한다.

```txt
GET, POST, HEAD 외의 HTTP 메서드를 사용 (예: PUT, DELETE, PATCH)
커스텀 헤더 포함 (Authorization, X-Requested-With 등)
Content-Type이 application/json 등 제한된 타입이 아닌 경우
withCredentials: true를 사용하여 쿠키/세션을 포함하는 경우
```

### 사전 요청 순서

```txt
1. OPTIONS 메서드로 preflight request를 보낸다.
2. 서버는 Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers, Access-Control-Allow-Credentials 헤더를 포함한 응답을 보낸다.
3. 브라우저는 응답을 확인하고 실제 요청을 보낸다.
```
