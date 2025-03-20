# linux base 환경변수 유지하기

> /etc/environment 파일에 등록

## /etc/environment

```sh
PM2_HOME="/var/lib/.pm2"
```

## /etc/profile

> shell이 시작될 때 실행되는 파일

```sh
export PM2_HOME="/var/lib/.pm2"
```
