# redis type List

> List는 linked list로 구현된 자료구조이다.
>
> > string을 순서대로 저장하거나 시계열 데이터를 저장할 때 사용한다.
> >
> > > List를 자주 사용하면 성능이 떨어진다.

```sh
LPUSH key element # 왼쪽에 element 추가
RPUSH key element # 오른쪽에 element 추가
LPOP key # 왼쪽에서 element 제거
RPOP key # 오른쪽에서 element 제거

LINDEX key index # index에 해당하는 element를 반환
LLEN key # List의 길이를 반환
LRANGE key start stop # start부터 stop까지의 element를 반환
LRANGE key 0 -1 # List의 모든 element를 반환

LPOS key element # element의 index를 반환
LPOS key element RANK 1 # 1개 건너뛰고 index를 반환
LPOS key element COUNT 2 # 2개의 index를 반환
LPOS key element MAXLEN 10 # 10개의 index를 반환

LSET key index element # index에 해당하는 element를 변경
LTRIM key start stop # start부터 stop까지의 element를 제외하고 제거

LINSERT key BEFORE pivot element # pivot 앞에 element 추가
LINSERT key AFTER pivot element # pivot 뒤에 element 추가

LREM key 2 element # 왼쪽에서 오른쪽으로 count만큼 element를 제거
LREM key -2 element # 오른쪽에서 왼쪽으로 count만큼 element를 제거
LREM key 0 element # 모든 element를 제거
```

## usecase

```sh
1. APPEND or PREPEND ONLY (데이터를 맨끝이나 맨앞에만 추가할 때)
2. 맨앞이나 맨뒤에서 N개의 데이터만 가져올 때 (sorted set으로도 가능)
3. 입력된 시간 순서대로 데이터를 저장하고 싶을 때 (sorted set으로도 가능)

* 아이템의 갯수가 많다면 절대 사용하지 말아라
* 정렬 기준이 필요하면 절대 사용하지 말아라
```
