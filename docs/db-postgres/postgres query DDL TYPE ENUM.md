# postgres query DDL TYPE ENUM

> 인덱스를 정의하는 명령어

```sql
-- type enum 생성
CREATE TYPE status AS ENUM ('ACTIVE', 'INACTIVE', 'BLOCKED');

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(10),
  status status
);
```
