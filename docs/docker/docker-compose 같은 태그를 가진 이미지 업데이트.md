# docker-compose 같은 태그를 가진 이미지 업데이트

```sh
docker compose pull # image update
docker compose up -d --force-recreate --build
docker image prune -f
```
