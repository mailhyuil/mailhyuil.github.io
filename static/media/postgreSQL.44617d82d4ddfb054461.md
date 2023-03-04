# postgreSQL

## default port : 5432

## 자료형

```
char(n)	고정 길이 문자열
varchar(n)	가변 길이 문자열

int2	2 bytes 정수형
int	4 bytes 정수형
int8	8 bytes 정수형

float4	4 bytes 실수형
float8	8 bytes 실수형

bool	참/거짓 자료형

date	년-월-일
time	시-분-초
timetz	시-분-초 + 시간대
timestamp	년-월-일-시-분-초
timestamptz	년-월-일-시-분-초 + 시간대
```

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
always as identity
not null
unique
default
ckeck (k >= 0)
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

## command

```
\h help
\c database 연결
\dt 테이블 보기
```
