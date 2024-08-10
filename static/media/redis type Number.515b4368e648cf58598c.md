# redis type Number

> redis는 Number 타입을 지원하지 않는다.
>
> > Number 타입을 저장하면 redis에는 string으로 저장된다.
> >
> > > INCR, DECR 명령어를 사용하여 Number 타입을 증가, 감소 시킬 수 있다.

```sh
SET key 1
INCR key
GET key # 2
```
