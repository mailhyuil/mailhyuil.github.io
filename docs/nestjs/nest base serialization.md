# nest base serialization

> serialization이란 계층간 데이터 교환을 위해 데이터 구조나 객체 상태를 변환하는 것을 말한다
>
> client와 server간 data format이 다를 수 있기 때문에 serialization이 필요하다
>
> > e.g. json, dto, domain, entity 등 계층간에 다루는 데이터 구조를 다르게하여 관심사를 분리한다.
> >
> > e.g. Error 객체를 json으로 직렬화한다.
> >
> > > `binary -[serialize]-> json -[serialize]-> dto -[serialize]-> domain model -[serialize]-> entity -[serialize]-> db`
> > >
> > > `binary <-[deserialize]- json <-[deserialize]- dto <-[deserialize]- domain model <-[deserialize]- entity <-[deserialize]- db`
> > >
> > > > serialization을 위한 라이브러리로는 class-transformer, zod 등이 있다
> > > >
> > > > > typescript는 class를 이용해서 실제로 dto 객체를 구현할 것인지 아니면 interface로만 구현할 것인지 선택할 수 있다
