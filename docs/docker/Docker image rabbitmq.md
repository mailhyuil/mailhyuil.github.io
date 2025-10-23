# Docker image rabbitmq

## run

```sh
docker run -d --name rabbitmq -p 5672:5672 -p 8080:15672 --restart=unless-stopped rabbitmq:management
# id: guest / password: guest
```
