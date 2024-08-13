# docker-compose postgres

```yaml
services:
  db:
    container_name: postgres
    image: "postgres:14-alpine"
    ports:
      - "5432:5432"
    restart: always
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - public
    cpus: 0.8
    mem_limit: 2048m
    environment:
      POSTGRES_USER: lepisode
      POSTGRES_PASSWORD: 88782314p*
      POSTGRES_DB: lcrs
    logging:
      driver: "json-file"
      options:
        max-size: "8m"
        max-file: "10"
volumes:
  postgres-data: {}
networks:
  public:
    driver: bridge
```
