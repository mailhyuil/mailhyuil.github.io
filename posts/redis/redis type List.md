# redis type List

> List는 linked list로 구현된 자료구조이다.
>
> > string을 순서대로 저장하거나 시계열 데이터를 저장할 때 사용한다.
> >
> > > List를 자주 사용하면 성능이 떨어진다.

```sh
LPUSH key element # 왼쪽에 element 추가
RPUSH key element # 오른쪽에 element 추가
LPOP key
RPOP key
LINSERT key BEFORE pivot element

LINDEX key index
LLEN key
LRANGE key start stop
```
