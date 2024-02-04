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

## postgres_replica

### primary의 데이터를 복제 하여 실행

> replicator 유저로 실행

```sh
pg_basebackup --pgdata=/var/lib/postgresql/data -R --slot=replication_slot --host=postgres_primary --port=5432
chmod 0700 /var/lib/postgresql/data
postgres
```
