# nginx 파일 크기 제한

> nginx.conf

```conf
http {
    client_max_body_size 5M; // 기본값 1m 제한없음 0
}
```
