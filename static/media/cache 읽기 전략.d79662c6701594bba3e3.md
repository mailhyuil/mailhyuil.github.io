# cache 읽기 전략

## look-aside (cache-aside)

> 캐시된 데이터가 있는지 우선적으로 확인
>
> > 반복적인 읽기가 많은 호출에 적합
> >
> > > write-through와 write-behind를 사용할 수 있음

## read-through

> cache store에서만 데이터를 읽음 db에서는 읽지 않음
>
> > cache store에 없으면 db에서 데이터를 가져옴
