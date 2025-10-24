# Docker image postgres init sql

> postgres는 실행 시 /docker-entrypoint-initdb.d/에 있는 sql 파일을 실행한다.

## init.sql

```sql
CREATE EXTENSION IF NOT EXISTS vector;
```

## run

```sh
docker run -d \
  --name postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_DB=postgres \
  -v $(pwd)/init.sql:/docker-entrypoint-initdb.d/init.sql \
  -p 5432:5432 \
  postgres:latest
```
