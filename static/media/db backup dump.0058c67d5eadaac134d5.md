# database 백업

> dump 명령어를 사용하여 백업

## postgreSQL

```sh
pg_dump DB_NAME > postgres_DB_NAME_bak.sql
```

## mysql

```sh
mysqldump -u 유저명 -p DB명 > 아웃풋.sql
```
