# CDC Outbox Pattern

> 데이터베이스와 메시지 큐의 트랜잭션 불일치 문제를 해결하기 위한 디자인 패턴
>
> > 데이터베이스의 Outbox 테이블을 따로 생성하여
> >
> > Outbox 테이블에 데이터를 쓰면서 발생하는 WAL(Write-Ahead Logging) 로그를 이용해 CDC(Change Data Capture)를 구현하는 패턴

## scenario

```markdown
1. 서비스에서 데이터베이스에 변경 사항을 저장함 (예: 주문 생성)
2. 같은 트랜잭션에서 "Outbox 테이블"에 이벤트 메시지를 저장함
3. Outbox 테이블을 주기적으로 확인하는 프로세스(폴링 또는 Debezium)가 메시지를 메시지 큐(Kafka, RabbitMQ 등)로 전송
4. 전송이 성공하면 Outbox 테이블에서 해당 메시지를 삭제
```
