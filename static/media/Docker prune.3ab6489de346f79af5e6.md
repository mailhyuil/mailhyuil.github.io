# Docker 사용하지 않는 이미지 삭제

```sh
# y/n 물어보지 않고 바로 삭제
docker image prune -f

# 사용하지 않는 이미지 모두 삭제
docker image prune -a

# 최신 이미지 2개만 남기고 prune
docker image prune --filter "until=`docker images --format '{{.CreatedAt}}' | sed -n '2p' | awk '{print $1;}'`"

# 사용하지 않는 volume 삭제
docker volume prune
```
