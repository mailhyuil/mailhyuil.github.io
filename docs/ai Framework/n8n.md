# n8n

> 로우코드 or 노코드 오픈소스 자동화 도구
>
> > 내장 generative AI 기능을 통해 워크플로우 자동화 가능

## docker cli

```sh
docker volume create n8n_data
docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
```

## docker-compose.yml

```yml
version: "3.8"

services:
  # PostgreSQL - n8n 데이터 저장
  postgres:
    image: postgres:16-alpine
    container_name: n8n-postgres
    restart: unless-stopped
    environment:
      POSTGRES_DB: n8n
      POSTGRES_USER: n8n
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD:-n8n_password}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U n8n"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      - n8n-network

  # n8n
  n8n:
    image: n8nio/n8n:latest
    container_name: n8n
    restart: unless-stopped
    ports:
      - "5678:5678"
    environment:
      # PostgreSQL 연결
      DB_TYPE: postgresdb
      DB_POSTGRESDB_HOST: postgres
      DB_POSTGRESDB_PORT: 5432
      DB_POSTGRESDB_DATABASE: n8n
      DB_POSTGRESDB_USER: n8n
      DB_POSTGRESDB_PASSWORD: ${POSTGRES_PASSWORD:-n8n_password}

      # 기본 설정
      N8N_BASIC_AUTH_ACTIVE: ${N8N_BASIC_AUTH_ACTIVE:-true}
      N8N_BASIC_AUTH_USER: ${N8N_BASIC_AUTH_USER:-admin}
      N8N_BASIC_AUTH_PASSWORD: ${N8N_BASIC_AUTH_PASSWORD:-admin}

      # 외부 접속 설정 (프로덕션)
      # N8N_HOST: ${N8N_HOST:-localhost}
      # N8N_PROTOCOL: ${N8N_PROTOCOL:-http}
      # N8N_PORT: 5678

      # Webhook URL (프로덕션에서 도메인으로 변경)
      WEBHOOK_URL: ${WEBHOOK_URL:-http://localhost:5678/}

      # 타임존
      GENERIC_TIMEZONE: Asia/Seoul
      TZ: Asia/Seoul

      # 실행 설정
      EXECUTIONS_PROCESS: main
      N8N_METRICS: ${N8N_METRICS:-false}

      # 보안
      N8N_SECURE_COOKIE: ${N8N_SECURE_COOKIE:-false}
    volumes:
      - n8n_data:/home/node/.n8n
      # 커스텀 노드 추가할 경우
      # - ./custom-nodes:/home/node/.n8n/custom
    depends_on:
      postgres:
        condition: service_healthy
    networks:
      - n8n-network

  # (선택) Qdrant - 벡터 DB for RAG
  qdrant:
    image: qdrant/qdrant:latest
    container_name: n8n-qdrant
    restart: unless-stopped
    ports:
      - "6333:6333"
      - "6334:6334"
    volumes:
      - qdrant_data:/qdrant/storage
    networks:
      - n8n-network

  # (선택) Redis - 캐싱/큐
  redis:
    image: redis:7-alpine
    container_name: n8n-redis
    restart: unless-stopped
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    networks:
      - n8n-network

volumes:
  postgres_data:
  n8n_data:
  qdrant_data:
  redis_data:

networks:
  n8n-network:
    driver: bridge
```
