# load testing k6 RPS & TPS & Latency & Throughput

## RPS (초당 처리한 요청수)

> 1초당 처리한 요청의 수
>
> > 1초 동안 1000개의 요청 처리 = 1000 RPS
> >
> > > http_reqs_per_sec

## TPS (초당 처리한 트랜잭션수)

> 1초당 전송한 처리한 Database 트랜잭션의 수
>
> > 1초 동안 1000개의 트랜잭션 처리 = 1000 TPS
> >
> > > RPS와 TPS는 다를 수 있다. e.g. /transfer 요청 1번은 내부적으로 3번의 DB 트랜잭션을 수행함
> > >
> > > > k6가 아닌 pgbench 등 DB 테스트 도구를 사용해야 함

```sql
pgbench -i -s 10 your_database_name
```

## Latency(지연시간)

> 요청 - 응답간의 소요 시간 (TTFB)
>
> > http_req_duration : 요청에 대한 응답시간

## Throughput(처리량)

> 서버가 1초 동안 처리할 수 있는 데이터의 크기
>
> > 500MB/s
> >
> > > data_sent, data_received
