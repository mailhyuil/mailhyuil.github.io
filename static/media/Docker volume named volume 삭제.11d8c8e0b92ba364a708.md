# Docker volume named volume 삭제

> named volume은 prune 명령어로 삭제되지 않는다.

```sh
# 볼륨 확인
docker volume ls
# 볼륨 삭제
docker volume rm <volume_name>

# 모든 볼륨 삭제
docker volume rm $(docker volume ls -q)
```
