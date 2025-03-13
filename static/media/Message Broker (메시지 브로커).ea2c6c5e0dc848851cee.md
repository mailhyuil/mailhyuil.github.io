# Message Broker (메시지 브로커)

> Message Broker란 Publisher로부터 전달받은 메시지를 Subscriber로 전달해주는 중간 역할
>
> 소프트웨어간에 메시지를 교환할 수 있게 한다.
>
> 대표 메시지 브로커 : ActiveMQ, RabbitMQ, Redis, Celery, Kafka
>
> > Kafka는 처리량이 많을 때 사용되는 분산 메시징 시스템

```txt
Publisher -> Message Broker -> Subscriber
```

## Message Queue: 메시지가 적재되는 공간

> 메시지 큐에 적재된 메시지는 주로 7일을 보관하기 때문에 장기간 보관해야하는 경우 별도의 저장소에 저장해야한다.
