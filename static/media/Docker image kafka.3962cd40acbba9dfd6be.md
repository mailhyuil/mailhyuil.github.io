# Docker image kafka

## run

```sh
docker network create kafka

docker run --name zookeeper -p 2181:2181 -itd --net kafka wurstmeister/zookeeper:latest

docker run --name kafka -e KAFKA_ADVERTISED_HOST_NAME=127.0.0.1 -e KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181 -v /var/run/docker.sock:/var/run/docker.sock -p 9092:9092 -itd --net kafka wurstmeister/kafka:latest
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
