# SSL

## docker + nginx + ssl
- nginx 컨테이너 포트 80, 443 열기
- EC2 인스턴스 방화벽 443 열기

```
mkdir /root/ssl/

openssl req -x509 -days 30 -nodes -newkey rsa:2048 -keyout /root/ssl/nginx-ssl.key -out /root/ssl/nginx-ssl.crt


```
- default.conf
```
server {
    listen       80;
    server_name  nginx-ssl-test.com;
    return 301 https://$host$request_uri;
}

server {
    listen       443 ssl;
    server_name  nginx-ssl-test.com;

    location / {
        proxy_pass http://my-tomcat:8080;
    }

    ssl_certificate /root/ssl/nginx-ssl.crt;
    ssl_certificate_key /root/ssl/nginx-ssl.key;

    ### 이하 생략 ###
}
```