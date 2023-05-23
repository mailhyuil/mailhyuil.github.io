# linux cron

## install

### ubuntu

```sh
# cron 설치
sudo apt update -y
sudo apt install -y cron
# cron 시작
sudo service cron start
# cron systemctl 활성화
sudo systemctl enable cron.service
# cron systemctl 등록 확인
sudo systemctl list-unit-files | grep cron
sudo service cron status
```

### centOS

```sh
# cron 설치
sudo yum update -y
sudo yum install -y cronie
# cron 시작
sudo systemctl start crond
# cron systemctl 활성화
sudo systemctl enable crond
# cron systemctl 등록 확인
sudo systemctl list-unit-files | grep crond
```

## crontab

> cron 명령어

```sh
# cron 목록
crontab -l
```

## 작업등록

```sh
# cron 파일 열기
crontab -e
```
