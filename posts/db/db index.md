# db index

> 인덱스의 핵심은 검색 범위를 최소화 하는 것
>
> > 일반적으로 인덱스를 이용해 조회되는 쿼리에서 가장 큰 성능 저하를 일으키는 부분은 인덱스를 검색하고 대상이 되는 row의 나머지 컬럼 값을 "데이터 블록"에서 읽을 때이다.
> >
> > > 인덱스는 읽기의 성능을 향상시키지만, 쓰기의 성능을 저하시킨다.

## 동작원리

> PK는 기본으로 PK인덱스가 생성된다.
>
> > 필드인덱스를 생성하여 검색을 하면, 우선 필드를 이용해서 PK를 찾고 다시 PK인덱스에서 검색해서 원하는 데이터를 찾는다.

## B+ tree

> 인덱스 자료구조로 많이 사용된다.
>
> > tree가 균형을 이루고 높이가 높지 않기 때문

## 클러스터 인덱스 (primary index, index organized table) vs 넌클러스터 인덱스 (secondary index)

> postgres의 경우 모든 index는 secondary index이다.
>
> All indexes in PostgreSQL are secondary indexes (postgresql doc)

### 클러스터 인덱스 (primary index)

> 페이지를 알기 때문에 바로 그 페이지를 펴는 것
>
> > 테이블당 한개만 생성가능
> >
> > > pk를 설정한 경우 default로 pk가 클러스터드 인덱스로 설정
> > >
> > > > 인덱스 자체에 data가 저장되어 있음

### 넌클러스터 인덱스 (secondary index)

> 목차에서 찾고자 하는 내용의 페이지를 찾고 그 페이지로 이동하는 것.
>
> > 하나의 테이블에 여러개의 인덱스 생성 가능
> >
> > > 인덱스 자체에 data가 저장되지 않고 data의 주소가 저장됨

## index 생성 쿼리

```sql
CREATE INDEX "some_index" ON "some_table" (field_name)
CREATE INDEX "some_index" ON "some_table" USING HASH (field_name)
```
