# load testing pgbench

> PostgreSQL의 성능을 분석하기 위한 내장 툴
>
> > options의 순서가 중요하다 init 시에는 맨 앞에 -i 옵션을 사용해야 한다.

## options

```sh
pgbench [-i] -h host -p 5432 -U postgres -c 4 -j 4 -t 10 -d mydb -f query.sql
```

## init

> 테스트를 위해 pgbench를 위한 테이블이 생성되어야 합니다. -i 옵션을 사용하여 초기화 작업

```sh
pgbench -i -h localhost -p 5432 -U postgres -d mydb
```

## usage

> -f 옵션을 사용하여 쿼리 파일을 실행할 수 있습니다.
>
> > query.sql 파일은 직접 작성하거나 orm의 query를 사용

```sh
# db에 대한 성능 테스트
pgbench -h localhost -p 5432 -U postgres -c 4 -j 4 -t 10 -d mydb

# query.sql 파일을 이용한 transaction 테스트
pgbench -h localhost -p 5432 -U postgres -c 4 -j 4 -t 10 -f query.sql
```
