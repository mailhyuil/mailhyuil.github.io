# certbot command

```sh
# 발급
certbot certonly

# 발급 (자동으로 웹서버에 설정을 추가)
certbot run

# 갱신
certbot renew
certbot renew --cert-name dep.team

# 삭제
certbot delete --cert-name dep.team
```
