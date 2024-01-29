# postgres dump

```sh
# -h : host
# -U : user
# -d : database
# -t : table
# -n : schema
# -F : format
# c(custom), d(directory), t(tar), p(plain text), h(html)
# c(custom) : .dump
# d(directory) : .sql

# 특정 데이터베이스를 지정하여 백업
pg_dump -h 10.10.10.10 -U $USERNAME -d $DB_NAME -Fc > "${BACKUP_DIR}/${DB_NAME}_${FILE_NAME}.dump"
# 전체 데이터베이스를 백업
pg_dumpall -U $USERNAME > postgres_all_bak.sql
```
