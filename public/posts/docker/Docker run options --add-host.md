# Docker run --add-host

> 컨테이너의 /etc/hosts 파일에 호스트를 추가한다.

## usage

```sh
docker run --add-host <host>:<ip> <image>
# docker run --add-host host.docker.internal:host-gateway <image>
# host.docker.internal 이라는 이름으로 호스트의 게이트웨이 주소를 추가한다.
# host.docker.internal은 docker desktop 사용시 자동으로 할당되지만 linux에서는 위처럼 직접 추가해야한다.
# 현재 버전에서는 docker desktop에서도 안되는 버그가 있음
```

## host-gateway

> 호스트의 게이트웨이 주소
