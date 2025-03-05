# nginx http3 (quic)

> --with-http_v3_module 필요
>
> > TLS 1.3 필요

```conf
server {
    listen 80;
    server_name example.com;
    return 301 https://$host$request_uri;
}

server {
    # HTTP/3 (QUIC) 및 HTTP/2 활성화
    listen 443 ssl http2;
    listen 443 quic reuseport;

    # TLS 1.3 필수
    ssl_protocols TLSv1.2 TLSv1.3;

    ssl_certificate     /etc/nginx/ssl/example.com.crt;
    ssl_certificate_key /etc/nginx/ssl/example.com.key;

    # QUIC을 사용할 수 있도록 브라우저에 알림
    add_header Alt-Svc 'h3=":443"; ma=86400';

    location / {
        root html;
        index index.html;
    }
}
```
