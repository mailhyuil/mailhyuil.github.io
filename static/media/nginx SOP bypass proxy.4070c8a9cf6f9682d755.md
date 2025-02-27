# nginx SOP bypass proxy

```conf
server {
    listen 80;
    server_name myproxy.com;

    location /api/ {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # 서버 용 SOP 우회 설정
        proxy_set_header Origin localhost:3000;

        # 브라우저 용 SOP 우회 설정
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Allow-Methods "GET, POST, OPTIONS, PUT, DELETE";
        add_header Access-Control-Allow-Headers "Authorization, Content-Type, X-Requested-With";
        add_header Access-Control-Allow-Credentials true;

        # OPTIONS 프리플라이트 요청 처리
        if ($request_method = OPTIONS) {
            return 204;
        }

        proxy_pass http://localhost:3000/;
    }
}
```
