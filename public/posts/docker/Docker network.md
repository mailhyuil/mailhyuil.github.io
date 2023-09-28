# Docker network

> host : localhost와 동일한 네트워크를 사용
>
> > bridge : 하나의 호스트에 있는 컨테이너들이 서로 소통할 수 있게
> >
> > > overlay : 여러 호스트에 분산된 컨테이너들이 서로 소통할 수 있게

> 컨테이너들은 172.17.0.x ip를 순서대로 받는다
>
> 사용자 생성 bridge network는 컨테이너 이름으로 ip를 참조할 수 있다

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

## --expose

> 문서화 용도

```sh
docker run --name my-nginx -d --expose 80  nginx
```
