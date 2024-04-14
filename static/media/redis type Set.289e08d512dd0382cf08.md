# redis type Set

> 고유한 값들을 저장하는데 사용되는 데이터 구조

```sh
SADD key value1 value2 ... # key에 value를 add # return 존재하지 않으면 1, 이미 존재하면 0
SREM key value1 value2 ... # key에 value를 remove # return 존재하지 않으면 0, 존재하면 1

# 대용량 Set이라면 SMEMBERS 대신 SSCAN을 사용
SSCAN key cursor [MATCH pattern] [COUNT count] # key에 있는 value를 scan

SMEMBERS key # key에 있는 모든 value를 반환
SISMEMBER key value # key에 value가 존재하는지 확인 # return 존재하면 1, 존재하지 않으면 0
SMISMEMBER key value1 value2 ... # key에 value1, value2 ...가 존재하는지 확인 # return 존재하면 1, 존재하지 않으면 0

SCARD key # key에 있는 value의 개수를 반환 (Cardinality)

SUNION key1 key2 # key1과 key2의 합집합을 반환
SINTER key1 key2 # key1과 key2의 교집합을 반환
SDIFF key1 key2 # key1과 key2의 차집합을 반환

SUNIONSTORE dest key1 key2 ... # dest에 key1, key2 ...의 합집합, 교집합, 차집합을 저장
SINTERSTORE dest key1 key2 ...
SDIFFSTORE dest key1 key2 ...
```
