# postgres dump

## 쿼리

```sh
# 특정 데이터베이스를 지정하여 백업
pg_dump $DB_NAME > postgres_$DB_NAME.sql
# 전체 데이터베이스를 백업
pg_dumpall > postgres_all.sql

# 데이터베이스 복구
pg_restore -h 10.10.10.10 -U $USERNAME  -d $DB_NAME -v  ./${DB_NAME}_2022-12-06_0747.dump
# 데이터베이스 복구 (clean)
pg_restore -h 10.10.10.10 -U $USERNAME -d $DB_NAME --verbose --clean --no-acl --no-owner ./${DB_NAME}_2022-12-06_0747.dump
```
