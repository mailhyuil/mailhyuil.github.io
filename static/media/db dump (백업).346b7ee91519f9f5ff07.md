# dump

> 백업

## postgreSQL

```sh
pg_dump DB_NAME > postgres_DB_NAME_bak.sql
```

## mysql

```sh
mysqldump -u 유저명 -p DB명 > 아웃풋.sql
```

## 스크립트

. Crontab에 걸어서 사용

### v1

```sh
#!/bin/bash

#----- DELETE FILE_NAME SETTING -----
DEL_FILE=$(date -d '30 day ago' +'%Y-%m-%d_')"*.dump"

#----- FILE NAME SETTING -----
FILENAME=$(date +"%Y-%m-%d_%H%M").dump

#----- BACKUP_DIR SETTING -----
BACKUP_DIR=/var/db_backup

cd $BACKUP_DIR
echo "DB backup start time : " $(date +"%Y-%m-%d %H:%M:%S")

#----- RESTORE BACKUP_FILE -----
PGPASSWORD="admin123" pg_dump -h 10.10.10.10 -U user_name DB_name -Fc -v > "${BACKUP_DIR}/DBNAME_${FILENAME}"

echo "Successful db backup ( ${BACKUP_DIR}/DBNAME_${FILENAME} )"
echo "Delete old file DBNAME_${DEL_FILE}"

#----- DELETE AFTER 30 DAYS -----
rm "${BACKUP_DIR}/DBNAME_${DEL_FILE}"

echo "BACKUP - End time : " $(date +"%Y-%m-%d %H:%M:%S")
```

### v2

```sh
## PostgreSQL 백업 스크립트
## 해당 스크립트는 PostgreSQL DB의 wal_level 이 logical or replica or hot_standby 일 경우에만 사용 가능합니다.
## 작성자 : Rastalion
## rastalion.me

###해당부분은 백업할 DB 서버의 정보에 맞게 직접 채워넣어야 합니다.

### DB의 superuser  (postgres)
DB_USER=

### 백업이 받아지는 경로
BACKUP_DIR=

### DATA 경로
DATA_DIR=

### 테이블 스페이스들이 있는 경로
TBS_DIR=

### archive_command에 의해 파일이 복사 되는 경로
ARCHIVE_DIR=


###아래 부분은 수정 금지

### 1. DB 백업
export DATEVAR=`date +%Y%m%d`
export FILE_NAME=$DATEVAR

if [ -d $BACKUP_DIR/$FILE_NAME ];
  then
    echo "Directory exist"
  else
    echo "Making a backup directory"
    mkdir -p $BACKUP_DIR/$FILE_NAME
fi

RECOVERY_STATUS=`psql -t -U $DB_USER -c "select pg_is_in_recovery();" | head -n 1`
if [[ "$RECOVERY_STATUS" =~ "f" ]];
  then
    ###DB 백업 시작
    echo "begin Backup"
    psql -U $DB_USER -c "select pg_start_backup('backup',true);"
    ###백업대상 Copy
    echo "Copy Database"
    cp -a $DATA_DIR $BACKUP_DIR/$FILE_NAME/
    cp -a $TBS_DIR $BACKUP_DIR/$FILE_NAME/
    cd $BACKUP_DIR/$FILE_NAME
    tar -zcvf $BACKUP_DIR/data_`date +%Y%m%d`.tar.gz ./*
    cd $BACKUP_DIR
    rm -rf $FILE_NAME
    ###DB 백업 종료
    echo "end backup"
    psql -U $DB_USER -c "select pg_stop_backup();"
  else
    echo "wal_level fault"
fi

### 2. 아카이브 백업
ARCHIVE_STAUS=`psql -t -U $DB_USER -c "show archive_mode;" | head -n 1`
if [[ "$ARCHIVE_STAUS" =~ "on" ]];
  then
    echo "DB archive mode = on"
    cd $ARCHIVE_DIR
    tar -zcvf $BACKUP_DIR/arch_`date +%Y%m%d`.tar.gz ./*
    ### ARCHIVE영역삭제 3일 지난것만 삭제
    if [ -z $(find $ARCHIVE_DIR -type f -mtime +3) ];
      then
        echo "There are no archives"
      else
        echo "Delete Archvie over 3days"
        find $ARCHIVE_DIR/* -type f -mtime +3 -exec rm -f {} \;
      fi
    else
      echo " DB archive mode = off"
fi

### 3. 오래된 백업 삭제
if [ -z $(find $BACKUP_DIR -type f -mtime +3) ];
  then
    echo "There are no backup files"
  else
    echo "Delete Backup files over 3days"
    find $BACKUP_DIR/*.gz -type f -mtime +3 -exec rm -f {} \;
fi
```

## 복구 명령어

```sh
PGPASSWORD="admin123" pg_restore -h 10.10.10.10 -U user_name  -d DB_name -v  ./DBNAME_2022-12-06_0747.dump

PGPASSWORD="admin123" pg_restore --verbose --clean --no-acl --no-owner -h 10.10.10.10 -U user_name -d DB_name ./DBNAME_2022-12-06_0747.dump
```
