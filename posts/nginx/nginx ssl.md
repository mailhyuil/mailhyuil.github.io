## nginx ssl

> nginx 컨테이너 포트 80, 443 열기
>
> > EC2 인스턴스 방화벽 80, 443 열기

```sh
mkdir /root/ssl/ && cd /root/ssl
openssl req -x509 -days 365 -nodes -newkey rsa:2048 -keyout ssl.key -out ssl.crt
```

### nginx default.conf

```conf
server {
    listen       80;
    server_name  domain.com;
    # client에게 https://$host$request_uri로 리다이렉트 하라는 301 응답을 보냄
    return 301 https://$host$request_uri;
}

server {
    listen       443 ssl;
    server_name  domain.com;

    location / {
        proxy_pass http://my-tomcat:8080;
    }

    ssl_certificate /root/ssl/ssl.crt;
    ssl_certificate_key /root/ssl/ssl.key;
}
```
