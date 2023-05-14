# Docker network

> host : localhost와 동일한 네트워크를 사용
>
> > bridge : 하나의 호스트에 있는 컨테이너들이 서로 소통할 수 있게
> >
> > > overlay : 여러 호스트에 분산된 컨테이너들이 서로 소통할 수 있게

> 컨테이너들은 172.17.0.x ip를 순서대로 받는다
> 컨테이너의 이름은 ip를 참조한다

```bash
docker network create my-network
docker network ls
docker network rm my-network
docker network inspect my-network
docker network connect my-network 컨테이너
docker network disconnect my-network 컨테이너
```
