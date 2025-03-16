# postgres replication slots

> 기본적으로 WAL은 Primary에서 더 이상 사용되지 않게 되면 재사용됨. (overwrite)
>
> > 그러나 Standby가 Primary의 WAL을 아직 반영하지 않은 상태에서 재사용 되게 되면 데이터의 유실이 발생하게 됨.
> >
> > > Replication Slot은 Standby에 WAL이 반영된 이후에만 Primary WAL을 재활용할 수 있도록 하는 역할
> > >
> > > > "--slot=some_name" 는 Replication Slot이 없으면 Standby가 실패하도록 하는 설정
> > > >
> > > > > 즉, Replication Slot은 **Replication Client(Debezium 등)**이 데이터를 놓치지 않게 도와줌.

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
