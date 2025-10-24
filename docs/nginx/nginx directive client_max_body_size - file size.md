# nginx client_max_body_size (file size)

> nginx.conf

```conf
http {
    client_max_body_size 5M; // 기본값 1m 제한없음 0
}
# or
server {
    client_max_body_size 1G; // 기본값 1m 제한없음 0
}
```
