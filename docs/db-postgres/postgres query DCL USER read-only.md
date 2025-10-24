# postgres query DCL USER read-only

```sql
-- read only role 생성
CREATE ROLE readaccess;
GRANT CONNECT ON DATABASE mydb TO readaccess;
GRANT USAGE ON SCHEMA public TO readaccess;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO readaccess;

-- read only user 생성
CREATE USER read_user WITH PASSWORD 'password';

-- read only role 부여
GRANT readaccess TO read_user;
```
