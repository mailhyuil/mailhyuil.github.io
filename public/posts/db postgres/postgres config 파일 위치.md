# postgres postgresql.conf 위치

## 쿼리로 확인

```sql
SHOW config_file
```

## psql로 확인

```sh
# postgres user
psql -U postgres -c 'SHOW config_file'
# ubuntu user
sudo -u postgres psql -c 'SHOW config_file'
```
