# docker-postgreSQL

## run

```
docker run --name mypost -d -e POSTGRES_PASSWORD=1234 -p 5432:5432 postgres:14
```

## 접속

```
docker exec -it mypost bash
```

## 실행

> psql을 실행

```
psql -U postgres
```
