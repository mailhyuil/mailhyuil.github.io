# L5 TLS certbot 인증방식 DNS-01 cloudflare

## install

```sh
apt install certbot
apt install python3-certbot-dns-cloudflare

certbot plugins
```

## api key

```txt
1. 계정관리
2. 계정 API 토큰
3. DNS:Edit 으로 생성
```

## cloudflare.ini

> chmod 600 ~/.secrets/cloudflare.ini

```ini
dns_cloudflare_api_token = 0123456789abcdef0123456789abcdef01234567
```

## cert

```sh
certbot certonly \
  --dns-cloudflare \
  --dns-cloudflare-credentials ~/.secrets/cloudflare.ini \
  -d dep.team \
  -d *.dep.team
```

## renew

```sh
certbot renew --dry-run

certbot renew
```
