# nginx 변수

```sh
$scheme # http, https
$host # www.example.com
$uri # e.g. /api/v1/users
$request_uri # e.g. /api/v1/users?name=foo

$arg_<인자이름> # e.g. $arg_id, $arg_name
$args

$http_<헤더이름> # e.g. $http_authorization

$cookie_<쿠키이름> # e.g. $cookie_authorization

$content_length
$content_type

$server_addr # 서버 IP 주소
$server_port # 서버 포트
$server_protocol # 서버 프로토콜
$server_name # 서버 이름

$document_root # e.g. /usr/share/nginx/html
$body_bytes_sent # 응답 바디 바이너리 크기
$binary_remote_addr # 바이너리 형태의 클라이언트 IP 주소
```
