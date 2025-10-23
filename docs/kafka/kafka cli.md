# kafka cli

## topic

```sh
## zookeeper
# topic 생성
kafka-topics --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic <topic_name>
# topic 조회
kafka-topics --list --zookeeper localhost:2181
# topic 삭제
kafka-topics --delete --zookeeper localhost:2181 --topic <topic_name>
# topic 상세 조회
kafka-topics --describe --zookeeper localhost:2181 --topic <topic_name>

## kraft
# 토픽 생성
kafka-topics.sh --create --topic topic1 --bootstrap-server localhost:9092 --replication-factor 1 --partitions 3
# 토픽 리스트 출력
kafka-topics.sh --list --bootstrap-server localhost:9092
# 토픽 상세 조회
kafka-topics.sh --describe --topic topic1 --bootstrap-server localhost:9092
# 토픽 삭제
kafka-topics.sh --delete --bootstrap-server localhost:9092 --topic topic1
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

## consumer

```sh
# topic 데이터 조회
kafka-console-consumer --bootstrap-server localhost:9092 --topic <topic_name> --from-beginning
```

## consumer-group

```sh
# consumer-group 조회
kafka-consumer-groups --bootstrap-server localhost:9092 --list
# consumer-group 상세 조회
kafka-consumer-groups --bootstrap-server localhost:9092 --describe --group <group_name>
# consumer-group 삭제
kafka-consumer-groups --bootstrap-server localhost:9092 --delete --group <group_name>
```
