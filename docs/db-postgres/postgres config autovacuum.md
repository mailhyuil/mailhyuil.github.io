# postgres autovaccume

> postgres의 모든 데이터는 tuple이라는 형태로 저장된다.
>
> tuple이 저장되는 공간 = FSM (Free Space Map)
>
> > postgres는 데이터에 UPDATE / DELETE 를 수행할 때 데이터를 직접 변경하는게 아니라 "새로운 tuple"을 생성하고 "이전 tuple"을 숨긴다. (dead tuple)
> >
> > 이 dead tuple은 여전히 FSM에 저장되어 있기 때문에 무의미한 공간을 차지하고 있다.
> >
> > 이 dead tuple을 정리하는 작업이 vacuum이다.
> >
> > vacuum은 Full vacuum과

```conf
autovacuum                      = on
autovacuum_vacuum_threshold     = 50
autovacuum_vacuum_scale_factor  = 0.1
autovacuum_analyze_scale_factor = 0.3
# (record_count * 0.2) + 50 개의 dead tuple이 생기면 vacuum을 수행한다.
```
