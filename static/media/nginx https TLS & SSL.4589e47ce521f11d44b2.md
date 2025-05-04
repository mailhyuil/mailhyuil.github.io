## nginx ssl

> nginx 컨테이너 포트 80, 443 열기
>
> > EC2 인스턴스 방화벽 80, 443 열기

```sh
mkdir /root/ssl/ && cd /root/ssl
openssl req -x509 -days 365 -nodes -newkey rsa:4096 -keyout ssl.key -out ssl.crt
```

### nginx default.conf

```conf
server {
    listen 80;
    listen [::]:80;
    server_name my_server_name;

    # client에게 https://$host$request_uri로 리다이렉트 하라는 301 응답을 보냄
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name my_server_name;

    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_certificate /etc/nginx/ssl/ssl_certificate.pem;
    ssl_certificate_key /etc/nginx/ssl/ssl_certificate_key.pem;

    # (optional) enable OCSP stapling
    ssl_trusted_certificate /etc/nginx/ssl/ssl_trusted_certificate.pem;
    ssl_stapling on;
    ssl_stapling_verify on;
    resolver 8.8.8.8 1.1.1.1; # 네임서버의 주소 (호스팅 업체의)

    location / {
        root /usr/share/nginx/html;
        index index.html;
        try_files $uri $uri/ /index.html =404;
    }

    location /api/v1/ {
        proxy_pass http://localhost:20001;
    }
}
```
