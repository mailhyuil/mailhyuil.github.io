# 동기화 CRDT (Conflict-Free Replicated Data Type)

> 동시 편집시 동기화를 위한 기술
>
> > ProseMirror, Redis (Riak), Elixir Phoenix
> >
> > > 각 글자를 유니크한 값으로 식별하여 동기화
> > >
> > > 서버가 없이 동작 할 수 있음
> > >
> > > > 글자가 섞여버리는 문제가 발생할 수 있다.
