# nginx http3 - quic

> --with-http_v3_module 필요
>
> > TLS 1.3 필요
> >
> > > 443 UDP 포트를 열어야 한다. (AWS UDP 443 / docker run -p 443:443/udp)

```conf
server {
    listen 80;
    server_name example.com;
    return 301 https://$host$request_uri;
}

server {
    server_name example.com;

    # http2 활성화
    http2 on;
    listen 443 ssl;

    # http3 활성화
    http3 on; # http3 지원을 활성화
    listen 443 quic reuseport;  # UDP listener for QUIC+HTTP/3
    quic_gso on; # GSO를 활성화합니다
    quic_retry on; # 주소 확인 허용

    # TLS 1.3 필수
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_certificate     /etc/nginx/ssl/example.com.crt;
    ssl_certificate_key /etc/nginx/ssl/example.com.key;

    location / {
        # QUIC을 사용할 수 있도록 브라우저에 알림
        add_header Alt-Svc 'h3=":443"; ma=86400';

        root html;
        index index.html;
    }
}
```
