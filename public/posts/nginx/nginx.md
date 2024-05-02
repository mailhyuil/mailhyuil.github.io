# nginx

![](img/apache&nginx.png)

## default.conf

```conf
server {
    server_name example.com;

    listen 80;
    listen [::]:80;

    return 301 https://$host$request_uri;
}

server {
    server_name example.com;

    listen 443 ssl http2;
    listen [::]:443 ssl http2;

    ssl_certificate /etc/nginx/ssl/ssl_certificate.pem;
    ssl_certificate_key /etc/nginx/ssl/ssl_certificate_key.pem;

    location / {
        root /home/ubuntu/client;
        index index.html;
        try_files $uri $uri/ /index.html =404;
    }

    location /api/v1/ {
        proxy_pass http://localhost:3000;
    }
}
```
