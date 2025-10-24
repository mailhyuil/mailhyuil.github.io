# L5 TLS certbot 인증방식 HTTP-01 standalone - 웹서버가 아직 없을 시

> 아직 웹서버가 없을 때 certbot이 임시 웹서버를 실행해서 인증을 받는 방법
>
> > 80포트를 사용하므로 다른 서비스와 충돌이 날 수 있음 (이미 사용중인 경우 --webroot 방식을 사용)

```sh
docker run --name certbot -it --rm \
-v $(pwd)/certbot:/etc/letsencrypt \
certbot/certbot \
certonly --standalone \
-d <example.com> -d <www.example.com>
```
