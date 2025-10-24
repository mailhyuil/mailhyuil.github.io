# docker-compose yaml postgres

```yaml
services:
  db:
    container_name: postgres
    image: "postgres:14-alpine"
    ports:
      - "5432:5432"
    restart: always
    volumes:
      - pg-data:/var/lib/postgresql/data
    networks:
      - public
    command: |
      postgres
      -c archive_mode=on
      -c archive_command="cp %p /var/lib/postgresql/archive_dir/%f"
    cpus: 0.8
    mem_limit: 2048m
    environment:
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydb
      # PGDATA: /data/postgres
    logging:
      driver: "json-file"
      options:
        max-size: "8m"
        max-file: "10"
volumes:
  pg-data: {}
networks:
  public:
    driver: bridge
```
