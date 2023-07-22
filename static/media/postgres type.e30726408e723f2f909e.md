# postgreSQL type

## 문자열

```
char(n)
varchar(n)
text
```

## 정수

```
smallint
integer
bigint
```

## autoincrement 정수

> GENERATE ALWAYS AS IDENTITY 사용을 지향하자

```
smallserial
serial
bigserial
```

## 실수

```
numeric
decimal
real
double
precision
```

## 시간

> programming에서 날짜의 기본 포멧은 YYYY-MM-DD 이다.

```
timestamp
date
time
interval // 시간의 길이 타입
```

## json

```
json
jsonb // json type을 바이너리 데이터로 저장
```
