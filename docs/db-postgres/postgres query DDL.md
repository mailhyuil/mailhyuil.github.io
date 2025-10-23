# postgreSQL DDL (Data Definition Language)

> 데이터를 정의하는 명령어
>
> > CREATE, ALTER, DROP, TRUNCATE

```sql
-- 데이터베이스 생성
CREATE DATABASE 'dbname';

-- 데이터베이스 삭제
DROP DATABASE 'dbname';

-- 테이블 생성
CREATE TABLE "User" (
	id SERIAL PRIMARY KEY,
	username VARCHAR(50) UNIQUE NOT NULL,
	password VARCHAR(50) NOT NULL,
	email VARCHAR(50) UNIQUE NOT NULL,
	created_at TIMESTAMP NOT NULL,
	updated_at TIMESTAMP NOT NULL
);

-- 테이블 수정
ALTER TABLE "User" ADD COLUMN "age" INTEGER;

-- 테이블 삭제
DROP TABLE "User";

-- 인덱스 생성
CREATE INDEX index_name ON table_name (field_name1, field_name2);
```
