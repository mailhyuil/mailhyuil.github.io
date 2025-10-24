# L5 TLS certbot update

> --cert-name 옵션을 사용하여 특정 인증서만 갱신할 수 있다.

## command

```sh
# list
certbot certificates

# update
certbot certonly --webroot -w /home/ubuntu/certbot --cert-name example.co.kr -d example.co.kr
```
