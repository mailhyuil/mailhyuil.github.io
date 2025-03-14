# kafka base KRaft

> kafka 2.x는 zookeeper 없이 동작할 수 없다.
>
> kafka 3.x부터는 zookeeper 없이 동작할 수 있다.
>
> kafka 4.x부터는 zookeeper가 완전히 제거되었다. (KRaft Only)
>
> > zookeeper를 사용하지 않고 kafka 자체적으로 클러스터를 관리하는 KRaft

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
