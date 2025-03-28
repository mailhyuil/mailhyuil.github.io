# nest session sticky session

## ip_hash 방식

```conf
upstream nestjs_backend {
    ip_hash;  # 클라이언트 IP를 해시하여 특정 서버로 라우팅
    server 192.168.1.101:3000;
    server 192.168.1.102:3000;
}

server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://nestjs_backend;
    }
}
```

## cookie 방식

```conf
upstream nestjs_backend {
    # 3rd-party 모듈 또는 NGINX Plus 예시
    server 192.168.1.101:3000;
    server 192.168.1.102:3000;

    # 예시 (모듈마다 설정 문법이 다름)
    sticky cookie srv_id expires=1h domain=.example.com path=/;
}

server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://nestjs_backend;
    }
}
```
