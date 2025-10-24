# L7 http Status Code

# 1XX : Information responses

## 100 Continue

> 현재까지의 진행상태에 문제가 없음

## 101 Switching Protocol

> 클라이언트가 보낸 Upgrade 요청 헤더에 대한 응답에 들어가며, 서버에서 프로토콜을 변경할 것임을 알려줌
>
> > Websocket 등의 프로토콜 전환 시에 사용

## 102 Processing(WebDAV)

> 서버가 요청을 수신하였으며 이를 처리하고 있지만, 아직 제대로 된 응답을 알려줄 수 없음

# 2XX : Successful responses

## 200 OK

> 요청이 성공

## 201 Created

> 요청이 성공적이었으며 그 결과로 새로운 리소스가 생성되었음

## 202 Accepted

> 요청을 수신하였지만, 그에 응하여 행동할 수 없습니다.
>
> > 다른 프로세스에서 처리 또는 서버가 요청을 다루고 있거나 배치 프로세스를 하고 있는 경우를 위해 만들어진 코드

## 203 Non-Authoritative Information

> 돌려받은 메타 정보 세트가 오리진 서버의 것과 일치하지 않지만 로컬이나 서드 파티 복사본에서 모아졌음
>
> > 이러한 조건에서는 이 응답이 아니라 200 OK 응답을 반드시 우선

## 204 No Content

> 요청에 대해서 보내줄 수 있는 콘텐츠는 없음 (HTTP Response body가 아예 존재하지 않는 경우)
>
> > 헤더는 의미가 있을 수 있다. (e.g. cors preflight)

## 205 Reset Content

## 206 Partial Content

> 리소스 다운로드 요청에 대한 응답으로 사용되며, 응답에는 Content-Range 헤더가 포함되어야 합니다.

## 207 Multi-Status

## 208 Already Reported

## 226 IM Used ( HTTP Delta encoding )

# 3XX : Redirection messages

## 300 Multiple Choice

## 301 Moved Permanently

## 302 Found

## 303 See Other

## 304 Not Modified

## 305 Use Proxy

## 306 Unused

## 307 Temporary Redirect

## 308 Permanent Redirect

# 4XX : Client error responses

## 400 Bad Request

> 이 응답은 잘못된 문법으로 인하여 서버가 요청하여 이해할 수 없음을 의미합니다.

## 401 Unauthorized

> 인증되지 않은 클라이언트가 리소스에 접근하려 할 때 사용

## 402 Payment Required

## 403 Forbidden

> 권한이 없는 클라이언트가 리소스에 접근하려 할 때 사용

## 404 Not Found

> 요청한 리소스를 찾을 수 없음

## 405 Method Not Allowed

> 요청한 메소드는 서버에서 알고 있지만, 제거되었고 사용할 수 없습니다.

## 406 Not Acceptable

## 407 Proxy Authentication Required

## 408 Request Timeout

## 409 Conflict

## 410 Gone

## 411 Length Required

## 412 Precondition Failed

## 413 Payload Too Large

> 요청의 페이로드(body)가 서버의 제한을 넘어섰을 때 발생하는 에러
>
> > nginx에서 설정한 `client_max_body_size`보다 클 때 발생하는 에러

## 414 URI Too Long

## 415 Unsupported Media Type

## 416 Requested Range Not Satisfiable

## 417 Expectation Failed

## 418 I'm a teapot

## 421 Misdirected Request

## 422 Unprocessable Entity (WebDAV)

## 423 Locked (WebDAV)

## 424 Failed Dependency (WebDAV)

## 426 Upgrade Required

## 428 Precondition Required

## 429 Too Many Requests

## 431 Request Header Fields Too Large

## 451 Unavailable For Legal Reasons

## 498 Invalid Token

> 클라이언트가 유효하지 않은 토큰을 보냈을 때 발생하는 에러

## 499 Client Closed Request (Nginx)

> > 서버가 응답을 하기 전 클라이언트가 연결을 끊었을 때 발생하는 에러
> >
> > > 주로 비동기 요청, client timeout으로 인해 연결이 끊어졌을 때 발생
> > >
> > > > client timeout을 늘려서 해결

# 5XX : Server error responses

## 500 Internal Server Error

> 서버에 오류가 발생했지만 추가적인 정보를 제공하지 않음

## 501 Not Implemented

## 502 Bad Gateway

> 업스트림 서버(e.g. nodejs)가 프록시 서버(e.g. nginx)의 요청에 응답하지 않을 때
>
> > 업스트림 서버가 죽었거나, 포트에 제대로 올라가지 않았거나 네트워크 문제가 있을 때 발생
> >
> > > 업스트림 서버의 로그를 먼저 확인해보고 문제가 없다면 포트가 제대로 올라가있는지 확인

## 503 Service Unavailable

## 504 Gateway Timeout

## 505 HTTP Version Not Supported

## 506 Variant Also Negotiates

## 507 Insufficient Storage

## 508 Loop Detected (WebDAV)

## 510 Not Extended

## 511 Network Authentication Required
