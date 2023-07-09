# 쿼리가 느릴 시만 로그 찍기

## /var/lib/pgsql/data/postgresql.conf

```
log_min_duration_statement = 10000 # 쿼리가 10000ms을 넘으면 로그 찍기
session_preload_libraries = 'auto_explain' # 로그를 찍을 때 자동으로 explain analyze 명령 까지 찍게
```
