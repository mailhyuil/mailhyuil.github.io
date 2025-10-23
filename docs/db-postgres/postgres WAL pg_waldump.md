# postgres WAL pg_waldump

> WAL은 바이너리 파일이기 때문에 읽기 위해서는 pg_waldump를 사용해야 한다.

```sh
# wal 파일 텍스트로 읽기
pg_waldump <wal file>
# pg_waldump 000000010000000000000002

# wal 파일로 데이터 복구
pg_waldump <wal file> | pg_waldump -r -p <postgres port> <postgres db>

# 특정 데이터베이스의 모든 wal 파일 복구
pg_waldump -d <postgres db> -p <postgres port> -r <wal file>
```
