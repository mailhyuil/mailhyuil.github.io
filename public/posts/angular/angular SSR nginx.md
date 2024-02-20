# angular SSR nginx

## default.conf

```conf
server {
    listen 80;
    root /usr/share/nginx/html;

    location / {
        index index.html index.htm;
        try_files $uri @universal;
    }

    location @universal {
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_pass http://host.docker.internal:4000;
    }
}
```
