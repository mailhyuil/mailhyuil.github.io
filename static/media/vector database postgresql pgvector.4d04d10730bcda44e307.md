# vector database postgresql pgvector

## install

```sh
brew install postgresql
brew install pgvector
```

## postgres

```sql
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE IF NOT EXISTS embeddings (
  id SERIAL PRIMARY KEY,
  embedding vector,
  text text,
  created_at timestamptz DEFAULT now()
);
```
