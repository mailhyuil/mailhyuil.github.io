# postgres dump

## 쿼리

```sh
# logical backup
pg_dump DB_NAME > postgres_DB_NAME_bak.sql
# physical backup
pg_basebackup
# 복구
pg_restore
# DB 복구
pg_restore -h 10.10.10.10 -U user_name  -d DB_name -v  ./DBNAME_2022-12-06_0747.dump
# DB 복구 (clean)
pg_restore -h 10.10.10.10 -U user_name -d DB_name --verbose --clean --no-acl --no-owner ./DBNAME_2022-12-06_0747.dump

pg_start_backup
```

## script

> Crontab에 걸어서 사용

```sh
#!/bin/bash
USERNAME="USERNAME"
PASSWORD="PASSWORD"
DB_NAME="DB_NAME"
BACKUP_DIR="/var/db_backup"
RESTORE_FILENAME=$(date +"%Y-%m-%d_%H%M").dump
DELETE_FILENAME=$(date -d '30 days ago' +'%Y-%m-%d')_*.dump

#----- RESTORE BACKUP_FILE -----
cd "$BACKUP_DIR"
echo "DB Backup Start Time: $(date +"%Y-%m-%d %H:%M:%S")"
PGPASSWORD="${PASSWORD}" pg_dump -h 10.10.10.10 -U "${USERNAME}" "${DB_NAME}" -Fc -v > "${BACKUP_DIR}/${DB_NAME}_${RESTORE_FILENAME}"
echo "Successful DB Backup (${BACKUP_DIR}/${DB_NAME}_${RESTORE_FILENAME})"

#----- DELETE AFTER 30 DAYS -----
echo "Delete Old File ${DB_NAME}_${DELETE_FILENAME}"
rm "${BACKUP_DIR}/${DB_NAME}_${DELETE_FILENAME}"
echo "BACKUP - End time: $(date +"%Y-%m-%d %H:%M:%S")"
```

## cron

> crontab -e

```sh
# 매일 00시 00분에 실행
0 0 * * * /bin/bash /var/db_backup/backup.sh
```
