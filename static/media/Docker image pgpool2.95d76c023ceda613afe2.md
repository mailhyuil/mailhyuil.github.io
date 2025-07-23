# Docker image pgpool2

> /opt/pgpool-II/etc/pgpool.conf

## run

```bash
docker run -d --rm \
 --name pgpool \
 --network test_postgres \
 -u 0 \
 -e POSTGRES_USERNAME=user \
 -e POSTGRES_PASSWORD=password \
 -e PGPOOL_PARAMS_BACKEND_HOSTNAME0=postgres_primary \
 -e PGPOOL_PARAMS_BACKEND_HOSTNAME1=postgres_replica \
 -e PGPOOL_PARAMS_BACKEND_PORT0=5432 \
 -e PGPOOL_PARAMS_BACKEND_PORT1=5432 \
 -e PGPOOL_PARAMS_SR_CHECK_PERIOD=10 \
 -e PGPOOL_PARAMS_SR_CHECK_USER=user \
 -e PGPOOL_PARAMS_HEALTH_CHECK_PERIOD=10 \
 -e PGPOOL_PARAMS_HEALTH_CHECK_USER=user \
 -p 9999:9999 \
 -v $(pwd)/etc:/opt/pgpool-II/etc \
 pgpool/pgpool
```

## 확인 명령어

```sh
docker exec pgpool sh -c "PGPASSWORD=password psql -U user -d postgres -h 127.0.0.1 -p 9999 -c \"show pool_nodes\""
```
