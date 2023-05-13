# update logic

> update할 데이터만 넣어서 업데이트!
>
> > toggle 업데이트는 되도록 사용 지양
> >
> > > id만 받아서 업데이트

## update 방어 코드

> 상태 중 딱 하나만 받기

```
if(status !== "SOME") throw new Error()
```

## update 순서

> deleteMany
> 범위에 포함되지 않은 데이터 delete

> > updateEach
> > delete하고 남은 entity들 업데이트

> > > createEach(만들어둔 create메소드 재사용)
> > > create해야할 entity중 update된 entity 빼고 create
