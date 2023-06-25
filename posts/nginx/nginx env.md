# nginx env

> nginx 환경변수 설정

## 환경변수 불러오기

```conf
http {
  server {
    server_name ${SERVER_NAME};
    listen ${HOST}:${PORT};
    error_page 500 502 503 504 /50x.html;
    location / {
      root html;
    }
  }
}
```
