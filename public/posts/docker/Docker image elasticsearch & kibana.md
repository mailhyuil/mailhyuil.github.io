# Docker image elasticsearch & kibana

## run

```sh
docker run --name elasticsearch --network private -d -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:8.7.0
# localhost:9200으로 접속
# id: elastic / password: changeme으로 로그인

docker run --name kibana -d --link elasticsearch:elasticsearch -p 5601:5601 kibana:7.9.3
# localhost:5601으로 접속
# id: elastic / password: changeme으로 로그인
```
