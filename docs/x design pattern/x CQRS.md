# CQRS

> Command Query Responsibility Segregation
>
> > 읽기와 쓰기를 분리하는 패턴
> >
> > > 읽기 db와 쓰기 db가 나누어져 있을 때 사용

## 용어

> Data / State : Store나 DB에 저장되는 데이터
>
> > Query / Selector: 데이터를 조회하는 요청 (read)
> >
> > > Command / Action : 데이터를 변경하는 요청 (write)
> > >
> > > > @CommandHandler / Reducer : Action과 State를 합쳐 새로운 State를 만드는 함수
> > > >
> > > > > Event : 데이터 변경에 대한 이벤트
> > > > >
> > > > > > Saga : 여러개의 이벤트를 하나의 트랜잭션으로 묶는 것

## nestjs cqrs

> CommandBus, QueryBus and EventBus are all Observables.

```
Queries
@QueryHandler()

Command
@CommandHandler

Events
@EventHandler

Sagas
@Saga
```
