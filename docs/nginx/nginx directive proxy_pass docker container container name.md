# nginx proxy_pass docker container container name

## nginx.conf

> 같은 docker network에 있는 container name으로 proxy_pass

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
    server_name           example.com;
    listen                443 ssl;
    listen                [::]:443 ssl;
    ssl_certificate       /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key   /etc/letsencrypt/live/example.com/privkey.pem;
    ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;

    # ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3; # by default
    # ssl_ciphers         HIGH:!aNULL:!MD5; # by default


    client_max_body_size 1G;

    location = / {
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
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
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_pass http://client:4000;
    }
}
```
