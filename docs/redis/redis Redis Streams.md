# redis Redis Streams

> list와 sorted set의 장점을 결합한 데이터 구조
>
> > server to server 통신에 적합한 데이터 구조
> >
> > > consumer group을 이용하여 pub/sub의 단점을 보완

## 동작 방식

```sh
producer -message(hash)->  |    Redis Streams    | -message(hash)-> consumer
                           | timestamp-0:message |
```

## usage

```sh
# XADD <key> <id> <field> <value>
XADD key * field1 value1 field2 value2

# XREAD COUNT <count> STREAMS <key> <id>
XREAD COUNT 2 STREAMS key 0-0 # 0-0 이후의 메시지를 2개 읽어옴
XREAD COUNT 1 STREAMS key > # 가장 최근 메시지 1개를 읽어옴
```
