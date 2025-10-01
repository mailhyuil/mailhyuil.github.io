# postgres 세팅

> pg_basebackup 무조건 한번 해두기
>
> > path
> >
> > /var/lib/postgresql/data
> >
> > /var/lib/postgresql/data/postgresql.conf

## /var/lib/postgresql/data/postgresql.conf

> /mnt/server/archivedir 생성 (postgres 사용자 권한)
>
> > /mnt/server/backupdir 생성 (postgres 사용자 권한)

```conf
## ARCHIVE BACKUP
archive_mode                    = on
archive_command                 = 'test ! -f /mnt/server/archivedir/%f && cp %p /mnt/server/archivedir/%f'
                                # %p: WAL 폴더, %f: WAL 파일이름
                                # aws s3로 보내는 경우: 'aws s3 cp %p s3://bucket-name/%f'
archive_timeout                 = 1 # 1초마다 강제로 WAL 파일을 archive_command로 보냄 (0이면 16MB 채워지면 보냄)

## Archive Recovery 시 사용
restore_command                 = 'cp /mnt/server/archivedir/%f %p'
recovery_target_time            = '2024-01-31 09:07:00 UTC'
```

## 백업

> pg_dump, pg_basebackup을 주기적으로 해주는 스크립트를 실행
>
> > 백업 데이터는 s3, nas, 다른 서버로 보내기

### pg_dump script

```sh
#!/bin/bash
DEL_FILE=$(date -d '30 day ago' +'%Y-%m-%d_')"*.dump"
FILENAME=$(date +"%Y-%m-%d_%H%M").dump
BACKUP_DIR=/mnt/server/backupdir/dumps
USERNAME=user_name
DB_NAME=DB_name
PASSWORD=password

cd $BACKUP_DIR

#----- DUMP BACKUP_FILE -----
echo "DB backup start time : " $(date +"%Y-%m-%d %H:%M:%S")
PGPASSWORD=$PASSWORD pg_dump -U $USERNAME $DB_NAME -Fc -v > "${BACKUP_DIR}/${DB_NAME}_${FILENAME}"
echo "Successful db backup ( ${BACKUP_DIR}/${DB_NAME}_${FILENAME} )"

#----- DELETE AFTER 30 DAYS -----
echo "Delete old file ${DB_NAME}_${DEL_FILE}"
rm "${BACKUP_DIR}/${DB_NAME}_${DEL_FILE}"
echo "BACKUP - End time : " $(date +"%Y-%m-%d %H:%M:%S")
```

### pg_basebackup script

> pg_basebackup을 한 뒤 WAL을 그 전 wal을 지우거나 다른 서버로 보내는 스크립트

```sh
#!/bin/bash
DEL_FILE=$(date -d '30 day ago' +'%Y-%m-%d_')"*.dump"
FILENAME=$(date +"%Y-%m-%d_%H%M").dump
BACKUP_DIR=/mnt/server/backupdir/bases
USERNAME=user_name
DB_NAME=DB_name
PASSWORD=password

cd $BACKUP_DIR

#----- DUMP BACKUP_FILE -----
echo "DB backup start time : " $(date +"%Y-%m-%d %H:%M:%S")
pg_basebackup -D $BACKUP_DIR -c fast -X none
echo "Successful db backup ( ${BACKUP_DIR}/${DB_NAME}_${FILENAME} )"

#----- DELETE AFTER 30 DAYS -----
echo "Delete old file ${DB_NAME}_${DEL_FILE}"
rm "${BACKUP_DIR}/${DB_NAME}_${DEL_FILE}"
echo "BACKUP - End time : " $(date +"%Y-%m-%d %H:%M:%S")
```

### 3중 백업 script

> dump, basebackup, wal을 두개의 원격 서버로 보내는 스크립트

```sh

```

### CRONJOB

> crontab -e

```sh
# pg_basebackup + wal (매일 00시 00분)
0 0 * * * /bin/bash pg_basebackup.sh

# pg_dump (한시간마다)
0 * * * * /bin/bash pg_dump.sh

# 3중 백업 (한시간마다)
0 * * * * /bin/bash remote_backup.sh
```
