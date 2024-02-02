# postgres utility pg_basebackup

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

pg_basebackup -U postgres -h localhost -p 5432 -D /var/lib/postgresql/data -X stream --checkpoint=fast --slot=some_name -R
```
