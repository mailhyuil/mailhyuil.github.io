# db 분산 시스템 partitioning

> 1000만개의 row가 담긴 테이블을 파티셔닝하여 200만개, 300만개, 500만개로 나누어 저장
>
> 300만 1번째의 row를 조회할 때, 300만개의 row를 모두 조회하는 것이 아니라 300만개의 row가 담긴 파티션만 조회하여 성능 향상
>
> > 한 서버내에서 진행한다. 여러 서버에 나눠서 저장하는 것은 sharding

## horizontal partitioning

> horizontal partitioning: row 단위로 나누는 것
>
> > row가 많아지면 성능이 떨어지는데, 이를 해결하기 위해 row를 나누어 저장
> >
> > > sharding과 비슷한 원리이지만 sharding은 데이터베이스의 테이블을 여러 서버에 분산시키는 것이고, partitioning은 데이터베이스의 테이블을 나누어 저장하는 것

## vertical partitioning

> vertical partitioning: column 단위로 나누는 것
>
> > 특정 column만 자주 사용하거나 특정 column이 큰 경우(blob), column을 나누어 저장

## partitioning type

```sh
By Range # id(숫자), 날짜 등으로 나누는 방법

By List # 특정 값으로 나누는 방법 (e.g. seoul에 사는 유저, busan에 사는 유저)

By Hash # 해시값으로 나누는 방법 (e.g. id % 3)
```
