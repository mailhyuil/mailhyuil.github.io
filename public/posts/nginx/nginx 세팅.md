# nginx

![apache & nginx](img/apache&nginx.png)

## install

```sh
docker run --name nginx -d -p 80:80 -v $(pwd)/nginx:/etc/nginx nginx

# module 확인
nginx -V 2>&1 | grep brotli
nginx -V 2>&1 | grep --with-http_v2_module
nginx -V 2>&1 | grep --with-http_v3_module
...
```

## default.conf

```conf
client_max_body_size 500M;

# gzip
gzip on;
gzip_disable "MSIE [1-6]\.(?!.*SV1)";  # IE6 이하 비활성화
gzip_vary on;  # 캐싱 최적화 (Vary: Accept-Encoding)
gzip_comp_level 5;  # 압축률과 속도의 균형
gzip_proxied expired no-cache no-store private auth;  # 프록시 요청 조건부 허용
gzip_types text/plain text/css text/javascript application/javascript application/json application/xml application/xml+rss image/svg+xml;

# brotli
# brotli_static on;

server {
    server_name example.com;

    listen 80;
    listen [::]:80;

    location /.well-known/acme-challenge/ {
        allow all;
        root /var/www/certbot;
    }

    return 301 https://$host$request_uri;
}

server {
    server_name example.com;

    http2 on;
    listen 443 ssl;
    listen [::]:443 ssl;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    # (optional) enable OCSP stapling
    ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
    ssl_stapling on;
    ssl_stapling_verify on;
    resolver 8.8.8.8 1.1.1.1;

    location = / {
        try_files '' @ssr;
    }

    location / {
        root /app/client/browser;
        index index.html index.htm;
        try_files $uri $uri/ @ssr;
    }

    location /admin {
        alias /app/admin;
        index index.html index.htm;
        try_files $uri $uri/ /admin/index.html =404;
    }

    location /api/v1/ {
        proxy_pass http://server:3000;
    }

    location /api/v1/sse/ {
        proxy_set_header  X-Forwarded-For $remote_addr;

        proxy_set_header Connection "";
        proxy_http_version 1.1;
        chunked_transfer_encoding off;

        proxy_buffering off;
        proxy_cache off;
        proxy_pass http://server:3000;
    }

    location @ssr {
        internal;
        proxy_pass http://localhost:4000;
        error_page 500 502 503 504 = @fallback;
    }

    location @fallback {
        internal;
        index index.csr.html index.html;
        try_files $uri $uri/ /index.csr.html =404;
    }
}
```
