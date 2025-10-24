# kafka error handling Transactional Outbox Pattern

> outbox란 웹 메일에서 보낸 편지함을 의미
>
> > 정합성을 보장하기 위한 패턴
> >
> > > 처리되지 않은 이벤트는 outbox 테이블에서 재조회 가능

## scenario

```md
1. 주문 요청
2. 주문 요청에 대한 트랜잭션의 중간에 outbox 테이블에 관련 데이터를 삽입
3. 주문 요청이 성공적으로 커밋되면 outbox 테이블에 삽입된 데이터를 읽어서 메시지를 생성
4. 메시지를 큐에 전송
5. 메시지를 소비하고 처리
```
