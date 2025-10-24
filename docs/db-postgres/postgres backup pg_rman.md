# postgres backup pg_rman

> rman : Recovery Manager

## install

```sh
tar -xf pg_rman-1.3.16-pg14.tar.gz
cd pg_rman-1.3.16-pg14
make
make install

# BACKUP_PATH 설정
vi ~/.bash_profile
  export BACKUP_PATH=/home/ubuntu/backup
  export PGDATA=/var/lib/pgsql/13/data
  export ARCLOG_PATH=/home/ubuntu/archivedir
source ~/.bash_profile

# postgresql.conf 설정
archive_mode = on
archive_command = 'test ! -f /home/ubuntu/archivedir/%f && cp %p /home/ubuntu/archivedir/%f'

# 백업 카탈로그 초기화
pg_rman init
```

## install error

```sh
# error
pg_rman.h:13:10: fatal error: postgres_fe.h: No such file or directory
   13 | #include "postgres_fe.h"
# solution
apt install postgresql-server-dev-14

# error
/usr/bin/ld: cannot find -lselinux: No such file or directory
/usr/bin/ld: cannot find -llz4: No such file or directory
/usr/bin/ld: cannot find -lpam: No such file or directory
/usr/bin/ld: cannot find -lgssapi_krb5: No such file or directory
/usr/bin/ld: cannot find -lreadline: No such file or directory
# solution
apt install libselinux1-dev liblz4-dev libpam0g-dev libkrb5-dev libreadline-dev -y

# error
/bin/mkdir -p '/usr/lib/postgresql/14/bin'
/usr/bin/install -c  pg_rman '/usr/lib/postgresql/14/bin'
/usr/bin/install: cannot create regular file '/usr/lib/postgresql/14/bin/pg_rman': Permission denied
# solution
chmod 755 /usr/lib/postgresql/14/bin
```

## usage

```sh
# Full backup -- 전체 데이터베이스 클러스터를 백업
pg_rman backup -b full -d mydb

# Incremental backup -- 동일한 타임라인으로 마지막 확인된 백업 이후에 "수정된 파일 또는 페이지만 백업" (증분백업)
pg_rman backup -b incremental -d mydb

# Archive WAL backup -- 아카이브 WAL 파일만 백업
pg_rman backup -b archive -d mydb

# 백업 확인
pg_rman show

# 유효성 검사
pg_rman validate

# 삭제
pg_rman delete 2021-08-05 13:37:27
pg_rman purge # 삭제된 백업의 카탈로그 정보 삭제

# 복구
pg_ctl stop
# --hard-copy : 아카이브 로그 복사 후 복구
pg_rman restore --hard-copy
pg_rman restore --hard-copy --recovery-target-time '2024-05-18 16:55:00' # 시간으로 복구
pg_rman restore --hard-copy --recovery-target-timeline=4 # 타임라인 4로 복구
pg_ctl start
```
