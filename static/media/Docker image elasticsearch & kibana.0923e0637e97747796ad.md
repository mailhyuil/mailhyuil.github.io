# Docker image elasticsearch & kibana

## run

```sh
# elasticsearch 설치
docker network create elastic
docker pull docker.elastic.co/elasticsearch/elasticsearch:8.12.0
docker run --name es01 --net elastic -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -t docker.elastic.co/elasticsearch/elasticsearch:8.12.0
# elasticsearch container 접속 및 비밀번호 변경
docker exec -it elasticsearch /bin/bash
bin/elasticsearch-setup-passwords interactive

export ELASTIC_PASSWORD="your_password"
docker cp es01:/usr/share/elasticsearch/config/certs/http_ca.crt .
# http request 시 id와 password로 basic 인증

# kibana 설치
docker pull docker.elastic.co/kibana/kibana:8.12.0
docker run --name kibana --net elastic -p 5601:5601 docker.elastic.co/kibana/kibana:8.12.0
```
