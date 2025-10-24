# kafka Connect Debezium

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
      - kafka
    volumes:
      - "kafka00:/bitnami/kafka"
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
      - kafka
    volumes:
      - "kafka01:/bitnami/kafka"
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
      - kafka
    volumes:
      - "kafka02:/bitnami/kafka"

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
      - kafka

  db:
    image: postgres
    container_name: db
    networks:
      - kafka
    restart: unless-stopped
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_PASSWORD=postgres
    volumes:
      - pg-data:/var/lib/postgresql/data
    # it's important to trigger that command when we work with postgres
    command: postgres -c wal_level=logical -c max_replication_slots=1 -c max_wal_senders=1

  debezium:
    image: debezium/connect:1.9
    restart: unless-stopped
    depends_on:
      - kafka00
      - kafka01
      - kafka02
      - kafka-ui
      - db
    ports:
      - "8083:8083"
    networks:
      - kafka
    environment:
      - GROUP_ID=1
      - BOOTSTRAP_SERVERS=kafka00:9092,kafka01:9092,kafka02:9092
      - CONFIG_STORAGE_TOPIC=connect_configs
      - OFFSET_STORAGE_TOPIC=connect_offsets
      - STATUS_STORAGE_TOPIC=source_connect_statuses
      - CONNECT_KEY_CONVERTER=org.apache.kafka.connect.json.JsonConverter
      - CONNECT_VALUE_CONVERTER=org.apache.kafka.connect.json.JsonConverter
      - CONNECT_INTERNAL_KEY_CONVERTER=org.apache.kafka.connect.json.JsonConverter
      - CONNECT_INTERNAL_VALUE_CONVERTER=org.apache.kafka.connect.json.JsonConverter
      - CONNECT_REST_ADVERTISED_HOST_NAME=connect # Rest API host name
      - CONNECT_PLUGIN_PATH=/kafka/connect # Plugin path
      - CONNECT_LOG4J_ROOT_LOGLEVEL=INFO
networks:
  kafka:

volumes:
  kafka00:
  kafka01:
  kafka02:
  pg-data:
```

## register-postgres.json

```json
{
  "name": "postgres-connector",
  "config": {
    "connector.class": "io.debezium.connector.postgresql.PostgresConnector",
    "database.hostname": "db",
    "database.port": "5432",
    "database.user": "postgres",
    "database.password": "postgres",
    "database.dbname": "mydb",
    "database.server.name": "postgres_server",
    "plugin.name": "pgoutput",
    "slot.name": "debezium_slot",
    "publication.autocreate.mode": "filtered",
    "database.history.kafka.bootstrap.servers": "kafka00:9092,kafka01:9092,kafka02:9092",
    "database.history.kafka.topic": "schema-changes.mydb",
    "table.include.list": "public.products,public.orders",
    "slot.drop.on.stop": "false",
    "heartbeat.interval.ms": "10000",
    "schema.include.list": "public",
    "include.schema.changes": "true",
    "time.precision.mode": "connect",
    "decimal.handling.mode": "double"
  }
}
```

### HTTP Request

```sh
# register
curl -i -X POST -H "Accept:application/json" -H "Content-Type:application/json" http://localhost:8083/connectors/ -d @register-postgres.json
# pause
curl -X PUT http://localhost:8083/connectors/postgres-connector/pause
# delete
curl -X DELETE http://localhost:8083/connectors/postgres-connector
```

## 사용

```txt
바라보고 있는 database의 table에 변경이 발생하면 wal을 읽어서 kafka로 전달

topic-name : postgres_server.public.products
```

## nestjs

```ts
import { Controller } from "@nestjs/common";
import { Client, ClientKafka, EventPattern } from "@nestjs/microservices";
import { kafkaConfig } from "./kafka.config";

@Controller()
export class AppController {
  @Client(kafkaConfig)
  client: ClientKafka;

  onModuleInit() {
    const requestPatterns = ["postgres_server.public.orders"];
    requestPatterns.forEach(pattern => {
      this.client.subscribeToResponseOf(pattern);
    });
  }

  @EventPattern("postgres_server.public.orders")
  async transformOrders(payload: any) {
    console.log(payload);
  }
}
```
