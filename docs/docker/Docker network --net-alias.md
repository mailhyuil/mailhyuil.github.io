## Docker network --net-alias

> 컨테이너를 그룹화해서 라운드 로빈 방식으로 로드밸런싱

```sh
docker network create my-network

# Docker network --net-alias
docker run --name container1 -d --network my-network -p 80:80 --net-alias network wbitt/network-multitool
docker run --name container2 -d --network my-network -p 81:80 --net-alias network wbitt/network-multitool

# 같은 네트워크의 frontend 컨테이너 생성
docker run --name frontend -d --network my-network -p 82:80 wbitt/network-multitool

docker exec frontend curl network
```
