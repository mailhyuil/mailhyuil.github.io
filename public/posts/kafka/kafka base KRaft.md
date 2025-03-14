# kafka base KRaft

> kafka 2.x는 zookeeper 없이 동작할 수 없다.
>
> kafka 3.x부터는 zookeeper 없이 동작할 수 있다.
>
> kafka 4.x부터는 zookeeper가 완전히 제거되었다. (KRaft Only)
>
> > zookeeper를 사용하지 않고 kafka 자체적으로 클러스터를 관리하는 KRaft

## docker-compose.yaml

> window 환경에서 memory 부족으로 멈춰버리는 이슈가 발생했습니다.
>
> .wslconfig에서 memory를 늘려서 해결

```yaml
networks:
  kafka_network:

volumes:
  Kafka00:
  Kafka01:
  Kafka02:

services:
  ### Kafka00
  kafka00:
    image: bitnami/kafka:latest
    restart: unless-stopped
    container_name: kafka00
    ports:
      - "10000:9094"
    environment:
      - KAFKA_CFG_AUTO_CREATE_TOPICS_ENABLE=true
      # KRaft settings
      - KAFKA_CFG_BROKER_ID=0
      - KAFKA_CFG_NODE_ID=0
      - KAFKA_KRAFT_CLUSTER_ID=HsDBs9l6UUmQq7Y5E6bNlw
      - KAFKA_CFG_CONTROLLER_QUORUM_VOTERS=0@kafka00:9093,1@kafka01:9093,2@kafka02:9093
      - KAFKA_CFG_PROCESS_ROLES=controller,broker
      # Listeners
      - ALLOW_PLAINTEXT_LISTENER=yes
      - KAFKA_CFG_LISTENERS=PLAINTEXT://:9092,CONTROLLER://:9093,EXTERNAL://:9094
      - KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://kafka00:9092,EXTERNAL://127.0.0.1:10000
      - KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP=CONTROLLER:PLAINTEXT,EXTERNAL:PLAINTEXT,PLAINTEXT:PLAINTEXT
      - KAFKA_CFG_CONTROLLER_LISTENER_NAMES=CONTROLLER
      - KAFKA_CFG_INTER_BROKER_LISTENER_NAME=PLAINTEXT
      # Clustering
      - KAFKA_CFG_OFFSETS_TOPIC_REPLICATION_FACTOR=3
      - KAFKA_CFG_TRANSACTION_STATE_LOG_REPLICATION_FACTOR=3
      - KAFKA_CFG_TRANSACTION_STATE_LOG_MIN_ISR=2
    networks:
      - kafka_network
    volumes:
      - "Kafka00:/bitnami/kafka"
  ### Kafka01
  kafka01:
    image: bitnami/kafka:latest
    restart: unless-stopped
    container_name: kafka01
    ports:
      - "10001:9094"
    environment:
      - KAFKA_CFG_AUTO_CREATE_TOPICS_ENABLE=true
      # KRaft settings
      - KAFKA_CFG_BROKER_ID=1
      - KAFKA_CFG_NODE_ID=1
      - KAFKA_KRAFT_CLUSTER_ID=HsDBs9l6UUmQq7Y5E6bNlw
      - KAFKA_CFG_CONTROLLER_QUORUM_VOTERS=0@kafka00:9093,1@kafka01:9093,2@kafka02:9093
      - KAFKA_CFG_PROCESS_ROLES=controller,broker
      # Listeners
      - ALLOW_PLAINTEXT_LISTENER=yes
      - KAFKA_CFG_LISTENERS=PLAINTEXT://:9092,CONTROLLER://:9093,EXTERNAL://:9094
      - KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://kafka01:9092,EXTERNAL://127.0.0.1:10001
      - KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP=CONTROLLER:PLAINTEXT,EXTERNAL:PLAINTEXT,PLAINTEXT:PLAINTEXT
      - KAFKA_CFG_CONTROLLER_LISTENER_NAMES=CONTROLLER
      - KAFKA_CFG_INTER_BROKER_LISTENER_NAME=PLAINTEXT
      # Clustering
      - KAFKA_CFG_OFFSETS_TOPIC_REPLICATION_FACTOR=3
      - KAFKA_CFG_TRANSACTION_STATE_LOG_REPLICATION_FACTOR=3
      - KAFKA_CFG_TRANSACTION_STATE_LOG_MIN_ISR=2
    networks:
      - kafka_network
    volumes:
      - "Kafka01:/bitnami/kafka"
  ## Kafka02
  kafka02:
    image: bitnami/kafka:latest
    restart: unless-stopped
    container_name: kafka02
    ports:
      - "10002:9094"
    environment:
      - KAFKA_CFG_AUTO_CREATE_TOPICS_ENABLE=true
      # KRaft settings
      - KAFKA_CFG_BROKER_ID=2
      - KAFKA_CFG_NODE_ID=2
      - KAFKA_KRAFT_CLUSTER_ID=HsDBs9l6UUmQq7Y5E6bNlw
      - KAFKA_CFG_CONTROLLER_QUORUM_VOTERS=0@kafka00:9093,1@kafka01:9093,2@kafka02:9093
      - KAFKA_CFG_PROCESS_ROLES=controller,broker
      # Listeners
      - ALLOW_PLAINTEXT_LISTENER=yes
      - KAFKA_CFG_LISTENERS=PLAINTEXT://:9092,CONTROLLER://:9093,EXTERNAL://:9094
      - KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://kafka02:9092,EXTERNAL://127.0.0.1:10002
      - KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP=CONTROLLER:PLAINTEXT,EXTERNAL:PLAINTEXT,PLAINTEXT:PLAINTEXT
      - KAFKA_CFG_CONTROLLER_LISTENER_NAMES=CONTROLLER
      - KAFKA_CFG_INTER_BROKER_LISTENER_NAME=PLAINTEXT
      # Clustering
      - KAFKA_CFG_OFFSETS_TOPIC_REPLICATION_FACTOR=3
      - KAFKA_CFG_TRANSACTION_STATE_LOG_REPLICATION_FACTOR=3
      - KAFKA_CFG_TRANSACTION_STATE_LOG_MIN_ISR=2
    networks:
      - kafka_network
    volumes:
      - "Kafka02:/bitnami/kafka"

  kafka-ui:
    image: provectuslabs/kafka-ui:latest
    restart: unless-stopped
    container_name: kafka-ui
    ports:
      - "8080:8080"
    environment:
      - KAFKA_CLUSTERS_0_NAME=Local-Kraft-Cluster
      - KAFKA_CLUSTERS_0_BOOTSTRAPSERVERS=kafka00:9092,kafka01:9092,kafka02:9092
      - DYNAMIC_CONFIG_ENABLED=true
      - KAFKA_CLUSTERS_0_AUDIT_TOPICAUDITENABLED=true
      - KAFKA_CLUSTERS_0_AUDIT_CONSOLEAUDITENABLED=true
      #- KAFKA_CLUSTERS_0_METRICS_PORT=9999
    depends_on:
      - kafka00
      - kafka01
      - kafka02
    networks:
      - kafka_network
```
