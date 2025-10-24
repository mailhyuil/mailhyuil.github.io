# kafka base Producer

> message = record = event = data
>
> > headers, key, value로 구성
> >
> > > headers에는 토픽, 파티션 같은 메타데이터
> > >
> > > > 데이터는 byte array로 보내야한다!

## Message Key

> Producer가 topic을 전송할 때 key를 지정할 수 있음
>
> > key는 string, int, long, byte array 등 가능
> >
> > key가 null인 경우 round-robin 방식으로 partition에 전송
> >
> > > key가 존재할 경우 hash(key) % partition 수로 partition을 선택

## Message By Producer

```txt
key
value
compression type
partition + offset
timestamp
headers (optional)
```
