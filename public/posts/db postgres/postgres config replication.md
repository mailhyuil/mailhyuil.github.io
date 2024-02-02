# postgres replication

## postgres.conf

```conf
max_wal_senders = 5
max_wal_size = 10GB

hot_standby = on

archive_mode = on
archive_command = 'rsync -a %p /opt/pg_archives/%f'
```
