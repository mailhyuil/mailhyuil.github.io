# docker-compose cluster

> app을 여러개 실행하여 병렬로 cpu 사용률을 높이기
>
> > pm2의 cluster mode와 같은 효과

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
