# nginx http2

> http2 on;을 통해서 client와 nginx 사이의 통신을 http2로 설정할 수 있다.
>
> > 하지만 nginx는 nginx와 서버(upstream) 사이의 통신은 http2를 지원하지 않는다.

```conf
server {
    server_name my_server_name;

    http2 on;
    listen 443 ssl;
    listen [::]:443 ssl;

    ssl_protocols TLSv1.1 TLSv1.2;
    ssl_certificate /etc/nginx/ssl/ssl_certificate.pem;
    ssl_certificate_key /etc/nginx/ssl/ssl_certificate_key.pem;

    # (optional) enable OCSP stapling
    ssl_trusted_certificate /etc/nginx/ssl/ssl_trusted_certificate.pem;
    ssl_stapling on;
    ssl_stapling_verify on;
    resolver 8.8.8.8 1.1.1.1; # 네임서버의 주소 (호스팅 업체의)

    location / {
        root /usr/share/nginx/html;
        index index.html;
        try_files $uri $uri/ /index.html =404;
    }

    location /api/v1/ {
        proxy_pass http://localhost:3000;
    }
}
```

## `nginx <-> upstream` 사이에 http2를 지원하지 않는 이유

1. 프라이빗 네트워크인 경우 지연시간이 짧다.
2. NGINX는 기본적으로 512개의 커넥션을 제공하고 있다. 브라우저의 6개의 커넥션 제한과는 다르게 더 많은 커넥션을 연결할 수 있다.
3. keep-alive 의 장점을 이용할 수 있다. 로드밸런서의 경우 통신하는 서버의 수가 제한되기 때문에, keep-alive 상태의 커넥션을 재사용하는 경우 많다.
