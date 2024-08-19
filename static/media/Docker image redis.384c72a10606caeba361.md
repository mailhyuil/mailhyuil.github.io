# Docker image redis

## run

```sh
docker run --name redis --network private -d --restart unless-stopped -p 6379:6379 redis:alpine

# redis-cli
npm i -g redis-cli
rdcli -h localhost -p 6379
```
