# postgres WAL options

## wal_level

```txt
minimal: 가장 적은 정보만 기록
- CHECKPOINT 시 변경된 블록 정보만 기록

replica: Streaming Replication을 위해 필요한 정보까지 포함 (default)
- 모든 변경된 데이터 블록 기록 + MVCC 정보 포함

logical: Debezium 같은 외부 도구에게 전송 가능한 정보까지 포함
- replica 수준 + 논리적 변경 정보 (INSERT/UPDATE/DELETE 포함)
```

## max_replication_slots

> PostgreSQL에서 사용할 수 있는 최대 Replication Slot 수를 설정하는 옵션.
>
> > 너무 많다면 디스크가 부족해질 수 있음.

```txt
max_replication_slots=0  (default)
max_replication_slots=1  (최대 1개의 Replication Slot 사용 가능)
max_replication_slots=10 (다른 replication 도구가 있다면 늘려주기)
```

## max_wal_senders

> WAL을 복제(Streaming Replication)할 때 사용할 수 있는 최대 프로세스 수
>
> > 많을 수록 Standby가 빠르게 Primary의 WAL을 받을 수 있음.

```txt
max_wal_senders=1
```
