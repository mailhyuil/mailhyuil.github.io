# kafka 세팅 settings

## run

```sh
docker network create kafka

docker run --name zookeeper -p 2181:2181 -itd --net kafka wurstmeister/zookeeper:latest

docker run --name kafka \
-e KAFKA_ADVERTISED_HOST_NAME=127.0.0.1 \
-e KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181 \
-v /var/run/docker.sock:/var/run/docker.sock \
-p 9092:9092 \
-itd --net kafka wurstmeister/kafka:latest
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

## docker-compose.yaml

```yaml
services:
  kafka-1:
    container_name: kafka-1
    image: confluentinc/cp-kafka:7.5.3
    platform: linux/amd64
    ports:
      - "${KAFKA_1_PORT}:9092"
    volumes:
      - ./data/${KAFKA_DIR}/kafka-1:/var/lib/kafka/data
    environment:
      KAFKA_NODE_ID: 1
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: CONTROLLER:PLAINTEXT,INTERNAL:PLAINTEXT,EXTERNAL:PLAINTEXT
      KAFKA_ADVERTISED_LISTENERS: INTERNAL://:29092,EXTERNAL://${DOCKER_HOST_IP:-127.0.0.1}:${KAFKA_1_PORT}
      KAFKA_LISTENERS: INTERNAL://:29092,CONTROLLER://:29093,EXTERNAL://0.0.0.0:${KAFKA_1_PORT}
      KAFKA_PROCESS_ROLES: "broker,controller"
      KAFKA_CONTROLLER_QUORUM_VOTERS: 1@kafka-1:29093,2@kafka-2:29093,3@kafka-3:29093
      KAFKA_INTER_BROKER_LISTENER_NAME: INTERNAL
      KAFKA_CONTROLLER_LISTENER_NAMES: CONTROLLER
      CLUSTER_ID: ${KAFKA_CLUSTER_ID:-MkU3OEVBNTcwNTJENDM2Qk}

  kafka-2:
    container_name: kafka-2
    image: confluentinc/cp-kafka:7.5.3
    platform: linux/amd64
    ports:
      - "${KAFKA_2_PORT}:9093"
    volumes:
      - ./data/${KAFKA_DIR}/kafka-2:/var/lib/kafka/data
    environment:
      KAFKA_NODE_ID: 2
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: CONTROLLER:PLAINTEXT,INTERNAL:PLAINTEXT,EXTERNAL:PLAINTEXT
      KAFKA_ADVERTISED_LISTENERS: INTERNAL://:29092,EXTERNAL://${DOCKER_HOST_IP:-127.0.0.1}:${KAFKA_2_PORT}
      KAFKA_LISTENERS: INTERNAL://:29092,CONTROLLER://kafka-2:29093,EXTERNAL://0.0.0.0:${KAFKA_2_PORT}
      KAFKA_PROCESS_ROLES: "broker,controller"
      KAFKA_CONTROLLER_QUORUM_VOTERS: 1@kafka-1:29093,2@kafka-2:29093,3@kafka-3:29093
      KAFKA_INTER_BROKER_LISTENER_NAME: INTERNAL
      KAFKA_CONTROLLER_LISTENER_NAMES: CONTROLLER
      CLUSTER_ID: ${KAFKA_CLUSTER_ID:-MkU3OEVBNTcwNTJENDM2Qk}

  kafka-3:
    container_name: kafka-3
    image: confluentinc/cp-kafka:7.5.3
    platform: linux/amd64
    ports:
      - "${KAFKA_3_PORT}:9094"
    volumes:
      - ./data/${KAFKA_DIR}/kafka-3:/var/lib/kafka/data
    environment:
      KAFKA_NODE_ID: 3
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: CONTROLLER:PLAINTEXT,INTERNAL:PLAINTEXT,EXTERNAL:PLAINTEXT
      KAFKA_ADVERTISED_LISTENERS: INTERNAL://:29092,EXTERNAL://${DOCKER_HOST_IP:-127.0.0.1}:${KAFKA_3_PORT}
      KAFKA_LISTENERS: INTERNAL://:29092,CONTROLLER://kafka-3:29093,EXTERNAL://0.0.0.0:${KAFKA_3_PORT}
      KAFKA_PROCESS_ROLES: "broker,controller"
      KAFKA_CONTROLLER_QUORUM_VOTERS: 1@kafka-1:29093,2@kafka-2:29093,3@kafka-3:29093
      KAFKA_INTER_BROKER_LISTENER_NAME: INTERNAL
      KAFKA_CONTROLLER_LISTENER_NAMES: CONTROLLER
      CLUSTER_ID: ${KAFKA_CLUSTER_ID:-MkU3OEVBNTcwNTJENDM2Qk}
  kafka-ui:
    image: provectuslabs/kafka-ui
    platform: linux/amd64
    container_name: kafka-ui
    ports:
      - "${KAFKA_UI_PORT}:8080"
    restart: always
    environment:
      KAFKA_CLUSTERS_0_NAME: ${PROFILE:-local}
      KAFKA_CLUSTERS_0_BOOTSTRAPSERVERS: kafka-1:29092,kafka-2:29092,kafka-3:29092
    depends_on:
      - kafka-1
      - kafka-2
      - kafka-3
```
