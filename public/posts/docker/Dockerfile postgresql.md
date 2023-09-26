# Dockerfile postgresql

## Dockerfile

```Dockerfile
FROM postgres:alpine
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB mydb
VOLUME ['/var/lib/postgresql/data']
# COPY init.sql /docker-entrypoint-initdb.d/
EXPOSE 5432
```

## run

```sh
docker build ./ -t postgresql
```
