# Docker image kafka

## run

```sh
docker run --name zookeeper -d -p 2181:2181 \
  -e ALLOW_ANONYMOUS_LOGIN=yes \
  -e ZOOKEEPER_CLIENT_PORT=2181 \
  -e ZOOKEEPER_TICK_TIME=2000 \
  -e ZOOKEEPER_SYNC_LIMIT=2 \
  -e ZOOKEEPER_INIT_LIMIT=5 \
  -e ZOOKEEPER_MAX_CLIENT_CNXNS=60 \
  -e ZOOKEEPER_AUTOPURGE_PURGEINTERVAL=1 \
  -e ZOOKEEPER_AUTOPURGE_SNAPRETAINCOUNT=3 \
  confluentinc/cp-zookeeper:latest

docker run --name kafka -d -p 9092:9092 \
  -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092 \
  -e KAFKA_LISTENER_SECURITY_PROTOCOL_MAP=PLAINTEXT:PLAINTEXT \
  -e KAFKA_INTER_BROKER_LISTENER_NAME=PLAINTEXT \
  -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
  -e KAFKA_ZOOKEEPER_CONNECT=localhost:2181 \
  -e KAFKA_BROKER_ID=1 \
  -e KAFKA_LOG_DIRS=/var/lib/kafka/data \
  -e KAFKA_AUTO_CREATE_TOPICS_ENABLE=true \
  -e KAFKA_DELETE_TOPIC_ENABLE=true \
  -e KAFKA_GROUP_INITIAL_REBALANCE_DELAY_MS=0 \
  -e KAFKA_JMX_PORT=9999 \
  -e KAFKA_JMX_HOSTNAME=localhost \
  -e KAFKA_JMX_OPTS="-Dcom.sun.management.jmxremote=true -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=localhost -Dcom.sun.management.jmxremote.rmi.port=9999" \
  -e KAFKA_HEAP_OPTS="-Xmx256M -Xms256M" \
  -e KAFKA_JVM_PERFORMANCE_OPTS="-XX:+UseG1GC -XX:MaxGCPauseMillis=20 -XX:InitiatingHeapOccupancyPercent=35 -XX:+ExplicitGCInvokesConcurrent -XX:+ParallelRefProcEnabled -XX:+PerfDisableSharedMem -XX:+AlwaysPreTouch -XX:+UnlockExperimentalVMOptions -XX:+UseCGroupMemoryLimitForHeap -XX:MaxRAMFraction=2 -XX:+UseStringDeduplication" \
  -e KAFKA_LOG4J_OPTS="-Dlog4j.configuration=file:/etc/kafka/log4j.properties" \
  wurstmeister/kafka:latest
```
