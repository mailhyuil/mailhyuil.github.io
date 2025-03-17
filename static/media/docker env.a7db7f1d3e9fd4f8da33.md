# docker env

## docker run

```sh
docker run -e ENV_VAR_NAME=VALUE
docker run --env-file .env
```

## docker-compose

```yaml
version: "3.8"
services:
  app:
    image: my-app-image
    env_file:
      - .env
```
