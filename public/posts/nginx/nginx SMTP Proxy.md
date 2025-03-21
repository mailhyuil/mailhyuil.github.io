# nginx SMTP Proxy

> mail module 필요
>
> > smtp 사용시 중간에 거치는 프록시 서버를 구출 (인증, 로깅 등의 용도)

```conf
mail {
  server_name mail.example.com;

  auth_http 127.0.0.1:8080/auth; # ✅ 인증 서버

  proxy_pass_error_message on;

  smtp_capabilities "SIZE 10485760" "STARTTLS" "AUTH LOGIN PLAIN";

  server {
    listen 25;
    protocol smtp;
    proxy_pass 127.0.0.1:2525; # ✅ 실제 SMTP 서버
  }
}
```
