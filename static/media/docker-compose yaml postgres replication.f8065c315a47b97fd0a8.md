# docker-compose postgres replication

## init.sql

```sql
CREATE USER replicator WITH REPLICATION ENCRYPTED PASSWORD 'replicator_password';
SELECT pg_create_physical_replication_slot('replication_slot');
```

## docker-compose.yml

```yaml
version: "3.8"
x-postgres-common: &postgres-common
  image: postgres:14-alpine
  user: postgres
  restart: always
  healthcheck:
    test: "pg_isready -U user --dbname=postgres"
    interval: 10s
    timeout: 5s
    retries: 5

services:
  postgres_primary:
    <<: *postgres-common
    ports:
      - 5433:5432
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: postgres
      POSTGRES_HOST_AUTH_METHOD: "scram-sha-256\nhost replication all 0.0.0.0/0 md5"
      POSTGRES_INITDB_ARGS: "--auth-host=scram-sha-256"
    command: |
      postgres 
      -c wal_level=replica 
      -c max_wal_senders=10 
      -c max_replication_slots=10
      -c hot_standby=on 
      -c hot_standby_feedback=on
    volumes:
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql

  postgres_replica:
    <<: *postgres-common
    ports:
      - 5434:5432
    environment:
      PGUSER: replicator
      PGPASSWORD: replicator_password
    command: |
      bash -c "
      until pg_basebackup --pgdata=/var/lib/postgresql/data -R --slot=replication_slot --host=postgres_primary --port=5432
      do
      echo 'Waiting for primary to connect...'
      sleep 1s
      done
      echo 'Backup done, starting replica...'
      chmod 0700 /var/lib/postgresql/data
      postgres
      "
    depends_on:
      - postgres_primary
```
