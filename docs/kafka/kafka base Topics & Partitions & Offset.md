# kafka base Topics & Partitions & Offset

## Topic

> kafka의 데이터 저장 단위
>
> > 모든 타입의 데이터를 저장할 수 있음 (binary, text, json, xml, etc)
> >
> > > immutable (변경 불가능)
> > >
> > > > consumer group 내의 consumer가 topic내의 partition들을 담당해서 읽음

## Partition

> Topic을 여러개의 partition으로 나누어 저장
>
> > exmaple: 1 topic, 100 partitions
> >
> > hello world 메시지를 topic A에 보내면 key를 통해서 특정 partition에 hello world를 저장
> >
> > consumer group 내의 consumer가 하나 혹은 여러개의 partition을 읽는다.

## Offset (partition offset)

> 0부터 시작하는 숫자로 partition 내에서 데이터의 위치를 나타냄
>
> > partition 내에서 데이터의 위치를 나타내는 값
