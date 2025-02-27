# certbot wildcard

> --server https://acme-v02.api.letsencrypt.org/directory 옵션을 사용하여야 wildcard 인증서를 발급할 수 있습니다.

```sh
certbot certonly --manual --preferred-challenges dns --email dep.agile@gmail.com --server https://acme-v02.api.letsencrypt.org/directory --agree-tos -d dep.team -d *.dep.team


# DNS TXT Record 등록
# _acme-challenge.dep.team. 300 IN TXT "..."
```
