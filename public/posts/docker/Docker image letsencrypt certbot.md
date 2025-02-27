# Docker image letsencrypt certbot

## run

```sh
# HTML-01 standalone
docker run --name certbot -it --rm -v $(pwd)/certbot:/etc/letsencrypt certbot/certbot \
certonly --server https://acme-v02.api.letsencrypt.org/directory \
--standalone -d example.com -d *.example.com

# HTML-01 webroot
docker run --name certbot -it --rm -v $(pwd)/certbot:/etc/letsencrypt -v $(pwd)/html:/var/www/html certbot/certbot \
certonly --server https://acme-v02.api.letsencrypt.org/directory \
--webroot -w /var/www/html -d example.com -d *.example.com

# DNS-01
docker run --name certbot -it --rm -v $(pwd)/certbot:/etc/letsencrypt certbot/certbot \
certonly --server https://acme-v02.api.letsencrypt.org/directory \
--manual --preferred-challenges dns -d example.com -d *.example.com
```
