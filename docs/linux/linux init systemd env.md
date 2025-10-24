# linux init systemd env

## /etc/systemd/system/app.service

```ini
[Unit]
Description=My Node.js App
After=network.target

[Service]
Type=simple
EnvironmentFile=/path/to/.env  # .env 파일을 환경변수로 로드
ExecStart=/usr/bin/node /path/to/app.js
Restart=always
User=www-data
Group=www-data

[Install]
WantedBy=multi-user.target
```
