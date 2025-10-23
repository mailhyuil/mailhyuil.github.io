# docker run options --memory & --memory-swap

> 메모리가 50m 초과 시 kernel이 컨테이너를 종료, 그 후 restart policy에 따른다.
>
> > restart policy를 always로 설정하면 메모리 초과 시 컨테이너를 재시작하게 구성할 수 있다.

```sh
# --memory: 컨테이너가 사용할 수 있는 최대 메모리 양
docker run --memory 50m --restart always <image>

# --memory-swap: 컨테이너가 사용할 수 있는 최대 메모리 + 스왑 메모리 양
docker run --memory 50m --memory-swap 100m --restart always <image>
```
