# postgres 세팅

## postgresql.conf

> /mnt/server/archivedir 생성 (postgres 사용자 권한)
>
> > /mnt/server/backupdir 생성 (postgres 사용자 권한)

```conf
## Connecting
port                            = 5432
listen_addresses                = '*'
max_connections                 = 100

## Memory
shared_buffers                  = 400MB
work_mem                        = 1MB
maintenance_work_mem            = 1GB

## Disk
fsync                           = on
synchronous_commit              = on
full_page_writes                = on
checkpoint_segments             = 100

## ARCHIVE BACKUP
wal_level                       = replica
archive_mode                    = on
archive_command                 = 'test ! -f /mnt/server/archivedir/%f && cp %p /mnt/server/archivedir/%f'
archive_timeout                 = 1
restore_command = 'cp /mnt/server/archivedir/%f %p'
#recovery_target_time = '2024-01-31 09:07:00 UTC'

## Planner
effective_cache_size            = 18GB
random_page_cost                = 2

## Logging
log_destination                 = 'stderr'
logging_collector               = on
log_filename                    = 'postgres-%Y-%m-%d.log'
log_truncate_on_rotation        = off
log_rotation_age                = 1d
log_rotation_size               = 0
log_min_duration_statement      = 200
log_statement                   = 'ddl'
log_line_prefix                 = '%t %u@%d %p'

## Autovacuum
autovacuum                      = on
autovacuum_vacuum_scale_factor  = 0.1
autovacuum_analyze_scale_factor = 0.3

## Bulk loading only - leave 'on' for everyday use!
#autovacuum                      = off
#fsync                           = off
#full_page_writes                = off
```

## pg_dump script

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

## pg_basebackup script

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

## 3중 백업 script

> dump, basebackup, wal을 두개의 원격 서버로 보내는 스크립트

```sh

```

## CRONJOB

> crontab -e

```sh
# pg_basebackup + wal (매일 00시 00분)
0 0 * * * /bin/bash pg_basebackup.sh

# pg_dump (한시간마다)
0 * * * * /bin/bash pg_dump.sh

# 3중 백업 (한시간마다)
0 * * * * /bin/bash remote_backup.sh
```
