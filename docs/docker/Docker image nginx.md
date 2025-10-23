# docker nginx

## run

```bash
docker run --name nginx --network public --restart unless-stopped -it -d -p 80:80 -p 443:443 nginx:alpine
```

## network 분리

```sh
docker network create public
docker network create private --internal

## public network에 연결
docker run --name nginx --network public -d -it -p 80:80 -p 443:443 nginx:alpine
## private network에 연결
docker run --name postgres --network private -d -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=1234 -e POSTGRES_DB=mydb -p 5432:5432 postgres:14
docker run --name mongo --network private -d -p 27017:27017 mongo
docker run --name server --network private -d -it -p 3000:3000 node:alpine
docker run --name redis --network private -d -p 6379:6379 redis:latest

# docker network connect <network> <container>
docker network connect public postgres
docker network connect public mongo
docker network connect public server
docker network connect public redis
```
