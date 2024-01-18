# linux service 생성

> /etc/systemd/system/\*.service 파일 생성

1. Systemd 유닛 파일 생성

```sh
nano /etc/systemd/system/my-service.service
```

2. 서비스 구성 작성

```sh
[Unit]
Description=My Service # 서비스에 대한 설명을 입력합니다.
After=network.target # 해당 서비스가 의존하는 다른 서비스 또는 타겟을 설정합니다.

[Service]
ExecStart=/path/to/my-service # 서비스를 시작하는 명령어를 입력합니다.
Restart=always # 서비스가 비정상적으로 종료될 경우 자동으로 재시작할지 설정합니다.
WorkingDirectory=/your/working/dir

[Install]
WantedBy=multi-user.target # 서비스가 활성화되어야 하는 타겟을 설정합니다.
```

3. 서비스 활성화

```sh
systemctl enable my-service
systemctl start my-service

service my-service start
service my-service status
```
