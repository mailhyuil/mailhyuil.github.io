# certbot wildcard

```sh
sudo certbot certonly --manual --preferred-challenges=dns --email dep.agile@gmail.com --server https://acme-v02.api.letsencrypt.org/directory --agree-tos -d dep.team -d *.dep.team


# DNS TXT Record 등록
# _acme-challenge.dep.team. 300 IN TXT "..."
```
