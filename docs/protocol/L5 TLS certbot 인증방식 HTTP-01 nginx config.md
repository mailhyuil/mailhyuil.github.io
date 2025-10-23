# certbot nginx

> certbot은 사용자가 -w 옵션으로 지정한 경로 내에 .well-known/acme-challenge/ 라는 숨겨진 디렉토리를 만들고, 그 안에 인증용 임시 파일을 생성합니다.
>
> > --webroot 방식으로 인증서를 발급받은 경우 nginx 설정 (--standalone x)
> >
> > > 301 redirect 해버리면 http로 통신이 안된다.
> > >
> > > > return 301 https://$host$request_uri; 을 주석처리 하거나 if 문으로 처리

## certbot

```sh
certbot certonly --webroot -w /var/www/html -d example.com -d www.example.com
```

## nginx.conf

```conf
server {
    listen 80;
    server_name example.com;

    location /.well-known/acme-challenge/ {
        root /var/www/html;
        allow all;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```
