# nginx WAF ModeSecurity

> nginx가 받은 요청을 ModSecurity 모듈(미들웨어)을 통해 요청을 검사
>
> > ModSecurity가 Core Rule Set (CRS)를 이용해 공격 여부 판별 (SQL Injection, XSS 등 악의적인 요청 차단)
> >
> > > 정상 요청: Nginx가 그대로 백엔드 서버(예: PHP, Node.js)로 전달
> > >
> > > 차단된 요청: ModSecurity가 HTTP 403(Forbidden) 등의 응답 반환

## nginx with ModSecurity

> modsecurity-crs (Core Rule Set)를 사용하여 ModSecurity를 적용한 nginx

```yaml
services:
  nginx:
    container_name: nginx
    image: owasp/modsecurity-crs:nginx-alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /opt/nginx/proxy.conf:/etc/nginx/conf.d/proxy.conf:ro
      - /opt/nginx/ssl/private.pem:/etc/nginx/ssl/private.pem:ro
      - /opt/nginx/ssl/crt.pem:/etc/nginx/ssl/crt.pem:ro
      - /opt/nginx/ssl/ca-bundle.pem:/etc/nginx/ssl/ca-bundle.pem:ro
    environment:
      - PROXY=1
    networks:
      nginx:
networks:
  nginx:
```

## proxy.conf

```conf
server {
    listen 443 ssl;
    server_name example.com;
    ssl_certificate /etc/nginx/ssl/crt.pem;
    ssl_certificate_key /etc/nginx/ssl/private.pem;
    ssl_trusted_certificate /etc/nginx/ssl/ca-bundle.pem;

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        add_header 'Access-Control-Allow-Origin' 'https://example.com';
        proxy_set_header Cache-Control $http_cache_control;

        proxy_pass https://origin_host.com;
    }
}
```
