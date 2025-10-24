# linux init systemd 유닛 파일

> /etc/systemd/system/\*.service 파일 생성

## /etc/systemd/system/my-service.service

```sh
[Unit]
Description=My Service # 서비스에 대한 설명을 입력합니다.
After=network.target # 서비스 이전에 시작할 서비스 (의존성)
Before=network.target # 서비스 이후에 시작할 서비스 (의존성)
Requires=
Wants=

[Service]
Type= # simple(default), forking, oneshot, dbus, notify, idle
EnvironmentFile=
ExecStart=/path/to/my-service # 서비스를 시작하는 명령어를 입력합니다.
ExecStartPre=
ExecStartPost=
ExecReload=
ExecStop=
ExecStopPost=
Restart=always # 서비스가 비정상적으로 종료될 경우 자동으로 재시작할지 설정합니다.
RestartSec=5 # 재시작 시간 간격을 설정합니다.
RemainAfterExit=no # 서비스가 종료되었을 때 서비스가 활성화된 상태를 유지할지 설정합니다.
TimeoutSec=
KillMode=
WorkingDirectory=/path/to/working_dir

[Install]
WantedBy=multi-user.target
# default.target    링크 파일을 생성하지 않고
# multi-user.target 링크 파일을 생성함
```

## 활성화

```sh
systemctl enable my-service --now
```
