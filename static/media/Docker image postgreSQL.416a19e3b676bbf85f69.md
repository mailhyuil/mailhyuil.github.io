# docker-postgreSQL

## run

```sh
docker volume create my-volume

docker run --name postgres \
--network private -d \
-v my-volume:/var/lib/postgresql/data \
-e POSTGRES_USER=postgres \
-e POSTGRES_PASSWORD=1234 \
-e POSTGRES_DB=mydb \
-p 5432:5432 \
postgres:15.4
```

## 접속

```sh
docker exec -it postgres bash
```

## 실행

> psql을 실행

```sh
psql --username postgres --dbname mydb

\c mydb # db 연결
\dt # table 목록
```