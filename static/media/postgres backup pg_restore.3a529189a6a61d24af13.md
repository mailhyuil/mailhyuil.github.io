# postgres recovery

> pg_dump -Fc 옵션을 사용하면 pg_restore로 복구해야한다.

```sh
# sql 파일로 복원
psql -U postgres -c dump.sql

# dump 파일로 복원
# -h : host
# -p : port
# -U : user

# -d : database
# -v : verbose
pg_restore -h 10.10.10.10 -U $USERNAME  -d $DB_NAME -v  ./${DB_NAME}_2022-12-06_0747.dump
```
