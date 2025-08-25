# postgres utility pg_rewind

```sh
# --source-server / -s : source server connection string
# --target-pgdata / -t : target data directory
# --progress / -P : show progress

pg_rewind --souce-server='host=localhost port=5432 user=postgres password=1234' --target-pgdata=/var/lib/postgresql/data --progress
pg_rewind --source-server='host=::1 port=5445 user=postgres' --target-pgdata=$PGDATA -P
```
