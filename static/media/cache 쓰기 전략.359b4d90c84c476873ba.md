# cache 쓰기 전략

## write-through

> 데이터를 cache store와 db에 동시에 저장 (cache store에 저장하면 cache store가 바로 db에 저장)
>
> > write through cache (캐시를 통해 쓰기)

## write-around

> 모든 데이터를 db에 바로 저장
>
> > db의 데이터를 read 하는 경우(cache-miss가 발생하는 경우)에만 cache store에 저장
> >
> > > write-through보다 빠름

## write-back (write-behind)

> 데이터를 cache store에 모아서 일정 주기 배치 작업을 통해 DB에 반영
>
> > Write가 빈번하면서 Read를 하는데 많은 양의 Resource가 소모되는 서비스에 적합
