# Docker network

> default는 bridge 네트워크 (컨테이너 이름으로 참조는 안됨)
>
> > 컨테이너들은 172.17.0.x ip를 순서대로 받는다
> >
> > > "사용자 생성 bridge 네트워크"만 컨테이너 이름으로 ip를 참조할 수 있다
> > >
> > > > 기본 bridge 네트워크는 컨테이너 이름으로 참조할 수 없다

## network type

```
host : localhost와 동일한 네트워크를 사용
bridge : 하나의 호스트에 있는 컨테이너들이 서로 소통할 수 있게
bridge (사용자 생성) : 컨테이너 이름으로 컨테이너들이 서로 소통할 수 있게
overlay : 여러 호스트에 분산된 컨테이너들이 서로 소통할 수 있게
```

## command

```bash
docker network ls
docker network create my-network --driver bridge
docker network rm my-network
docker network inspect my-network
docker network connect my-network 컨테이너
docker network disconnect my-network 컨테이너
```

## docker0

> 도커 데몬에 의해 생성되는 기본 브릿지 네트워크
>
> > veth(virtual eth)와 eth 간 다리 역할
