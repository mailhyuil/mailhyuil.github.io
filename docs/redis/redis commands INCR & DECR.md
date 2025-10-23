# redis commands INCR & DECR

```sh
INCR key # key의 값을 1 증가
DECR key # key의 값을 1 감소

INCRBY key 10 # key의 값을 10 만큼 증가
DECRBY key 10 # key의 값을 10 만큼 감소

INCRBYFLOAT key 10.5 # key의 값을 10.5 만큼 증가
INCRBYFLOAT key -10.5 # key의 값을 10.5 만큼 감소 # DECRBYFLOAT은 없음
```
