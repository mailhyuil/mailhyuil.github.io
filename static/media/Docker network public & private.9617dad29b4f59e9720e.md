## Docker network public & private

> private : db backend
>
> > public : frontend (nginx)
> >
> > > --internal network도 docker exec로 접근 가능하다 이는 네트워크 통신이 아니라 컨테이너 내부에서 실행되는 명령어이기 때문이다.

```sh
docker network create public
docker network create private --internal

docker run --name frontend -d --network public -p 80:80 wbitt/network-multitool
docker run --name backend -d --network private wbitt/network-multitool

# docker network connect <network> <container>
docker network connect public backend

docker container inspect frontend | grep -i ipaddress
```
