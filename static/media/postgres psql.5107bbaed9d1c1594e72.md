# postgreSQL psql

> postgresQL의 명령줄 인터페이스

## db 연결

```
psql -d dbname -U username

ex) psql -d mydb -U postgres

-h hostname // 원격db에 연결
```

## db 연결 변경

```
\c dbname
```
