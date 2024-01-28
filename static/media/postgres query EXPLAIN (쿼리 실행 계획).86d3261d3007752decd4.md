# postgres EXPLAIN

> 쿼리의 실행 계획을 확인할 수 있다.

## 사용법

```sql
EXPLAIN [ ( option [, ...] ) ] 쿼리문
EXPLAIN [ ANALYZE ] [ VERBOSE ] 쿼리문

option 자리에 사용할 수 있는 것들:

    ANALYZE [ boolean ]
    VERBOSE [ boolean ]
    COSTS [ boolean ]
    BUFFERS [ boolean ]
    TIMING [ boolean ]
    FORMAT { TEXT | XML | JSON | YAML }
```

## EXPLAIN ANALYZE

> 실제 해당 쿼리를 실행하고, 추청 비용과 함께 소요 비용, 소요 시간도 실제 처리된 각 계획 노드별 전체 로우 수도 보여준다.
>
> > 실제 쿼리를 수행하기 때문에 자료가 변경 될 수 있다면 롤백을 사용해라

```sql
BEGIN;
EXPLAIN ANALYZE ...;
ROLLBACK;
```

## 용어

### cost

> 다른 쿼리와 상대적으로 비교
>
> > I/O와 CPU 활동을 나타냄 상대적으로 높은 cost는 더 많은 작업을 한다고 생각하면 된다

### rows

> 단계별 fetch 건수

### width

> 단계별 cloumn 자리수 + column 갯수

## scan 방식

### seq scan

> 풀 스캐닝

### index scan

> 인덱스를 사용

### index only scan

> 커버링 인덱스 사용 (인덱스에 모든 데이터가 있기 때문에 인덱스만 조회)

### bitmap scan

> index scan과 seq scan이 조합된 방식

### tid scan (tuple indecetor)
