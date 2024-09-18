# certbot nginx

> 301 redirect 해버리면 http로 통신이 안된다.
>
> > return 301 https://$host$request_uri; 을 주석처리 하거나 if 문으로 처리

```conf
server {
    server_name slp1004.com;

    listen 80;
    listen [::]:80;

    location /.well-known/acme-challenge/ {
        allow all;
        root /var/www/certbot;
    }

    if ($request_uri !~ ^/.well-known/acme-challenge/) {
        return 301 https://$host$request_uri;
    }
}
```
