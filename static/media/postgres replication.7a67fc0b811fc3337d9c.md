# postgres replication

## postgres_primary

### replicator user 생성

```sql
CREATE USER replicator WITH REPLICATION ENCRYPTED PASSWORD 'replicator_password';
SELECT pg_create_physical_replication_slot('replication_slot');
```

### postgres.conf

```conf
wal_level=replica
max_wal_senders=10

max_replication_slots=10

hot_standby=on
hot_standby_feedback=on
```

### pg_hba.conf

```conf
# TYPE  DATABASE        USER            ADDRESS                 METHOD

# "local" is for Unix domain socket connections only
local   all             all                                     trust
# IPv4 local connections:
host    all             all             127.0.0.1/32            scram-sha-256
# IPv6 local connections:
host    all             all             ::1/128                 scram-sha-256
# Allow replication connections from localhost, by a user with the
# replication privilege.
local   replication     all                                     trust
host    replication     all             127.0.0.1/32            scram-sha-256
host    replication     all             ::1/128                 scram-sha-256

host    all             all             all                     scram-sha-256
host    replication     all             0.0.0.0/0               md5
```

## postgres_replica

### primary의 데이터를 복제 하여 실행

> postgres_master의 data 폴더를 통째로 postgres_replica로 복사
>
> > replicator 유저로 실행

```sh
# 부팅 시 실행
# /var/lib/postgresql/data 디렉토리가 비어있어야 함
pg_basebackup --pgdata=/var/lib/postgresql/data -R --slot=replication_slot --host=postgres_primary --port=5432
chmod 0700 /var/lib/postgresql/data
postgres
```
