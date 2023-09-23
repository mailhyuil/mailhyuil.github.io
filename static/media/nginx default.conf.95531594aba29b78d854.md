# nginx default.conf

## http

```js
server {
    listen 80;
    listen [::]:80;
    server_name my_server_name;

    location / {
        root /usr/share/nginx/html;
        index index.html;
        try_files $uri $uri/ /index.html =404;
    }
}
```

## https

```js
server {
    listen 80;
    listen [::]:80;
    server_name my_server_name;
    return 301 https://mailhyuil.com;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name my_server_name;
    ssl_certificate /etc/nginx/ssl/ssl_certificate.pem;
    ssl_certificate_key /etc/nginx/ssl/ssl_certificate_key.pem;
    ssl_password_file /etc/nginx/ssl/ssl_password_file.pass;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;

    location / {
        root /usr/share/nginx/html;
        index index.html;
        try_files $uri $uri/ /index.html =404;
    }

    location /api/v1/ {
        proxy_pass http://localhost:20001;
    }
}
```
