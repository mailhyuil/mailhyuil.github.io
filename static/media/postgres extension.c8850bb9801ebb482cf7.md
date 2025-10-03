# postgres extension

> 로컬에 설치 후 CREATE EXTENSION을 통해 활성화 시킬 수 있다.

```sql
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE IF NOT EXISTS embeddings (
  id SERIAL PRIMARY KEY,
  embedding vector,
  text text,
  created_at timestamptz DEFAULT now()
);
```
