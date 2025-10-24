# kafka base

> 카프카는 이벤트 브로커로써 메시지 브로커(rabbitmq, bullmq, sqs...) 역할도 수행하지만 Consumer가 특정 시점부터 이벤트를 다시 읽어갈 수 있다. (이벤트 소싱)
>
> > 기본으로 Kafka Client와 TCP 프로토콜로 통신을 하며, RestProxy를 통해서 HTTP로도 통신이 가능하다.

## 사용 시나리오

```markdown
1. 여러 대의 트럭이 자신의 gps 정보를 kafka에 전송한다.
2. 실시간 위치 서비스에서 kafka로부터 gps 정보를 받아와 지도에 표시한다.
3. 알림 서비스에서 kafka로부터 gps 정보를 받아와 특정 위치에 트럭이 도착했을 때 알림을 보낸다.
   ...
```
