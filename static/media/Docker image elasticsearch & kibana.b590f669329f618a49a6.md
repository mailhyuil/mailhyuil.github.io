# Docker image elasticsearch & kibana

## run

```sh
docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 elasticsearch:7.9.3
docker run -d --name kibana --link elasticsearch:elasticsearch -p 5601:5601 kibana:7.9.3
```
