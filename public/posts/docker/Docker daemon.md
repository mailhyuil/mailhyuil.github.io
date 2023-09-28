# docker daemon

> Docker는 client (CLI) 와 server (daemon) 으로 구성되어 있다.
>
> > Docker Desktop으로 설치할 경우 dockerd는 사용할 필요가 없다.
> >
> > > cli로 dockerd에 명령을 내리면 dockerd가 명령을 수행하고 결과를 cli에 전달한다.

## daemon.json

> Docker 데몬의 동작을 사용자 정의하고 구성할 수 있습니다.
>
> > etc/docker/daemon.json 으로 설정

```sh
{
  "log-driver": "json-file",
  "log-opts":{
    "max-size":"10m",
    "max-file":"10"
  }
}
```
