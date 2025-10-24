# redis base cli

## install

```sh
# redis 설치시 redis-cli도 같이 설치됨

# npm 을 사용해서 따로 설치
npm i -g redis-cli
```

## usage

```sh
# connect
# redis-cli -h <host> -p <port> -a <password>
rdcli -h <host> -p <port> -a <password>

# redis-cli info
rdcli info

# key 개수 조회
dbsize

# key 조회
keys <pattern>

# 명령어
set <key> <value>
get <key>
del <key>
rename <old_key> <new_key>
# 모든 데이터 삭제
flushAll
```
