# docker run options --memory

> 메모리가 50m 초과 시 kernel이 컨테이너를 종료, 그 후 restart policy에 따른다.
>
> > restart policy를 always로 설정하면 메모리 초과 시 컨테이너를 재시작하게 구성할 수 있다.

```sh
docker run --memory 50m --restart always <image>
```
