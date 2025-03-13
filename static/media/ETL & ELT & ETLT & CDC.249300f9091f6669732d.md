# ETL & ELT & ETLT & CDC

## (ETL pipeline)

> 추출(Extraction) - 변환(Transformation) - 로드(Load)
>
> > 배치 처리
> >
> > > 변환 후 적재

## (ELT pipeline)

> 추출(Extraction) - 로드(Load) - 변환(Transformation)
>
> > 배치 처리
> >
> > > 적재 후 target 내부에서 변환
> > >
> > > > 추후에도 용도에 따라 변환을 할 수 있음

## (EtLT pipeline)

> cleansing이라는 과정을 추가
>
> > 품질이 낮은 데이터를 제거하거나 수정

## (CDC pipeline)

> 변경된 데이터만 실시간으로 전달하여 동기화
