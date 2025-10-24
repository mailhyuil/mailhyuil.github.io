# linux package cron

## install

```sh
# cron 설치
apt install cron -y
```

## usage

```sh
# cron systemctl 활성화
systemctl enable cron.service --now

# cron systemctl 등록 확인
systemctl status cron.service

# cron 목록
crontab -l

# cron 파일 열기
# 작업등록
crontab -e
```
