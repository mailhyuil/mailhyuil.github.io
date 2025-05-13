# nginx redirect

## www -> non-www redirect

> hostname이 있는 경우 non-hostname으로 redirect하는 방법
>
> > SEO를 위해서 사용

```conf
server {
    server_name          www.example.com;
    listen               80;
    listen               443 ssl;
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    return 301 https://example.com$request_uri; # return 301 $scheme://example.com$request_uri;
}
```

## http -> https redirect

```conf
server {
    server_name          example.com;
    listen               80;
    return 301 https://example.com$request_uri;
}

server {
    server_name          example.com;
    listen               443 ssl;
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
}
```
