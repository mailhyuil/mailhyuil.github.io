# postgres view

> 미리 정의된 쿼리를 저장하는 가상 테이블

```sql
-- 생성
CREATE VIEW my_view AS SELECT * FROM my_table;
-- 수정
REPLACE VIEW my_view AS SELECT * FROM my_table;
-- 생성 또는 수정
CREATE OR REPLACE VIEW my_view AS SELECT * FROM my_table;
-- 삭제
DROP VIEW my_view;

-- 사용
SELECT * FROM my_view;
```
