# Docker run 하나의 작업만 실행하고 없애기 (fargate 방식)

```sh
docker run --rm -v $PWD:$CONTAINER_PATH <image> <command>
docker run --rm -it -v $PWD:$CONTAINER_PATH <image> <command>
# -it를 붙이면 상호작용이 가능하다.
```
