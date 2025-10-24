# postgres backup scripts

## pg_dump_backup.sh

```sh
#!/bin/bash

USERNAME=postgres
DB_NAME=onepartners
PASSWORD=cloud365$
CONTAINER_NAME=postgres
BUCKET_NAME=onepartners-db
BACKUP_DIR=/home/ubuntu/pg-backup
FILENAME="${DB_NAME}_$(date +'%Y-%m-%d_%H%M').dump"

cd $BACKUP_DIR

echo "[pg_dump] $(date) - DB 백업 시작"
PGPASSWORD=$PASSWORD sudo docker exec $CONTAINER_NAME pg_dump -U $USERNAME $DB_NAME -Fc -v > "$FILENAME"
echo "[pg_dump] 백업 완료: $FILENAME"

aws s3 cp "$FILENAME" s3://${BUCKET_NAME}/backup/$FILENAME

# ✅ 업로드 후 즉시 삭제
rm -f "$FILENAME"
echo "[pg_dump] $(date) - S3 업로드 후 로컬 백업 삭제 완료"
```

## pg_basebackup.sh

> basebackup 후 archive 복사 및 삭제

```sh
#!/bin/bash

set -e

CONTAINER_NAME=postgres
BUCKET_NAME=onepartners-db

# 호스트 기준 경로 (docker-compose에서 마운트되어 있어야 함)
BASEBACKUP_DIR=/home/ubuntu/pg-basebackup
ARCHIVE_DIR=/home/ubuntu/pg-archive
DATE_TAG=$(date +"%Y%m%d_%H%M%S")

echo "[INFO] 시작: $DATE_TAG"
# 1. 컨테이너 내부에서 basebackup 실행 + 소유권 수정
docker exec $CONTAINER_NAME bash -c "
  set -e
  export PGPASSWORD='cloud365$'
  mkdir -p /var/lib/postgresql/basebackup_dir/$DATE_TAG
  pg_basebackup \
    -h localhost \
    -U postgres \
    -D /var/lib/postgresql/basebackup_dir/$DATE_TAG \
    -Ft -z -X fetch -P
"

# 2. 호스트에서 base.tar.gz 업로드 + 삭제
BASE_TAR="${BASEBACKUP_DIR}/${DATE_TAG}/base.tar.gz"
if [ -f "$BASE_TAR" ]; then
  echo "[INFO] base.tar.gz 발견 → S3 업로드 중"
  aws s3 cp "$BASE_TAR" "s3://${BUCKET_NAME}/basebackup/base_${DATE_TAG}.tar.gz"
  rm -rf "${BASEBACKUP_DIR:?}/${DATE_TAG}"
  echo "[OK] basebackup 업로드 및 삭제 완료"
else
  echo "❌ base.tar.gz 파일이 없음: $BASE_TAR"
fi

# 3. archive 디렉토리에서 최신 .backup 이후 WAL만 업로드 + 삭제
cd "$ARCHIVE_DIR" || exit 1

LATEST_BACKUP=$(ls -1t *.backup 2>/dev/null | head -n1)
if [ -z "$LATEST_BACKUP" ]; then
  echo "❌ .backup 파일 없음 → archive 처리 생략"
  exit 0
fi

LATEST_BASE=$(basename "$LATEST_BACKUP" | cut -d. -f1)
echo "[INFO] 최신 .backup 기준: $LATEST_BASE (.backup: $LATEST_BACKUP)"

for FILE in $(ls -1 | grep -E '^[0-9A-F]{24}(\.backup)?'); do
  if [[ "$FILE" > "$LATEST_BASE" || "$FILE" == "$LATEST_BACKUP" ]]; then
    aws s3 cp "$FILE" "s3://${BUCKET_NAME}/archive/$FILE"
    rm -f "$FILE"
    echo "✅ $FILE 업로드 및 삭제 완료"
  fi
done

echo "[DONE] basebackup + archive 처리 완료: $(date)"
```

## cron

> sudo crontab -e

```sh
# 매일 03:00에 pg_dump_backup.sh 실행
0 3 * * * sudo /home/ubuntu/scripts/pg_dump_backup.sh
# 매주 월,목 03:00에 pg_basebackup.sh 실행
0 3 * * 1,4 sudo /home/ubuntu/scripts/pg_basebackup.sh
```
