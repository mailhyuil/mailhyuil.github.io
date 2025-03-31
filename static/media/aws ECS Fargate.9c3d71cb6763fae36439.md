# aws ECS Fargate

> ec2와 다르게 별도의 인스턴스를 생성하지 않는다
>
> > 완전 관리형 컨테이너를 생성해주는 서비스
> >
> > > 컨테이너의 CPU와 메모리 사용량에 기반하여 초 단위로 요금을 과금
> > >
> > > Docker 이미지 풀링을 시작하는 시점부터 해당 작업이 종료될 때까지 과금한다.

```sh
# docker로 fargate 방식 구현
docker run --rm -v $PWD:$CONTAINER_PATH <image> <command>
docker run --rm -it -v $PWD:$CONTAINER_PATH <image> <command>
# -it를 붙이면 상호작용이 가능하다.
```
