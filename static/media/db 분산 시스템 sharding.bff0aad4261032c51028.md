# db sharding (샤딩)

> shard = 조각, 파편
>
> > 클러스터를 분산시키는 방법 중 하나로, 데이터베이스의 테이블을 여러 서버에 분산시키는 방법
> >
> > partitioning과 다르게 데이터베이스의 테이블을 여러 서버에 분산
> >
> > > 읽기 처리의 분산은 replication으로 해결할 수 있지만, 쓰기 처리의 분산은 샤딩으로 해결할 수 있습니다.

## pros and cons

```sh
# pros
scale out 가능
쓰기 성능 향상
index 크기 감소
security 향상

# cons
complexity 증가
샤드간 transaction 처리가 어려움 (분산 트랜잭션이 필요)
schema 변경이 어려움
join 처리가 어려움
query를 날릴 때 알아야 하는 정보가 늘어남
```

## 애플리케이션 수준 샤딩

> 애플리케이션 서버에서 hash function을 사용하여 데이터베이스 서버를 선택하는 방법

## 데이터베이스 수준 샤딩
