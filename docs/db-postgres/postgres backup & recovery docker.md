# postgres backup & recovery docker

## backup

```sh
# sql로 백업
docker exec -t <container_name> pg_dumpall -c -U postgres > dump_`date + %Y-%m-%d"_"%H_%M_%S`.sql
# sql로 백업 후 압축
docker exec -t <container_name> pg_dumpall -c -U postgres | gzip > dump_`date + %Y-%m-%d"_"%H_%M_%S`.sql.gz

cat <backup>.sql | docker exec -i <container_name> psql -U postgres
```

## recovery

```sh
docker exec -i <container_name> psql -U postgres < <backup>.sql
```
