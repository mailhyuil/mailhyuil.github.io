# kafka base Consumer & Consumer Group

> Consumer Group 내에는 하나 혹은 여러개의 Consumer가 있을 수 있고
>
> 각 Consumer는 하나 혹은 여러개의 partition을 담당할 수 있다.
>
> > 각 서비스 당 하나의 consumer group

## \_\_consumer_offsets (commit log, commit offset)

> \_\_consumer_offsets은 topic에 consumer group가 마지막으로 읽은 offset 정보가 저장된다.
>
> > 각 consumer group이 어디까지 읽었는지를 기억하기 위함

## Delivery Semantics

```md
1. At least once
   - 메세지를 받고 처리한 후 offset을 commit
   - 메세지 처리에 실패 시 메세지를 다시 읽음
   - 메세지를 중복 처리할 가능성이 있기에 멱등성을 보장해야함
2. At most once
   - 메세지를 받자마자 offset을 commit
   - 메세지 처리에 실패 시 메세지 손실이 발생할 수 있음
3. Exactly once
   - 정확히 한번만 처리되는 것을 보장
   - Transactional API를 사용하여 구현 (Kafka Streams API)
```
