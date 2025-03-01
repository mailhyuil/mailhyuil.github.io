# nginx http alpn

> ALPN이란 TLS 핸드셰이크 과정에서 클라이언트와 서버가 사용할 프로토콜을 협상하는 과정을 말한다.
>
> > 서버가 불필요한 왕복 없이 TLS 핸드셰이크 과정을 빠르게 처리할 수 있도록 도와준다.

## ALPN 지원 확인

```sh
openssl s_client -connect example.com:443 -alpn h2
```

## nginx 설정

> 원하는 protocol을 강제 하려면 `ssl_alpn_protocols`를 사용하면 된다.

```conf
server {
    listen 443 ssl http2;
    server_name example.com;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_certificate /etc/nginx/ssl/example.crt;
    ssl_certificate_key /etc/nginx/ssl/example.key;

    ssl_prefer_server_ciphers on;

    ssl_alpn_protocols h2 http/1.1;
}
```
