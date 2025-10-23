# db base storage concepts

> table, heap, index 는 전부 데이터 스트럭쳐이다
>
> > table에는 최소한으로 접근하는 것이 좋다

## table

> 데이터를 저장하는 공간

## row id / tuple id

> 데이터베이스가 행을 식별하기 위해 사용하는 고유 식별자

## page

> 데이터베이스가 디스크를 읽을 때 한 번에 읽는 고정된 단위
>
> 블록 또는 페이지라고도 한다. (블록은 파일 시스템에서 사용되는 용어)
>
> > postgres는 8KB, mysql은 16KB
> >
> > > RAM(Random Access Memory)는 특정 위치에 바로 접근할 수 있지만 디스크는 그렇지 않다.
> > >
> > > 디스크는 특정 위치에 접근하기 위해선 그 위치가 있는 page를 읽어야한다.

## io (input/output)

> IO는 디스크에서 데이터를 읽거나 쓰는 것을 의미한다.
>
> > IO를 최소화하는 것이 성능을 높이는 방법 중 하나이다.

## heap

> 클러스터 인덱스가 없는 테이블을 의미

## index

> heap을 가르키는 포인터
