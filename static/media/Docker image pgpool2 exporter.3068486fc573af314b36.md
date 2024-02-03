# Docker image pgpool2 exporter

## run

```bash
docker run -d --rm \
    --name pgpool2_exporter \
    --network pg-network \
    -e POSTGRES_USERNAME=postgres \
    -e POSTGRES_PASSWORD=password \
    -e PGPOOL_SERVICE=pgpool \
    -e PGPOOL_SERVICE_PORT=9999 \
    pgpool/pgpool2_exporter
```
