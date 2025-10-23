# docker-compose cluster

> core 수만큼 프로세스를 생성하여 cpu 사용량을 최적화
>
> pm2의 cluster mode와 같은 효과
>
> > session 인증 사용 시
> >
> > 세션을 중앙 저장소에 저장해야 한다. (redis)
> >
> > 또는 sticky session 사용
> >
> > 또는 jwt를 사용해서 앱을 stateless하게 만들어야 한다.

## docker-compose.yml

```yaml
services:
  nestjs:
    image: my-nest-app
    build: .
    deploy:
      replicas: 4 # 4개의 컨테이너 실행 (Cluster 효과)
    ports:
      - "3000:3000"
```

## command

```sh
# docker-compose up --scale {container-name}={num} -d
docker-compose up --scale nginx=3 -d
```
