# docker postgresql script backup and upload s3

## pg_dump

```sh
#!/bin/bash

DEL_FILE=$(date -d '30 day ago' +'%Y-%m-%d_')"*.dump"
FILENAME=$(date +"%Y-%m-%d_%H%M").dump
BACKUP_DIR=/home/ubuntu/db_backup
USERNAME=username
DB_NAME=dbname
PASSWORD=password
ENDPOINT_URL=https://kr1-api-object-storage.nhncloudservice.com
CONTAINER_NAME=postgres
BUCKET_NAME=db-backup

cd $BACKUP_DIR

#----- DUMP BACKUP_FILE -----
echo "DB backup start time : " $(date +"%Y-%m-%d %H:%M:%S")
PGPASSWORD=$PASSWORD sudo docker exec $CONTAINER_NAME pg_dump -U $USERNAME $DB_NAME -Fc -v > "${BACKUP_DIR}/${DB_NAME}_${FILENAME}"
echo "Successful db backup ( ${BACKUP_DIR}/${DB_NAME}_${FILENAME} )"

#----- COPY TO S3 -----
sudo aws --endpoint-url=${ENDPOINT_URL} s3 cp "${BACKUP_DIR}/${DB_NAME}_${FILENAME}" s3://${BUCKET_NAME}/${DB_NAME}_${FILENAME}

#----- DELETE AFTER 30 DAYS -----
echo "Delete old file ${DB_NAME}_${DEL_FILE}"
sudo rm "${BACKUP_DIR}/${DB_NAME}_${DEL_FILE}"
echo "BACKUP - End time : " $(date +"%Y-%m-%d %H:%M:%S")
```
