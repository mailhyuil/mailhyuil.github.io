# postgres backup pg_basebackup

> pg_basebackup은 물리적 백업 방법으로 실제 디스크의 데이터 파일을 복사하여 백업하는 방법이다.
>
> pg_basebackup을 실행하면 실제 데이터 블록, WAL 로그, 테이블 파일 등 파일 레벨 복사를 수행한다.
>
> > 클러스터 단위로 백업
> >
> > > 데이터 디렉토리, 테이블 스페이스 등 모든 파일을 백업한다.

```sh
-U # 유저
-h # 호스트
-p # 포트

-X # WAL 전송방법 /// none, stream, fetch

--pgdata / -D # Standby DB 상의 데이터 저장 위치 디렉토리
--checkpoint=fast / -c=fast # 빠른 체크포인트 수행

--slot # Replication Slot 설정.
# 기본적으로 WAL은 Primary에서 더 이상 사용되지 않게 되면 재사용됨.
# 그러나 Standby가 Primary의 WAL을 아직 반영하지 않은 상태에서 재사용 되게 되면 데이터의 유실이 발생하게 됨.
# Replication Slot은 Standby에 WAL이 반영된 이후에만 Primary WAL을 재활용할 수 있도록 하는 역할을 하고,
# "--slot=some_name" 는 Replication Slot이 없으면 Standby가 실패하도록 하는 설정

-R # 복제를 위한 Standby DB 설정을 자동으로 수행


pg_basebackup -D /mnt/server/backupdir -c fast -X none
```

## docker

```sh
docker exec -it postgres bash -c '
  export PGPASSWORD="password"
  pg_basebackup \
    -h localhost \
    -U postgres \
    -D /var/lib/postgresql/basebackup_dir/$(date +%Y%m%d_%H%M%S) \
    -Ft -z -X fetch -P'
```
