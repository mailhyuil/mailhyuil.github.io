# db backup & recovery

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

# 복구
pg_restore -h 10.10.10.10 -U $USERNAME -d $DB_NAME "${BACKUP_DIR}/${DB_NAME}_${FILE_NAME}.dump"
```

## /var/db_backup/backup.sh

```sh
#!/bin/bash

DEL_FILE=$(date -d '30 day ago' +'%Y-%m-%d_')"*.dump"
FILENAME=$(date +"%Y-%m-%d_%H%M").dump
BACKUP_DIR=/var/db_backup
USERNAME=user_name
DB_NAME=DB_name
PASSWORD=password

cd $BACKUP_DIR

#----- DUMP BACKUP_FILE -----
echo "DB backup start time : " $(date +"%Y-%m-%d %H:%M:%S")
PGPASSWORD=$PASSWORD pg_dump -h 10.10.10.10 -U $USERNAME $DB_NAME -Fc -v > "${BACKUP_DIR}/${DB_NAME}_${FILENAME}"
echo "Successful db backup ( ${BACKUP_DIR}/${DB_NAME}_${FILENAME} )"

#----- DELETE AFTER 30 DAYS -----
echo "Delete old file ${DB_NAME}_${DEL_FILE}"
rm "${BACKUP_DIR}/${DB_NAME}_${DEL_FILE}"
echo "BACKUP - End time : " $(date +"%Y-%m-%d %H:%M:%S")
```

## cron

> crontab -e

```sh
# 매일 00시 00분에 실행
0 0 * * * /bin/bash /var/db_backup/backup.sh
```
