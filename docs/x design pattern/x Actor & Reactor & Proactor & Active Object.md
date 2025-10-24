# x Actor & Reactor & Proactor & Active Object

> 일반 object는 호출하는 동시에 바로 실행되지만, Actor, Reactor, Proactor는 호출 후 실행되는 방식이 다르다.

## Actor

> 능동적인 객체
>
> > 실행하면 바로 반응하지 않고 비동기적으로 실행된다
> >
> > > 자신만의 thread / queue를 가지고 있다
> > >
> > > > What is an actor? According to Wikipedia, an actor is a thing that can:

```txt
send messages
receive messages
create child actors
```

## Reactor

> actor에 이벤트에 대한 핸들러가 추가된 것
>
> > 디스패치 방식으로 이벤트를 처리한다
> >
> > > nodejs의 이벤트 루프가 이에 해당한다

## Proactor

> Pro = 사전의, 미리의
>
> > 행위를 다른 actor에게 위임하고 결과를 받는다
> >
> > > 작업이 완료되면 콜백형식으로 받아서 적절한 이벤트를 호출하고 처리하는 구조

## Active Object

> 행위를 다른 actor에게 위임하고 비동기적으로 결과를 받는다
>
> > command 패턴과 비슷하다
