# angular SSR nginx

> browser에서 먼저 리소스를 찾고 없으면 rendering 서버 (universal)로 요청

## default.conf

```conf
server {
    listen 80;
    root /app/dist/browser;

    location = / {
        try_files '' @ssr;
    }

    location / {
        index index.csr.html index.html index.htm;
        try_files $uri $uri/ @universal;
    }

    location @ssr {
        internal;
        proxy_pass http://localhost:4000;
        error_page 500 502 503 504 = @fallback;
    }

    location @fallback {
        internal;
        root /app/client/browser;
        index index.csr.html index.html;
        try_files $uri $uri/ /index.csr.html =404;
    }
}
```
