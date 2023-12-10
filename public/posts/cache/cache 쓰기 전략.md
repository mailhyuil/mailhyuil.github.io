# cache 쓰기 전략

## write-around

> write-through보다 빠름
>
> > 모든 데이터를 db에 저장
> >
> > > cache-miss가 발생하는 경우에만 db와 캐시에 저장

## write back (write behind)

> 모든 데이터를 db가 아닌 캐시서버에 저장
>
> > 스케줄링을 통해 일정 시간마다 db에 저장
> >
> > > Write가 빈번하면서 Read를 하는데 많은 양의 Resource가 소모되는 서비스에 적합

## write-through

> 데이터를 캐시서버와 db에 동시에 저장
>
> > 캐시서버에 저장하면 캐시서버가 바로 db에 저장
