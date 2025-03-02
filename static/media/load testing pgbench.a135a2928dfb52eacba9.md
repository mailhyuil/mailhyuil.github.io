# load testing pgbench

> PostgreSQL의 성능을 분석하기 위한 내장 툴

## init

> 테스트를 위해 pgbench를 위한 테이블이 생성되어야 합니다. -i 옵션을 사용하여 초기화 작업

```sh
pgbench -i -h localhost -d mydb -U postgres [-p 5432]
```

## usage

```sh
pgbench -h <DB_HOST> -U <DB_USER> -d <DB_NAME> -p <DB_PORT> -c <CLIENTS> -j <THREADS> -T <DURATION>
```
