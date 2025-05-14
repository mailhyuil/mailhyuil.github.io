# nginx server_name

> 도메인과 블록을 매칭 시키는 역할

```conf
server {
    # http & example.com으로 요청이 오면 이 블록으로 요청을 처리
    listen 80;
    listen [::]:80;
    server_name example.com;

    return 301 https://$host$request_uri;
}
server {
    # https & example.com으로 요청이 오면 이 블록으로 요청을 처리
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name example.com;

    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_certificate /etc/nginx/ssl/test.crt;
    ssl_certificate_key /etc/nginx/ssl/test.key;

    ssl_trusted_certificate /etc/nginx/ssl/ca-bundle.pem;
    ssl_stapling on;
    ssl_stapling_verify on;
    resolver 8.8.8.8 1.1.1.1; # 네임서버의 주소 (호스팅 업체의)

    client_max_body_size 1G;

    location / {
        root /media/sdc/apps/signage/admin;
        index index.html;
        try_files $uri $uri/ /index.html =404;
    }

    location /api/v1/ {
        proxy_pass http://localhost:20017;
    }
}
```
