# vscode devcontainers docker

## .devcontainer/devcontainer.json

```json
// For format details, see https://aka.ms/devcontainer.json. For config options, see the
// README at: https://github.com/devcontainers/templates/tree/main/src/typescript-node
{
  "name": "Node.js & TypeScript",
  "service": "devcontainer",
  "workspaceFolder": "/workspaces/${localWorkspaceFolderBasename}",
  // Or use a Dockerfile or Docker Compose file. More info: https://containers.dev/guide/dockerfile
  "dockerComposeFile": ["docker-compose.yml"]

  // Features to add to the dev container. More info: https://containers.dev/features.
  // "features": {},

  // Use 'forwardPorts' to make a list of ports inside the container available locally.
  // "forwardPorts": [],

  // Use 'postCreateCommand' to run commands after the container is created.
  // "postCreateCommand": "yarn install",

  // Configure tool-specific properties.
  // "customizations": {},

  // Uncomment to connect as root instead. More info: https://aka.ms/dev-containers-non-root.
  // "remoteUser": "root"
}
```

## .devcontainer/Dockerfile

```dockerfile
FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm

RUN npm install -g pnpm
RUN npm install -g nx
RUN npm install -g prisma
RUN npm install -g tsx
```

## .devcontainer/docker-compose.yml

```yaml
# .devcontainer/docker-compose.yml
version: "3.9"

services:
  devcontainer:
    container_name: devcontainer
    build:
      context: .
      dockerfile: Dockerfile # 👈 Dockerfile 사용
    volumes:
      - ../..:/workspaces:cached
      - nx-cache:/workspaces/.nx/cache
      - pnpm-cache:/root/.pnpm-store
      - pnpm-store:/root/.local/share/pnpm/store
    command: sleep infinity
    depends_on:
      - db
      - redis
      - elasticmq
    networks:
      - default

  db:
    container_name: db
    image: pgvector/pgvector:pg16
    restart: unless-stopped
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: mydb
      POSTGRES_INITDB_ARGS: "-E UTF8 --locale=C"
      PGDATA: /var/lib/postgresql/data/pgdata
    ports:
      - "5433:5432"
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - default
  redis:
    container_name: redis
    image: redis:7-alpine
    restart: unless-stopped
    ports:
      - "6379:6379"
    volumes:
      - redis-data:/data
    networks:
      - default
  elasticmq:
    container_name: elasticmq
    image: softwaremill/elasticmq-native
    restart: unless-stopped
    ports:
      - "9324:9324"
      - "9325:9325"
    networks:
      - default

volumes:
  postgres-data:
  redis-data:
  nx-cache:
  pnpm-store: # pnpm 글로벌 스토어
  pnpm-cache: # pnpm 캐시

networks:
  default:
    driver: bridge
```
