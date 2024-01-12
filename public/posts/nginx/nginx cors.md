# nginx cors

> OPTIONS 요청에 대해서 header 추가
> 사전 요청에 관해서는 204 No Content를 반환하는 것을 권장하고 있습니다.
>
> > Access-Control-Allow-Origin은 변경해주기
> >
> > > always 설정을 하여 실패한 요청의 경우에도 cors 설정을 해주었습니다.

```conf
server {
    server_name api.booklog.dev;

    listen 443 ssl;

    ssl_certificate /etc/letsencrypt/live/api.booklog.dev/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.booklog.dev/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

    location / {
        if ($request_method = 'OPTIONS') {
            add_header 'Access-Control-Allow-Origin' '*';
            add_header 'Access-Control-Allow-Methods' 'GET, POST, DELETE, PATCH, OPTIONS';
            add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization';
            add_header 'Access-Control-Max-Age' 86400;
            return 204;
        }
        add_header 'Access-Control-Allow-Origin' '*' always;
        add_header 'Content-Type' 'application/json' always;
        proxy_pass http://localhost:3000/;
    }
}
```
