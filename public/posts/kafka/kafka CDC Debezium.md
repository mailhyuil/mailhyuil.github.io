# Debezium (디비지움)

> CDC (Change Data Capture)를 위한 오픈소스 플랫폼
>
> > 데이터베이스의 wal(log)을 읽어서 데이터베이스의 변경 사항을 캡처하고 이벤트로 전달

## Query-based CDC

> 실행된 쿼리에 반응하여 변경 사항을 캡처

## Log-based CDC

> 데이터베이스의 로그를 읽어서 변경 사항을 캡처 (wal)

## docker-compose.yaml

```yaml
services:
  kafka1:
    image: bitnami/kafka:latest
    networks:
      - kafka
    ports:
      - "10000:9094"
    environment:
      - KAFKA_CFG_CONTROLLER_LISTENER_NAMES=CONTROLLER
      - KAFKA_CFG_NODE_ID=1
      - KAFKA_CFG_PROCESS_ROLES=controller,broker
      - ALLOW_PLAINTEXT_LISTENER=yes
      - KAFKA_CFG_CONTROLLER_QUORUM_VOTERS=1@kafka1:9093,2@kafka2:9093,3@kafka3:9093
      - KAFKA_KRAFT_CLUSTER_ID=abcdefghijklmnopqrstuv
      - KAFKA_CFG_LISTENERS=PLAINTEXT://:9092,CONTROLLER://:9093,EXTERNAL://:9094
      - KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://kafka1:9092,EXTERNAL://localhost:9094
      - KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP=CONTROLLER:PLAINTEXT,EXTERNAL:PLAINTEXT,PLAINTEXT:PLAINTEXT
    volumes:
      - ./kafka/kafka1/kafka:/bitnami/kafka
  kafka2:
    image: bitnami/kafka:latest
    networks:
      - kafka
    ports:
      - "10001:9094"
    environment:
      - KAFKA_CFG_CONTROLLER_LISTENER_NAMES=CONTROLLER
      - KAFKA_CFG_PROCESS_ROLES=controller,broker
      - ALLOW_PLAINTEXT_LISTENER=yes
      - KAFKA_CFG_NODE_ID=2
      - KAFKA_CFG_CONTROLLER_QUORUM_VOTERS=1@kafka1:9093,2@kafka2:9093,3@kafka3:9093
      - KAFKA_KRAFT_CLUSTER_ID=abcdefghijklmnopqrstuv
      - KAFKA_CFG_LISTENERS=PLAINTEXT://:9092,CONTROLLER://:9093,EXTERNAL://:9094
      - KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://kafka2:9092,EXTERNAL://localhost:9094
      - KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP=CONTROLLER:PLAINTEXT,EXTERNAL:PLAINTEXT,PLAINTEXT:PLAINTEXT
    volumes:
      - ./kafka/kafka2/kafka:/bitnami/kafka
  kafka3:
    image: bitnami/kafka:latest
    networks:
      - kafka
    ports:
      - "10002:9094"
    environment:
      - KAFKA_CFG_CONTROLLER_LISTENER_NAMES=CONTROLLER
      - KAFKA_CFG_PROCESS_ROLES=controller,broker
      - ALLOW_PLAINTEXT_LISTENER=yes
      - KAFKA_CFG_NODE_ID=3
      - KAFKA_CFG_CONTROLLER_QUORUM_VOTERS=1@kafka1:9093,2@kafka2:9093,3@kafka3:9093
      - KAFKA_KRAFT_CLUSTER_ID=abcdefghijklmnopqrstuv
      - KAFKA_CFG_LISTENERS=PLAINTEXT://:9092,CONTROLLER://:9093,EXTERNAL://:9094
      - KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://kafka3:9092,EXTERNAL://localhost:9094
      - KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP=CONTROLLER:PLAINTEXT,EXTERNAL:PLAINTEXT,PLAINTEXT:PLAINTEXT
    volumes:
      - ./kafka/kafka3/kafka:/bitnami/kafka
  kafka-ui:
    container_name: kafka-ui
    image: provectuslabs/kafka-ui:latest
    depends_on:
      - kafka1
      - kafka2
      - kafka3
    networks:
      - kafka
    ports:
      - "8080:8080"
    environment:
      KAFKA_CLUSTERS_0_NAME: local
      KAFKA_CLUSTERS_0_BOOTSTRAPSERVERS: kafka1:9092,kafka2:9092,kafka3:9092

  postgres:
    image: postgres
    networks:
      - kafka
    restart: always
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_PASSWORD=postgres
    volumes:
      - postgres-data:/var/lib/postgresql/data

  debezium:
    image: debezium/connect:latest
    depends_on:
      - kafka3
      - kafka2
      - kafka1
      - kafka-ui
      - postgres
    ports:
      - "8083:8083"
    networks:
      - kafka
    environment:
      - BOOTSTRAP_SERVERS=kafka1:9092,kafka2:9092,kafka3:9092
      - GROUP_ID=1
      - CONFIG_STORAGE_TOPIC=my_connect_configs
      - OFFSET_STORAGE_TOPIC=my_connect_offsets
      - STATUS_STORAGE_TOPIC=my_source_connect_statuses

networks:
  kafka:
    driver: bridge
```

## register-postgres.json

> HTTP POST request to `http://localhost:8083`

```json
{
  "name": "inventory-connector",
  "config": {
    "connector.class": "io.debezium.connector.postgresql.PostgresConnector",
    "tasks.max": "1",
    "database.hostname": "postgres",
    "database.port": "5432",
    "database.user": "postgres",
    "database.password": "postgres",
    "database.dbname": "postgres",
    "topic.prefix": "dbserver1",
    "schema.include.list": "inventory"
  }
}
```
