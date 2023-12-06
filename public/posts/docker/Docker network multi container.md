## Docker network 멀티 컨테이너

> 단일 프로세스 + 멀티 컨테이너 전략을 사용
> 하나의 컨테이너에는 하나의 프로세스만 돌아가야한다.
>
> > 따라서 도커로는 멀티 프로세싱을 구현하지 말고 멀티 컨테이너를 구현
> >
> > > pm2 cluster 모드로 멀티프로세싱을 구현하는건 지양

## 로드밸런싱

> nginx, kubernetes 등으로 로드밸런싱
>
> > 또는 --net-alias로 컨테이너를 그룹화해서 라운드 로빈 방식으로 로드밸런싱

```sh
docker network create my-network

# 컨테이너를 생성하고 my-network에 연결 및 --net-alias로 그룹화
docker run --name container1 -d --network my-network -p 80:80 --net-alias network wbitt/network-multitool
docker run --name container2 -d --network my-network -p 81:80 --net-alias network wbitt/network-multitool

# 같은 네트워크의 frontend 컨테이너 생성
docker run --name frontend -d --network my-network -p 82:80 wbitt/network-multitool

docker exec frontend curl network
```
