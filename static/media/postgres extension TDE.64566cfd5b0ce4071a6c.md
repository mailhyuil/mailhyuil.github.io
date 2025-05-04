# postgres extension TDE

## 설치

```sql
CREATE EXTENSION pg_tde;
```

## usage

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(10) NOT NULL UNIQUE
) USING pg_tde;
```
