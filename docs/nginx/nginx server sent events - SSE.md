# nginx server sent events - SSE

> nginx는 프록시 서버에 요청에는 http/1.0을 사용하고 Connection: close 헤더를 사용하게 됩니다.
>
> > SSE는 지속 연결이 있어야 동작하기 때문에 버전을 1.1로 올려주고 Connection '' 로 바꿔줍니다.

```conf
location / {
    proxy_pass http://backend;
}

location /sse/ {
    proxy_set_header Connection "";
    proxy_http_version 1.1;

    chunked_transfer_encoding off;

    proxy_buffering off;
    proxy_cache off;

    proxy_pass http://backend;
}
```
