# certbot renew (갱신)

## 갱신

```sh
# certbot 잘 돌아가는지 확인 80번이 사용중이라면 nginx를 끄고 시도
certbot renew --dry-run
systemctl stop nginx

# 갱신
cerbot renew
systemctl enable nginx --now
```

## 자동 갱신 cronjob

### letsencrypt-renew.sh

> chmod -x letsencrypt-renew.sh 로 권한 변경

```sh
#!/bin/sh
sudo -i
systemctl stop nginx
certbot renew > /var/log/letsencrypt/letsencrypt-renew.log
systemctl enable nginx --now
```

### cron

> crontab -e

```sh
30 4 * * 0 /etc/letsencrypt/letsencrypt-renew.sh
```
