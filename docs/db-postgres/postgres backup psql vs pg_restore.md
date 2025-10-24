# postgres backup psql vs pg_restore

```sh
# sql 파일로 복원
psql -U postgres -f dump.sql

# dump 파일로 복원
# -h : host
# -p : port
# -U : user

# -d : database
# -v : verbose
pg_restore -h 10.10.10.10 -U $USERNAME  -d $DB_NAME -v  ./${DB_NAME}_2022-12-06_0747.dump
```
