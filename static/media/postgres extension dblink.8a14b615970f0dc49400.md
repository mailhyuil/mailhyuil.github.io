# postgres extension dblink

## 설치

```sql
CREATE EXTENSION dblink;

\dx
```

## 연결

```sql
SELECT dblink_connect('연결명', 'hostaddr=원격DB주소 port=원격DB포트 dbname=사용할DB이름 user=사용할DB계정 password=계정비밀번호');

SELECT dblink_disconnect('연결명')
```

## usage

```sql
SELECT * FROM dblink('연결명', 'SELECT 쿼리') AS alias_name (column_name data_type)
-- SELECT * FROM dblink('test', 'SELECT * FROM users') as test (id SERIAL, username VARCHAR(25));
```
