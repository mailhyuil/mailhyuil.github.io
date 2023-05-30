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
    server_name  ssl-test.com;
    return 301 https://$host$request_uri;
}

server {
    listen       443 ssl;
    server_name  ssl-test.com;

    location / {
        proxy_pass http://my-tomcat:8080;
    }

    ssl_certificate /root/ssl/ssl.crt;
    ssl_certificate_key /root/ssl/ssl.key;

    ### 이하 생략 ###
}
```
