# Docker image MongoDB

## run

```sh
docker run --name mongo -d -p 27017:27017 mongo
# docker run --name mongo -v ~/data:/data/db -d -p 27017:27017 mongo
```