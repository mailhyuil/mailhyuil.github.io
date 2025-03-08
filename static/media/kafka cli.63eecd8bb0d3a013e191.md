# kafka cli

## topic

```sh
# topic 생성
kafka-topics --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic <topic_name>
# topic 조회
kafka-topics --list --zookeeper localhost:2181
# topic 삭제
kafka-topics --delete --zookeeper localhost:2181 --topic <topic_name>
# topic 상세 조회
kafka-topics --describe --zookeeper localhost:2181 --topic <topic_name>
```

## consumer

```sh
# topic 데이터 조회
kafka-console-consumer --bootstrap-server localhost:9092 --topic <topic_name> --from-beginning
```

## producer

```sh
# topic 데이터 전송
kafka-console-producer --broker-list localhost:9092 --topic <topic_name>
# topic 데이터 전송 (key)
kafka-console-producer --broker-list localhost:9092 --topic <topic_name> --property "parse.key=true" --property "key.separator=:"
# topic 데이터 전송 (key, value)
kafka-console-producer --broker-list localhost:9092 --topic <topic_name> --property "parse.key=true" --property "key.separator=:"
# topic 데이터 전송 (key, value) (key, value는 json 형태로 전송)
kafka-console-producer --broker-list localhost:9092 --topic <topic_name> --property "parse.key=true" --property "key.separator=:" --property "key.serializer=org.apache.kafka.common.serialization.StringSerializer" --property "value.serializer=org.apache.kafka.common.serialization.StringSerializer"
# topic 데이터 전송 (key, value) (key, value는 json 형태로 전송) (key, value는 json 형태로 전송)
kafka-console-producer --broker-list localhost:9092 --topic <topic_name> --property "parse.key=true" --property "key.separator=:" --property "key.serializer=org.apache.kafka.common.serialization.StringSerializer" --property "value.serializer=org.apache.kafka.common.serialization.StringSerializer"
# topic 데이터 전송 (key, value) (key, value는 json 형태로 전송) (key, value는 json 형태로 전송) (key, value는 json 형태로 전송)
kafka-console-producer --broker-list localhost:9092 --topic <topic_name> --property "parse.key=true" --property "key.separator=:" --property "key.serializer=org.apache.kafka.common.serialization.StringSerializer" --property "value.serializer=org.apache.kafka.common.serialization.StringSerializer"
```
