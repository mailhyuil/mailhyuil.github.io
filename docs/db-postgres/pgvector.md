# pgvector

## postgres settings

```sh
services:
  db:
    image: pgvector/pgvector:pg16
    container_name: postgres
    ports:
      - 5432:5432
    restart: always
    environment:
      - POSTGRES_DB=mydb
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
    volumes:
      - pgdata:/var/lib/postgresql/data
      - ./postgres/init.sql:/docker-entrypoint-initdb.d/init.sql
```

## init.sql

```sql
CREATE TABLE chatbot_vector (
    id SERIAL PRIMARY KEY,
    content TEXT, -- 텍스트 데이터 저장
    metadata JSONB, -- 메타데이터 저장
    embedding vector(1536)  -- vector 데이터 저장, OpenAI의 text-embedding-ada-002 모델 기준
    --------------------------------
    -- 추가적인 데이터 저장 (RDBMS 용)
    -- username TEXT,
    -- created_at TIMESTAMP DEFAULT NOW()
);
```
