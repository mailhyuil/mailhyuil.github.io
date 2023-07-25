# postgreSQL

## default port : 5432

## DDL

```
create database *
drop database *

create table 테이블(
...
	);
drop table 테이블;
```

## 예약어

```
primary key
foreign key
not null
unique
ckeck (k >= 0)
always as identity
default
```

## DML

```
insert into 테이블 values (값, ...);
insert into 테이블 (컬럼, ...) values (값, ...);

update 테이블 set 컬럼1=바꿀값1, 컬럼2=바꿀값2, ... where 조건;

delete from 테이블 where 조건;

select 컬럼 from 테이블 where 조건;
```

## DCL

## TCL
