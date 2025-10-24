# Docker prune

```sh
# y/n 물어보지 않고 바로 삭제
docker image prune -f

# 사용하지 않는 이미지 모두 삭제
docker image prune -a

# 최신 이미지 2개만 남기고 prune
docker image prune --filter "until=`docker images --format '{{.CreatedAt}}' | sed -n '2p' | awk '{print $1;}'`"

# 사용하지 않는 volume 삭제
docker volume prune

# 사용하지 않는 builder cache 삭제
docker prune builder cache

# 사용하지 않는 network 삭제
# docker error No space left on device error 에러가 나면 사용
docker network prune

# 사용하지 않는 container, network, image, build cache 전부
docker system prune
```
