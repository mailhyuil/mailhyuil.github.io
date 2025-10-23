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

## INSERT

```sql
INSERT INTO users (embedding) VALUES ('[0.1, 0.2, 0.3, ..., 0.9]');
```

## SELECT

```sql
-- <-> (L2(유클리드) 거리): 값이 작을수록 유사 (두 벡터 사이의 직선 거리)
-- 이미지 검색, 공간 기반 추천, 벡터 크기와 방향 모두 고려
SELECT * FROM users ORDER BY embedding <-> '[0.1, 0.2, 0.3, ..., 0.9]' LIMIT 5;
-- <=> (코사인 거리): 값이 작을수록 유사 (두 벡터의 방향(각도)을 기반으로 유사도를 측정)
-- 문서 검색, NLP, 추천 시스템 (벡터 방향이 중요한 경우)
SELECT * FROM users ORDER BY embedding <=> '[0.1, 0.2, 0.3, ..., 0.9]' LIMIT 5;
-- <#> (내적): 값이 클수록 유사 (두 벡터의 크기와 방향을 고려하여 계산하는 값.)
-- 검색 랭킹, 추천 시스템, 벡터 크기가 중요한 경우
SELECT * FROM users ORDER BY embedding <#> '[0.1, 0.2, 0.3, ..., 0.9]' LIMIT 5;
```

## INDEX

```sql
-- HNSW(계층적 탐색 가능한 작은 세계)
CREATE INDEX ON users USING hnsw (embedding);
-- DiskANN(DiskANN) 근사한 인접 디스크
CREATE INDEX ON users USING diskann (embedding);
```
