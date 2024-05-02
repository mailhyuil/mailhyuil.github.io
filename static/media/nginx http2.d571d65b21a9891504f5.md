# nginx http2

```conf
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name my_server_name;

    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_certificate /etc/nginx/ssl/ssl_certificate.pem;
    ssl_certificate_key /etc/nginx/ssl/ssl_certificate_key.pem;
    ssl_password_file /etc/nginx/ssl/ssl_password_file.pass;

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
