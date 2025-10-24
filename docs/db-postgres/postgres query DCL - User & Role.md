# postgres query DCL - User & Role

> 데이터에 대한 접근 권한을 제어하는 명령어
>
> > GRANT, REVOKE

```sql
-- 유저 및 권한 확인
\du
-- 권한 생성
CREATE ROLE 'ROLE_NAME' WITH [...ROLES];
-- CREATE ROLE readaccess;

-- 권한 추가
GRANT 'ROLE_NAME' TO 'USER_NAME';
-- 특정 데이터베이스에 대해서만 권한 부여
GRANT 'ROLE_NAME' ON DATABASE 'DB_NAME' TO 'USER_NAME';
-- 특정 테이블에 대해서만 권한 부여
GRANT 'ROLE_NAME' ON TABLE 'TABLE_NAME' TO 'USER_NAME';
-- 모든 테이블에 대해서 권한 부여
GRANT 'ROLE_NAME' ON ALL TABLES IN SCHEMA 'SCHEMA_NAME' TO 'USER_NAME';

-- 유저 생성
CREATE USER 'username' WITH [...ROLES];
-- CREATE USER 'username' WITH PASSWORD 'password';

-- ROLE 종류
SUPERUSER | NOSUPERUSER -- SUPERUSER 권한 // 모든 권한을 가진다.
CREATEDB | NOCREATEDB -- 데이터베이스 생성 권한
CREATEROLE | NOCREATEROLE -- ROLE 생성 권한
LOGIN | NOLOGIN -- 로그인 허용 여부
INHERIT | NOINHERIT -- ROLE 상속 가능 여부
REPLICATION | NOREPLICATION -- 스트리밍 복제 권한
BYPASSRLS | NOBYPASSRLS -- RLS (row level security) 무시 여부

PASSWORD 'password' -- 패스워드 설정
VALID UNTIL 'timestamp' -- 패스워드 유효기간 설정

IN ROLE 'role_name' -- ROLE 부여
IN GROUP 'group_name' -- GROUP 부여
ROLE 'role_name' -- ROLE 부여
GROUP 'group_name' -- GROUP 부여
ADMIN -- SUPERUSER 권한 부여

-- DML DCL DDL TCL 권한
ALL PRIVILEGES -- 아래의 모든 권한을 가진다.
SELECT -- 테이블 조회 권한
INSERT -- 테이블 삽입 권한
UPDATE -- 테이블 수정 권한
DELETE -- 테이블 삭제 권한
TRUNCATE -- 테이블 초기화 권한
REFERENCES -- 테이블 참조 권한
TRIGGER -- 트리거 생성 권한
CREATE -- 데이터베이스 생성 권한
CONNECT -- 데이터베이스 접속 권한
TEMPORARY -- 임시 테이블 생성 권한
EXECUTE -- 함수 실행 권한
USAGE -- 스키마 사용 권한
```
