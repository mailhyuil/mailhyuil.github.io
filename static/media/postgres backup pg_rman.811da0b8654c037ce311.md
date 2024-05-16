# postgres pg_rman

> rman : Recovery Manager

## install

```sh
tar -xf pg_rman-x.y.z-pgxx.tar.gz
cd ppg_rman-x.y.z-pgxx
make
make install

# BACKUP_PATH 설정
vi ~/.bash_profile
  export BACKUP_PATH=<BACKUP_PATH>
source ~/.bash_profile

# 백업 카탈로그 초기화
pg_rman init
```

## usage

```sh
# Full backup -- 전체 데이터베이스 클러스터를 백업
pg_rman backup -b full

# Incremental backup -- 동일한 타임라인으로 마지막 확인된 백업 이후에 "수정된 파일 또는 페이지만 백업" (증분백업)
pg_rman backup -b incremental

# Archive WAL backup -- 아카이브 WAL 파일만 백업
pg_rman backup -b archive

# 백업 확인
pg_rman show

# 유효성 검사
pg_rman validate

# 복구
pg_ctl stop
pg_rman restore --hard-copy # --hard-copy : 아카이브 로그 복사 (심볼릭 링크 X)

# 삭제
pg_rman delete 2021-08-05 13:37:27
pg_rman purge # 삭제된 백업의 카탈로그 정보 삭제
```
