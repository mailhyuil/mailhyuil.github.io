# db base 행 기반 vs 열 기반

## Row Store (행 기반)

> 읽기/쓰기에 최적화된 구조
>
> > 압축률이 낮음
> >
> > > 집계, 분석에 적합하지 않음
> > >
> > > > `OLTP`에 적합 (트랜잭션 처리)

## Column Store (열 기반)

> 쓰기가 매우 느리다
>
> > 압축률이 높음
> >
> > > 집계, 분석에 적합
> > >
> > > > `OLAP`에 적합 (대용량 데이터 처리)
> > > >
> > > > > postgresql의 indexing table은 column store 방식을 사용한다.
