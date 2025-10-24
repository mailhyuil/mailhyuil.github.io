# postgres 실행계획 EXPLAIN scan

## seq scan

> 풀 스캐닝

## index scan

> index에서 위치를 조회하고 해당 힙을 조회하는 방식

## index only scan

> index에 모든 데이터가 있기 때문에 인덱스만 조회하는 방식

## bitmap index scan

> 페이지의 비트를 올려서 해당 비트가 1인 페이지만 최종적으로 조회하는 방식
