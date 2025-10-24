# base bottleneck

> frontend에서 먼저 문제 확인
>
> > TTFB가 높다면 backend에서 문제가 발생한 것일 수 있음
> >
> > > response_time은 200ms 이내로 유지하는 것이 좋음

## frontend `<->` backend

> frontend에서 무수한 요청을 보내는 경우
>
> > devtools를 사용 (e.g. chrome dev tools)

## backend `<->` database

> frontend의 devtools를 사용 (status, waterfall, etc)
>
> > Time to First Byte (TTFB)를 확인
> >
> > > TTFB가 높다면, backend에서 문제가 발생한 것일 수 있음
> > >
> > > > backend `<->` database 사이의 통신이 느릴 수 있음 확인 (wireshark 사용)

## load balancer `<->` backend

> frontend의 devtools를 사용 (status, waterfall, etc)
>
> > Time to First Byte (TTFB)를 확인
> >
> > > TTFB가 높다면, backend에서 문제가 발생한 것일 수 있음
> > >
> > > > 의심되는 backend와 load balancer 사이에 Man in the Middle Proxy를 사용하여 확인
> > > >
> > > > > 문제가 되는 backend를 찾아서 backend `<->` database 사이의 통신이 느릴 수 있음 확인 (wireshark 사용)

## database

> explain을 사용하여 쿼리를 확인

```sql
explain select * from table where id = 1;
```
