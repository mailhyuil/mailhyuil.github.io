## ncs 순서

> 템플릿(pod)를 생성 후 워크로드 생성
>
> > 템플릿에는 하나의 컨테이너가 들어간다 (단일 컨테이너 원칙)

```sh
docker login
docker build -t my-server -f Dockerfile.server ./
docker tag my-server a301cea9-kr1-registry.container.nhncloud.com/wings/my-server:1.0
docker push a301cea9-kr1-registry.container.nhncloud.com/wings/my-server:1.0
```
