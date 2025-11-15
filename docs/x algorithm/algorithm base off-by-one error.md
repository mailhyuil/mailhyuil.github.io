# algorithm base off-by-one error

인덱스/경계 한 칸 차이로 발생하는 에러 (값이 1정도 차이나는 경우)

## 해결

1. 범위는 [start, end) 로 생각하자. (end는 항상 제외)

2. 배열 길이 n이면 마지막 인덱스는 n-1.

3. 슬라이스/substring API는 포함/제외 규칙 다를 수 있으니 문서 확인.

4. 이진 탐색은 경계 포인터(lt/rt)와 루프 조건(<= vs <)이 관건.

5. 가능한 경우 고수준 API(예: for..of, slice, map, filter) 쓰면 실수 줄어듦.
