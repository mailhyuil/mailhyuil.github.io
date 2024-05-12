# cache 읽기 전략

## look-aside (cache-aside)

> cache store에 캐시된 데이터가 있는지 우선적으로 확인
>
> > 반복적인 읽기가 많은 호출에 적합
> >
> > > write-through와 write-behind를 사용할 수 있음

## read-through

> cache store에서만 데이터를 읽음 db에서는 읽지 않음
>
> > cache store에 없으면 db에서 데이터를 가져옴
> >
> > > look-aside와 비슷하지만 데이터 동기화를 라이브러리(e.g. redis)가 처리
> > >
> > > 앱은 cache store에만 의존하게 되며 cache store는 db에 의존
> > >
> > > > read through cache (캐시를 통해 읽기)
