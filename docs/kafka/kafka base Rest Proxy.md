# kafka base Rest Proxy

> 카프카는 기본으로 KafkaClient와 TCP 통신을 사용하지만 Rest Proxy를 통해 HTTP 통신을 할 수 있다.
>
> > confluentinc에서 제공하는 Rest API 용 프록시 서버로 confluentinc의 kafka에는 기본으로 포함되어 있다.
> >
> > > 포함이 되어있지 않을 시에는 별도로 설치
> > >
> > > > 또는 그냥 Nestjs로 구현해도 된다.

## docker-compose.yaml

```yaml
kafka-rest-proxy:
  image: confluentinc/cp-kafka-rest:latest
  container_name: kafka-rest-proxy
  depends_on:
    - kafka
  environment:
    - KAFKA_REST_BOOTSTRAP_SERVERS=PLAINTEXT://kafka:9092
    - KAFKA_REST_HOST_NAME=kafka-rest-proxy
    - KAFKA_REST_LISTENERS=http://0.0.0.0:8082
  ports:
    - "8082:8082"
```
