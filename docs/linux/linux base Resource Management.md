# linux base Resource Management

> 프로그램의 특성에 맞춰서 리소스를 제한
>
> > 모니터링 + alert + auto scaling 등을 반드시 활용해야한다.

## Docker & PM2 & systemd 사용

```sh
# docker
docker run -m 512m --cpus="1.5" my-app

# pm2
pm2 start my-app --max-memory 512m --max-cpu 1.5

# systemd
[Service]
ExecStart=/usr/bin/node /app/main.js
MemoryMax=512M
CPUQuota=50%

[Install]
WantedBy=multi-user.target
```

## nice & renice & ionice

> nice: 프로세스의 우선순위를 조정하는 명령어
>
> renice: 실행 중인 프로세스의 우선순위를 조정하는 명령어
>
> ionice: I/O 우선순위를 조정하는 명령어

```sh
nice -n 10 my-app
renice -n 10 -p <pid>
ionice -c2 -n7 -p <pid>
```
