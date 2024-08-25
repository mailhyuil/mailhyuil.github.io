# db backup & recovery

## /var/db_backup/backup.sh

```sh
#!/bin/bash

DEL_FILE=$(date -d '30 day ago' +'%Y-%m-%d_')"*.dump"
FILENAME=$(date +"%Y-%m-%d_%H%M").dump
BACKUP_DIR=/var/db_backup
USERNAME=username
DB_NAME=dbname
PASSWORD=password

cd $BACKUP_DIR

#----- DUMP BACKUP_FILE -----
echo "DB backup start time : " $(date +"%Y-%m-%d %H:%M:%S")
PGPASSWORD=$PASSWORD pg_dump -U $USERNAME $DB_NAME -Fc -v > "${BACKUP_DIR}/${DB_NAME}_${FILENAME}"
echo "Successful db backup ( ${BACKUP_DIR}/${DB_NAME}_${FILENAME} )"

#----- COPY TO S3 -----
aws s3 cp "${BACKUP_DIR}/${DB_NAME}_${FILENAME}" s3://bucket_name/db_backup/${DB_NAME}_${FILENAME}

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

# 한시간마다 실행
0 * * * * /bin/bash /var/db_backup/backup.sh

# 10분마다 실행
*/10 * * * * /bin/bash /var/db_backup/backup.sh
```
