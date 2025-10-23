# Dockerfile postgresql

## Dockerfile

```Dockerfile
FROM postgres:14-alpine
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=mydb
VOLUME ["/var/lib/postgresql/data"]
# COPY init.sql /docker-entrypoint-initdb.d/
EXPOSE 5432
```

## run

```sh
docker run --name my-post -d -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=1234 -e POSTGRES_DB=mydb -p 5432:5432 postgres:14
```

## 접속

```sh
docker exec -it my-post bash
```

## 실행

> psql을 실행

```sh
psql --username postgres --dbname mydb

\c mydb # db 연결
\dt # table 목록
```
