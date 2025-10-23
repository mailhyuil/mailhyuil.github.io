# redis base transaction lua script

> redis에서 지원하지 않는 기능을 구현할 때 사용 (over fetching 방지)
>
> > 동시성 문제를 해결하기 위해 사용
> >
> > > 앱서버와 redis 사이에 round trip을 줄이기 위해 사용

## 동작 방식

```sh
server load script
server send script to redis
redis send script id to server
server execute script by script id
```

## usage

> EVALSHA 뒤에 0은 key의 개수를 의미한다.
>
> > key의 개수가 2면 "2 key1 key2 value1 value2 ..."

```sh
SCRIPT LOAD "return 'hello world'" # c1d4e2b4e0b8 script id 반환

EVALSHA c1d4e2b4e0b8 0 # hello world


# 인수 제공
SCRIPT LOAD "return 1 + tonumber(ARGV[1])" # ARGV는 lua의 global 배열 변수 (따로 정의할 필요없음)

EVALSHA 0e4e3b4e0b8 0 2 # 2를 ARGV 배열 첫번째 인자로 전달

# lua에서 redis 사용
SCRIPT LOAD "return redis.call('set', KEYS[1], ARGV[1])" # redis.call로 redis 명령어 실행

EVALSHA 0e4e3b4e0b8 1 color red # key, value를 인자로 전달
```
