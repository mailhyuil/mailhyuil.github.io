# postgres DML (Data Manipulation Language) (CRUD)

```sql
-- 데이터 삽입
INSERT INTO "User" VALUES ('sb', '1234');
INSERT INTO "User" (username, password) VALUES ('sb', '1234');

-- 데이터 조회
SELECT * from "User";
SELECT username, password FROM "User";
SELECT * FROM "User" WHERE username='hyuil';

-- 데이터 수정
UPDATE "User" SET username='hyuil', password='4321' WHERE username='sb';

-- 데이터 삭제
DELETE FROM "User" WHERE username='hyuil';
```
