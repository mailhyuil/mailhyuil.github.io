# certbot renew (갱신)

> renew 후 nginx를 reload 해야한다!

## 갱신

```sh
# 테스트
certbot renew --dry-run
# 갱신
certbot renew
# certbot renew --cert-name dep.team

# nginx reload
nginx -s reload
# docker
docker exec nginx nginx -s reload
```

## 자동 갱신 cronjob

### letsencrypt-renew.sh

> chmod -x letsencrypt-renew.sh 로 권한 변경

```sh
#!/bin/sh
sudo -i
certbot renew > /var/log/letsencrypt/letsencrypt-renew.log
nginx -s reload
# docker exec nginx nginx -s reload
```

### cron

> crontab -e

```sh
30 4 * * 0 /etc/letsencrypt/letsencrypt-renew.sh
```
