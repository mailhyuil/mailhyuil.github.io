# postgres replication

## postgres.conf

```conf
listen_addresses = '*'

archive_mode = on

max_wal_senders = 5

max_wal_size = 10GB

wal_level = replica

hot_standby = on

archive_command = 'rsync -a %p /opt/pg_archives/%f'
```
