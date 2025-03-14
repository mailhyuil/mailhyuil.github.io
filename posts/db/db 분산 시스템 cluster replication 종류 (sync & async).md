# 복제 종류

## Synchronous Replication (동기 복제)

> master의 write transaction이 standby에 반영되기 전까지 master는 write transaction을 완료하지 않는다.

```txt
synchornous_commit = on
synchronous_standby_names = 'standby1,standby2'
```

## Asynchronous Replication (비동기 복제)

> master의 write transaction이 즉시 완료되고, standby에 반영은 나중에 된다.

```txt
synchornous_commit = off
```
