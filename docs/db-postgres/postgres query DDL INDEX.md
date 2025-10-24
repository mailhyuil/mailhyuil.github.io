# postgres query DDL INDEX

> 인덱스를 정의하는 명령어

```sql
-- 인덱스 생성
CREATE INDEX index_name ON table_name (field_name1, field_name2);
-- UNIQUE 인덱스 생성
CREATE UNIQUE INDEX index_name ON table_name (field_name1, field_name2);
-- 인덱스 정렬
CREATE INDEX index_name ON table_name (field_name1, field_name2 ASC); -- ASC / DESC
-- 인덱스 삭제
DROP INDEX index_name;
-- 인덱스 추가
ALTER TABLE table_name ADD INDEX index_name (field_name1, field_name2);
```
