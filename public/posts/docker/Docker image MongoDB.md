# Docker image MongoDB

## run

```sh
docker run --name mongo --network private --restart unless-stopped -d -p 27017:27017 mongo
# docker run --name mongo -v ~/data:/data/db -d -p 27017:27017 mongo
```
