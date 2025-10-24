# postgres WAL archive restore

## 순서

1. postgres 중지

2. data 경로의 파일들을 다른 곳으로 이동시키고 전부 삭제

3. pg_basebackup 파일을 data경로로 복사 (pg_wal 제외)

4. data경로에 recovery.signal 파일 생성

   - recovery.signal 파일은 postgres가 복구모드로 실행되도록 알려줌
   - (특정 시점으로 복구를 원하면 이 파일에 recovery_target_time을 설정)

5. 서버를 실행하면 복구모드로 실행된다

6. 복구가 완료되면 recovery.signal이 사라짐

## restore

```conf
restore_command = 'cp /mnt/server/archivedir/%f %p'

# 가장 최근 WAL까지 복구 시
restore_target_time = 'latest'
# 특정 시점으로 복구 시
restore_target_time = '2021-04-05 00:21:28'
# 특정 transaction까지 복구 시
restore_target_xid = '123456'
```

## 복구가 완료되었다면 복구모드를 해제해야 한다.

```sql
-- 복구모드 확인
SELECT pg_is_in_recovery();
-- 복구모드에서 승격
SELECT pg_promote();
```
