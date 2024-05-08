# redis Sorted Set

```sh
# add
ZADD key score member [score member ...] # member를 score로 정렬하여 추가

# remove
ZREM key member [member ...] # member를 제거
ZPOPMIN key [count] # score가 작은 순서대로 count만큼 제거하고 반환
ZPOPMAX key [count] # score가 큰 순서대로 count만큼 제거하고 반환

# get
ZSCORE key member # score를 반환
ZRANGE key min max [WITHSCORES] [REV] [LIMIT offset count] # min <= score <= max인 member를 반환

# count
ZCARD key # member의 수를 반환
ZCOUNT key min max # 범위내의 member의 수를 반환 # min <= score <= max인 member의 수를 반환 (min, (max, inf, -inf

# increment
ZINCRBY key increment member
```
