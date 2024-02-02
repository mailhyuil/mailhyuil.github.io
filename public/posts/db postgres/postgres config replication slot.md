# postgres replication slots

> 기본적으로 WAL은 Primary에서 더 이상 사용되지 않게 되면 재사용됨. (overwrite)
>
> > 그러나 Standby가 Primary의 WAL을 아직 반영하지 않은 상태에서 재사용 되게 되면 데이터의 유실이 발생하게 됨.
> >
> > > Replication Slot은 Standby에 WAL이 반영된 이후에만 Primary WAL을 재활용할 수 있도록 하는 역할을 하고,
> > >
> > > > "--slot=some_name" 는 Replication Slot이 없으면 Standby가 실패하도록 하는 설정

## physical replication slot

> wal_level=replica

## logical replication slot

> wal_level=logical
