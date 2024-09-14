# redis type Hash

> 여러개의 key-value 쌍을 하나의 키에 저장
>
> > Json, Record, Entity를 저장할 수 있다.
> >
> > > 배열은 저장할 수 없다.

```sh
# HSET key field1 value1 field2 value2 ...
HSET cats:45 name hyuil age 3 # return 2 # 2개의 key-value 쌍을 저장했다는 의미

# HGET key field
HGET cats:45 name # return hyuil
HGET cats:45 age # return 3

# HGETALL key
HGETALL cats:45 # return [name, hyuil, age, 3] # 배열을 반환한다.

# HXISTS key field # field가 존재하는지 확인
HXISTS cats:45 name # 존재하면 1, 존재하지 않으면 0을 반환

# HDEL key field1 field2 ... # field를 삭제
HDEL cats:45 name age # return 2 # 2개의 field를 삭제했다는 의미

# DEL key # key를 삭제
DEL cats:45 # return 1 # key를 삭제했다는 의미

# HKEYS key # key의 field를 반환
HKEYS cats:45 # return [name, age] # 배열을 반환한다.

# HSTRLEN key field # field의 길이를 반환
HSTRLEN cats:45 name # return 5 # 5글자라는 의미

# HVALS key # key의 value를 반환
HVALS cats:45 # return [hyuil, 3] # 배열을 반환한다.

# HINCRBY key field increment # field의 값을 증가시킨다.
HINCRBY cats:45 age 1 # return 1 # 1을 증가시켰다는 의미
```
