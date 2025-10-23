# nginx 413 Request Entity Too Large

> nginx가 업로드하는 파일의 크기가 설정한 `client_max_body_size`보다 클 때 발생하는 에러

```conf
http {
    client_max_body_size 5M; // 기본값 1m 제한없음 0
}
# or
server {
    client_max_body_size 1G; // 기본값 1m 제한없음 0
}
```
