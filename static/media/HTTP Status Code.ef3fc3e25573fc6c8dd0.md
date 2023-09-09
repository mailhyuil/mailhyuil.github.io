# HTTP Status Code

# 1XX : Information responses

## 100 Continue

> 현재까지의 진행상태에 문제가 없음

## 101 Switching Protocol

> 클라이언트가 보낸 Upgrade 요청 헤더에 대한 응답에 들어가며, 서버에서 프로토콜을 변경할 것임을 알려줌
>
> > Websocket 프로토콜 전환 시에 사용

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

> 요청에 대해서 보내줄 수 있는 콘텐츠가 없지만, 헤더는 의미있을 수 있습니다

## 205 Reset Content

## 206 Partial Content

## 207 Multi-Status

## 208 Already Reported

## 226 IM Used ( HTTP Delta encoding )

# 3XX : Redirection messages

## 300 Multiple Choice

## 301 Moved Permanently

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

> 비인증

## 402 Payment Required

## 403 Forbidden

> 권한 없음

## 404 Not Found

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

# 5XX : Server error responses

## 500 Internal Server Error

## 501 Not Implemented

## 502 Bad Gateway

## 503 Service Unavailable

## 504 Gateway Timeout

## 505 HTTP Version Not Supported

## 506 Variant Also Negotiates

## 507 Insufficient Storage

## 508 Loop Detected (WebDAV)

## 510 Not Extended

## 511 Network Authentication Required