# docker-compose redis

```yaml
services:
  redis:
    image: redis:alpine
    container_name: redis-lcrs
    ports:
      - "6379:6379"
    mem_limit: 512m
    mem_reservation: 128m
    cpus: 0.5
    restart: unless-stopped
```
