# nginx

![](img/apache&nginx.png)

## default.conf

```conf
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

    gzip on;
    gzip_disable "MSIE [1-6]\.(?!.*SV1)";
    gzip_vary on;
    gzip_comp_level 7;
    gzip_proxied any;
    gzip_types text/plain text/css text/javascript image/svg+xml image/x-icon application/javascript application/x-javascript text/xml application/xml application/xml+rss application/json;

    client_max_body_size 1G;

    location = / {
        proxy_pass http://client:4000;
    }

    location / {
        root /app/client/browser;
        index index.html index.htm;
        try_files $uri $uri/ @ssr;
    }

    location /admin {
        alias /app/admin;
        index index.html index.htm;
        try_files $uri $uri/ /admin/index.html;
    }

    location /api/v1/ {
        proxy_pass http://server:3000;
    }

    location @ssr {
        proxy_pass http://client:4000;
    }
}
```
