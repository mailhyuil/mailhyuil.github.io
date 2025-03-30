# docker-compose logs

```yaml
services:
  service_name:
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
```
