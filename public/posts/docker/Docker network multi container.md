## Docker network 멀티 컨테이너

> 하나의 컨테이너에는 하나의 프로세스만 돌아가야한다.
>
> > 따라서 도커로는 멀티 프로세싱을 구현하지 말고 멀티 컨테이너를 구현
> >
> > > pm2 cluster 모드로 멀티프로세싱을 구현하는건 지양

## docker bridge network

> 단일 프로세스 + 멀티 컨테이너 전략을 사용
>
> > 멀티 컨테이너를 하나의 네트워크로 묶어서 사용
> >
> > > docker network, nginx, kubernetes 등으로 로드밸런싱
> > >
> > > > 또는 third network를 생성해서 connect하기

```sh
docker network create my_network

docker run -d --name nginx1 --network my_network nginx
docker run -d --name nginx2 --network my_network nginx
docker run -d --name nginx3 --network my_network nginx

# DNS 라운드 로빈이 적용되었는지 확인
dig nginx1.my_network
dig nginx2.my_network
dig nginx3.my_network
```
