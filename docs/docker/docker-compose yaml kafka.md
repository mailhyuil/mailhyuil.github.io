# docker-compose yaml kafka

## docker-compose.yaml

```yaml
version: "3.8"
services:
  zookeeper:
    image: wurstmeister/zookeeper:latest
    container_name: zookeeper
    ports:
      - "2181:2181"
  kafka:
    image: wurstmeister/kafka:latest
    container_name: kafka
    ports:
      - "9092:9092"
    environment:
      KAFKA_ADVERTISED_HOST_NAME: 127.0.0.1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
```

## 테스트

```sh
docker exec -it kafka bash

# 토픽 생성
kafka-topics.sh --create --topic topic1 --bootstrap-server localhost:9092 --replication-factor 1 --partitions 3
# 토픽 리스트 출력
kafka-topics.sh --list --bootstrap-server localhost:9092
# 토픽 상세 조회
kafka-topics.sh --describe --topic topic1 --bootstrap-server kafka:9092
# 토픽 삭제
kafka-topics.sh --delete --bootstrap-server kafka:9092 --topic topic1

# 컨슈머 실행
cd /opt/kafka_2.13-2.8.1/bin/
./kafka-console-consumer.sh --topic topic1 --bootstrap-server kafka:9092 # (옵션 --group 그룹명)
# 프로듀서 실행
# 실행 시 입력창으로 변하고 값을 입력하면 컨슈머에 도착한다.
cd /opt/kafka_2.13-2.8.1/bin/
./kafka-console-producer.sh --topic topic1 --broker-list kafka:9092
```
