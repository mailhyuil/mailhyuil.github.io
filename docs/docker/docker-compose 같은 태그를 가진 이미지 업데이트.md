# docker-compose update image 태그가 같을 시

```sh
docker compose pull # image update
docker compose up -d --force-recreate --build
docker image prune -f
```
