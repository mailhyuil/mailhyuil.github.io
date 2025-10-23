# L5 TLS certbot 인증방식 HTTP-01

> 웹서버에 파일을 추가하는 방식

```sh
certbot certonly --webroot -w /var/www/html -d example.com -d www.example.com
```
