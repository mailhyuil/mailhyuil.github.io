# postgres replication user

```sql
-- replication role 생성
CREATE ROLE replication_user REPLICATION LOGIN PASSWORD 'password';
-- replication user 생성
CREATE USER replication_user WITH PASSWORD 'password';
-- replication role 부여
GRANT replication_user TO replication_user;
```
