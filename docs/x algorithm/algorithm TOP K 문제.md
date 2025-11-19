# algorithm TOP K 문제

- 전체 데이터 중에서 가장 큰 K개 또는 가장 작은 K개를 빠르게 뽑는 문제
- e.g. 상위 매출 5개 상품, 조회수 높은 영상 TOP10, 가장 가까운 값 K개
- 우선순위 큐(Heap)로 해결 (N log K) 또는 빠른선택(Quick Select)로 해결 (N log N)
