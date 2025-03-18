# certbot wildcard

> --server https://acme-v02.api.letsencrypt.org/directory 옵션을 사용하여야 wildcard 인증서를 발급할 수 있습니다.
>
> > renew를 하기 위해서는
> >
> > --manual-auth-hook renew-hook.sh 를 사용해서 인증서를 발급 받아야 한다.
> >
> > 또는 python3-certbot-dns-cloudflare 같은 dns plugin을 사용

```sh
certbot certonly --manual --preferred-challenges dns --email dep.agile@gmail.com --server https://acme-v02.api.letsencrypt.org/directory --agree-tos -d dep.team -d *.dep.team

# DNS TXT Record 등록
# _acme-challenge.dep.team. 300 IN TXT "..."
```

## renew-hook.sh

```sh
#!/bin/bash

API_KEY="your_cloudflare_api_key"
EMAIL="your_email@example.com"
ZONE_ID="your_zone_id"

# Certbot이 제공하는 환경 변수
DOMAIN="_acme-challenge.$CERTBOT_DOMAIN"
TOKEN_VALUE=$CERTBOT_VALIDATION

# Cloudflare API를 사용하여 DNS TXT 레코드 생성
curl -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records" \
     -H "X-Auth-Email: $EMAIL" \
     -H "X-Auth-Key: $API_KEY" \
     -H "Content-Type: application/json" \
     --data '{"type":"TXT","name":"'"$DOMAIN"'","content":"'"$TOKEN_VALUE"'","ttl":120}'
```
