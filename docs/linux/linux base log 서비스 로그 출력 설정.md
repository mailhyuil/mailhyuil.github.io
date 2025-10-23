# linux base log 서비스 로그 출력 설정

## /etc/systemd/system/pm2.service

> pm2를 npm이 아닌 systemd로 실행해야함
>
> > 설치는 npm으로 해도 됨

```sh
[Unit]
Description=PM2 process manager
After=network.target

[Service]
ExecStart=/usr/local/bin/pm2 resurrect
ExecReload=/usr/local/bin/pm2 reload all
Restart=always
User=ubuntu
Environment=PATH=/usr/bin:/usr/local/bin
WorkingDirectory=/home/ubuntu

# 로그 설정 추가
StandardOutput=journal
StandardError=journal
SyslogIdentifier=pm2

[Install]
WantedBy=multi-user.target

```
