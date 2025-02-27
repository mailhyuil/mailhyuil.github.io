# nginx cache 특정 path로 오는 요청 cache-control 추가

## 특정 path로 오는 특정 확장자 캐싱

```conf
server {
    server_name example.com;
    listen 80;

    location / {
        root /apps/seo-dev/client;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;

        # 캐싱 정책 적용
        location ~* \.(?:css|js|woff2?|ttf|eot|svg|png|jpg|jpeg|gif|ico)$ {
            expires 1y;
            add_header Cache-Control "public, max-age=31536000, immutable";
        }
    }
}
```

## 특정 경로로 오는 요청 캐싱

```conf
server {
    server_name example.com;
    listen 80;

    location / {
        root /path/to/your/app;
        index index.html;
        try_files $uri $uri/ /index.html;

        # /img 또는 /icon 경로에 캐싱 설정
        location ~* ^/(img|icon)/ {
        root /path/to/your/static/files; # 정적 파일 경로 설정
        expires 1y;                     # 캐싱 만료 시간: 1년
        add_header Cache-Control "public, max-age=31536000, immutable";
        access_log off;                 # 로그 비활성화 (선택사항)
        }
    }
}
```
