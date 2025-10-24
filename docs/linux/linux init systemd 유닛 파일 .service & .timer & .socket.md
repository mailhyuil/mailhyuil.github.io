# linux init systemd 유닛 파일 .service & .timer & .socket

> /etc/systemd/system/에 있는 파일들에 대한 설명

## .service

> 어플리케이션을 실행하는 방법을 정의하는 파일

```ini
# myapp.service
[Unit]
Description=My Node.js App
After=network.target

[Service]
ExecStart=/usr/bin/node /path/to/app.js # node app.js 실행
# ExecStart=/usr/bin/docker run --rm -p 8080:8080 myapp # 도커 컨테이너 실행
Restart=always
User=www-data
Group=www-data

[Install]
WantedBy=multi-user.target
```

## .timer

> cron과 비슷하게 특정 시간에 어플리케이션을 실행하는 방법을 정의하는 파일
>
> > 특정 시간에 .service파일을 실행

```ini
# myapp.timer
[Unit]
Description=Run myapp every 10 minutes

[Timer]
OnBootSec=5min  # 시스템 부팅 후 5분 뒤 실행
OnUnitActiveSec=10min  # 이후 10분마다 실행
Unit=myapp.service  # 실행할 서비스 지정

[Install]
WantedBy=timers.target
```

## .socket

> service가 실행되기 전에 소켓을 먼저 바인딩해서 트래픽을 대기시키는 역할
>
> > 네트워크 기반 서비스(예: SSH, HTTP, FTP)에서 사용됨.
> >
> > > 서비스가 필요할 때만 실행하는 온디맨드(ondemand) 방식에 사용
> > >
> > > > 8080포트에서 대기하고 있다가 요청이 들어오면 같은 이름을 가진 myapp.service를 실행

```ini
# myapp.socket
[Unit]
Description=MyApp Socket

[Socket]
ListenStream=8080  # 포트 8080에서 대기
Accept=yes

[Install]
WantedBy=sockets.target
```
