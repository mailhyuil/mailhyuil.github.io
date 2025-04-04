# postgreSQL psql

> postgresQL의 명령줄 인터페이스

## db 연결

```sh
psql -U username -d dbname # e.g. psql -d mydb -U postgres

# 원격db에 연결
psql -U username -d dbname -h host -p port
```

## db 연결 변경

> connect

```
\c dbname
```

## table 확인

> list table

```
\dt
```
