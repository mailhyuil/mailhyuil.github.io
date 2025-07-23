# db 분산 시스템 postgres + mongodb

> 쓰기 db로 postgres, 읽기 db로 mongodb를 사용하는 분산 시스템
>
> postgres는 ACID를 지원하고, mongodb는 NoSQL로 빠른 읽기를 지원한다.
>
> > 간단하게는 nodejs에서 postgres의 데이터를 읽어서 변환 후 mongodb에 적재하는 방식을 사용할 수 있고
> >
> > kafka, pg2mongo, AWS DMS, airbyte 등의 도구를 사용하여 데이터를 동기화할 수 있다.

## 동기화 방법

1.  배치 처리 (ETL pipeline)
    > 추출(Extraction) - 변환(Transformation) - 로드(Load)
    >
    > 변환 후 적재
    >
    > > airbyte
2.  배치 처리 (ELT pipeline)
    > 추출(Extraction) - 로드(Load) - 변환(Transformation)
    >
    > 적재 후 target 내부에서 변환
3.  배치 처리 (EtLT pipeline)
    > cleansing이라는 과정을 추가
    >
    > > 품질이 낮은 데이터를 제거하거나 수정
4.  실시간 스트리밍 (CDC pipeline)
    > postgres - kafka(debezium) - mongodb
